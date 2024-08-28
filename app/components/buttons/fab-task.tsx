import clsx from "clsx"
import Image from "next/image"

type Props = {
  isActive?: boolean
  showText?: boolean
  onClick?: () => void
  onClose?: () => void
}

export const FabTask = ({ showText, isActive, onClick, onClose }: Props) => {
  const isActiveSvg = isActive
    ? "/assets/svg/task-active.svg"
    : "/assets/svg/task-inactive.svg"

  return (
    <div
      className="relative w-[68px] h-[68px] rounded-full flex justify-center items-center bg-primary-dark-grey"
      // onClick={onClose}
    >
      <div
        className={clsx(
          "bottom-0 absolute text-white flex flex-col justify-center items-center text-center",
          {
            "left-2": isActive,
            "left-0": !isActive
          }
        )}>
        {showText ? <span className="mb-3">Task</span> : null}

        <button
          onClick={onClick}
          className={clsx(
            "w-[68px] h-[68px] rounded-full flex justify-center items-center",
            {
              "bg-indicator-orange": isActive,
              "bg-white": !isActive
            }
          )}>
          <Image
            src={isActiveSvg}
            alt="chat-active"
            width={30}
            height={30}
            priority
          />
        </button>
      </div>
    </div>
  )
}
