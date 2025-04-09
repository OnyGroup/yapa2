import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { Phone, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

// Import client component with no SSR to handle carousel auto-scrolling
const ClientsCarousel = dynamic(() => import("@/components/clients-carousel"), { ssr: false })

export default function ClientsPage() {
  // Client images for the carousel
  const clientImages = [
    {
      src: "/placeholder.svg?height=552&width=785&text=Client+1",
      alt: "Client 1",
    },
    {
      src: "/placeholder.svg?height=552&width=785&text=Client+2",
      alt: "Client 2",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Clients Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-[#4A4A9C]">Our Clients</h1>
              <p className="text-gray-700 text-lg">
                We are proud to have worked with a diverse range of clients to actualize their needs within budget. Our
                portfolio includes projects for leading organizations across various industries, from banking and
                finance to oil and energy, demonstrating our versatility and expertise.
              </p>
              <p className="text-gray-700 text-lg">
                At Snowtech Electronics, we value the relationships we build with our clients and strive to exceed
                expectations on every project. Our commitment to quality, innovation, and customer satisfaction has
                earned us the trust of these prestigious organizations.
              </p>
            </div>
            <div className="w-full max-w-[785px] mx-auto">
              <ClientsCarousel images={clientImages} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-[#4A4A9C] text-white py-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/placeholder.svg?height=400&width=1600" alt="CTA Background" fill className="object-cover" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Need A Free Estimate?</h2>
              <p className="text-xl">
                Ready to get started or have questions about our services? Contact Snowtech Electricals today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-[#4A4A9C] hover:bg-white/90">
                  <Link href="/contact">
                    Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
                  <a href="tel:+254700000000">
                    <Phone className="mr-2 h-5 w-5" /> Call Us Now
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Contact+Us"
                alt="Contact Us"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
