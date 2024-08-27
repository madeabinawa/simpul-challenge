import Image from "next/image"

type Props = {
  value?: boolean
  className?: string
  onClick?: () => void
}

export const Checkbox = ({ value, className, onClick }: Props) => {
  const path = value
    ? "/assets/svg/checkbox-check.svg"
    : "/assets/svg/checkbox-uncheck.svg"

  return (
    <div className={className} onClick={onClick}>
      <Image priority src={path} alt="checkbox" width={20} height={20} />
    </div>
  )
}
