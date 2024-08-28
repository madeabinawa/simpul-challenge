import { useGetChats } from "@/app/hooks"
import { ChatListType } from "@/app/types"
import { useContext, useState } from "react"
import { LoadingSpinner } from "../../indicators"
import { SearchInput } from "../../inputs"
import { FabContext } from "../../sections"
import { ChatList } from "./chat-list"

export const ChatWindowList = () => {
  const [search, setSearch] = useState<string>("")

  const chats = useGetChats()

  const fabContext = useContext(FabContext)

  const onClickChat = (chat: ChatListType) => {
    fabContext.setActiveChatRoom(chat)
  }

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const filteredChats = chats?.data?.filter((chat) => {
    return chat.title.toLowerCase().includes(search.toLowerCase())
  })

  const data = search.length ? filteredChats : chats?.data

  return (
    <section className="w-[734px] px-[32px] py-[24px] bg-white fixed bottom-28 right-4 rounded-md">
      <div className="mb-[20px]">
        <SearchInput onChange={handleChangeSearch} />
      </div>

      <div className="flex-0 h-[70vh] max-h-[70vh] overflow-y-auto px-[29px]">
        {chats.loading ? (
          <LoadingSpinner />
        ) : (
          data?.map((chat) => (
            <ChatList
              key={chat.title}
              chat={chat}
              hasNewMessage={chat.hasNewMessage}
              onClick={onClickChat}
            />
          ))
        )}
      </div>
    </section>
  )
}
