import { useGetChatDetails } from "@/app/hooks"
import { ChatListType } from "@/app/types"
import { ChatDetailType } from "@/app/types/chat-details"
import clsx from "clsx"
import Image from "next/image"
import { Fragment, useState } from "react"
import { Button } from "../../buttons"
import { MessageInput } from "../../inputs/message-input"
import { ChatBubble } from "./chat-bubble"
import { ChatDivider } from "./chat-divider"

type Props = {
  chat: ChatListType
  onClickBack: () => void
}

export const ChatWindowRoom = (props: Props) => {
  const [data, setData] = useState<ChatDetailType[]>([])
  const [message, setMessage] = useState<string>("")
  const [messageReplied, setMessageReplied] = useState<ChatDetailType | null>(null)

  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleSendMessage = () => {
    if (!message.length) return

    setData((prev) => [...prev, {
      bgColor: "bg-chats-light-purple",
      textColor: "text-chats-purple",
      body: message,
      email: "",
      id: Math.random(),
      name: "You",
      postId: Math.random(),
      repliedText: messageReplied?.body
    }])

    if (messageReplied) {
      setMessageReplied(null)
    }

    setMessage("")
  }

  const handleReplyMessage = (chat: ChatDetailType) => setMessageReplied(chat)

  const chatDetail = useGetChatDetails({
    postId: props.chat.id,
    onSuccess: (chats) => setData(chats)
  })

  return (
    <section className="w-[734px] bg-white fixed bottom-28 right-4 rounded-md ">
      <div className="relative h-full">
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

        <div className="h-[70vh] max-h-[70vh] overflow-y-auto px-[29px] pb-24">
          {data?.map((chat, index) => (
            <Fragment key={index}>
              <ChatBubble
                isMe={chat.name.toLowerCase() === "you"}
                textColor={chat.textColor}
                bgColor={chat.bgColor}
                createdAt="02/06/2021 10:45"
                message={chat.body}
                repliedText={chat.repliedText}
                personName={chat.name}
                handleReplyMessage={() => handleReplyMessage(chat)}
              />

              {props.chat.hasNewMessage && index === data.length - 2 && (
                <ChatDivider type="new" />
              )}

            </Fragment>
          ))}
        </div>

        <div className={
          clsx("w-full absolute bottom-0 px-[28px] py-[19px] ", {
            "bg-white": !chatDetail.loading,
            "bg-transparent": chatDetail.loading
          })
        }>
          <div className={
            clsx("flex-row justify-start items-center w-full pb-2 bg-stickers-white px-[10px] mb-[10px] rounded-[5px]", { "flex": chatDetail.loading, "hidden": !chatDetail.loading })
          }>
            <Image
              priority
              className="animate-spin me-[11px] my-[10px]"
              src="/assets/svg/loading-connect-chat.svg"
              alt="loading"
              width={34}
              height={34}
            />
            <span> Please wait while we connect you with one of our team ...</span>
          </div>

          <div className="w-full flex justify-between items-center gap-x-3 bg-white">
            <div className="relative flex flex-1 w-full">
              <div className={clsx("rounded-t-[5px] px-[17px] py-[15px] absolute bottom-[2.4em] w-full border-[1px] border-gray-300 bg-[#f2f2f2]", { "hidden": messageReplied === null })}>
                <div className="w-full flex justify-between items-center ">
                  <span className="font-bold">Replying to {messageReplied?.name}</span>

                  <Image
                    priority
                    src="/assets/svg/close-reply.svg"
                    alt="more-active"
                    width={12}
                    height={12}
                    onClick={() => setMessageReplied(null)}
                  />
                </div>

                <div>
                  {messageReplied?.body}
                </div>
              </div>

              <MessageInput isReplying={messageReplied != null} defaultValue={message} value={message} onChange={handleChangeMessage} />
            </div>
            <Button text="Send" onClick={handleSendMessage} />
          </div>
        </div>
      </div>
    </section >
  )
}// 
