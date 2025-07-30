import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StarNet WiFi - Vouchers za Intaneti za Haraka",
  description:
    "Pata vouchers za WiFi kwa bei nafuu. Masaa 8 - TZS 500, Siku nzima - TZS 1,000, Wiki nzima - TZS 5,000. Piga +255 618 903 516",
  keywords: "wifi, voucher, tanzania, starnet, intaneti, free wifi",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sw">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
