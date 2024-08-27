import { useGetChats } from "@/app/hooks"
import { SearchInput } from "../../inputs"
import { ChatList } from "./chat-list"
import { LoadingSpinner } from "../../indicators"

export const ChatWindowList = () => {
  const chats = useGetChats()

  return (
    <section className="w-[734px] px-[32px] py-[24px] bg-white fixed bottom-28 right-4 rounded-md">

      <div className="mb-[20px]">
        <SearchInput />
      </div>

      <div className="flex-0 max-h-[70vh] overflow-y-auto px-[29px]">

        {chats.loading ? <LoadingSpinner /> : chats?.data?.map((chat, index) => (
          <ChatList
            hasNewMessage={index === 1}
            key={chat.title}
            isGroup={chat.isGroup}
            title={chat.title}
            recentUser={chat.user}
            recentChat={chat.text}
            updatedAt={chat.lastUpdate}
          />
        ))}
      </div>
    </section>
  )
}
