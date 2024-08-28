
import { useToggle } from "@mantine/hooks"
import axios from "axios"
import { useEffect, useState } from "react"

type Response = {
  data: {
    setup: string
    punchline: string
  }[]
}

export const useGetDescriptions = () => {
  const [data, setData] = useState<string[]>([])
  const [loading, setLoading] = useToggle()

  useEffect(() => {
    setLoading(true)

    axios
      .get("https://official-joke-api.appspot.com/jokes/ten")
      .then((res: Response) => {

        setData(
          res?.data?.map((item) => `${item.setup} ${item.punchline}`)
        )

        setLoading(false)
      })
  }, [])

  return {
    data,
    loading
  }
}
