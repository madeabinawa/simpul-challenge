"use client"

import { ChatListType } from "@/app/types"
import { useToggle } from "@mantine/hooks"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from "react"
import { FabPrimary } from "../buttons"
import { ChatWindowList, ChatWindowRoom } from "../window/chat"
import { TaskWindowList } from "../window/task"
import { FabChatSection } from "./fab-chat-section"
import { FabTaskSection } from "./fab-task-section"

type FabContextType = {
  displayButtons: boolean
  selectedButton: "task" | "chat" | null
  activeChatRoom: ChatListType | null
  setDisplayButtons: () => void
  setSelectedButton: Dispatch<SetStateAction<"task" | "chat" | null>>
  setActiveChatRoom: Dispatch<SetStateAction<ChatListType | null>>
}

export const FabContext = createContext<FabContextType>({
  displayButtons: false,
  selectedButton: null,
  activeChatRoom: null,
  setDisplayButtons: () => {},
  setActiveChatRoom: () => {},
  setSelectedButton: () => {}
})

export const FabPrimarySection = () => {
  const [displayButtons, setDisplayButtons] = useToggle()
  const [selectedButton, setSelectedButton] = useState<"task" | "chat" | null>(
    null
  )
  const [activeChatRoom, setActiveChatRoom] = useState<ChatListType | null>(
    null
  )

  const onClickFabChat = () => setSelectedButton("chat")

  const onClickFabTask = () => setSelectedButton("task")

  const onClickFabPrimary = () => setDisplayButtons()

  const flexReverse = selectedButton === "chat" ? "flex-row-reverse" : ""

  return (
    <FabContext.Provider
      value={{
        selectedButton,
        displayButtons,
        activeChatRoom,
        setDisplayButtons,
        setSelectedButton,
        setActiveChatRoom
      }}>
      <DisplayWindow />

      <section
        className={`fixed bottom-4 right-4 flex justify-end items-end gap-3 ${flexReverse}`}>
        <FabChatSection
          displayButton={displayButtons}
          isActive={selectedButton === "chat"}
          onClick={onClickFabChat}
          onClose={onClickFabPrimary}
        />

        <FabTaskSection
          displayButton={displayButtons}
          isActive={selectedButton === "task"}
          onClick={onClickFabTask}
          onClose={onClickFabPrimary}
        />

        <FabPrimary
          isActive={selectedButton === null}
          onClick={onClickFabPrimary}
        />
      </section>
    </FabContext.Provider>
  )
}

export const DisplayWindow = () => {
  const fabContext = useContext(FabContext)

  const onClickBack = () => {
    fabContext.setSelectedButton("chat")
    fabContext.setActiveChatRoom(null)
  }

  if (
    fabContext.selectedButton === "chat" &&
    fabContext.activeChatRoom !== null
  ) {
    return (
      <ChatWindowRoom
        chat={fabContext.activeChatRoom}
        onClickBack={onClickBack}
      />
    )
  }

  if (fabContext.selectedButton === "chat") {
    return <ChatWindowList />
  }

  if (fabContext.selectedButton === "task") {
    return <TaskWindowList />
  }

  return null
}
