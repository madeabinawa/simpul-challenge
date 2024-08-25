import { useContext } from "react"
import { FabChat } from "../Buttons"
import { FabContext } from "./FabPrimarySection"

type Props = {
  displayButton?: boolean
  isActive?: boolean
  onClick?: () => void
}

export const FabChatSection = ({ isActive, displayButton, onClick }: Props) => {
  const fabContext = useContext(FabContext)
  const showText = fabContext?.selectedButton === null

  const isActiveTransform = displayButton
    ? "translate-x-0 opacity-100"
    : "-translate-x-full opacity-0"

  return (
    <section
      className={`transform transition-transform duration-500 ${isActiveTransform} `}>
      <FabChat showText={showText} onClick={onClick} isActive={isActive} />
    </section>
  )
}
