import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section aria-label="Hero" className="relative min-h-[76dvh] md:min-h-[82dvh] flex items-center justify-center overflow-hidden section-blue-bg">
      <div className="absolute inset-0 hero-animated-bg" aria-hidden="true" />
      {/* Background: subtle futuristic polish via layered gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,color-mix(in_srgb,var(--color-primary)_20%,transparent),transparent),radial-gradient(50%_50%_at_90%_20%,color-mix(in_srgb,var(--color-primary)_18%,transparent),transparent)]" />
      <div className="absolute inset-0 bg-primary/5" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 grid gap-6 items-center justify-items-center text-center">
        <div className="space-y-6">
          <h1 className="text-balance text-4xl md:text-6xl font-semibold text-glow-strong">We Bite Down On Clutter</h1>
          <p className="text-pretty text-muted-foreground text-glow-soft max-w-2xl mx-auto">
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
        </div>

      </div>
    </section>
  )
}
