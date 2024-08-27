import Image from "next/image"

export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        className="animate-spin h-32 w-32"
        src="/assets/svg/spinner.svg"
        alt="chat-active"
        width={30}
        height={30}
        priority
      />

      <Image
        src="/assets/svg/loading-chats.svg"
        alt="chat-active"
        width={113}
        height={15}
        priority
      />
    </div>
  )
}
