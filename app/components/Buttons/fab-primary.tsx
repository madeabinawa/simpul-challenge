"use client"

import { useToggle } from "@mantine/hooks"
import Image from "next/image"
import { FabChat } from "./fab-chat"
import { FabTask } from "./fab-task"

type Props = {
  className?: string
}

export const FabPrimary = ({ className }: Props) => {
  const [isActive, setIsActive] = useToggle()

  return (
    <section className="fixed bottom-4 right-4 flex justify-end items-end gap-3">
      <FabChat isActive={isActive} />

      <FabTask isActive={isActive} />

      <button
        onClick={() => setIsActive()}
        className={`w-[68px] h-[68px] bg-primary-blue rounded-full flex justify-center items-center ${className}`}>
        <Image
          src="/assets/svg/lightning.svg"
          alt="chat-active"
          width={18}
          height={18}
          priority
        />
      </button>
    </section>
  )
}
