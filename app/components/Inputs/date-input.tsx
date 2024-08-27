"use client"

import type { DatePickerProps } from "@nextui-org/date-picker"
import { DatePicker } from "@nextui-org/date-picker"
import Image from "next/image"
import { useRef } from "react"


export const DateInput = (props: DatePickerProps) => {

  const dateRef = useRef(null)

  const hasValueClock = props.value ? "/assets/svg/clock.svg" : "/assets/svg/clock-grey.svg"

  return (
    <div className="flex justify-start items-center" >
      <Image
        className="me-[18px]"
        src={hasValueClock}
        alt="clock"
        width={20}
        height={20}
        priority
      />

      <DatePicker
        ref={dateRef}
        radius="none"
        className="max-w-[284px]"
        selectorIcon={
          <Image
            src="/assets/svg/calendar.svg"
            alt="calendar"
            width={16}
            height={16}
            priority
          />
        }
        dateInputClassNames={{
          inputWrapper: 'bg-white hover:bg-white border-[1px] border-primary-light-grey rounded-[5px]',
        }}
        popoverProps={{
          placement: 'bottom',
          crossOffset: 235,
        }}
        {...props}
      />
    </div>
  )

}