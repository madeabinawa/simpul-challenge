import { ChatDetailType } from "@/app/types"
import { useToggle } from "@mantine/hooks"
import clsx from "clsx"
import { format } from "date-fns"
import Image from "next/image"

type Props = {
  isMe: boolean
  personName: string
  message: string
  repliedText?: string
  createdAt: string
  bgColor: string
  textColor: string
  handleReplyMessage: () => void
}

export const ChatBubble = (props: Props) => {
  return (
    <div
      className={clsx("flex flex-col w-full mt-[16px]", {
        "justify-end items-end": props.isMe,
        "justify-start items-start": !props.isMe
      })}>

      <div className={props.textColor}>
        {props.isMe ? "You" : props.personName}
      </div>

      {props?.repliedText?.length ?
        (
          <div
            className='flex flex-col flex-wrap justify-start items-start w-fit max-w-[518px] bg-primary-white rounded-[5px] p-[10px] mb-[7px]'>
            <div className="mb-3">{props.repliedText}</div>
          </div>
        )
        : null}

      <div
        className={clsx("flex ${isMeMoreReverse} justify-start items-start", {
          "flex-row-reverse": props.isMe,
          "flex-row": !props.isMe
        })}>
        <div
          className={`flex flex-col flex-wrap justify-start items-start w-fit max-w-[518px] ${props.bgColor} rounded-[5px] p-[10px]`}>
          <div className="mb-3">{props.message}</div>
          <div>{format(props.createdAt, "hh:mm")}</div>
        </div>

        <MoreAction isMe={props.isMe} onClickReply={props.handleReplyMessage} message={props.message} />
      </div>
    </div>
  )
}

type MoreActionProps = {
  isMe: boolean
  message: string
  onClickReply: () => void
}

const MoreAction = ({ isMe, onClickReply, message }: MoreActionProps) => {
  const [toggled, setToggle] = useToggle()

  return (
    <div className="relative" onMouseLeave={() => setToggle(false)}>
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
        className={clsx("absolute top-5 left-2 flex-col bg-white rounded-md justify-start items-start border-[1px] border-primary-light-grey w-[126px] divide-solid divide-primary-white divide-y",
          { "flex": toggled },
          { "hidden": !toggled }
        )}>
        <button className={clsx("w-full text-primary-blue px-[18px] py-[11px] hover:bg-primary-white text-left")}>
          {isMe ? "Edit" : "Share"}
        </button>

        <button className={clsx("w-full px-[18px] py-[11px] hover:bg-primary-white text-left", {
          "text-indicator-red": isMe,
          "text-primary-blue": !isMe,
        })}
          onClick={isMe ? () => { } : () => {
            onClickReply()
            setToggle(false)
          }}
        >
          {isMe ? "Delete" : "Reply"}
        </button>
      </div>
    </div>
  )
}
