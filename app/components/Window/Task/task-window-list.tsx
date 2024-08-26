import { Button, DropdownButton } from "../../Buttons"
import { MessageInput } from "../../Inputs/message-input"
import { TaskItem } from "./task-item"

export const TaskWindowList = () => {
  return (
    <section className="w-[734px] bg-white fixed bottom-28 right-4 rounded-md ">
      <div className="flex h-[40px] justify-between items-center px-[22px] mt-[19px] mb-[20px]">
        <div className="w-[289px] flex justify-center items-center">
          <DropdownButton />
        </div>

        <Button text="New Task" />
      </div>

      <div className="flex-0 max-h-[60vh] overflow-y-auto px-[29px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <>
            <TaskItem />
          </>
        ))}
      </div>

      <div className="flex-1 flex flex-row justify-between items-center px-[32px] gap-x-3 py-[19px]">
        <MessageInput />
        <Button text="Send" />
      </div>
    </section>
  )
}
