import clsx from "clsx"
import { useContext } from "react"
import { FabTask } from "../buttons"
import { FabContext } from "./fab-primary-section"

type Props = {
  isActive?: boolean
  displayButton?: boolean
  onClick?: () => void
  onClose?: () => void
}

export const FabTaskSection = ({
  displayButton,
  isActive,
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
      <FabTask
        showText={showText}
        onClick={onClick}
        isActive={isActive}
        onClose={onClose}
      />
    </section>
  )
}
