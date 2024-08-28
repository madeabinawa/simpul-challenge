"use client"

import clsx from "clsx"
import Image from "next/image"

type Props = {
  className?: string
  onClick?: () => void
  isActive?: boolean
}

export const FabPrimary = ({ isActive, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `w-[68px] h-[68px] bg-primary-blue rounded-full flex justify-center items-center ${className}`,
        {
          hidden: isActive
        }
      )}>
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
