import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Import client component with no SSR to handle carousel auto-scrolling
const ProjectGalleryCarousel = dynamic(() => import("@/components/project-gallery-carousel"), { ssr: false })

export default function ProjectsPage() {
  // Gallery images for the carousel
  const galleryImages = Array.from({ length: 10 }).map((_, index) => ({
    src: `/placeholder.svg?height=240&width=400&text=Gallery+Image+${index + 1}`,
    alt: `Project Gallery Image ${index + 1}`,
  }))

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-[#4A4A9C] text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/placeholder.svg?height=600&width=1600" alt="Projects Background" fill className="object-cover" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            <p className="text-xl md:text-2xl">
              Discover some of our past projects and success stories. Explore how SnowTech Electronics has helped
              clients across various industries with our innovative electrical and electronic HVAC solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: FCB Mihrab */}
            <Card className="overflow-hidden">
              <div className="relative h-60">
                <Image
                  src="/placeholder.svg?height=240&width=400&text=FCB+Mihrab"
                  alt="FCB Mihrab Project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-[#4A4A9C] mb-2">FCB Mihrab</h2>
                <p className="text-gray-700">
                  Successfully completed the design and installation of a comprehensive HVAC system for the FCB Mihrab
                  building.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#4A4A9C] text-[#4A4A9C] hover:bg-[#4A4A9C]/10">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Project 2: Premier Foods */}
            <Card className="overflow-hidden">
              <div className="relative h-60">
                <Image
                  src="/placeholder.svg?height=240&width=400&text=Premier+Foods"
                  alt="Premier Foods Project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-[#4A4A9C] mb-2">Premier Foods</h2>
                <p className="text-gray-700">
                  Complete food processing system cooling plant overhaul and secondary cooling system supply and
                  installation.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#4A4A9C] text-[#4A4A9C] hover:bg-[#4A4A9C]/10">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Project 3: Tosha Petroleum */}
            <Card className="overflow-hidden">
              <div className="relative h-60">
                <Image
                  src="/placeholder.svg?height=240&width=400&text=Tosha+Petroleum"
                  alt="Tosha Petroleum Project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-[#4A4A9C] mb-2">Tosha Petroleum</h2>
                <p className="text-gray-700">
                  This project involved the design, supply, and installation of a complete (HVAC) system for Tosha
                  Energies.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#4A4A9C] text-[#4A4A9C] hover:bg-[#4A4A9C]/10">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Project 4: First Community Bank */}
            <Card className="overflow-hidden">
              <div className="relative h-60">
                <Image
                  src="/placeholder.svg?height=240&width=400&text=First+Community+Bank"
                  alt="First Community Bank Project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-[#4A4A9C] mb-2">First Community Bank</h2>
                <p className="text-gray-700">
                  The project included the deployment of high-performance air conditioning units to enhance the working
                  environment.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#4A4A9C] text-[#4A4A9C] hover:bg-[#4A4A9C]/10">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Project 5: Tullow Oil */}
            <Card className="overflow-hidden">
              <div className="relative h-60">
                <Image
                  src="/placeholder.svg?height=240&width=400&text=Tullow+Oil"
                  alt="Tullow Oil Project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-[#4A4A9C] mb-2">Tullow Oil</h2>
                <p className="text-gray-700">
                  Integration of advanced air conditioning solutions to ensure optimal climate control and energy
                  efficiency throughout the camp.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#4A4A9C] text-[#4A4A9C] hover:bg-[#4A4A9C]/10">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Project 6: Premier Bank */}
            <Card className="overflow-hidden">
              <div className="relative h-60">
                <Image
                  src="/placeholder.svg?height=240&width=400&text=Premier+Bank"
                  alt="Premier Bank Project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-[#4A4A9C] mb-2">Premier Bank</h2>
                <p className="text-gray-700">
                  Handled Full project management and office fit-out for Premier Bank's new corporate offices.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#4A4A9C] text-[#4A4A9C] hover:bg-[#4A4A9C]/10">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="relative w-full bg-[#4A4A9C] text-white py-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Working Process Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Working Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-4">01.</div>
                <h3 className="text-xl font-bold mb-3">Consultation</h3>
                <p>
                  Our process begins with an in-depth consultation to understand your unique needs, preferences, and
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-4">02.</div>
                <h3 className="text-xl font-bold mb-3">Proposal</h3>
                <p>
                  We will prepare a detailed proposal outlining our recommended solutions, scope of work, timeline, and
                  pricing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-4">03.</div>
                <h3 className="text-xl font-bold mb-3">Installation</h3>
                <p>
                  Once the proposal is approved, our skilled technicians will proceed with the installation phase of the
                  project.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-4">04.</div>
                <h3 className="text-xl font-bold mb-3">Inspection</h3>
                <p>
                  Conduct a thorough inspection to ensure that all systems are functioning optimally and meet the
                  highest standards of safety.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#4A4A9C] mb-16 text-center">Project Gallery</h2>

          <ProjectGalleryCarousel images={galleryImages} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full bg-[#4A4A9C] text-white py-16 md:py-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/placeholder.svg?height=600&width=1600" alt="FAQ Background" fill className="object-cover" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-lg">
                Let us help you with your electrical and electronic HVAC requirements and discover why Snowtech
                Electronics is the right choice for your next project.
              </p>
              <Button asChild size="lg" className="bg-white text-[#4A4A9C] hover:bg-white/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            <Accordion type="single" collapsible className="w-full bg-white rounded-lg text-gray-800 p-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#4A4A9C] font-medium">
                  What types of HVAC systems do you install and repair?
                </AccordionTrigger>
                <AccordionContent>
                  We specialize in the installation, repair, and maintenance of a wide range of HVAC systems, including
                  air conditioning, heating, ventilation, and indoor air quality solutions. Whether you need a new HVAC
                  system installed or repairs for your existing equipment, we have the expertise to meet your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[#4A4A9C] font-medium">
                  What types of electrical services do you offer?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a comprehensive range of electrical services, including installation, repair, and maintenance
                  for residential, commercial, and industrial properties. Our services cover everything from wiring and
                  lighting to panel upgrades and electrical inspections.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[#4A4A9C] font-medium">
                  How do I schedule a consultation for my electrical project?
                </AccordionTrigger>
                <AccordionContent>
                  Scheduling a consultation with us is easy! Simply contact our team via phone, email, or through the
                  online form on our website. We'll work with you to find a convenient time for an in-person or virtual
                  consultation to discuss your project requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  )
}
