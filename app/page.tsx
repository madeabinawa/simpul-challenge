import { FabPrimarySection } from "@/app/components/sections"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quicks | Simpul Frontend Challenge",
  description: "Simpul Frontend Challenge",
}

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#333333] flex-col items-center justify-center p-24  gap-3">
      <FabPrimarySection />
    </main>
  )
}
