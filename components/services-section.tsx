"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Junk Removal",
    desc: "From single items to full loads. Quick, clean, and careful.",
    bgUrl:
      "https://images.unsplash.com/photo-1604335399106-79b9d1a8a0f7?q=80&w=1600&auto=format&fit=crop", // pile of junk
  },
  {
    title: "Home Clean Outs",
    desc: "Estate, moving, or spring cleaning — we handle it all.",
    bgUrl:
      "https://images.unsplash.com/photo-1600585154175-3c0a5c09a1d2?q=80&w=1600&auto=format&fit=crop", // empty clean room
  },
  {
    title: "Yard Debris Removal",
    desc: "Branches, bags, and storm debris cleared fast.",
    bgUrl:
      "https://images.unsplash.com/photo-1621905252431-d2b77e78c5d6?q=80&w=1600&auto=format&fit=crop", // yard debris / leaves
  },
  {
    title: "Small Demo & Clean Up",
    desc: "Tear-outs and haul-away with site swept clean.",
    bgUrl:
      "https://images.unsplash.com/photo-1597005355973-f61c8ef8ab87?q=80&w=1600&auto=format&fit=crop", // construction demo
  },
  {
    title: "Garage Clean Outs",
    desc: "Reclaim your space with efficient sorting and removal.",
    bgUrl:
      "https://images.unsplash.com/photo-1617093800160-4b2b6d4a33a5?q=80&w=1600&auto=format&fit=crop", // cluttered garage
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
              {/* Softer Overlay (not too much blur) */}
              <div className="absolute inset-0 bg-black/25"></div>

              <div className="relative z-10">
                <CardHeader>
                  <CardTitle className="text-xl text-white drop-shadow-lg">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-white/95 drop-shadow-[0_4px_12px_rgba(0,0,0,.6)]">
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
