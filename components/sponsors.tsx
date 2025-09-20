"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const sponsorshipPackages = [
  {
    name: "Front of Jersey",
    price: "INR 3,000,000",
    logoSize: "206.45 sq cm",
    features: [
      "Right To Use EC logo for brand communication only",
      "Category Exclusivity",
      "Logo integration on website",
      "Co-branded digital posts",
      "Bespoke Video content",
      "LED Perimeter Replay Screen",
      "Dugout (Masthead + Seats)",
      "Coin Toss/MOM Award",
      "Player Images for brand promotions",
      "Meet & Greet Player access to shoot"
    ]
  },
  {
    name: "Back of Jersey",
    price: "INR 2,000,000",
    logoSize: "206.45 sq cm",
    features: [
      "Right To Use EC logo for brand communication only",
      "Category Exclusivity",
      "Logo integration on website",
      "Co-branded digital posts",
      "Bespoke Video content",
      "LED Perimeter Replay Screen",
      "Dugout (Masthead + Seats)",
      "Coin Toss/MOM Award",
      "Player Images for brand promotions",
      "Meet & Greet Player access to shoot"
    ]
  },
  {
    name: "Right Upper Crest",
    price: "INR 1,500,000",
    logoSize: "65 sq cm",
    features: [
      "Right To Use EC logo for brand communication only",
      "Category Exclusivity",
      "Logo integration on website",
      "Co-branded digital posts",
      "Bespoke Video content",
      "LED Perimeter Replay Screen",
      "Dugout (Masthead + Seats)",
      "Coin Toss/MOM Award",
      "Player Images for brand promotions",
      "Meet & Greet Player access to shoot"
    ]
  },
  {
    name: "Leading Arm",
    price: "INR 1,100,000",
    logoSize: "65 sq cm",
    features: [
      "Right To Use EC logo for brand communication only",
      "Logo integration on website",
      "Co-branded digital posts",
      "Bespoke Video content",
      "LED Perimeter Replay Screen",
      "Dugout (Masthead + Seats)",
      "Player Images for brand promotions",
      "Meet & Greet"
    ]
  },
  {
    name: "Leading Trouser",
    price: "INR 1,100,000",
    logoSize: "50 sq cm",
    features: [
      "Right To Use EC logo for brand communication only",
      "Logo integration on website",
      "Co-branded digital posts",
      "LED Perimeter Replay Screen",
      "Dugout (Masthead + Seats)",
      "Player Images for brand promotions"
    ]
  },
  {
    name: "Non-Leading Trouser",
    price: "INR 1,100,000",
    logoSize: "50 sq cm",
    features: [
      "Right To Use EC logo for brand communication only",
      "Logo integration on website",
      "Co-branded digital posts",
      "LED Perimeter Replay Screen",
      "Dugout (Masthead + Seats)",
      "Player Images for brand promotions"
    ]
  },
  {
    name: "Cap & Helmet",
    price: "INR 800,000",
    logoSize: "30 sq cm",
    features: [
      "Right To Use EC logo for brand communication only",
      "Logo integration on website",
      "LED Perimeter Replay Screen",
      "Dugout (Masthead + Seats)",
      "Player Images for brand promotions"
    ]
  },
  {
    name: "Collar Branding",
    price: "INR 2,000,000",
    logoSize: "10 sq cm",
    features: [
      "Right To Use EC logo for brand communication only",
      "Logo integration on website",
      "Co-branded digital posts",
      "LED Perimeter Replay Screen",
      "Dugout (Masthead + Seats)",
      "Player Images for brand promotions"
    ]
  }
]

const playerDeliverables = [
  "Access to 3 marquee players for a brand campaign shoot in team jersey of India Champions",
  "Access to player image rights for 10 months",
  "Invite to Team Dinner",
  "Term of usage: 10 months",
  "Meet and greet for Brand Owners/Managers and Key Clients with the players at the Team Hotel During the tournament",
  "Man of the match Awards to be given by Brand Owners, Managers or Key Clients during the tournament"
]

export function Sponsors() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const deliverablesRef = useRef<HTMLDivElement>(null)
  const packagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const elements = [titleRef.current, deliverablesRef.current, packagesRef.current]
    const validElements = elements.filter(Boolean)

    if (validElements.length === 0) return

    // Set initial state
    gsap.set(validElements, {
      y: 50,
      opacity: 0,
    })

    // Create scroll trigger animation
    validElements.forEach((element, index) => {
      gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.3,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 sm:mb-4">
            Sponsorship <span className="text-orange-400">Opportunities</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Partner with HaridwarElmas and reach millions of cricket fans worldwide
          </p>
        </div>

        {/* Main Sponsor */}
        <div ref={deliverablesRef} className="mb-8 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Main <span className="text-orange-400">Sponsor</span>
            </h3>
            <div className="flex justify-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-lg bg-white/10 flex items-center justify-center p-4">
                <Image
                  src="/images/main_icon.png"
                  alt="Main Sponsor Logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Player Deliverables */}
        <div className="mb-12 sm:mb-16">
          <Card className="liquid-glass border border-orange-400/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-white text-center">
                Player <span className="text-orange-400">Deliverables</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {playerDeliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{deliverable}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sponsorship Packages */}
        <div ref={packagesRef}>
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">
            Sponsorship <span className="text-orange-400">Packages</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {sponsorshipPackages.map((pkg, index) => (
              <Card
                key={pkg.name}
                className="liquid-glass border border-orange-400/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl hover:border-orange-400/40 transition-all duration-300"
              >
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-base sm:text-lg font-bold text-white leading-tight">{pkg.name}</CardTitle>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-400">{pkg.price}</div>
                  <Badge variant="outline" className="w-fit text-orange-400 border-orange-400/50 text-[10px] sm:text-xs">
                    {pkg.logoSize}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1.5 sm:space-y-2">
                    {pkg.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-1.5 sm:gap-2">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed">{feature}</p>
                      </div>
                    ))}
                    {pkg.features.length > 4 && (
                      <p className="text-orange-400 text-[10px] sm:text-xs font-medium">
                        +{pkg.features.length - 4} more features
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
