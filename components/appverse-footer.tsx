"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Representing the holy city of Haridwar in the Uttarakhand Premier League. Join us in our journey to cricket glory.",
  copyright: "© 2025 — HaridwarElmas, Uttarakhand Premier League",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/best_player.png"
          alt="HaridwarElmas Champions Background"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16 relative z-10">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-orange-500 px-6 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(251,146,60,0.35)] hover:bg-orange-600"
          >
            <a href="#sponsors" target="_blank" rel="noopener noreferrer">
              Partner With Us
            </a>
          </Button>
        </div>
      </div>

      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-orange-400">JOIN THE CHAMPIONS</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Support HaridwarElmas in the Uttarakhand Premier League
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Be part of our journey as we represent the holy city of Haridwar in the inaugural season of the 
                Uttarakhand Premier League
              </p>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b0b0b] via-[#1f2937] to-[#0b1220]">
                  {/* On-screen content */}
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-5xl font-extrabold text-orange-400">Champions</div>
                      <p className="text-xs text-white/80">Representing Haridwar with pride</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-orange-400">
                        UPL 2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10 relative z-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-orange-400 to-green-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">HC</span>
                </div>
                <span className="text-xl font-semibold text-orange-400">HaridwarElmas</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Navigation</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Home", "Players", "Jersey", "Broadcasters", "Sponsors", "Contact"].map((item) => (
                    <li key={item}>
                      <Link href={`#${item.toLowerCase()}`} className="hover:text-orange-400">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Social media</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://twitter.com/theskitbit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400"
                      aria-label="Follow skitbit on Twitter"
                    >
                      X/Twitter
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Youtube className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://www.youtube.com/@skitbitinternational"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400"
                      aria-label="Subscribe to skitbit on YouTube"
                    >
                      YouTube
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://instagram.com/theskitbit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400"
                      aria-label="Follow skitbit on Instagram"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://threads.com/theskitbit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400"
                      aria-label="Follow skitbit on Threads"
                    >
                      Threads
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/revisions" className="hover:text-orange-400">
                Team Policy
              </Link>
              <Link href="/t&c" className="hover:text-orange-400">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
