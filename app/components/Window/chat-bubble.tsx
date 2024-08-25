import { useToggle } from "@mantine/hooks"
import Image from "next/image"

type Props = {
  isMe: boolean
  personName: string
  message: string
  createdAt: string
  color: string
}

export const ChatBubble = (props: Props) => {
  const isMeAlign = props.isMe
    ? "justify-end items-end"
    : "justify-start items-start"

  const isMeMoreReverse = props.isMe ? "flex-row-reverse" : "flex-row"

  return (
    <div className={`flex flex-col w-full mt-[16px] ${isMeAlign}`}>
      <div className={`text-${props.color}`}>
        {props.isMe ? "You" : props.personName}
      </div>

      <div className={`flex ${isMeMoreReverse} justify-start items-start`}>
        <div
          className={`flex flex-col flex-wrap justify-start items-start w-fit max-w-[518px] bg-${props.color} rounded-[5px] p-[10px]`}>
          <div className="mb-3">{props.message}</div>
          <div>{props.createdAt}</div>
        </div>

        <MoreAction />
      </div>
    </div>
  )
}

const MoreAction = () => {
  const [toggled, setToggle] = useToggle()
  const toggledDisplay = toggled ? "flex" : "hidden"

  return (
    <div className="relative">
      <button className="-mt-1 px-[7px]" onClick={() => setToggle()}>
        <Image
          src="/assets/svg/more-disable.svg"
          alt="more-active"
          width={16}
          height={16}
          priority
        />
      </button>

      <div
        className={`absolute top-5 left-2 ${toggledDisplay} flex-col bg-white rounded-md justify-start items-start border-[1px] border-primary-white w-[126px] divide-solid divide-primary-white divide-y`}>
        <button className="w-full text-primary-blue px-[18px] py-[11px] hover:bg-primary-white text-left">
          Edit
        </button>
        <button className="w-full text-indicator-red px-[18px] py-[11px] hover:bg-primary-white text-left ">
          Delete
        </button>
      </div>
    </div>
  )
}
