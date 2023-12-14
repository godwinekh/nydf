import Image from "next/image";
import Hoodie from "@/images/hoodie.png";

export default function Product() {
  const sizes = ["s", "m", "l", "xl", "xxl"];
  const colors = [
    { color1: "white", color2: "azure" },
    { color1: "orange-yellow", color2: "azure" },
    { color1: "orange-yellow", color2: "navy" },
    { color1: "navy", color2: "azure" },
    { color1: "navy", color2: "white" },
    { color1: "navy", color2: "orang-yellow" },
    { color1: "azure", color2: "navy" },
    { color1: "orange-yellow", color2: "white" },
  ];
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div>
        <Image
          alt="hoodie"
          src={Hoodie}
          quality={100}
          className="w-full h-full"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Body Content */}
      <div>
        {/* Title */}
        <h4>NYDF Hoodies</h4>
        <p>
          <span className="">N</span>15,000
        </p>

        {/* Size */}
        <div>
          <h5>Size</h5>
          <div className="flex gap-2 justify-start items-center">
            {sizes.map((size, index) => (
              <button key={index} className="w-6 h-6 rounded-full capitalize">
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color */}
        <div>
          <h5>Color variation</h5>
          <div className="flex gap-2 justify-start items-center">
            {colors.map((color, index) => (
              <button
                key={index}
                className="w-6 h-6 rounded-full grid grid-cols-2 border-2"
              >
                <span className={`bg-${color.color1}`}></span>
                <span className={`bg-${color.color2}`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex justify-start items-center">
          <button></button>

        </div>

      </div>
    </div>
  );
}
