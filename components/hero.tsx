import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-orange-500 px-6 text-white hover:bg-orange-600">
      <a href="#players" target="_blank" rel="noopener noreferrer">
        Meet Our Players
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-4">
            <div className="relative h-12 w-12">
              <Image
                src="/images/Haridwar Elmas.png"
                alt="Haridwar Elmas Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-orange-400/80">haridwarelmas</p>
          </div>
          <h1 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">UTTARAKHAND</span>
            <span className="block text-orange-400 drop-shadow-[0_0_20px_rgba(251,146,60,0.35)]">PREMIER LEAGUE</span>
            <span className="block">HARIDWARELMAS</span>
          </h1>
          <p className="mt-4 text-center text-base sm:text-lg text-gray-300 max-w-2xl px-4">
            Representing the holy city of Haridwar in the inaugural season of Uttarakhand Premier League
          </p>
          <div className="mt-6">{buttonNew}</div>

          {/* Phone grid mimic */}
          <div className="mt-10 grid w-full gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4">
            {phoneData.map((p, i) => {
              const visibility = i <= 1 ? "block" : i === 2 ? "hidden sm:block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden lg:block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <PhoneCard title={p.title} sub={p.sub} tone={p.tone} videoSrc={p.videoSrc} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  tone = "calm",
  videoSrc = "vid1.mp4",
}: {
  title?: string
  sub?: string
  tone?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[20px] sm:rounded-[28px] glass-border bg-neutral-900 p-1.5 sm:p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-xl sm:rounded-2xl">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={`/videos/${videoSrc}`} type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 p-2 sm:p-3">
          <div className="mx-auto mb-2 sm:mb-3 h-1 sm:h-1.5 w-12 sm:w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-white/90">{title}</div>
            <p className="text-[10px] sm:text-xs text-white/70 leading-tight">{sub}</p>
            <div className="mt-2 sm:mt-3 inline-flex items-center rounded-full bg-black/40 px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] uppercase tracking-wider text-orange-400">
              {tone === "calm" ? "haridwarelmas" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const phoneData = [
  {
    title: "150M+",
    sub: "Global Broadcasting Reach",
    tone: "broadcast",
    videoSrc: "vid1.mp4",
  },
  {
    title: "15K+",
    sub: "Stadium Seats Occupied",
    tone: "stadium",
    videoSrc: "vid2.mp4",
  },
  {
    title: "5 Teams",
    sub: "Men's Competition",
    tone: "teams",
    videoSrc: "vid3.mp4",
  },
  {
    title: "3 Teams",
    sub: "Women's Competition",
    tone: "women",
    videoSrc: "vid4.mp4",
  },
  {
    title: "T20",
    sub: "Fast-Paced Action",
    tone: "format",
    videoSrc: "vid5.mp4",
  },
]
