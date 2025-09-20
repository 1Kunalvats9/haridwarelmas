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

const teams = [
  {
    name: "Haridwar Elmas",
    category: "Men's Team",
    logo: "Haridwar Elmas.png",
    location: "Haridwar"
  },
  {
    name: "Dehradun Warriors",
    category: "Men's Team", 
    logo: "Dehradun Warriors - Men_.png",
    location: "Dehradun"
  },
  {
    name: "Nainital Tigers",
    category: "Men's Team",
    logo: "Nainital Tigers - Men.png", 
    location: "Nainital"
  },
  {
    name: "Pithoragarh Hurricanes",
    category: "Men's & Women's Team",
    logo: "Pithoragarh Hurricanes - Men & Women.png",
    location: "Pithoragarh"
  },
  {
    name: "Rishikesh Falcons",
    category: "Men's Team",
    logo: "Rishikesh Falcons - Men_s.png",
    location: "Rishikesh"
  },
  {
    name: "Tehri Titans",
    category: "Men's Team",
    logo: "Tehri Titans - Men.png",
    location: "Tehri"
  },
  {
    name: "USN Indians",
    category: "Men's Team",
    logo: "USN Indians New - Men.png",
    location: "USN"
  },
  {
    name: "Haridwar Storm",
    category: "Women's Team",
    logo: "Haridwar Storm - Women_s.png",
    location: "Haridwar"
  },
  {
    name: "Mussoorie Thunders",
    category: "Women's Team",
    logo: "Mussoorie Thunders - Women.png",
    location: "Mussoorie"
  },
  {
    name: "Tehri Queens",
    category: "Women's Team",
    logo: "Tehri Queens - Women.png",
    location: "Tehri"
  }
]

export function Teams() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const teamsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const elements = [titleRef.current, teamsRef.current]
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
    <section id="teams" ref={sectionRef} className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 sm:mb-4">
            UPL <span className="text-orange-400">Teams</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Meet all the teams competing in the inaugural season of Uttarakhand Premier League
          </p>
        </div>

        {/* Teams Grid */}
        <div ref={teamsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {teams.map((team, index) => (
            <Card
              key={team.name}
              className="liquid-glass border border-orange-400/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl hover:border-orange-400/40 transition-all duration-300 group"
            >
              <CardContent className="p-3 sm:p-4">
                <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                  {/* Team Logo */}
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={`/images/${team.logo}`}
                      alt={`${team.name} logo`}
                      fill
                      className="object-contain p-1 sm:p-2"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  
                  {/* Team Info */}
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-xs sm:text-sm leading-tight">{team.name}</h3>
                    <p className="text-orange-400 text-[10px] sm:text-xs font-medium">{team.category}</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs">{team.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* League Stats */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card className="liquid-glass border border-orange-400/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">7</div>
              <div className="text-white font-semibold text-sm sm:text-base">Men's Teams</div>
            </CardContent>
          </Card>
          <Card className="liquid-glass border border-orange-400/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">3</div>
              <div className="text-white font-semibold text-sm sm:text-base">Women's Teams</div>
            </CardContent>
          </Card>
          <Card className="liquid-glass border border-orange-400/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">10</div>
              <div className="text-white font-semibold text-sm sm:text-base">Total Teams</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
