"use client";
import { toggleContactFormModal } from "@/lib/features/modals/modals";
import { useAppDispatch } from "@/lib/hooks";
// import SMTPTransport from "nodemailer/lib/smtp-transport";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(toggleContactFormModal());
    return;

    // try {
    //   const response = await fetch("/api/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     console.log("Email sent successfully", response);
    //     // Handle success, e.g., show a success message
    //     const responseData: SMTPTransport.SentMessageInfo = await response.json();
    //     console.log(responseData)
    //   } else {
    //     console.error("Failed to send email");
    //     // Handle failure, e.g., show an error message
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col gap-5 w-10/12 md:w-1/2"
    >
      <input
        type="name"
        name="name"
        placeholder="Name"
        className="input-box"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input-box"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Comments/Suggestions/Complaints"
        className="input-box"
        value={formData.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-600 w-2/5 py-3 mt-3 text-white rounded-xl text-xl"
      >
        Send
      </button>
    </form>
  );
}
