"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ContactSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent("Free Quote Request - Salty Dawgs")
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:saltydawgsjunk@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-16 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-balance">Contact Us</h2>
          <p className="text-muted-foreground">Call, email, or request a quick callback — we respond fast.</p>

          <div className="mt-6 space-y-2 text-sm">
            <p className="flex items-center gap-2 flex-wrap">
              <span>Phone:</span>
              <Button asChild size="sm" className="shadow">
                <a href="tel:+13863310402" aria-label="Call Salty Dawgs Junk Removal at (386) 331-0402">(386) 331-0402</a>
              </Button>
            </p>
            <p className="flex items-center gap-2 flex-wrap">
              <span>Email:</span>
              <Button asChild size="sm" variant="secondary" className="shadow">
                <a href="mailto:saltydawgsjunk@gmail.com?subject=Hello%20Salty%20Dawgs" aria-label="Email Salty Dawgs Junk Removal">saltydawgsjunk@gmail.com</a>
              </Button>
            </p>
          </div>

          <div className="mt-6 rounded-lg overflow-hidden border">
            <iframe
              title="Ormond Beach Map"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Ormond%20Beach%2C%20FL&output=embed"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border bg-card/70 backdrop-blur p-4 md:p-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="h-10 rounded-md border bg-background px-3 outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="phone" className="text-sm">
                Phone
              </label>
              <input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(386) 331-0402"
                className="h-10 rounded-md border bg-background px-3 outline-none focus:ring-2 focus:ring-primary"
                required
                inputMode="tel"
              />
            </div>
          </div>
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-10 rounded-md border bg-background px-3 outline-none focus:ring-2 focus:ring-primary"
              required
              type="email"
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you need removed..."
              className="min-h-28 rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="submit" className="flex-1 shadow">
              Request Callback
            </Button>
            <Button asChild variant="secondary" className="flex-1">
              <a href="tel:+13863310402">Call Now</a>
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
