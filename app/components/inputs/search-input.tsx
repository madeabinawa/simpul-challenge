import Image from "next/image"
import { Fragment } from "react"

export const SearchInput = () => {
  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        placeholder="Search"
        className="w-[666px] h-[32px] border border-gray-300 rounded-[5px] p-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 px-[86px] text-black"
      />

      <div className="absolute inset-y-0 -right-72 flex items-center justify-end">
        <Image
          src="/assets/svg/search.svg"
          alt="chat-active"
          width={12}
          height={12}
          priority
        />
      </div>
    </div>
  )
}
