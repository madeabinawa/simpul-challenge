import { useGetTasks } from "@/app/hooks"
import { Button, DropdownButton } from "../../buttons"
import { TaskItem } from "./task-item"
import { LoadingSpinner } from "../../indicators"
import { useState } from "react"
import { TaskList } from "@/app/types/task-list"
import { dateGenerator } from "@/app/lib"

export const TaskWindowList = () => {
  const tasks = useGetTasks({
    onSuccess(data) {
      setData(data)
    },
  })

  const [data, setData] = useState<TaskList[]>([])

  const handleCreateNewTask = () => {
    setData((prev) => [
      ...prev,
      {
        id: Math.random(),
        title: "",
        completed: false,
        date: "",
        description: "",
        tags: []
      }
    ])
  }

  const handleDelete = (index: number) => {
    setData((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <section className="w-[734px] bg-white fixed bottom-28 right-4 rounded-md ">
      <div className="flex h-[40px] justify-between items-center px-[22px] mt-[19px] mb-[20px]">
        <div className="w-[289px] flex justify-center items-center">
          <DropdownButton />
        </div>
        <Button text="New Task" onClick={handleCreateNewTask} />
      </div>

      <div className="flex-0 h-[70vh] max-h-[70vh] overflow-y-auto px-[29px]">
        {tasks.loading ? (
          <LoadingSpinner type="tasks" />
        ) : (
          data?.map((task, index) => (
            <TaskItem index={index} task={task} key={task.id} onClickDelete={(index) => handleDelete(index)} />
          )))}
      </div>
    </section>
  )
}
