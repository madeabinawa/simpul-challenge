import { useToggle } from "@mantine/hooks"
import Image from "next/image"
import { useRef, useState } from "react"
import { Checkbox } from "../../Inputs/checkbox"
import { DatePicker } from "@nextui-org/date-picker"

export const TaskItem = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const [active, setActive] = useToggle()

  const [checked, setChecked] = useToggle()

  const contentRefs = useRef<HTMLDivElement | undefined>()

  const activeRotate = active ? "rotate-180" : "rotate-0"

  const checkedTextStrike = checked ? "line-through" : ""

  const checkedDisplayDayLeft = checked ? "hidden" : "block"

  const checkedTextColor = checked
    ? "text-primary-light-grey"
    : "text-primary-dark-grey"

  const toggleAccordion = () => {
    setActive()
  }

  return (
    <div className="w-full">
      <div className="border-b-[1px] border-primary-light-grey">
        <div className="w-full text-left py-5 font-semibold text-lg flex justify-between items-center cursor-pointer">
          <section className="flex justify-start items-center">
            <Checkbox
              className="me-[22px]"
              value={checked}
              onClick={setChecked}
            />

            <div
              className={`flex justify-start items-start text-base max-w-[335px] font-bold  ${checkedTextColor} ${checkedTextStrike}`}
              onClick={toggleAccordion}>
              Close off Case #012920 - Rodrigues, Amiguel
            </div>
          </section>

          <section
            className="flex justify-start items-center"
            onClick={toggleAccordion}>
            <div
              className={`me-5 text-indicator-red font-light ${checkedDisplayDayLeft}`}>
              10 Days Left
            </div>

            <div className="me-[10px] text-primary-dark-grey font-light">
              12/06/2021
            </div>

            <Image
              priority
              className={`me-[15px] ${activeRotate} transform transition-transform duration-300`}
              src="/assets/svg/expand-more.svg"
              alt="expand-more"
              width={20}
              height={20}
            />
          </section>

          <MoreAction />
        </div>

        <div
          ref={(el) => {
            if (el) contentRefs.current = el
          }}
          style={{
            height: active ? contentRefs.current?.scrollHeight : 0,
            transition: "height 300ms ease, opacity 300ms ease",
            opacity: active ? 1 : 0,
            overflow: "hidden"
          }}>
          <div className="px-6 py-4 bg-white">
            <DatePicker label="Birth date" className="max-w-[284px]" />

            <p className="text-gray-700">Content for accordion item 1.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const MoreAction = () => {
  const [actionToggle, setActionToggle] = useToggle()
  const toggledDisplay = actionToggle ? "flex" : "hidden"

  return (
    <div className="relative">
      <button
        className="-mt-1 px-[7px]"
        onClick={(e) => {
          setActionToggle()
        }}>
        <Image
          src="/assets/svg/more-disable.svg"
          alt="more-active"
          width={16}
          height={16}
          priority
        />
      </button>

      <div
        className={`z-10 absolute top-6 right-0 ${toggledDisplay} flex-col bg-white rounded-md justify-start items-start border-[1px] border-primary-light-grey w-[126px] divide-solid divide-primary-white divide-y`}>
        <button
          className="w-full text-indicator-red px-[18px] py-[11px] hover:bg-primary-white text-left"
          onClick={(e) => {
            e.stopPropagation()
            console.log("test")
          }}>
          Delete
        </button>
      </div>
    </div>
  )
}
