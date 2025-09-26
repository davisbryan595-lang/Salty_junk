import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Salty Dawgs Junk Removal | Ormond Beach & Volusia County",
  description:
    "We Bite Down On Clutter. Professional junk removal, home/garage clean outs, yard debris, and small demo in Ormond Beach & Volusia County. Call now or get a free quote.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
