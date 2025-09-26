"use client"

import { useState } from "react"

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-balance">Before & After</h2>
          <p className="text-muted-foreground">Interactive sliders showcase our results.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <BeforeAfter
            beforeSrc="/cluttered-yard-before.jpg"
            afterSrc="/clean-yard-after.jpg"
            label="Yard Debris Removal"
          />
          <BeforeAfter
            beforeSrc="/messy-garage-before.jpg"
            afterSrc="/organized-garage-after.jpg"
            label="Garage Clean Out"
          />
        </div>
      </div>
    </section>
  )
}

function BeforeAfter({
  beforeSrc,
  afterSrc,
  label,
}: {
  beforeSrc: string
  afterSrc: string
  label: string
}) {
  const [pos, setPos] = useState(50)
  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border bg-card/70 backdrop-blur">
        <img
          src={beforeSrc || "/placeholder.svg"}
          alt={`Before - ${label}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={afterSrc || "/placeholder.svg"}
          alt={`After - ${label}`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        />
        <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="h-full w-0.5 bg-primary" />
          <div className="absolute -top-3 -translate-x-1/2 rounded-md border bg-background px-2 py-1 text-xs shadow">
            After
          </div>
        </div>
      </div>
      <input
        aria-label={`Adjust comparison for ${label}`}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="w-full accent-[var(--color-primary)]"
      />
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
