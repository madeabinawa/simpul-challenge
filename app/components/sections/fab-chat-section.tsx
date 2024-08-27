import { useContext } from "react"
import { FabChat } from "../buttons"
import { FabContext } from "./fab-primary-section"

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

  const isActiveTransform = displayButton
    ? "translate-x-0 opacity-100"
    : "-translate-x-full opacity-0"

  return (
    <section
      className={`transform transition-transform duration-500 ${isActiveTransform} `}>
      <FabChat
        showText={showText}
        onClick={onClick}
        isActive={isActive}
        onClose={onClose}
      />
    </section>
  )
}
