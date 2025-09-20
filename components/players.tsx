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

interface Player {
  name: string
  role: string
  image?: string
  stats?: {
    matches: number
    runs?: number
    wickets?: number
    average?: number
  }
}

const players: Player[] = [
  { name: "Kunal Chandela", role: "Batsman", stats: { matches: 45, runs: 1250, average: 28.4 } },
  { name: "Himanshu Sony", role: "All-Rounder", stats: { matches: 38, runs: 890, wickets: 15, average: 23.4 } },
  { name: "Vishal Dangwal", role: "Bowler", stats: { matches: 42, wickets: 68, average: 18.2 } },
  { name: "Neeraj Rathour", role: "Batsman", stats: { matches: 35, runs: 980, average: 32.1 } },
  { name: "Ayush Rawat", role: "Wicket Keeper", stats: { matches: 40, runs: 1100, average: 27.5 } },
  { name: "Sumit Juyal", role: "Bowler", stats: { matches: 33, wickets: 52, average: 21.8 } },
  { name: "Prashant Kumar Bhati", role: "All-Rounder", stats: { matches: 41, runs: 750, wickets: 22, average: 19.6 } },
  { name: "Siddharth Gupta", role: "Batsman", stats: { matches: 29, runs: 680, average: 24.3 } },
  { name: "Goldy Malik", role: "Bowler", stats: { matches: 37, wickets: 45, average: 22.1 } },
  { name: "Priyanshu Khanduri", role: "Batsman", stats: { matches: 31, runs: 720, average: 26.7 } },
  { name: "Daksh Awana", role: "Bowler", stats: { matches: 28, wickets: 38, average: 25.4 } },
  { name: "Saurav Chauhan", role: "All-Rounder", stats: { matches: 36, runs: 650, wickets: 18, average: 20.8 } },
  { name: "Harjeet Singh", role: "Batsman", stats: { matches: 34, runs: 920, average: 29.7 } },
  { name: "Ramanjot Singh", role: "Bowler", stats: { matches: 30, wickets: 41, average: 23.9 } },
  { name: "Mohammad Uzair Malik", role: "All-Rounder", stats: { matches: 32, runs: 580, wickets: 16, average: 18.1 } },
  { name: "Abhay Chhetri", role: "Batsman", stats: { matches: 26, runs: 540, average: 22.5 } },
  { name: "Abhishek", role: "Bowler", stats: { matches: 24, wickets: 29, average: 26.8 } },
  { name: "Rishabh Sharma", role: "All-Rounder", stats: { matches: 27, runs: 480, wickets: 12, average: 17.8 } },
]

export function Players() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const cards = cardsRef.current
    const container = containerRef.current
    const section = sectionRef.current

    if (cards.length === 0 || !container || !section) return

    // Set initial state - all cards start from the right
    gsap.set(cards, {
      x: "100vw",
      opacity: 0,
      scale: 0.8,
    })

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%", // Reduced to 2x the viewport height for better pacing
        pin: true,
        scrub: 1, // Smooth scrubbing
        anticipatePin: 1,
      }
    })

    // Add each card to the timeline
    cards.forEach((card, index) => {
      tl.to(card, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      }, index * 0.05) // Reduced stagger time
      
      // Move the card to the left after it's fully visible
      tl.to(card, {
        x: "-100vw",
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: "power2.in",
      }, index * 0.05 + 0.3) // Reduced time in center
    })

    timelineRef.current = tl

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [])

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  return (
    <section id="players" ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Header - Fixed at top */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 sm:mb-4">
            Our <span className="text-orange-400">Champions</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Meet the talented players representing Haridwar in the Uttarakhand Premier League
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div ref={containerRef} className="relative h-full flex items-center justify-center pt-32 sm:pt-40">
        {players.map((player, index) => (
          <Card
            key={player.name}
            ref={addToRefs}
            className="absolute w-72 sm:w-80 h-80 sm:h-96 liquid-glass border border-orange-400/20 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl shadow-2xl"
          >
            <CardContent className="p-4 sm:p-6 h-full flex flex-col">
              {/* Player Image */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center overflow-hidden">
                {player.image ? (
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-white font-bold text-sm sm:text-lg leading-none">
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>

              {/* Player Info */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="font-bold text-white text-lg sm:text-xl mb-1 sm:mb-2 leading-tight">{player.name}</h3>
                <p className="text-orange-400 text-xs sm:text-sm uppercase tracking-wider font-semibold">{player.role}</p>
              </div>

              {/* Player Stats */}
              <div className="flex-1 space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-700/50">
                  <span className="text-gray-300 text-xs sm:text-sm">Matches</span>
                  <span className="text-white font-semibold text-xs sm:text-sm">{player.stats?.matches}</span>
                </div>
                
                {player.stats?.runs && (
                  <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-700/50">
                    <span className="text-gray-300 text-xs sm:text-sm">Runs</span>
                    <span className="text-white font-semibold text-xs sm:text-sm">{player.stats.runs}</span>
                  </div>
                )}
                
                {player.stats?.wickets && (
                  <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-700/50">
                    <span className="text-gray-300 text-xs sm:text-sm">Wickets</span>
                    <span className="text-white font-semibold text-xs sm:text-sm">{player.stats.wickets}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center py-1.5 sm:py-2">
                  <span className="text-gray-300 text-xs sm:text-sm">Average</span>
                  <span className="text-orange-400 font-semibold text-xs sm:text-sm">{player.stats?.average}</span>
                </div>
              </div>

              {/* Jersey Number */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">{index + 1}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 text-white/60">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <span className="text-xs sm:text-sm">Scroll to meet our players</span>
        </div>
      </div>

    </section>
  )
}
