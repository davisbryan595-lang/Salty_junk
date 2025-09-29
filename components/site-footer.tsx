import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/70">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <Image src="/images/saltylogo.png" alt="Salty Dawgs Junk Removal logo" width={32} height={32} className="rounded" />
          <div>
            <p className="font-semibold">Salty Dawgs Junk Removal</p>
            <p className="text-sm text-muted-foreground">Proudly serving Ormond Beach & Volusia County</p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Contact Us</p>
          <div className="flex flex-col gap-2">
            <a className="contact-chip glowable sheen-hover" data-icon="phone" href="tel:+13863310402" aria-label="Call Salty Dawgs Junk Removal at (386) 331-0402">(386) 331-0402</a>
            <a className="contact-chip glowable sheen-hover" data-icon="email" href="mailto:saltydawgsjunk@gmail.com?subject=Hello%20Salty%20Dawgs" aria-label="Email Salty Dawgs Junk Removal">saltydawgsjunk@gmail.com</a>
          </div>
        </div>
        <nav className="text-sm md:text-right space-x-4">
          <a href="#services" className="hover:text-primary">
            Services
          </a>
          <a href="#pricing" className="hover:text-primary">
            Pricing
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </nav>
      </div>
      <div className="border-t text-center text-xs py-3 text-muted-foreground">
        © {new Date().getFullYear()} Salty Dawgs. All rights reserved.
      </div>
    </footer>
  )
}
