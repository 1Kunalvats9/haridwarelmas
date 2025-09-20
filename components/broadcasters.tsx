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

const broadcasters = [
  { name: "Jio Hotstar", country: "India", type: "OTT", logo: "jio_hotstar" },
  { name: "Sony Network Sports", country: "India", type: "TV", logo: "sony_sports" },
  { name: "Star Sports", country: "India", type: "TV", logo: "star_sports" },
  { name: "SuperSport", country: "South Africa", type: "TV", logo: "super_sports" },
  { name: "Sky Sports", country: "England", type: "TV", logo: "sky_sports" },
  { name: "Fox Sports", country: "Australia", type: "TV", logo: "fox_sports" },
  { name: "ESPN", country: "West Indies", type: "TV", logo: "espn" },
  { name: "Ten Sports", country: "Sri Lanka", type: "TV", logo: "ten_sports" },
  { name: "Dubai Sports", country: "UAE", type: "TV", logo: "dubai_sports" },
]

const countries = [
  "INDIA", "SOUTH AFRICA", "SRI LANKA", "WEST INDIES", 
  "ENGLAND", "AUSTRALIA", "UAE", "OTHER ASIAN COUNTRIES"
]

export function Broadcasters() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const broadcastersRef = useRef<HTMLDivElement>(null)
  const countriesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const elements = [titleRef.current, statsRef.current, broadcastersRef.current, countriesRef.current]
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
        delay: index * 0.2,
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
            Global <span className="text-orange-400">Broadcasting</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Watch the Uttarakhand Premier League live across multiple territories and platforms
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="liquid-glass border border-orange-400/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">150M+</div>
              <div className="text-white font-semibold text-sm sm:text-base">Global Reach</div>
            </CardContent>
          </Card>
          <Card className="liquid-glass border border-orange-400/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">15K+</div>
              <div className="text-white font-semibold text-sm sm:text-base">Stadium Seats</div>
            </CardContent>
          </Card>
          <Card className="liquid-glass border border-orange-400/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">8+</div>
              <div className="text-white font-semibold text-sm sm:text-base">Countries</div>
            </CardContent>
          </Card>
        </div>

        {/* Broadcasters */}
        <div ref={broadcastersRef} className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">Broadcasting Partners</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {broadcasters.map((broadcaster, index) => (
              <Card
                key={broadcaster.name}
                className="liquid-glass border border-orange-400/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl hover:border-orange-400/40 transition-all duration-300"
              >
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <Image
                        src={`/images/${broadcaster.logo}${broadcaster.logo === 'star_sports' ? '.webp' : '.png'}`}
                        alt={`${broadcaster.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-white font-semibold text-xs sm:text-sm truncate">{broadcaster.name}</div>
                      <div className="text-orange-400 text-[10px] sm:text-xs">{broadcaster.country}</div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider text-center">{broadcaster.type}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Countries */}
        <div ref={countriesRef}>
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">Broadcasting Territories</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {countries.map((country, index) => (
              <div
                key={country}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500/20 to-green-500/20 border border-orange-400/30 rounded-full text-white text-xs sm:text-sm font-medium"
              >
                {country}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
