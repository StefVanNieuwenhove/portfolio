import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Navbar, Footer } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: {
    default: "Stef Van Nieuwenhove",
    template: "%s | Stef Van Nieuwenhove",
  },
  description: "Stef Van Nieuwenhove's personal portfolio website.",
  keywords: [
    "Stef Van Nieuwenhove",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Stef Van Nieuwenhove" }],
  creator: "Stef Van Nieuwenhove",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
