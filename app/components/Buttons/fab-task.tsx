import Image from "next/image"

type Props = {
  isActive?: boolean
  onClick?: () => void
  showText?: boolean
}

export const FabTask = ({ showText, isActive, onClick }: Props) => {
  const isActiveColor = isActive ? "bg-indicator-orange" : "bg-white"

  const isActiveSvg = isActive
    ? "/assets/svg/task-active.svg"
    : "/assets/svg/task-inactive.svg"

  return (
    <div
      className={`text-white flex flex-col justify-center items-center text-center`}>
      {showText ? <span className="mb-3">Task</span> : null}

      <button
        onClick={onClick}
        className={`w-[68px] h-[68px] rounded-full flex justify-center items-center ${isActiveColor}`}>
        <Image
          src={isActiveSvg}
          alt="chat-active"
          width={30}
          height={30}
          priority
        />
      </button>
    </div>
  )
}
