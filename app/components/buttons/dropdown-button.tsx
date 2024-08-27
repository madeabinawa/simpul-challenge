"use client"

import { useToggle } from "@mantine/hooks"
import Image from "next/image"
import { useState } from "react"

export const DropdownButton = () => {
  const [toggled, setToggle] = useToggle()
  const toggledDisplay = toggled ? "flex" : "hidden"

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setToggle()}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-bold text-primary-dark-grey border-[1px] border-primary-light-grey rounded-md ">
        My Tasks
        <Image
          className="ms-[7px]"
          src="/assets/svg/expand-more.svg"
          alt="expand-more"
          width={20}
          height={20}
          priority
        />
      </button>

      <div
        className={`w-[288px] absolute top-12 -left-20 ${toggledDisplay} flex-col bg-white rounded-md justify-start items-start border-[1px] border-primary-white w-[126px] divide-solid divide-primary-white divide-y font-bold text-primary-dark-grey`}>
        <button className="w-full px-[18px] py-[11px] hover:bg-primary-white text-left">
          Personal Errands
        </button>
        <button className="w-full px-[18px] py-[11px] hover:bg-primary-white text-left ">
          Urgent To-Do
        </button>
      </div>
    </div>
  )
}
