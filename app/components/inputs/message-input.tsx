import { forwardRef, InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>

export const MessageInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      type="text"
      placeholder={props?.placeholder ?? "Type a new message"}
      className="w-full flex-1 h-10 border border-gray-300 rounded-[5px] p-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-light"
    />
  )
})

MessageInput.displayName = "MessageInput"

