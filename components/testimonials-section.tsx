import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Fast and professional — our garage was spotless in no time. Highly recommend!",
    name: "Happy Customer",
  },
  {
    quote: "They handled everything with care. Booking and communication were easy.",
    name: "Local Homeowner",
  },
  {
    quote: "Prompt, courteous, and thorough. Will definitely use again.",
    name: "Repeat Client",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 scroll-mt-24 section-blue-bg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-balance">What People Say</h2>
          <p className="text-muted-foreground">Placeholder reviews — real ones coming soon.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="border bg-card/70 backdrop-blur">
              <CardContent className="p-6 space-y-4">
                <blockquote className="text-pretty">“{t.quote}”</blockquote>
                <p className="text-sm text-muted-foreground">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
