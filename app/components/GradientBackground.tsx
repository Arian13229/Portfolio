'use client'

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated gradient orbs - random positions and slower pulse */}
      <div className="absolute top-[15%] left-[20%] w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-15 blur-3xl animate-slow-pulse"></div>
      <div className="absolute top-[70%] right-[15%] w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-12 blur-3xl animate-slow-pulse animation-delay-800"></div>
      <div className="absolute top-[45%] left-[60%] w-72 h-72 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-10 blur-3xl animate-slow-pulse animation-delay-1600"></div>
      <div className="absolute top-[25%] right-[40%] w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-8 blur-3xl animate-slow-pulse animation-delay-1200"></div>
      <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-12 blur-3xl animate-slow-pulse animation-delay-400"></div>
      
      {/* Floating geometric shapes - only small uniform circles */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 opacity-30 rounded-full animate-float"></div>
      <div className="absolute top-40 left-40 w-3 h-3 bg-green-500 opacity-25 rounded-full animate-float animation-delay-200"></div>
      <div className="absolute bottom-40 right-40 w-3 h-3 bg-purple-500 opacity-35 rounded-full animate-float animation-delay-400"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-pink-500 opacity-30 rounded-full animate-float animation-delay-600"></div>
      <div className="absolute top-60 right-60 w-3 h-3 bg-yellow-500 opacity-40 rounded-full animate-float animation-delay-800"></div>
    </div>
  )
}
