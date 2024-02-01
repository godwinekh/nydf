
export default function Ellipsis({color}: {color?: string}) {
  return (
    <div className="flex gap-2 items-center md:flex-row-reverse">
      <div
        className={`w-8 h-8 md:w-12 md:h-12 rounded-full ${
          color ? color : "bg-amber-400"
        }`}
      ></div>
      <div
        className={`w-6 h-6 md:w-10 md:h-10 rounded-full ${
          color ? color : "bg-amber-400"
        }`}
      ></div>
      <div
        className={`w-4 h-4 md:w-8 md:h-8 rounded-full ${
          color ? color : "bg-amber-400"
        }`}
      ></div>
    </div>
  );
}
