import { cn } from "@/lib/utils"
import { useToggle } from "@mantine/hooks"
import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react"

const tagList = [
  { tag: "Important ASAP", bgColor: "#E5F1FF" },
  { tag: "Offline Meeting", bgColor: "#FDCFA4" },
  { tag: "Virtual Meeting", bgColor: "#F9E9C3" },
  { tag: "ASAP", bgColor: "#AFEBDB" },
  { tag: "Client Related", bgColor: "#CBF1C2" },
  { tag: "Self Task", bgColor: "#CFCEF9" },
  { tag: "Appointments", bgColor: "#F9E0FD" },
  { tag: "Court Related", bgColor: "#9DD0ED" },
]

export const TagsInput = () => {
  const [toggle, setToggle] = useToggle()

  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const hasTags = true ? "/assets/svg/tags.svg" : "/assets/svg/tags-grey.svg"

  const getBgcolor = (tag: string) => tagList.find((item) => item.tag === tag)?.bgColor ?? "#FFFFFF"

  return (
    <div className="flex justify-start items-center bg-[#F9F9F9] min-h-[50px] px-[10px] py-[14px] mt-4 rounded-[5px]" onClick={() => setToggle()}>
      <Image
        priority
        className="me-6"
        src={hasTags}
        alt="clock"
        width={20}
        height={20}
      />

      <div className="flex flex-wrap justify-start items-center gap-x-2 gap-y-2 ">
        {selectedTags.map((tag) => {
          const bgColor = getBgcolor(tag)
          return <SelectedTag key={tag} tag={tag} bgColor={bgColor} />
        })}
      </div>

      <Tags toggle={toggle} setSelectedTags={setSelectedTags} />
    </div>

  )
}

const Tags = ({ toggle, setSelectedTags }: { toggle: boolean; setSelectedTags: Dispatch<SetStateAction<string[]>> }) => {
  const displayTagList = toggle ? "flex" : "hidden"

  const handleAddTag = (tag: string) => setSelectedTags((prev) => {
    if (prev.includes(tag)) {
      return prev.filter((prevTag) => prevTag !== tag)
    }

    return [...prev, tag]
  })



  return (
    <div className={cn("absolute z-[10000] flex-col gap-y-3 bottom-0 w-[277px] py-[14px] px-[16px] bg-white border-[1px] rounded-[5px] border-primary-dark-grey", displayTagList)}>
      {tagList.map((tag) => {
        return (
          <div key={tag.tag} className={cn("text-base font-bold text-primary-dark-grey px-[14px] py-[10px] rounded-[5px]")}
            style={{ backgroundColor: tag.bgColor }}
            onClick={() => handleAddTag(tag.tag)}
          >
            {tag.tag}
          </div>
        )
      })}
    </div>
  )
}


type SelectedTagProps = {
  tag: string
  bgColor: string
}

const SelectedTag = (props: SelectedTagProps) => {
  return (
    <div className={cn("px-3 py-2 text-primary-dark-grey rounded-[5px] text-xs font-bold")}
      style={{ backgroundColor: props.bgColor }}>
      <div>
        {props.tag}
      </div>
    </div>
  )
}
