import { useContext } from "react"
import { FabChat } from "../buttons"
import { FabContext } from "./fab-primary-section"
import clsx from "clsx"

type Props = {
  displayButton?: boolean
  isActive?: boolean
  onClick?: () => void
  onClose?: () => void
}

export const FabChatSection = ({
  isActive,
  displayButton,
  onClick,
  onClose
}: Props) => {
  const fabContext = useContext(FabContext)
  const showText = fabContext?.selectedButton === null

  return (
    <section
      className={clsx("duration-500 transition-all", {
        "opacity-100 translate-x-0": displayButton,
        "opacity-0 translate-x-20": !displayButton,
      })}
    >
      <FabChat
        showText={showText}
        onClick={onClick}
        isActive={isActive}
        onClose={onClose}
      />
    </section>
  )
}
