import "./globals.css"
import { Josefin_Sans } from "next/font/google"
import { motion } from "framer-motion";

import { cn } from "@/lib/utils"
import { AuroraBackground } from "@/components/ui/aurora-background";

const font = Josefin_Sans({ weight: ['400'], style: "normal", subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased dark",
          font.className
        )}
      >
        {children}
      </body>
    </html >
  )
}
