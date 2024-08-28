import clsx from "clsx"

type Props = {
  type: "new" | "date"
}

export const ChatDivider = ({ type }: Props) => {
  return (
    <div className="flex items-center justify-center w-full my-4">
      <div className={clsx("flex-grow border-t ", {
        "border-indicator-red": type === "new",
        "border-gray-300": type === "date"
      })}></div>

      <span className={clsx("px-3  text-sm", {
        "text-gray-500": type === "date",
        "text-indicator-red": type === "new"
      })}>New Message</span>

      <div className={
        clsx("flex-grow border-t ", {
          "border-indicator-red": type === "new",
          "border-gray-300": type === "date"
        })
      }></div>
    </div>
  )
}
