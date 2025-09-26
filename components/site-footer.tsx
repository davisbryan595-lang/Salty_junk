export function SiteFooter() {
  return (
    <footer className="border-t bg-background/70">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <p className="font-semibold">Salty Dawgs Junk Removal</p>
          <p className="text-sm text-muted-foreground">Proudly serving Ormond Beach & Volusia County</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm">
            Phone:{" "}
            <a
              className="contact-chip"
              data-icon="phone"
              href="tel:+13863310402"
              aria-label="Call Salty Dawgs Junk Removal at (386) 331-0402"
            >
              (386) 331-0402
            </a>
          </p>
          <p className="text-sm">
            Email:{" "}
            <a
              className="contact-chip"
              data-icon="email"
              href="mailto:saltydawgsjunk@gmail.com?subject=Hello%20Salty%20Dawgs"
              aria-label="Email Salty Dawgs Junk Removal"
            >
              saltydawgsjunk@gmail.com
            </a>
          </p>
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
