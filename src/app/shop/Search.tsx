import SearchIcon from "@/images/icons/searchIcon";

export default function Search() {
  return (
    <div className="flex items-center  w-full">
      <form action="" className="w-1/2">
        <div className="flex w-full border py-2 px-3 text-sm rounded-lg">
          <input type="text" name="search" placeholder="What items are you looking for?" className="grow border-0 outline-none focus:outline-none" />
          <SearchIcon />
        </div>
      </form>
    </div>
  )
}
