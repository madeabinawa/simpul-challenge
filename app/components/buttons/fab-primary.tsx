"use client"

import Image from "next/image"

type Props = {
  className?: string
  onClick?: () => void
  isActive?: boolean
}

export const FabPrimary = ({ isActive, className, onClick }: Props) => {
  const isActiveVisible = isActive ? "" : "hidden"

  return (
    <button
      onClick={onClick}
      className={`${isActiveVisible} w-[68px] h-[68px] bg-primary-blue rounded-full flex justify-center items-center ${className}`}>
      <Image
        src="/assets/svg/lightning.svg"
        alt="chat-active"
        width={18}
        height={18}
        priority
      />
    </button>
  )
}
