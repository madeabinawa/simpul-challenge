import { NextUIProvider } from "@nextui-org/system"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"]
})

export const metadata: Metadata = {
  title: "Quicks | Simpul Frontend Challenge",
  description: "Simpul Frontend Challenge"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <NextUIProvider locale="en-GB">{children}</NextUIProvider>
      </body>
    </html>
  )
}
