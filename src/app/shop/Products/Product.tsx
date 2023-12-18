"use client";
import Image from "next/image";
import Hoodie from "@/images/hoodie.png";
import Minus from "@/images/icons/minus";
import Plus from "@/images/icons/plus";
import Heart from "@/images/icons/heart";
import { useState } from "react";

interface ProductInfoState {
  quantity: number;
  size: "s" | "m" | "l" | "xl" | "xxl" | undefined;
  color: { code: string; primary: string; secondary: string } | null;
}

const sizes: ProductInfoState["size"][] = ["s", "m", "l", "xl", "xxl"];
const colors = [
  { code: "wh-az", primary: "white", secondary: "azure" },
  { code: "oy-az", primary: "orange-yellow", secondary: "azure" },
  { code: "oy-na", primary: "orange-yellow", secondary: "navy" },
  { code: "na-az", primary: "navy", secondary: "azure" },
  { code: "na-wh", primary: "navy", secondary: "white" },
  { code: "az-na", primary: "azure", secondary: "navy" },
  { code: "oy-wh", primary: "orange-yellow", secondary: "white" },
];

export default function Product() {
  const [productInfo, setProductInfo] = useState<ProductInfoState>({
    quantity: 1,
    size: undefined,
    color: null,
  });

  const handleQuantity = (op: "minus" | "add") => {
    if (op === "minus") {
      setProductInfo((prev) =>
        prev.quantity > 1
          ? {
              ...prev,
              quantity: prev.quantity - 1,
            }
          : prev
      );
    }

    if (op === "add") {
      setProductInfo((prev) => ({
        ...prev,
        quantity: prev.quantity + 1,
      }));
    }
  };

  const handleSize = (selectedSize: ProductInfoState["size"]) => {
    setProductInfo((prev) => ({
      ...prev,
      size: selectedSize,
    }));
  };

  const handleColor = (selectedColor: ProductInfoState["color"]) => {
    setProductInfo((prev) => ({
      ...prev,
      color: selectedColor,
    }));
  };

  return (
    <div className="flex flex-col w-72 p-2 border rounded-md text-navy">
      {/* Image */}
      <div>
        <Image
          alt="hoodie"
          src={Hoodie}
          quality={100}
          className="w-full h-full rounded-md"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Body Content */}
      <div className="py-4 px-2">
        {/* Title */}
        <div className="flex justify-between items-center">
          <h6 className="font-bold text-lg text-azure">NYDF Hoodies</h6>
          <button>
            <Heart />
          </button>
        </div>
        {/* Price */}
        <p>
          <span>&#x20A6;</span>15,000
        </p>

        {/* Size */}
        <div className="py-1 my-2">
          <p className="text-sm font-bold mb-2">Size</p>
          <div className="flex gap-2 justify-start items-center">
            {sizes.map((size, index) => (
              <input
                key={index}
                type="button"
                value={size}
                onClick={handleSize.bind(null, size)}
                className={`w-10 h-10 cursor-pointer rounded-full uppercase text-white text-sm ${
                  productInfo.size === size ? "bg-orange-yellow" : "bg-navy"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Color */}
        <div className="py-1 mb-2">
          <p className="text-sm font-bold mb-2">Color variation</p>
          <div className="flex gap-2 justify-start items-center">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={handleColor.bind(null, color)}
                className={`w-6 h-6 flex justify-center items-center rounded-full overflow-hidden bg-azure ${
                  productInfo.color?.code === color.code
                    ? "border border-orange-yellow scale-125"
                    : "border-2 border-gray-200"
                }`}
              >
                <div className="w-full h-full grid grid-cols-2">
                  <span className={`bg-${color.primary}`}></span>
                  <span className={`bg-${color.secondary}`}></span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="py-1 mb-2">
          <p className="text-sm font-bold mb-2">Quantity</p>
          <div className="flex items-center gap-2">
            <button onClick={handleQuantity.bind(null, "minus")}>
              <Minus />
            </button>
            <input
              type="text"
              value={productInfo.quantity}
              className="w-8 h-8 border text-center"
              readOnly
            />
            <button onClick={handleQuantity.bind(null, "add")}>
              <Plus />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-start gap-3 py-3">
          <button className="bg-gray-950 text-white px-4 py-2 rounded-lg text-sm">
            Buy now
          </button>
          <button className="bg-orange-yellow text-white px-4 py-2 rounded-lg text-sm">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
