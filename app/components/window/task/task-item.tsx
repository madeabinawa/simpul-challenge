"use client"

import { dateFormat, tasksDeadline } from "@/app/lib"
import { TaskList } from "@/app/types/task-list"
import { DateValue, parseDate } from "@internationalized/date"
import { useToggle } from "@mantine/hooks"
import clsx from "clsx"
import { format, formatDate } from "date-fns"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Checkbox, DateInput, MessageInput, TagsInput, TaskDescriptionInput } from "../../inputs"

type Props = {
  index: number
  task: TaskList
  onClickDelete: (index: number) => void
}

export const TaskItem = ({ index, task, onClickDelete }: Props) => {
  const today = formatDate(new Date(), "yyyy-MM-dd")

  const [date, setDate] = useState<DateValue | null>(task.date ? parseDate(format(task.date, 'yyyy-MM-dd')) : parseDate(today))

  const [description, setDescription] = useState<string>(task.description ?? "")

  const [active, setActive] = useToggle()

  const [checked, setChecked] = useToggle()

  const contentRefs = useRef<HTMLDivElement | undefined>()

  const toggleAccordion = () => {
    setActive()
  }

  useEffect(() => {
    setChecked(task.completed)
  }, [task.completed])

  return (
    <div className="w-full">
      <div className="border-b-[1px] border-primary-light-grey">
        <div className="w-full text-left py-5 font-semibold text-lg flex justify-between items-center cursor-pointer">
          <section className="w-full flex justify-start items-center">
            <Checkbox
              className="me-[22px]"
              value={checked}
              onClick={setChecked}
            />

            {task.title ?
              <div
                className={clsx("capitalize flex justify-start items-start text-base w-full max-w-[335px] font-bold",
                  {
                    "text-primary-dark-grey": !checked,
                    "text-primary-light-grey": checked,
                    "line-through": checked
                  },
                )}
                onClick={toggleAccordion}>
                {task.title}
              </div>
              :
              <div className="max-w-[335px]">
                <MessageInput placeholder="Type Task Title" />
              </div>
            }
          </section>

          <section
            className="flex justify-end -center"
            onClick={toggleAccordion}>
            <div
              className={clsx("me-5 text-indicator-red font-thin text-nowrap", {
                "invisible": checked,
                "visible": !checked
              })}>
              {tasksDeadline(date?.toString() ?? "")}
            </div>

            <div className="me-[10px] text-primary-dark-grey font-thin">
              {dateFormat(date?.toString() ?? "")}
            </div>

            <Image
              priority
              className={clsx("me-[15px] ${activeRotate} transform transition-transform duration-300", {
                "rotate-180": active,
                "rotate-0": !active
              })}
              src="/assets/svg/expand-more.svg"
              alt="expand-more"
              width={20}
              height={20}
            />
          </section>

          <MoreAction index={index} onClickDelete={onClickDelete} />
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
            <DateInput value={date} onChange={(value) => setDate(value)} />
            <TaskDescriptionInput value={description} onChange={(e) => setDescription(e.target.value)} />
            <TagsInput defaultTags={task.tags ?? []} />
          </div>
        </div>
      </div>
    </div>
  )
}

const MoreAction = ({ index, onClickDelete }: { index: number, onClickDelete: (index: number) => void }) => {
  const [actionToggle, setActionToggle] = useToggle()
  const toggledDisplay = actionToggle ? "flex" : "hidden"

  return (
    <div className="relative">
      <button
        className="-mt-1"
        onClick={(e) => {
          setActionToggle()
        }}>
        <Image
          src="/assets/svg/more-disable.svg"
          alt="more-active"
          width={20}
          height={20}
          priority
        />
      </button>

      <div
        className={`z-10 absolute top-6 right-0 ${toggledDisplay} flex-col bg-white rounded-md justify-start items-start border-[1px] border-primary-light-grey w-[126px] divide-solid divide-primary-white divide-y`}>
        <button
          className="w-full text-indicator-red px-[18px] py-[11px] hover:bg-primary-white text-left"
          onClick={(e) => {
            e.stopPropagation()
            onClickDelete(index)
          }}>
          Delete
        </button>
      </div>
    </div>
  )
}
