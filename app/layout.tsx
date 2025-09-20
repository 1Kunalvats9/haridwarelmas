import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Plasma from "@/components/plasma"
import { ClientLayout } from "@/components/client-layout"

const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"]
})

export const metadata: Metadata = {
  title: "HaridwarElmas | Uttarakhand Premier League",
  description:
    "Official website of HaridwarElmas cricket team participating in the inaugural season of Uttarakhand Premier League. Watch live matches, meet our players, and support the team from the holy city of Haridwar.",
  generator: "Next.js",
  icons: {
    icon: "/images/UPL_LOGO.png",
    shortcut: "/images/UPL_LOGO.png",
    apple: "/images/UPL_LOGO.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //@ts-ignore
    <html lang="en" className={inter.className} webcrx="">
      <head>
        {/* Font Preload */}
        <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />

        {/* Favicon */}
        <link rel="icon" href="/images/UPL_LOGO.png" type="image/png" />
        <link rel="shortcut icon" href="/images/UPL_LOGO.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/UPL_LOGO.png" />

        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
      </head>
      <body>
            {/* Video Background */}
            <div className="fixed inset-0 z-0 overflow-hidden">
              <video
                id="cricket-bg-video"
                className="absolute inset-0 w-full h-full object-cover"
                muted
                playsInline
                autoPlay
                loop
                preload="auto"
                style={{
                  minWidth: '100%',
                  minHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  transform: 'scale(1.3)',
                  transformOrigin: 'center center',
                  objectFit: 'cover'
                }}
              >
                <source src="/videos/bg_cricket.mp4" type="video/mp4" />
              </video>
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
        
        {/* Commented out Plasma background for testing */}
        {/* <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <Plasma
            color="#f97316"
            speed={0.3}
            direction="forward"
            scale={1.1}
            opacity={0.15}
            mouseInteractive={false}
          />
        </div> */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
