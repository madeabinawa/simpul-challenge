import Image from "next/image"
import { Fragment } from "react"
import { Button } from "../../Buttons"
import { MessageInput } from "../../Inputs/message-input"
import { ChatBubble } from "./chat-bubble"
import { ChatDivider } from "./chat-divider"

type Props = {
  title: string
}

export const ChatWindowRoom = (props: Props) => {
  return (
    <section className="w-[734px] h-[734px] bg-white fixed bottom-28 right-4 rounded-md ">
      <div className="flex justify-between items-center px-[32px] py-[18px] border-b-[1px] border-primary-white ">
        <div className="flex justify-start items-center">
          <Image
            priority
            src="/assets/svg/arrow-left-black.svg"
            alt="back"
            width={24}
            height={24}
          />
          <div className="ps-[14px] flex flex-col justify-start items-start ">
            <div className="font-bold text-base text-primary-blue">
              {props.title}
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
        {Array.from({ length: 10 }).map((_, index) => (
          <Fragment key={index}>
            <ChatBubble
              isMe={true}
              textColor="text-chats-purple"
              bgColor="bg-chats-light-purple"
              createdAt="02/06/2021 10:45"
              message="Please Check this out"
              personName="Cameron Phillips"
            />

            <ChatDivider />

            <ChatBubble
              isMe={false}
              textColor="text-chats-orange"
              bgColor="bg-chats-light-orange"
              createdAt="02/06/2021 10:45"
              message="Please Check this out"
              personName="Cameron Phillips"
            />
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
