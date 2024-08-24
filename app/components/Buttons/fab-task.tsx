import Image from "next/image"

type Props = {
  isActive?: boolean
}

export const FabTask = ({ isActive }: Props) => {
  const isActiveColor = isActive ? "bg-indicator-orange" : "bg-white"
  const isActiveSvg = isActive
    ? "/assets/svg/task-active.svg"
    : "/assets/svg/task-inactive.svg"

  return (
    <div className="text-white flex flex-col justify-center items-center text-center">
      <span className="mb-3">Task</span>
      <button
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
