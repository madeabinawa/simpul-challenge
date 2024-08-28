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
      className={clsx("transform transition-transform duration-500", {
        "translate-x-0": Boolean(displayButton),
        "opacity-100": Boolean(displayButton),
        "-translate-x-full": Boolean(!displayButton),
        "opacity-0": Boolean(!displayButton)!
      })}>
      <FabChat
        showText={showText}
        onClick={onClick}
        isActive={isActive}
        onClose={onClose}
      />
    </section>
  )
}
