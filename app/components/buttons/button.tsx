type Props = {
  text: string
  onClick?: () => void
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <button
      className="h-10 p-2 px-4 gap-2 rounded-md bg-primary-blue text-white"
      onClick={onClick}>
      {text}
    </button>
  )
}
