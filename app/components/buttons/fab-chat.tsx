"use client"

import clsx from "clsx"
import Image from "next/image"

type Props = {
  isActive?: boolean
  showText?: boolean
  onClick?: () => void
  onClose?: () => void
}

export const FabChat = ({ showText, isActive, onClick, onClose }: Props) => {
  const isActiveSvg = isActive
    ? "/assets/svg/chat-active.svg"
    : "/assets/svg/chat-inactive.svg"

  return (
    <div
      className="relative w-[68px] h-[68px] rounded-full flex justify-center items-center bg-primary-dark-grey"
    >
      <div
        className={clsx(
          "bottom-0 absolute text-white flex flex-col justify-center items-center text-center",
          {
            "left-3": isActive,
            "left-0": !isActive
          }
        )}>
        {showText ? <span className="mb-3">Inbox</span> : null}

        <button
          onClick={onClick}
          className={clsx(
            "w-[68px] h-[68px] rounded-full flex justify-center items-center",
            {
              "bg-indicator-purple": isActive,
              "bg-white": !isActive
            }
          )}>
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
