"use client"

import { useState } from "react"
import { LoadingScreen } from "./loading-screen"

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  )
}
