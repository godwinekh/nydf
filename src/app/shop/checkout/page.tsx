"use client";
import Structure from "@/app/components/global/Structure";
import CustomerForm from "./customer-details/CustomerForm";
import Order from "./pay/Order";
import { useState } from "react";

export default function Checkout() {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep(1);

  const handlePrev = () => setStep(0);

  return (
    <Structure>
      <div className="w-full flex">
        <div
          className={`basis-1/2 py-1 ${
            step === 0 ? "bg-orange-yellow" : "bg-[#d9d9d9]"
          }`}
        ></div>
        <div
          className={`basis-1/2 py-1 ${
            step !== 0 ? "bg-orange-yellow" : "bg-[#d9d9d9]"
          }`}
        ></div>
      </div>

      <div className="pt-10 pb-24 w-full layout relative flex justify-center">
        {step === 0 && <CustomerForm proceed={handleNext} />}
        {step !== 0 && <Order back={handlePrev} />}
      </div>
    </Structure>
  );
}
