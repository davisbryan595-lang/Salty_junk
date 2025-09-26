import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <GallerySection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
