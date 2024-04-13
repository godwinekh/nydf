import ShoppingBag from "@/app/components/icons/shoppingBag";

export default function CartEmpty() {
  return (
    <div className="py-24 md:py-32 px-8 flex flex-col gap-8 justify-center items-center text-center w-full h-full bg-[#d9d9d9]">
      <ShoppingBag className="w-32 h-32" />

      <div className="pb-10 flex flex-col gap-4">
        <p className="text-3xl font-bold leading-8 capitalize">
          Your shopping bag is empty!
        </p>
        <p>Add items to your cart to view</p>
      </div>
    </div>
  );
}
