import Image from "next/image"

type Props = {
  type?: "chats" | "tasks"
}

export const LoadingSpinner = ({ type = 'chats' }: Props) => {
  const textByType = type === "chats" ? "/assets/svg/loading-chats.svg" : "/assets/svg/loading-tasks.svg"

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        className="animate-spin h-[85px] w-[85px]"
        src="/assets/svg/spinner.svg"
        alt="chat-active"
        width={30}
        height={30}
        priority
      />

      <Image
        src={textByType}
        alt="chat-active"
        width={113}
        height={15}
        priority
      />
    </div>
  )
}
