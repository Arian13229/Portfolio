'use client'

import ThemeToggle from './components/ui/ThemeToggle'
import ParticleBackground from './components/ui/ParticleBackground'
import GradientBackground from './components/ui/GradientBackground'
import LoadingScreen from './components/ui/LoadingScreen'
import Hero from './components/sections/Hero'
import Statistics from './components/sections/Statistics'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import CV from './components/sections/CV'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative">
        <ParticleBackground />
        <GradientBackground />
        <ThemeToggle />
        
        <Hero />
        <About />
        <Statistics />
        <Projects />
        <CV />
        <Contact />
        <Footer currentYear={currentYear} />
    </div>
    </>
  )
} 