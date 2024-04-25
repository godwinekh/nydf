import ShoppingCart from "@/app/components/icons/cart";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";

export default function CartTotal() {
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  return (
    <div className="pt-10 pb-24 w-full layout relative">
      <div className="px-24">
        <div className="flex justify-between px-4 py-10 border-b-2 border-lightgrey text-2xl font-bold">
          <div className="flex items-center gap-4">
            <ShoppingCart />
            <p className="font-bold">Items:</p>
          </div>

          <p>
            Total: <span className="text-xl">&#x20A6;</span>
            {totalAmount.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-center py-5">
          <Link href="/shop/checkout" className="w-2/3 bg-orange-yellow p-4 rounded-xl text-2xl text-white uppercase font-bold text-center">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
