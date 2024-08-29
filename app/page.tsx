import { FabPrimarySection } from "@/app/components/sections"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#333333] flex-col items-start justify-start gap-3">
      <div className="bg-primary-dark-grey w-full h-[58px] py-[19px] px-[26px]">
        <Image
          priority
          src="/assets/svg/search-light.svg"
          alt="chat-active"
          width={16}
          height={16}
        />
      </div>
      <FabPrimarySection />
    </main>
  )
}
