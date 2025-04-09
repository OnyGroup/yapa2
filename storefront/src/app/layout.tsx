import { Inter } from "next/font/google"
import "./globals.css"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import { DraftModeNotification } from "@/ui/components/DraftModeNotification"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Snowtech Electronics Ltd",
  description: "Snowtech Electronics Ltd. We are a leading electronics retailer in Kenya.",
  metadataBase: process.env.NEXT_PUBLIC_STOREFRONT_URL ? new URL(process.env.NEXT_PUBLIC_STOREFRONT_URL) : undefined,
}

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="min-h-dvh">
      <body className={`${inter.className} min-h-dvh`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <DraftModeNotification />
        </ThemeProvider>
      </body>
    </html>
  )
}
