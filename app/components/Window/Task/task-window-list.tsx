import { Button, DropdownButton } from "../../Buttons"
import { MessageInput } from "../../Inputs/message-input"
import Accordion from "./task-item"

export const TaskWindowList = () => {
  return (
    <section className="w-[734px] h-[734px] bg-white fixed bottom-28 right-4 rounded-md ">
      <div className="flex h-[40px] justify-between items-center px-[22px] mt-[19px] mb-[20px]">
        <div className="w-[289px] flex justify-center items-center">
          <DropdownButton />
        </div>

        <Button text="New Task" />
      </div>

      {/* <div className="h-[570px] max-h-[570px] overflow-y-auto px-[29px]"> */}
      <div className="flex-0 max-h-[570px] overflow-y-auto px-[29px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <>
            <Accordion />
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
