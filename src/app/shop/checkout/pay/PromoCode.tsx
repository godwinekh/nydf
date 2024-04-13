import { FormEvent, useState } from "react";

export default function PromoCode() {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full pt-4 mb-12">
      <label htmlFor="promo" className="font-bold">
        Add a promotion or loyalty code
      </label>
      <div className="flex justify-between w-3/5 rounded-lg bg-[#d9d9d9] mt-3">
        <input
          name="promo"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-grow p-3 outline-none border-0 text-black bg-transparent"
        />
        <button
          type="submit"
          className="bg-orange-yellow text-white px-10 py-3 rounded-lg text-xl"
        >
          Apply
        </button>
      </div>
    </form>
  );
}
