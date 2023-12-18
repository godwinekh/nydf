import Ellipsis from "../global/Ellipsis";
import Newsletter from "./Newsletter";

export default function Discount() {
  return (
    <div
      id="discount"
      className="py-24 w-full bg-orange-yellow layout flex justify-center items-center"
    >
      <div className="w-full md:w-2/3 lg:w-2/3 pb-4">
        <h2 className="flex gap-3 items-center text-navy rounded-2xl border-l px-4 py-5">
          <span>Get <span className="text-5xl font-extrabold text-white">10%</span> discount</span>
          <Ellipsis color="bg-white" />
        </h2>

        <Newsletter />
      </div>
    </div>
  );
}
