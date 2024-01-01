export default function Newsletter() {
  return (
    <div className="p-4 ">
      <h6 className="mb-6 font-bold">
        Sign up for our newsletters to get the discount
      </h6>
      <form>
        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Email"
            className="grow p-3 rounded-xl bg-[#FEF9DE]"
          />
          <button className="px-4 py-3 text-navy bg-white  rounded-xl shadow-md">
            Subscribe
          </button>
        </div>
      </form>
      <p className="text-sm mt-2 text-white">
        Get the latest news, updates and opportunites from us
      </p>
    </div>
  );
}
