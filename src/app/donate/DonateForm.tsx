import React, { useState } from "react";
import { AnimatePresence, m as motion } from "framer-motion";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { FlutterwaveConfig } from "flutterwave-react-v3/dist/types";
import { useFormik } from "formik";
import donateSchema from "./donateSchema";
import { useRouter } from "next/navigation";

export default function DonateForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      amount: "",
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: donateSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form submitted with values:", values);

      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          closePaymentModal(); // this will close the modal programmatically
        },
        onClose: () => {
          router.push("/donate/thank-you?status=cancelled");
        },
      });
    },
  });

  const config: FlutterwaveConfig = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_KEY!,
    tx_ref: Date.now().toLocaleString(),
    amount: parseInt(formik.values.amount),
    currency: "NGN",
    payment_options: "card,ussd,bank transfer",
    customer: {
      email: `${formik.values.email}`,
      phone_number: `${formik.values.phone}`,
      name: `${formik.values.name}`,
    },
    customizations: {
      title: "Nixerlex Youth Development Foundation",
      description: "One-time Donation.",
      logo: "@/images/nf-logo.png",
    },
    redirect_url: "https://nixerlexfoundation.org/donate/thank-you",
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.5, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full rounded-md overflow-hidden bg-white shadow-lg px-4 md:px-10 py-16"
      >
        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={formik.handleSubmit}
        >
          <input
            type="text"
            name="amount"
            placeholder="Enter Donation Amount"
            className="input-box"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.amount && formik.errors.amount && (
            <div className="error-message">{formik.errors.amount}</div>
          )}

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

          <div className="flex flex-col-reverse md:flex-row w-full justify-between gap-2 mt-16">
            <button
              type="button"
              onClick={() => router.back()}
              className="bg-gray-900 p-4 text-white rounded-xl text-sm"
            >
              Return to Main Website
            </button>
            <button
              type="submit"
              className="bg-navy p-3 text-white rounded-xl text-sm"
            >
              Donate
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}
