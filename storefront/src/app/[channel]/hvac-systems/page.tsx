import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Wind, PenToolIcon as Tool, Settings, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HVACSystemsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#4A4A9C]/10 py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=600&width=1600&text=HVAC+Systems"
            alt="HVAC Systems Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4A4A9C]">
              HVAC Systems Supply and Installation in Kenya
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Keep your indoor environment comfortable and energy-efficient with our top-of-the-line HVAC systems.
              Whether it&apos;s heating, ventilation, or air conditioning, we provide reliable solutions for residential,
              commercial, and industrial applications.
            </p>
            <Button asChild size="lg" className="bg-[#4A4A9C] hover:bg-[#3A3A8C]">
              <Link href="/contact">Request Site Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* HVAC Systems */}
            <Card className="border-t-4 border-t-[#4A4A9C]">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-6">
                  <Wind className="h-12 w-12 text-[#4A4A9C]" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[#4A4A9C]">HVAC Systems</h2>
                <p className="text-gray-700">
                  With a focus on quality, reliability, and energy efficiency, we offer a comprehensive range of HVAC
                  products tailored to your needs.
                </p>
              </CardContent>
            </Card>

            {/* HVAC Installation */}
            <Card className="border-t-4 border-t-[#4A4A9C]">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-6">
                  <Tool className="h-12 w-12 text-[#4A4A9C]" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[#4A4A9C]">HVAC Installation</h2>
                <p className="text-gray-700">
                  Our team will design and install a customized HVAC solution to meet your specific requirements. From
                  air conditioning units to ventilation systems.
                </p>
              </CardContent>
            </Card>

            {/* Repair and Maintenance */}
            <Card className="border-t-4 border-t-[#4A4A9C]">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-6">
                  <Settings className="h-12 w-12 text-[#4A4A9C]" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[#4A4A9C]">Repair and Maintenance</h2>
                <p className="text-gray-700">
                  Our technicians are certified to diagnose and address a wide range of HVAC issues, from minor repairs
                  to complex troubleshooting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[#4A4A9C] mb-12">Brands We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=Brand+${index + 1}`}
                  alt={`Brand ${index + 1}`}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#4A4A9C]">
                Experience Professional HVAC systems Installation Service in Kenya
              </h2>
              <p className="text-gray-700 text-lg">
                We are committed to providing reliable, cost-effective HVAC solutions that cater to the diverse needs of
                individuals and businesses.
              </p>
              <Button asChild className="bg-[#4A4A9C] hover:bg-[#3A3A8C]">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=800&width=1200&text=Professional+HVAC+Installation"
                alt="Professional HVAC Installation"
                width={1200}
                height={800}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[#4A4A9C] mb-12">Our Recent Installations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={`/placeholder.svg?height=500&width=650&text=Installation+${index + 1}`}
                  alt={`HVAC Installation ${index + 1}`}
                  width={650}
                  height={500}
                  className="object-cover w-full transition-transform hover:scale-105 duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=508&width=800&text=Quality+AC+Systems"
                alt="Quality Air Conditioning Systems"
                width={800}
                height={508}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#4A4A9C]">Quality Air Conditioning Systems</h2>
              <p className="text-gray-700 text-lg">
                At SnowTech Electronics, we are committed to providing reliable, cost-effective HVAC solutions that fits
                the specific needs of our clients.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-[#4A4A9C]" />
                  <span>Centralized air conditioning</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-[#4A4A9C]" />
                  <span>Ductless air conditioning</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-[#4A4A9C]" />
                  <span>Window air conditioning</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-[#4A4A9C]" />
                  <span>Portable air conditioning</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-[#4A4A9C]" />
                  <span>Cold-rooms and commercial chillers</span>
                </li>
              </ul>
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
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Improve Your Indoor Climate?</h2>
            <p className="text-xl">Contact SnowTech Electronics today for a consultation on your HVAC system needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#4A4A9C] hover:bg-white/90">
                <Link href="/contact">Get a Free Estimate</Link>
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
