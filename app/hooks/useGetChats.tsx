import { useToggle } from "@mantine/hooks"
import axios from "axios"
import { useEffect, useState } from "react"
import { ChatList } from "../types"
import { useGetUsers } from "./useGetUsers"

type Response = {
  data: {
    userId: number
    id: number
    title: string
    body: string
  }[]
}

export const useGetChats = () => {
  const [data, setData] = useState<ChatList[]>([])
  const [loading, setLoading] = useToggle()
  const users = useGetUsers()

  useEffect(() => {
    setLoading(true)

    if (users.data && !users.loading) {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res: Response) => {
        setData(res.data?.map((item) => ({
          isGroup: true,
          title: item.title,
          lastUpdate: "",
          user: users.findUser(item.userId)?.name ?? "",
          text: item.body
        })))
        setLoading(false)
      })
    }
  }, [users.data, users.loading])

  return {
    data,
    loading
  }
}