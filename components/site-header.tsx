"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]
  return (
    <header className="sticky top-0 z-50 border-b bg-background/40 supports-[backdrop-filter]:bg-background/25 backdrop-blur-xl shadow-md">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/saltylogo.png"
            alt="Salty Dawgs Junk Removal logo"
            width={44}
            height={44}
            className="rounded"
            priority
          />
          <span className="font-semibold tracking-tight text-pretty">Salty Dawgs</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="secondary" className="shadow-sm">
            <a href="tel:+13863310402" aria-label="Call now">
              Call Now
            </a>
          </Button>
          <Button asChild className="shadow-md">
            <a href="#contact" aria-label="Get a free quote">
              Get Free Quote
            </a>
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Open menu</span>
          <div className={cn("h-4 w-4 relative")}>
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-0.5 bg-foreground transition",
                open && "translate-y-1.5 rotate-45",
              )}
            ></span>
            <span
              className={cn("absolute inset-x-0 top-1.5 h-0.5 bg-foreground transition", open && "opacity-0")}
            ></span>
            <span
              className={cn(
                "absolute inset-x-0 top-3 h-0.5 bg-foreground transition",
                open && "-translate-y-1.5 -rotate-45",
              )}
            ></span>
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="py-1 text-sm hover:text-primary" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <Button asChild variant="secondary" className="flex-1">
                <a href="tel:+13863310402" onClick={() => setOpen(false)}>Call Now</a>
              </Button>
              <Button asChild className="flex-1">
                <a href="#contact" onClick={() => setOpen(false)}>Get Free Quote</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
