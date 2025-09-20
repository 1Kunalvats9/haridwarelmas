"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function JerseyShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const jerseyRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const jersey = jerseyRef.current
    const text = textRef.current

    if (!jersey || !text) return

    // Set initial state
    gsap.set([jersey, text], {
      y: 50,
      opacity: 0,
    })

    // Create scroll trigger animation
    gsap.to([jersey, text], {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      },
    })

    // Add floating animation to jersey
    gsap.to(jersey, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 relative">
      {/* Jersey Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/jersey.png"
          alt="Team Jersey Background"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Jersey Display */}
          <div ref={jerseyRef} className="flex justify-center order-2 lg:order-1">
            <Card className="liquid-glass border border-orange-400/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl p-4 sm:p-6 lg:p-8">
              <CardContent className="p-0">
                <div className="relative w-64 h-80 sm:w-72 sm:h-88 lg:w-80 lg:h-96 mx-auto rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/jersey.png"
                    alt="HaridwarElmas Team Jersey"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Text Content */}
          <div ref={textRef} className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Team <span className="text-orange-400">Jersey</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300">
              Our official team jersey represents the spirit of Haridwar with its vibrant orange and green colors, 
              symbolizing the holy city's energy and the natural beauty of Uttarakhand.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">Official Uttarakhand Premier League Jersey</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">Premium Quality Material</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">Available for Fans & Supporters</span>
              </div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-colors text-sm sm:text-base">
              Get Your Jersey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
