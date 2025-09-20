import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Teams } from "@/components/teams"
import { Players } from "@/components/players"
import { JerseyShowcase } from "@/components/jersey-showcase"
import { Broadcasters } from "@/components/broadcasters"
import { Sponsors } from "@/components/sponsors"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://haridwarelmas.com/",
    name: "HaridwarElmas | Uttarakhand Premier League",
    description:
      "Official website of HaridwarElmas cricket team participating in the inaugural season of Uttarakhand Premier League.",
    url: "https://haridwarelmas.com/",
    mainEntity: {
      "@type": "SportsTeam",
      name: "HaridwarElmas",
      url: "https://haridwarelmas.com",
      sport: "Cricket",
      league: "Uttarakhand Premier League",
      location: {
        "@type": "Place",
        name: "Haridwar, Uttarakhand, India"
      }
    },
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Teams />
        <Players />
        <JerseyShowcase />
        <Broadcasters />
        <Sponsors />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
