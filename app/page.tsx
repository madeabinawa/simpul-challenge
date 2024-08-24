import Image from "next/image"
import { Button, FabChat, FabPrimary, FabTask } from "./components/Buttons"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#333333] flex-col items-center justify-center p-24  gap-3">
      <Button text="Send" />
      <Button text="New Task" />
      <FabPrimary />
      <FabChat isActive />
      <FabTask />
    </main>
  )
}
