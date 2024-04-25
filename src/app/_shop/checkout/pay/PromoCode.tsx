import { applyPromo } from "@/lib/features/shop/order";
import { useAppDispatch } from "@/lib/hooks";
import { FormEvent, useState } from "react";

const discountCodes = [{ code: "WELCOME2024", discount: 2000 }];

export default function PromoCode() {
  const [value, setValue] = useState("");
  const [isDiscounted, setIsDiscounted] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (value.toUpperCase() === discountCodes[0].code) {
      dispatch(applyPromo(discountCodes[0].discount))
      setIsDiscounted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full pt-4 mb-12">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-end gap-3">
        <div>
          <label htmlFor="promo" className="font-bold">
            Add a promotion or loyalty code
          </label>
          <div className="flex justify-between rounded-lg bg-[#d9d9d9] mt-3">
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
        </div>

        {isDiscounted && (
          <div className="">
            <p className="font-bold uppercase text-azure">
              Congrats! You have a discount.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
