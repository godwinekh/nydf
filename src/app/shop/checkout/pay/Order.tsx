import ShoppingCart from "@/app/components/icons/cart";
import { useAppSelector } from "@/lib/hooks";
import PromoCode from "./PromoCode";
import { useEffect } from "react";

interface Props {
  back: () => void;
}

export default function Order({ back }: Props) {
  const cartTotal = useAppSelector((state) => state.cart.totalAmount);
  const { delivery, total: orderTotal } = useAppSelector(
    (state) => state.order
  );

  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className="pt-10 pb-24 w-full layout relative">
      <div className="px-24">
        <PromoCode />

        {/* Cart Items Total */}
        <div className="flex justify-between px-4 py-10 border-b-2 border-lightgrey">
          <div className="flex items-center gap-4">
            <ShoppingCart />
            <p className="font-bold">Items:</p>
          </div>

          <p className="font-bold">
            Total: <span className="text-sm">&#x20A6;</span>
            {cartTotal.toLocaleString()}
          </p>
        </div>

        {/* Delivery */}
        <div className="flex justify-between px-4 py-10 border-b-2 border-lightgrey">
          <div>
            <p className="font-bold">Delivery</p>
            <p>Nigeria</p>
          </div>

          <p className="font-bold">
            <span className="text-sm">&#x20A6;</span>
            {delivery.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between px-4 py-10 text-3xl font-bold">
          <h4 className="">Order Total:</h4>
          <p>
            <span className="text-2xl">&#x20A6;</span>
            {orderTotal.toLocaleString()}
          </p>
        </div>

        <div className="flex items-center justify-center py-5 gap-5 mt-12">
          <button
            className="w-1/3 bg-black p-4 rounded-xl text-xl text-white uppercase text-center"
            onClick={back}
          >
            Back
          </button>

          <button className="w-2/3 bg-orange-yellow p-4 rounded-xl text-xl text-white uppercase  text-center">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}
