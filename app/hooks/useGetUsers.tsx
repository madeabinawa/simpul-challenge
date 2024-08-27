import { useToggle } from "@mantine/hooks"
import axios from "axios"
import { useEffect, useState } from "react"
import { Users } from "../types/Users"

type Response = {
  data: Users[]
}

export const useGetUsers = () => {
  const [data, setData] = useState<Users[]>([])
  const [loading, setLoading] = useToggle()

  const findUser = (id: number) => {
    return data.find((user) => user.id === id)
  }

  useEffect(() => {
    setLoading(true)

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res: Response) => {
        setData(res.data ?? [])
        setLoading(false)
      })
  }, [])

  return {
    data,
    loading,
    findUser
  }
}
