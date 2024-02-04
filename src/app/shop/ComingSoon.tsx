import ShoppingBag from "@/app/components/icons/shoppingBag";

export default function ComingSoon() {
  return (
    <div className="py-24 md:py-32 px-8 flex flex-col gap-8 justify-center items-center text-center w-full h-full bg-gradient-to-b from-azure to-orange-yellow-light text-navy">
      <ShoppingBag className="w-32 h-32 md:w-44 md:h-44" />

      <div className="pb-10">
        <p className="text-3xl font-extrabold leading-8 capitalize">
          <span className="text-4xl md:text-7xl">&#127881;</span>coming soon!{" "}
          <span className="text-4xl md:text-7xl">&#127881;</span>
        </p>
      </div>
    </div>
  );
}
