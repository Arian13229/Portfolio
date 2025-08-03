'use client'

import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Name */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4 animate-pulse">
            <span className="inline-block animate-bounce">A</span>
            <span className="inline-block animate-bounce animation-delay-100">r</span>
            <span className="inline-block animate-bounce animation-delay-200">i</span>
            <span className="inline-block animate-bounce animation-delay-300">a</span>
            <span className="inline-block animate-bounce animation-delay-400">n</span>
            <span className="mx-2"></span>
            <span className="inline-block animate-bounce animation-delay-500">H</span>
            <span className="inline-block animate-bounce animation-delay-600">a</span>
            <span className="inline-block animate-bounce animation-delay-700">k</span>
            <span className="inline-block animate-bounce animation-delay-800">o</span>
            <span className="inline-block animate-bounce animation-delay-900">p</span>
            <span className="inline-block animate-bounce animation-delay-1000">i</span>
            <span className="inline-block animate-bounce animation-delay-1100">a</span>
            <span className="inline-block animate-bounce animation-delay-1200">n</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 animate-fade-in animation-delay-400">
            Portfolio wordt geladen...
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-80 max-w-sm mx-auto mb-8">
          <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            {Math.floor(Math.min(progress, 100))}%
          </p>
        </div>
      </div>
    </div>
  )
}
