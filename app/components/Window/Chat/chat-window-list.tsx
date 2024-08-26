import { SearchInput } from "../../Inputs"
import { ChatList } from "./chat-list"

export const ChatWindowList = () => {
  return (
    <section className="w-[734px] h-[734px] px-[32px] py-[24px] bg-white fixed bottom-28 right-4 rounded-md">
      <SearchInput />

      <ChatList
        isGroup
        hasNewMessage
        title="109220-Naturalization"
        recentUser="Cameron Phillips"
        recentChat="Please Check this out"
        updatedAt="02/06/2021 10:45"
      />

      <ChatList
        isGroup
        title="Jeanette Moraima Guaman Chamba (Hutto I-589) [Hutto Follow Up -Brief Service]"
        recentUser="Ellen"
        recentChat="I understand your initial concerns and thats very valid, Elizabeth. But you are"
        updatedAt="02/06/2021 10:45"
        isLast
      />

      <ChatList
        isGroup={false}
        title="Jeanette Moraima Guaman Chamba (Hutto I-589) [Hutto Follow Up -Brief Service]"
        recentUser="Ellen"
        recentChat="I understand your initial concerns and thats very valid, Elizabeth. But you are"
        updatedAt="02/06/2021 10:45"
        isLast
      />
    </section>
  )
}
