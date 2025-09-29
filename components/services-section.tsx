"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Junk Removal",
    desc: "From single items to full loads. Quick, clean, and careful.",
    bgUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Home Clean Outs",
    desc: "Estate, moving, or spring cleaning — we handle it all.",
    bgUrl: "https://images.unsplash.com/photo-1600585154208-18b5e1f8e8f9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Yard Debris Removal",
    desc: "Branches, bags, and storm debris cleared fast.",
    bgUrl: "https://images.unsplash.com/photo-1597097245946-3f2d63bf7b6a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Small Demo & Clean Up",
    desc: "Tear-outs and haul-away with site swept clean.",
    bgUrl: "https://images.unsplash.com/photo-1621905251918-22f71d7b2c1c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Garage Clean Outs",
    desc: "Reclaim your space with efficient sorting and removal.",
    bgUrl: "https://images.unsplash.com/photo-1624454001682-0e9a66041d22?q=80&w=1600&auto=format&fit=crop",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 scroll-mt-24 section-blue-bg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-balance">Services</h2>
          <p className="text-muted-foreground">
            Professional results with a premium, modern approach.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group relative overflow-hidden rounded-xl shadow-lg min-h-64 hover:-translate-y-0.5 transition-transform bg-cover bg-center"
              style={{ backgroundImage: `url(${s.bgUrl})` }}
            >
              {/* Matte Glass Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

              <div className="relative z-10">
                <CardHeader>
                  <CardTitle className="text-xl text-white drop-shadow-lg">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-white/90 drop-shadow-[0_6px_20px_rgba(0,0,0,.45)]">
                    {s.desc}
                  </p>
                  <Button asChild className="w-full shadow-lg">
                    <a href="#contact">Book Now</a>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
