import clsx from "clsx"
import { forwardRef, InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement> & { isReplying?: boolean }

export const MessageInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      type="text"
      placeholder={props?.placeholder ?? "Type a new message"}
      className={
        clsx("w-full flex-1 h-10 border border-gray-300 rounded-b-[5px] p-[10px] focus:outline-none text-black font-light",
          {
            "rounder-t-none": props.isReplying,
            "rounded-t-[5px]": !props.isReplying
          }
        )
      }
    />
  )
})

MessageInput.displayName = "MessageInput"

