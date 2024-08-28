import { useToggle } from "@mantine/hooks"
import Image from "next/image"
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react"

type Props = Partial<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>>

export const TaskDescriptionInput = (props: Props) => {
  const [edit, setEdit] = useToggle()

  const hasValueDescription = props.value ? "/assets/svg/edit-pencil.svg" : "/assets/svg/edit-pencil-grey.svg"

  return (
    <div className="flex justify-start items-start mt-[11px]" >
      <Image
        priority
        className="me-[18px] hover:cursor-pointer"
        src={hasValueDescription}
        alt="clock"
        width={18}
        height={18}
        onClick={() => setEdit()}
      />

      {edit ?
        <textarea
          placeholder="Add a description"
          className="w-full border-[1px] border-primary-light-grey rounded-[4px] p-[11px]"
          rows={2}
          {...props}
        />
        :
        <div>{props.value ? props.value : "No description"}</div>
      }
    </div>
  )
}