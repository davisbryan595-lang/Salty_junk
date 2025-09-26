import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Junk Removal",
    desc: "From single items to full loads. Quick, clean, and careful.",
  },
  {
    title: "Home Clean Outs",
    desc: "Estate, moving, or spring cleaning — we handle it all.",
  },
  {
    title: "Yard Debris Removal",
    desc: "Branches, bags, and storm debris cleared fast.",
  },
  {
    title: "Small Demo & Clean Up",
    desc: "Tear-outs and haul-away with site swept clean.",
  },
  {
    title: "Garage Clean Outs",
    desc: "Reclaim your space with efficient sorting and removal.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-balance">Services</h2>
          <p className="text-muted-foreground">Professional results with a premium, modern approach.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="group border bg-card/70 backdrop-blur hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative rounded-lg border bg-popover/40 p-3">
                  <div className="h-28 rounded-md bg-accent/10 ring-1 ring-inset ring-border relative overflow-hidden">
                    <img
                      alt={`${s.title} illustrative placeholder`}
                      src="/professional-junk-removal-service-photo.jpg"
                      className="h-full w-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                <Button asChild className="w-full shadow">
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
