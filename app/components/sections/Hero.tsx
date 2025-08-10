'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const smoothScrollTo = (targetPosition: number, duration: number = 1000) => {
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const startTime = performance.now()

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      
      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : -1 + (4 - 2 * progress) * progress

      window.scrollTo(0, startPosition + distance * ease)

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      smoothScrollTo(offsetTop, 800)
    }
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const slideUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const profileHoverVariants = {
    scale: 1.05
  }

  const titleHoverVariants = {
    color: "#3b82f6"
  }

  const buttonHoverVariants = {
    scale: 1.05,
    y: -2
  }

  const buttonTapVariants = {
    scale: 0.95
  }

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center px-4 relative z-10"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <motion.div 
        className="text-center max-w-4xl mx-auto"
        variants={fadeInVariants}
      >
        <motion.div 
          className="mb-8"
          variants={slideUpVariants}
          whileHover={profileHoverVariants}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden border-4 animate-heartbeat animate-border-rotate shadow-xl">
            <img 
              src="/profile-placeholder.svg" 
              alt="Arian Hakopian" 
              className="w-full h-full object-cover bg-slate-200 dark:bg-slate-700"
            />
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6"
          variants={slideUpVariants}
        >
          Hallo, ik ben{' '}
          <motion.span 
            className="text-blue-600 dark:text-blue-400"
            whileHover={titleHoverVariants}
            transition={{ duration: 0.3 }}
          >
            Arian Hakopian
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8"
          variants={slideUpVariants}
        >
          Software Developer & Student
        </motion.p>
        
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl mx-auto"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-500 border border-indigo-500/20 flex items-center justify-center text-center"
            whileHover={buttonHoverVariants}
            whileTap={buttonTapVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative flex items-center justify-center gap-2 text-sm lg:text-base">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Over mij
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('stats')}
            className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-500 border border-indigo-500/20 flex items-center justify-center text-center"
            whileHover={buttonHoverVariants}
            whileTap={buttonTapVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative flex items-center justify-center gap-2 text-sm lg:text-base">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Statistieken
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-500 border border-indigo-500/20 flex items-center justify-center text-center"
            whileHover={buttonHoverVariants}
            whileTap={buttonTapVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative flex items-center justify-center gap-2 text-sm lg:text-base">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Projecten
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('cv-highlights')}
            className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-500 border border-indigo-500/20 flex items-center justify-center text-center"
            whileHover={buttonHoverVariants}
            whileTap={buttonTapVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative flex items-center justify-center gap-2 text-sm lg:text-base">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV Highlights
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-500 border border-indigo-500/20 flex items-center justify-center text-center"
            whileHover={buttonHoverVariants}
            whileTap={buttonTapVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative flex items-center justify-center gap-2 text-sm lg:text-base">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  )
}
