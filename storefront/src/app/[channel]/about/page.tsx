import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, Eye, Target, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-[#4A4A9C] text-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold">About Snowtech Electronics</h1>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                We Are Leading provider of electrical and electronic HVAC systems in Kenya
              </h2>
              <p className="text-lg">
                SnowTech Electronics, established in 2008, is a medium-sized company specializing in electrical and
                electronics HVAC systems. Originally focused on Daewoo Home Appliances, we have expanded our portfolio
                to include:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Electronic Security</li>
                <li>Office Solutions</li>
                <li>HVAC Systems</li>
                <li>Power Backup Solutions</li>
              </ul>
              <div>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <Card className="bg-white/10 border-none">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 flex items-center justify-center">
                    <Target className="h-6 w-6 text-[#4A4A9C]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Our Goal</h3>
                    <p>
                      We aim at becoming a preferred contractor in providing state of the art electrical/electronic
                      technology solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-none">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-[#4A4A9C]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Vision</h3>
                    <p>
                      We strive to be the best-in-class distributors of quality product and services and a responsible
                      corporate citizen.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-none">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 flex items-center justify-center">
                    <Send className="h-6 w-6 text-[#4A4A9C]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Mission</h3>
                    <p>To be the leading provider of innovative and high quality electronic systems.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Achievements Section */}
      <section className="w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Recognition Certificate"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#4A4A9C]">Awards & Achievements</h2>
              <p className="text-gray-700 text-lg">
                Snowtech Electronics Ltd is a registered NCA4 Electrical Engineering Service Contractor dealing with all
                major Electrical Installations and we are also a registered NCA4 Mechanical Engineering Service
                Contractor.
              </p>
              <ul className="space-y-2 list-disc pl-5 text-gray-700">
                <li>NCA4 Electrical Engineering Service Contractor</li>
                <li>NCA4 Mechanical Engineering Service Contractor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Carousel Section */}
      <section className="w-full bg-[#F5F5F5] py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[#4A4A9C] mb-12">Our Products</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Product ${index + 1}`}
                          alt={`Product ${index + 1}`}
                          width={300}
                          height={300}
                          className="object-cover rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[#4A4A9C] mb-12">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={`/placeholder.svg?height=128&width=128&text=Team ${index + 1}`}
                    alt={`Team Member ${index + 1}`}
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-[#4A4A9C]">Team Member {index + 1}</h3>
                <p className="text-gray-600">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full bg-[#4A4A9C] text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s Talk About Your Next Project</h2>
            <p className="text-xl">
              Ready to get started or have questions about our services? Contact Snowtech Electricals today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </main>
  )
}
