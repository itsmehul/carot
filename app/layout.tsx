import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { motion } from "framer-motion";

import { cn } from "@/lib/utils"
import { AuroraBackground } from "@/components/ui/aurora-background";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html >
  )
}
