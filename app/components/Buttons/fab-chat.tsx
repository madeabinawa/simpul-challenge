"use client"

import Image from "next/image"

type Props = {
  isActive?: boolean
}

export const FabChat = ({ isActive }: Props) => {
  const isActiveColor = isActive ? "bg-indicator-purple" : "bg-white"
  const isActiveSvg = isActive
    ? "/assets/svg/chat-active.svg"
    : "/assets/svg/chat-inactive.svg"

  return (
    <div className="text-white flex flex-col justify-center items-center text-center">
      <span className="mb-3">Inbox</span>

      <button
        className={`w-[68px] h-[68px] rounded-full flex justify-center items-center ${isActiveColor}`}>
        <Image
          src={isActiveSvg}
          alt="chat-active"
          width={30}
          height={30}
          priority
        />
      </button>
    </div>
  )
}
