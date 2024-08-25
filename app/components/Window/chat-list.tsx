import { truncateText } from "@/app/utilities"
import Image from "next/image"

type Props = {
  hasNewMessage?: boolean
  isGroup: boolean
  title: string
  updatedAt: string
  recentUser: string
  recentChat: string
  isLast?: boolean
}

export const ChatList = (props: Props) => {
  const isLastBorder = props.isLast ? "" : ""

  return (
    <div
      className={`flex justify-start items-start ${isLastBorder} py-[22px]  border-b-2 border-b-primary-white`}>
      <div className="mt-1">
        {props.isGroup ? (
          <Image
            src="/assets/svg/group-chat.svg"
            alt="chat-active"
            width={51}
            height={34}
            priority
          />
        ) : (
          <InitialAvatar title={props.title} />
        )}
      </div>

      <div className="flex flex-col justify-start items-start ps-[17px] w-full">
        <div className="flex justify-between items-start mb-[8px]">
          <div className="text-primary-blue font-semibold max-w-[415px]">
            {props.title}
          </div>
          <div className="text-primary-dark-grey font-light ps-[16px] text-nowrap">
            {props.updatedAt}
          </div>
        </div>

        <div className="text-primary-dark-grey font-semibold mb-[4px]">
          {props.recentUser} :
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="text-primary-dark-grey font-light">
            {truncateText(props.recentChat)}
          </div>

          {props.hasNewMessage ? (
            <div className="w-[10px] h-[10px] bg-[#EB5757] rounded-full" />
          ) : null}
        </div>
      </div>
    </div>
  )
}

const InitialAvatar = ({ title }: { title: string }) => {
  return (
    <div className="w-[51px] flex justify-center items-start">
      <div
        className={`w-[34px] h-[34px] bg-primary-blue rounded-full flex justify-center items-center text-white`}>
        {title[0].toUpperCase()}
      </div>
    </div>
  )
}
