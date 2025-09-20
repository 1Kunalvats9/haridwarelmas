"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    // Check if all media is loaded
    const checkMediaLoaded = () => {
      const images = document.querySelectorAll('img')
      const videos = document.querySelectorAll('video')
      
      let loadedCount = 0
      const totalMedia = images.length + videos.length
      
      if (totalMedia === 0) {
        // If no media, complete loading after a minimum time
        setTimeout(() => {
          setLoadingProgress(100)
          setTimeout(() => {
            setIsVisible(false)
            onLoadingComplete()
          }, 500)
        }, 2000)
        return
      }

      const checkComplete = () => {
        loadedCount++
        const progress = Math.min((loadedCount / totalMedia) * 100, 95)
        setLoadingProgress(progress)
        
        if (loadedCount >= totalMedia) {
          setTimeout(() => {
            setLoadingProgress(100)
            setTimeout(() => {
              setIsVisible(false)
              onLoadingComplete()
            }, 500)
          }, 500)
        }
      }

      // Check images
      images.forEach(img => {
        if (img.complete) {
          checkComplete()
        } else {
          img.addEventListener('load', checkComplete)
          img.addEventListener('error', checkComplete)
        }
      })

      // Check videos
      videos.forEach(video => {
        if (video.readyState >= 3) { // HAVE_FUTURE_DATA
          checkComplete()
        } else {
          video.addEventListener('canplaythrough', checkComplete)
          video.addEventListener('error', checkComplete)
        }
      })
    }

    // Start checking after a short delay to allow DOM to render
    setTimeout(checkMediaLoaded, 100)

    // Fallback: complete loading after 5 seconds maximum
    const fallbackTimeout = setTimeout(() => {
      setLoadingProgress(100)
      setTimeout(() => {
        setIsVisible(false)
        onLoadingComplete()
      }, 500)
    }, 5000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(fallbackTimeout)
    }
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          muted
          playsInline
          autoPlay
          loop
        >
          <source src="/videos/bg_cricket.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        {/* Team Logo */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
          <Image
            src="/images/Haridwar Elmas.png"
            alt="HaridwarElmas Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Loading Video */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
          <video
            className="w-full h-full object-cover"
            muted
            playsInline
            autoPlay
            loop
          >
            <source src="/videos/loading.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Haridwar<span className="text-orange-400">Elmas</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Uttarakhand Premier League
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 space-y-2">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Loading...</span>
            <span>{Math.round(loadingProgress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 to-green-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>

        {/* Loading Message */}
        <p className="text-xs text-gray-400 text-center max-w-sm">
          Preparing the ultimate cricket experience...
        </p>
      </div>
    </div>
  )
}
