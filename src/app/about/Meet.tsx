import Image from "next/image";
import Xander from "@/images/xander-uncut.jpg";

export default function Meet() {
  return (
    <div className="py-24 w-full layout relative">
      <h2>Meet the founder</h2>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 relative">
          <Image
            alt="Eke Alexander"
            src={Xander}
            quality={100}
            placeholder="blur"
            className="w-full h-full"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute bottom-0 w-full px-5 bg-amber-200 text-center">
            <h5 className="text-gray-800">Eke Alexander</h5>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima ab
            iure error voluptate autem nostrum architecto dicta ratione ut
            nesciunt reprehenderit, officia et tempore repudiandae, reiciendis
            laudantium odit animi in.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima ab
            iure error voluptate autem nostrum architecto dicta ratione ut
            nesciunt reprehenderit, officia et tempore repudiandae, reiciendis
            laudantium odit animi in.
          </p>
        </div>
      </div>
    </div>
  );
}
