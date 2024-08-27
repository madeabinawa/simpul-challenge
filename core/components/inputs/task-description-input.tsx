import Image from "next/image"
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react"

type Props = Partial<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>>

export const TaskDescriptionInput = (props: Props) => {
  const hasValueDescription = props.value ? "/assets/svg/edit-pencil.svg" : "/assets/svg/edit-pencil-grey.svg"

  return (
    <div className="flex justify-start items-start mt-[11px]" >
      <Image
        priority
        className="me-[18px]"
        src={hasValueDescription}
        alt="clock"
        width={18}
        height={18}
      />

      <textarea
        placeholder="Add a description"
        className="w-full border-[1px] border-primary-light-grey rounded-[4px] p-[11px]"
        rows={2}
        {...props}
      />

    </div>

  )

}