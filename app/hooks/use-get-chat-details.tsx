import { useToggle } from "@mantine/hooks"
import axios from "axios"
import { useEffect, useState } from "react"
import { ChatDetailType } from "../types/chat-details"

type UseGetChatDetails = {
  postId: number
  onSuccess?: (data: ChatDetailType[]) => void
}

type Response = {
  data: ChatDetailType[]
}

export const useGetChatDetails = ({ postId, onSuccess }: UseGetChatDetails) => {
  const [data, setData] = useState<ChatDetailType[]>([])
  const [loading, setLoading] = useToggle()

  useEffect(() => {
    setLoading(true)

    if (postId) {
      axios
        .get("https://jsonplaceholder.typicode.com/comments", {
          params: { postId }
        })
        .then((res: Response) => {
          const personUnique = Array.from(
            new Set(res?.data?.map((item) => item.email.split("@")[0]))
          ).splice(0, 3)

          const colors = [
            {
              bgColor: "bg-chats-light-purple",
              textColor: "text-chats-purple"
            },
            {
              bgColor: "bg-chats-light-orange",
              textColor: "text-chats-orange"
            },
            { bgColor: "bg-chats-light-green", textColor: "text-chats-green" }
          ]

          const resData = res?.data
            ?.filter((chat) => personUnique.includes(chat.email.split("@")[0]))
            ?.map((item) => {
              const findUserIndex = personUnique.findIndex(
                (u) => u === item.email.split("@")[0]
              )

              const bgColor = colors[findUserIndex].bgColor

              const textColor = colors[findUserIndex].textColor

              return {
                postId: item.postId,
                id: item.id,
                body: item.body,
                email: findUserIndex ? item.email : "",
                name: findUserIndex ? item.email.split("@")[0] : "You",
                bgColor,
                textColor
              }
            })

          setData(resData)
          onSuccess?.(resData)

          setTimeout(() => {
            setLoading(false)
          }, 1000)
        })
    }
  }, [postId])

  return {
    data,
    loading
  }
}
