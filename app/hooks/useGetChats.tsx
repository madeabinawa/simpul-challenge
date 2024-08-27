import { useToggle } from "@mantine/hooks"
import axios from "axios"
import { useEffect, useState } from "react"
import { ChatListType } from "../types"
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
  const [data, setData] = useState<ChatListType[]>([])
  const [loading, setLoading] = useToggle()
  const users = useGetUsers()

  useEffect(() => {
    setLoading(true)

    if (users.data && !users.loading) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res: Response) => {
          const data = res.data.slice(0, 5)

          setData(
            data?.map((item) => ({
              id: item.id,
              isGroup: true,
              title: item.title,
              lastUpdate: "",
              user: users.findUser(item.userId)?.name ?? "",
              text: item.body
            }))
          )

          setTimeout(() => setLoading(false), 500)
        })
    }
  }, [users.data, users.loading])

  return {
    data,
    loading
  }
}
