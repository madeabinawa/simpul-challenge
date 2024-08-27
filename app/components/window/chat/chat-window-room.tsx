import { useGetChatDetails } from "@/app/hooks"
import { ChatListType } from "@/app/types"
import { ChatDetailType } from "@/app/types/ChatDetails"
import Image from "next/image"
import { Fragment, useState } from "react"
import { Button } from "../../buttons"
import { MessageInput } from "../../inputs/message-input"
import { ChatBubble } from "./chat-bubble"

type Props = {
  chat: ChatListType
  onClickBack: () => void
}

export const ChatWindowRoom = (props: Props) => {
  const [data, setData] = useState<ChatDetailType[]>([])

  useGetChatDetails({
    postId: props.chat.id,
    onSuccess: (chats) => setData(chats)
  })

  return (
    <section className="w-[734px] h-[734px] bg-white fixed bottom-28 right-4 rounded-md ">
      <div className="flex justify-between items-center px-[32px] py-[18px] border-b-[1px] border-primary-white ">
        <div className="flex justify-start items-center">
          <Image
            priority
            className="hover:cursor-pointer"
            src="/assets/svg/arrow-left-black.svg"
            alt="back"
            width={24}
            height={24}
            onClick={props.onClickBack}
          />
          <div className="ps-[14px] flex flex-col justify-start items-start ">
            <div className="font-bold text-base text-primary-blue capitalize">
              {props.chat.title}
            </div>
            <div className="text-sm">3 Participants</div>
          </div>
        </div>

        <Image
          priority
          src="/assets/svg/close-black.svg"
          alt="back"
          width={14}
          height={14}
        />
      </div>

      <div className="h-[570px] max-h-[60vh] overflow-y-auto px-[29px]">
        {data?.map((chat, index) => (
          <Fragment key={index}>
            <ChatBubble
              isMe={chat.name.toLowerCase() === "you"}
              textColor={chat.textColor}
              bgColor={chat.bgColor}
              createdAt="02/06/2021 10:45"
              message={chat.body}
              personName={chat.name}
            />

            {/* <ChatDivider /> */}
          </Fragment>
        ))}
      </div>

      <div className="flex justify-between items-center px-[32px] gap-x-3 py-[19px]">
        <MessageInput />
        <Button text="Send" />
      </div>
    </section>
  )
}
