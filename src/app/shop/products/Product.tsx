"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Minus from "@/app/components/icons/minus";
import Plus from "@/app/components/icons/plus";
import Heart from "@/app/components/icons/heart";
import { useAppDispatch } from "@/lib/hooks";
import { Product, addItem } from "@/lib/features/shop/cart";

interface Props {
  name: string;
  price: number;
  image: StaticImageData;
}

const sizes: Product["size"][] = ["s", "m", "l", "xl", "xxl"];

const colors = [
  { code: "wh-az", primary: "white", secondary: "azure" },
  { code: "oy-az", primary: "orange-yellow", secondary: "azure" },
  { code: "oy-na", primary: "orange-yellow", secondary: "navy" },
  { code: "na-az", primary: "navy", secondary: "azure" },
  { code: "na-wh", primary: "navy", secondary: "white" },
  { code: "az-na", primary: "azure", secondary: "navy" },
  { code: "oy-wh", primary: "orange-yellow", secondary: "white" },
];

export default function Product({ name, price, image }: Props) {
  const dispatch = useAppDispatch();
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [productInfo, setProductInfo] = useState<Product>({
    quantity: 1,
    size: undefined,
    color: null,
    name,
    price,
    image,
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

  const handleSize = (selectedSize: Product["size"]) => {
    setProductInfo((prev) => ({
      ...prev,
      size: selectedSize,
    }));
  };

  const handleColor = (selectedColor: Product["color"]) => {
    setProductInfo((prev) => ({
      ...prev,
      color: selectedColor,
    }));
  };

  const handleAddToCart = () => {
    if (productInfo.size && productInfo.color) {
      dispatch(addItem(productInfo));
    } else {
      setShowWarning(true);
    }
  };

  // To display warning text for only 5 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowWarning(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showWarning]);

  return (
    <div className="flex flex-col w-72 p-2 mb-10 border rounded-md text-navy">
      {/* Image */}
      <div>
        <Image
          alt={name}
          src={image}
          quality={100}
          className="w-full h-64 rounded-md"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Body Content */}
      <div className="py-4 px-2">
        {/* Title */}
        <div className="flex justify-between items-center">
          <h6 className="font-bold text-lg text-azure">{name}</h6>
          <button>
            <Heart />
          </button>
        </div>
        {/* Price */}
        <p>
          <span>&#x20A6;</span>
          {price}
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
                  productInfo.size === size ? "bg-orange-yellow" : "bg-gray-400"
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
        <div className="flex justify-start gap-3 py-3 relative">
          <button className="bg-gray-950 text-white px-4 py-2 rounded-lg text-sm">
            Buy now
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-orange-yellow text-white px-4 py-2 rounded-lg text-sm"
          >
            Add to cart
          </button>

          {showWarning && (
            <p className="absolute -top-20 right-0 w-1/2 px-5 py-2 text-center text-xs rounded-lg bg-gray-100">
              Please select a size and color before adding item to cart
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
