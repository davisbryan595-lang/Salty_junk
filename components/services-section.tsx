import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Junk Removal",
    desc: "From single items to full loads. Quick, clean, and careful.",
    bgClass: "bg-card-junk",
  },
  {
    title: "Home Clean Outs",
    desc: "Estate, moving, or spring cleaning — we handle it all.",
    bgClass: "bg-card-home",
  },
  {
    title: "Yard Debris Removal",
    desc: "Branches, bags, and storm debris cleared fast.",
    bgClass: "bg-card-yard",
  },
  {
    title: "Small Demo & Clean Up",
    desc: "Tear-outs and haul-away with site swept clean.",
    bgClass: "bg-card-demo",
  },
  {
    title: "Garage Clean Outs",
    desc: "Reclaim your space with efficient sorting and removal.",
    bgClass: "bg-card-garage",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 scroll-mt-24 section-blue-bg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-balance">Services</h2>
          <p className="text-muted-foreground">Professional results with a premium, modern approach.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className={`group no-glass card-bg-base ${s.bgClass} bg-blend-overlay text-white min-h-64 hover:-translate-y-0.5 transition-transform rounded-xl`}>
              <CardHeader>
                <CardTitle className="text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-white/90 max-w-prose drop-shadow-[0_6px_20px_rgba(0,0,0,.45)]">{s.desc}</p>
                <Button asChild className="w-full shadow-lg">
                  <a href="#contact">Book Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
