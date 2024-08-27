"use client"

import Image from "next/image"

type Props = {
  isActive?: boolean
  showText?: boolean
  onClick?: () => void
  onClose?: () => void
}

export const FabChat = ({ showText, isActive, onClick, onClose }: Props) => {
  const isActiveColor = isActive ? "bg-indicator-purple" : "bg-white"

  const isActiveSvg = isActive
    ? "/assets/svg/chat-active.svg"
    : "/assets/svg/chat-inactive.svg"

  const isActivePosition = isActive ? "left-2" : "left-0"

  return (
    <div
      className="relative w-[68px] h-[68px] rounded-full flex justify-center items-center bg-primary-dark-grey"
      // onClick={onClose}
    >
      <div
        className={`bottom-0 absolute ${isActivePosition} text-white flex flex-col justify-center items-center text-center`}>
        {showText ? <span className="mb-3">Inbox</span> : null}

        <button
          onClick={onClick}
          className={` w-[68px] h-[68px] rounded-full flex justify-center items-center ${isActiveColor}`}>
          <Image
            src={isActiveSvg}
            alt="chat-active"
            width={30}
            height={30}
            priority
          />
        </button>
      </div>{" "}
    </div>
  )
}
