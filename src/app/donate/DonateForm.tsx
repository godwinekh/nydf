import React, { useEffect, useState } from "react";
import {  useRouter } from "next/navigation";
import { AnimatePresence, m as motion } from "framer-motion";
import { useFormik } from "formik";
import donateSchema from "./donateSchema";
import CaretDown from "@/app/components/icons/caretDown";
import Refresh from "../components/icons/refresh";
import { usePaystackPayment } from "react-paystack";

const calcAmountWithCharges = (amount: string) => {
  const amountInt = parseInt(amount);
  let charges: number = 0;
  let amountWithCharges: number = 0;
  if (amountInt <= 5000) {
    charges = 10 + 0.075 * amountInt;
  } else if (amountInt > 5000 && amountInt <= 50000) {
    charges = 25 + 0.075 * amountInt;
  } else if (amountInt > 50000) {
    charges = 50 + 0.075 * amountInt;
  }

  amountWithCharges = charges + amountInt;
  return amountWithCharges;
};

export default function DonateForm() {
  // const [paymentApiKey, setPaymentApiKey] = useState<string>("");
  const [showCurrencies, setShowCurrencies] = useState<boolean>(false);
  const [payCharges, setPayCharges] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      amount: "",
      name: "",
      email: "",
      phone: "",
      currency: "ngn",
    },
    validationSchema: donateSchema,
    onSubmit: (values) => {
      setLoading(true);

      try {
        intializePayment({onSuccess, onClose})
      } catch (error) {
        console.error("Payment error:", error);
        setLoading(false);
      }
    },
  });
  const amountWithCharges = calcAmountWithCharges(formik.values.amount);

  const handleCurrencyChange = (selectedCurrency: string) => {
    // Update the formik state for the 'currency' field
    formik.setFieldValue("currency", selectedCurrency);
    setShowCurrencies(false);
  };

  const handlePayChargesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked: boolean = event.target.checked;
    setPayCharges(isChecked);
  };

  const config = {
    email: `${formik.values.email}`,
    amount: payCharges
      ? amountWithCharges * 100
      : parseInt(formik.values.amount) * 100,
    currency: `${formik.values.currency}`,
    channels: ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer"],
    custom_fields: {
      name: `${formik.values.name}`,
      phone_number: `${formik.values.phone}`,
    },
    publicKey: "pk_live_8812f9d099a564c3563fc32c4f64399084f2ff85",
  };

  const onSuccess = (reference: any) => {
    router.push(
      "https://www.nixerlexfoundation.org/donate/thank-you?status=successful"
    );
    console.log(reference)
  };

  const onClose = () => {
    router.push("https://www.nixerlexfoundation.org/donate/thank-you?status=failed");
    setLoading(false);
  };

  const intializePayment = usePaystackPayment(config);


  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full rounded-md overflow-hidden bg-white shadow-lg px-4 md:px-10 py-12"
      >
        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col">
            <div className="w-full flex gap-4">
              <div className="relative">
                <button
                  type="button"
                  name="currency"
                  onClick={() => setShowCurrencies((prev) => !prev)}
                  className="uppercase px-2 input-box bg-orange-yellow-light flex items-center gap-1 relative"
                >
                  {formik.values.currency}
                  <CaretDown className="" />
                </button>

                {/* Options */}
                <div
                  className={`${
                    showCurrencies ? "flex" : "hidden"
                  } absolute left-0 -bottom-[4.25rem] flex-col bg-white border border-gray-50 py-1 w-full shadow-md rounded-md`}
                >
                  {["NGN", "USD"].map((currency, index) => (
                    <button
                      key={index}
                      type="button"
                      disabled={currency === "USD"}
                      className="py-1 text-sm hover:bg-orange-yellow-light disabled:text-gray-400 disabled:hover:bg-gray-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCurrencyChange(currency);
                      }}
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grow">
                <input
                  type="text"
                  name="amount"
                  placeholder="Amount"
                  className="input-box w-full"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            {formik.touched.amount && formik.errors.amount && (
              <div className="error-message">{formik.errors.amount}</div>
            )}
          </div>

          <input
            type="name"
            name="name"
            placeholder="Full Name"
            className="input-box"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error-message">{formik.errors.name}</div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input-box"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            className="input-box"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="error-message">{formik.errors.phone}</div>
          )}

          <div className="text-sm flex items-center gap-2">
            <input
              type="checkbox"
              name="charges"
              onChange={handlePayChargesChange}
            />{" "}
            Cover transaction costs
          </div>

          <div className="text-xs text-orange-yellow">
            {payCharges && amountWithCharges.toString() === "NaN" && (
              <p>
                Please enter a valid amount for the transaction cost to be
                calculated.
              </p>
            )}

            {payCharges && amountWithCharges.toString() !== "NaN" && (
              <p className="text-azure">
                You are now paying a total of {formik.values.currency + " "}
                <span className="text-base">
                  {amountWithCharges.toLocaleString()}
                </span>
                . Thank you.
              </p>
            )}
          </div>

          <div className="flex flex-col-reverse md:flex-row w-full justify-between gap-2 mt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="bg-gray-900 px-4 py-2  text-white rounded-xl text-sm"
            >
              Go Back
            </button>

            <button
              type="submit"
              className={`flex justify-center items-center bg-navy p-3 text-white rounded-xl ${
                loading ? "text-xs" : "text-sm"
              }`}
              disabled={loading}
            >
              {loading && <Refresh className="animate-spin h-5 w-5 mr-2" />}
              {loading ? "Processing" : "Donate"}
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}
