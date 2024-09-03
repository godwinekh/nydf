"use client";
import Close from "@/app/components/icons/close";
import Minus from "@/app/components/icons/minus";
import Plus from "@/app/components/icons/plus";
import {
  TProduct,
  removeItem,
  sumTotal,
  updateQuantity,
} from "@/lib/features/shop/cart";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";

export default function CartItem({
  name,
  price,
  image,
  quantity,
  color,
  size,
}: TProduct) {
  const dispatch = useAppDispatch();

  const handleQuantity = (operation: "minus" | "add") => {
    dispatch(updateQuantity({ operation, name }));
  };

  return (
    <div className="w-full flex items-stretch gap-4 px-10 py-4 bg-white">
      <div className="grow-0 w-44 h-40 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt=""
          quality={100}
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="grow flex flex-col justify-between">
        <div>
          <h4>{name}</h4>
          <p>
            <span>&#x20A6;</span>
            {price}
          </p>
        </div>

        <div className="flex justify-start items-center gap-8">
          <p>
            Size: <span className="uppercase">{size}</span>
          </p>
          <p>
            Base Colour: <span className="uppercase">{color?.primary}</span>
          </p>
          <p>
            Text Colour: <span className="uppercase">{color?.secondary}</span>
          </p>
        </div>

        <div className="">
          <p className="text-sm font-bold mb-2">Quantity</p>
          <div className="flex items-center gap-2">
            <button onClick={handleQuantity.bind(null, "minus")}>
              <Minus />
            </button>
            <input
              type="text"
              value={quantity}
              className="w-8 h-8 border text-center"
              readOnly
            />
            <button onClick={handleQuantity.bind(null, "add")}>
              <Plus />
            </button>
          </div>
        </div>
      </div>

      <button onClick={() => dispatch(removeItem(name))}>
        <Close />
      </button>
    </div>
  );
}
