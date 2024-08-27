import { Button, DropdownButton } from "../../buttons"
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

      <div className="flex-0 max-h-[70vh] overflow-y-auto px-[29px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <TaskItem key={index} />
        ))}
      </div>
    </section>
  )
}
