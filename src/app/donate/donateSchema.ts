import * as yup from "yup";

const donateSchema = yup.object().shape({
  amount: yup
    .string()
    .required("Amount is required")
    .test("valid-amount", "Please enter a valid amount", (value) =>
      /^\d+$/.test(value)
    ),
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10,11}$/, "Invalid phone number")
    .required("Phone number is required"),
  currency: yup
    .string()
    .oneOf(["ngn", "usd"], "Invalid currency")
    .required("Currency is required"),
});

export default donateSchema;
