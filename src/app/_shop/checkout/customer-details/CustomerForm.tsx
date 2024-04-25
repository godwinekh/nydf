import { useFormik } from "formik";
import * as Yup from "yup";
import CustomerInputField, { CustomerSelectField } from "./CustomerInputField";
import states from "../states";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setOrder } from "@/lib/features/shop/order";
import { useEffect } from "react";

interface Props {
  proceed: () => void;
}

const initialValues = {
  firstname: "",
  surname: "",
  email: "",
  phone: "",
  country: "Nigeria",
  address: "",
  state: "Lagos",
  city: "",
  postal: "",
};

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("This is a required field"),
  surname: Yup.string().required("This is a required field"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This is a required field"),
  phone: Yup.string()
    .min(11, "Not a valid phone number")
    .max(14, "Phone number cannot exceed 14 characters"),
  country: Yup.string().required("This is a required field"),
  address: Yup.string().required("This is a required field"),
  state: Yup.string().required("This is a required field"),
  city: Yup.string().required("This is a required field"),
  postal: Yup.string().required("This is a required field"),
});

export default function CustomerForm({ proceed }: Props) {
  const dispatch = useAppDispatch();
  const cartTotal = useAppSelector((state) => state.cart.totalAmount);

  const customer = useAppSelector((state) => state.order.customer);
  const { name, ...data } = customer;
  const names = name.split(" ");
  const existingCustomer = { firstname: names[0], surname: names[1], ...data };

  const formik = useFormik({
    initialValues: existingCustomer ? existingCustomer : initialValues,
    validationSchema,
    onSubmit(values) {
      const { firstname, surname, ...data } = values;
      const name = firstname + " " + surname;
      const customer = { name, ...data };

      dispatch(setOrder({ customer, cartTotal }));
      proceed();
    },
  });

  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className="px-10 md:w-2/3">
      <div className="flex py-1 my-8 border-b-2 border-lightgrey">
        <h3 className="font-bold text-2xl">Your Details</h3>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex gap-4">
          <div className="basis-1/2">
            <CustomerInputField
              name="firstname"
              label="Firstname"
              value={formik.values.firstname}
              setField={formik.handleChange}
              setBlur={formik.handleBlur}
              error={formik.errors.firstname}
            />
          </div>
          <div className="basis-1/2">
            <CustomerInputField
              name="surname"
              label="Surname"
              value={formik.values.surname}
              setField={formik.handleChange}
              setBlur={formik.handleBlur}
              error={formik.errors.surname}
            />
          </div>
        </div>

        {["email", "phone", "country", "address"].map((field, idx) => (
          <CustomerInputField
            key={idx}
            name={field}
            label={field !== "phone" ? field : "Phone number (optional)"}
            value={formik.values[field as keyof typeof formik.values]!}
            setField={formik.handleChange}
            setBlur={formik.handleBlur}
            error={formik.errors[field as keyof typeof formik.errors]}
            helperText={
              field === "country"
                ? "Our merchandize is currently only available in Nigeria"
                : ""
            }
          />
        ))}

        <CustomerSelectField
          name="state"
          label="State"
          value={formik.values.state}
          setField={formik.handleChange}
          setBlur={formik.handleBlur}
          error={formik.errors.state}
        >
          {states.map((state, idx) => (
            <option key={idx} value={state}>
              {state}
            </option>
          ))}
        </CustomerSelectField>

        <div className="flex gap-4">
          <div className="basis-1/2">
            <CustomerInputField
              name="city"
              label="City"
              value={formik.values.city}
              setField={formik.handleChange}
              setBlur={formik.handleBlur}
              error={formik.errors.city}
            />
          </div>
          <div className="basis-1/2">
            <CustomerInputField
              name="postal"
              label="Postal Code"
              value={formik.values.postal}
              setField={formik.handleChange}
              setBlur={formik.handleBlur}
              error={formik.errors.postal}
            />
          </div>
        </div>

        <div className="flex justify-center py-5">
          <button
            type="submit"
            className="w-2/3 bg-orange-yellow p-4 rounded-xl text-2xl text-white uppercase font-bold text-center"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
