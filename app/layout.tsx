import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import { getLocale, getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar, Footer } from "@/components/navigation"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
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

  authors: [
    {
      name: "Stef Van Nieuwenhove",
    },
  ],

  creator: "Stef Van Nieuwenhove",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
