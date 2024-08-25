import { useContext } from "react"
import { FabTask } from "../Buttons"
import { FabContext } from "./FabPrimarySection"

type Props = {
  isActive?: boolean
  onClick?: () => void
  displayButton?: boolean
}

export const FabTaskSection = ({ displayButton, isActive, onClick }: Props) => {
  const fabContext = useContext(FabContext)
  const showText = fabContext?.selectedButton === null

  const isActiveTransform = displayButton
    ? "translate-x-0 opacity-100"
    : "-translate-x-full opacity-0"

  return (
    <section
      className={`transform transition-transform duration-500 ${isActiveTransform} `}>
      <FabTask showText={showText} onClick={onClick} isActive={isActive} />
    </section>
  )
}
