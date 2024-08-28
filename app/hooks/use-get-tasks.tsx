import { useToggle } from "@mantine/hooks"
import axios from "axios"
import { useEffect, useState } from "react"
import { dateGenerator, generateTag } from "../lib"
import { TaskList } from "../types/task-list"
import { useGetDescriptions } from "./use-get-descriptions"

type Props = {
  onSuccess?: (data: TaskList[]) => void
}

type Response = {
  data: {
    id: number
    title: string
    completed: boolean
  }[]
}

export const useGetTasks = ({ onSuccess }: Props) => {
  const [data, setData] = useState<TaskList[]>([])
  const [loading, setLoading] = useToggle()
  const descriptions = useGetDescriptions()

  useEffect(() => {
    setLoading(true)

    if (!descriptions.loading && descriptions.data.length) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res: Response) => {
          const resData = res.data.slice(0, 9)

          const data = resData?.map((item, index) => ({
            completed: item.completed,
            date: index > 2 ? dateGenerator(index + 1) : dateGenerator(),
            id: item.id,
            title: item.title,
            description: descriptions.data[index] ?? "",
            tags: [generateTag().tag, generateTag().tag]
          }))

          setData(data)

          onSuccess?.(data)

          setTimeout(() => setLoading(false), 500)
        })


    }
  }, [descriptions.loading, descriptions.data.length])

  return {
    data,
    loading
  }
}
