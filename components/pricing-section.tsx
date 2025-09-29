import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$",
    desc: "Single items or small loads.",
    features: ["Curbside pickup", "Light sorting", "Quick appointment"],
  },
  {
    name: "Standard",
    price: "$$",
    desc: "Most popular. Typical room/garage loads.",
    features: ["Load-based pricing", "On-site sweep", "Same/next-day"],
  },
  {
    name: "Premium",
    price: "$$$",
    desc: "Large clean outs or multi-area projects.",
    features: ["Team on site", "Haul-away & disposal", "Premium scheduling"],
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
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className="border bg-card/70 backdrop-blur hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span>{p.name}</span>
                  <span className="text-primary">{p.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{p.desc}</p>
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
