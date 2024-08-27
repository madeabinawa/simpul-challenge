import { useGetChats } from "@/app/hooks"
import { useContext } from "react"
import { LoadingSpinner } from "../../indicators"
import { SearchInput } from "../../inputs"
import { FabContext } from "../../sections"
import { ChatList } from "./chat-list"
import { ChatListType } from "@/app/types"

export const ChatWindowList = () => {
  const chats = useGetChats()

  const fabContext = useContext(FabContext)

  const onClickChat = (chat: ChatListType) => {
    fabContext.setActiveChatRoom(chat)
  }

  return (
    <section className="w-[734px] px-[32px] py-[24px] bg-white fixed bottom-28 right-4 rounded-md">
      <div className="mb-[20px]">
        <SearchInput />
      </div>

      <div className="flex-0 h-[70vh] max-h-[70vh] overflow-y-auto px-[29px]">
        {chats.loading ? (
          <LoadingSpinner />
        ) : (
          chats?.data?.map((chat, index) => (
            <ChatList
              key={chat.title}
              chat={chat}
              hasNewMessage={index === 1}
              onClick={onClickChat}
            />
          ))
        )}
      </div>
    </section>
  )
}
