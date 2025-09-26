import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section aria-label="Hero" className="relative min-h-[76dvh] md:min-h-[82dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-animated-bg" aria-hidden="true" />
      {/* Background: subtle futuristic polish via layered gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,color-mix(in_srgb,var(--color-primary)_20%,transparent),transparent),radial-gradient(50%_50%_at_90%_20%,color-mix(in_srgb,var(--color-primary)_18%,transparent),transparent)]" />
      <div className="absolute inset-0 bg-primary/5" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 grid gap-6 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-lg border bg-card/60 backdrop-blur px-3 py-1 text-xs shadow-sm">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Ormond Beach & Volusia County
          </div>
          <h1 className="text-balance text-4xl md:text-5xl font-semibold">We Bite Down On Clutter</h1>
          <p className="text-pretty text-muted-foreground">
            Fast, friendly, and professional junk removal. From home and garage clean outs to yard debris and small
            demos — we make clutter disappear.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="shadow-lg">
              <a href="tel:+13863310402">Call Now</a>
            </Button>
            <Button asChild variant="secondary" className="backdrop-blur border shadow">
              <a href="#contact">Get Free Quote</a>
            </Button>
          </div>
          <div className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
            <span>Phone:</span>
            <Button asChild size="sm" className="shadow">
              <a href="tel:+13863310402" aria-label="Call Salty Dawgs Junk Removal at (386) 331-0402">(386) 331-0402</a>
            </Button>
            <span className="opacity-70">·</span>
            <span>Email:</span>
            <Button asChild size="sm" variant="secondary" className="shadow">
              <a href="mailto:saltydawgsjunk@gmail.com?subject=Hello%20Salty%20Dawgs" aria-label="Email Salty Dawgs Junk Removal">saltydawgsjunk@gmail.com</a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
