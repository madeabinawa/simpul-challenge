"use client"

import { useToggle } from "@mantine/hooks"
import { createContext, useState } from "react"
import { FabPrimary } from "../buttons"
import { ChatWindowList } from "../window/chat"
import { TaskWindowList } from "../window/task"
import { FabChatSection } from "./fab-chat-section"
import { FabTaskSection } from "./fab-task-section"

type FabContextType = {
  displayButtons: boolean
  setDisplayButtons: () => void
  selectedButton: "task" | "chat" | null
}

export const FabContext = createContext<FabContextType>({
  displayButtons: false,
  setDisplayButtons: () => { },
  selectedButton: null
})

export const FabPrimarySection = () => {
  const [displayButtons, setDisplayButtons] = useToggle()
  const [selectedButton, setSelectedButton] = useState<"task" | "chat" | null>(
    null
  )

  const onClickFabChat = () => setSelectedButton("chat")

  const onClickFabTask = () => setSelectedButton("task")

  const onClickFabPrimary = () => setDisplayButtons()

  return (
    <FabContext.Provider
      value={{ selectedButton, displayButtons, setDisplayButtons }}>
      {selectedButton === "chat" ? (
        <ChatWindowList />
      ) : (
        // <ChatWindowRoom title="Jeanette Moraima Guaman Chamba (Hutto I-589) [Hutto Follow Up -Brief Service]" />
        <TaskWindowList />
      )}

      <section className="fixed bottom-4 right-4 flex justify-end items-end gap-3">
        <FabChatSection
          displayButton={displayButtons}
          isActive={selectedButton === "chat"}
          onClick={onClickFabChat}
        />

        <FabTaskSection
          displayButton={displayButtons}
          isActive={selectedButton === "task"}
          onClick={onClickFabTask}
        />

        <FabPrimary onClick={onClickFabPrimary} />
      </section>
    </FabContext.Provider>
  )
}
