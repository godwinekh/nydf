import { useAppSelector } from "@/lib/hooks";

export default function CartHeader() {
  const { totalItems, totalAmount } = useAppSelector((state) => state.cart);

  return (
    <div className="py-10 w-full layout relative">
      <div className="flex justify-between items-center px-4">
        <h3 className="text-3xl font-bold text-azure">Cart ({totalItems})</h3>
        <p className="font-bold">
          Total: <span className="text-sm">&#x20A6;</span>{totalAmount.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
