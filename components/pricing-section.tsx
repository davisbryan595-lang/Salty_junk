import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$",
    desc: "Single items or small loads.",
    features: ["Curbside pickup", "Light sorting", "Quick appointment"],
    bgClass: "bg-price-basic",
  },
  {
    name: "Standard",
    price: "$$",
    desc: "Most popular. Typical room/garage loads.",
    features: ["Load-based pricing", "On-site sweep", "Same/next-day"],
    bgClass: "bg-price-standard",
  },
  {
    name: "Premium",
    price: "$$$",
    desc: "Large clean outs or multi-area projects.",
    features: ["Team on site", "Haul-away & disposal", "Premium scheduling"],
    bgClass: "bg-price-premium",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 scroll-mt-24 section-blue-bg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-balance">Pricing Plans</h2>
          <p className="text-muted-foreground">Transparent tiers with premium service polish.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className={`no-glass price-bg-base ${p.bgClass} bg-blend-overlay text-white min-h-72 md:min-h-80 lg:min-h-96 hover:-translate-y-0.5 transition-transform rounded-xl`}>
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between drop-shadow-[0_6px_20px_rgba(0,0,0,.45)]">
                  <span>{p.name}</span>
                  <span className="text-primary">{p.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-white/90 drop-shadow-[0_6px_20px_rgba(0,0,0,.45)]">{p.desc}</p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Button asChild className="w-full shadow">
                  <a href="#contact">Book This Plan</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
