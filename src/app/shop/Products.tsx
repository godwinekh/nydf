import Ellipsis from "../home/Ellipsis";
import Search from "./Search";

export default function Products() {
  return (
    <div className="pt-10 pb-24 w-full layout relative">
      <h2 className="flex gap-3 items-center">
        <span>Branded Products</span>
        <Ellipsis />
      </h2>

      <Search />
    </div>
  );
}
