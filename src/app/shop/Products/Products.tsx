import Ellipsis from "../../global/Ellipsis";
import Product from "./Product";
import Search from "../Search";
import items from "./Items";

export default function Products() {
  return (
    <div className="pt-10 pb-24 w-full layout relative">
      <h2 className="flex gap-3 items-center">
        <span>Branded Products</span>
        <Ellipsis />
      </h2>

      <Search />

      <div className="py-8 grid md:grid-cols-2 lg:grid-cols-3 justify-center">
        {items.map((item, index) => (
          <Product
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
