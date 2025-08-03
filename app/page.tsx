'use client'

import { useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import ThemeToggle from './components/ThemeToggle'
import ParticleBackground from './components/ParticleBackground'
import GradientBackground from './components/GradientBackground'
import LoadingScreen from './components/LoadingScreen'
import GitHubStats from './components/GitHubStats'

export default function Home() {
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const targetPosition = element.offsetTop - 80
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      const duration = 1200
      let start: number | null = null

      function animation(currentTime: number) {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const run = ease(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }

      function ease(t: number, b: number, c: number, d: number) {
        t /= d / 2
        if (t < 1) return (c / 2) * t * t + b
        t--
        return (-c / 2) * (t * (t - 2) - 1) + b
      }

      requestAnimationFrame(animation)
    }
  }

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative">
        <ParticleBackground />
        <GradientBackground />
        <ThemeToggle />
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 animate-slide-up">
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden border-4 animate-heartbeat animate-border-rotate shadow-xl">
              <img 
                src="/profile-placeholder.svg" 
                alt="Arian Hakopian" 
                className="w-full h-full object-cover bg-slate-200 dark:bg-slate-700"
              />
            </div>
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 animate-slide-up animation-delay-100">
            Hallo, ik ben{' '}
            <span className="text-blue-600 dark:text-blue-400">Arian Hakopian</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 animate-slide-up animation-delay-200">
            Software Developer & Student
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl mx-auto animate-slide-up animation-delay-400">
            <button
              onClick={() => smoothScrollTo('about')}
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1 border border-indigo-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center gap-2 text-sm lg:text-base">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Over mij
              </span>
            </button>
            
            <button
              onClick={() => smoothScrollTo('stats')}
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1 border border-indigo-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center gap-2 text-sm lg:text-base">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Statistieken
              </span>
            </button>
            
            <button
              onClick={() => smoothScrollTo('projects')}
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1 border border-indigo-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center gap-2 text-sm lg:text-base">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Projecten
              </span>
            </button>
            
            <button
              onClick={() => smoothScrollTo('cv-highlights')}
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1 border border-indigo-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center gap-2 text-sm lg:text-base">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                CV Highlights
              </span>
            </button>
            
            <button
              onClick={() => smoothScrollTo('contact')}
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1 border border-indigo-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center gap-2 text-sm lg:text-base">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* GitHub Statistics Section */}
      <section id="stats" className="py-20 px-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Statistieken
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Een overzicht van mijn ontwikkelervaring en GitHub activiteit
            </p>
          </div>
          <GitHubStats />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Over mij
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed animate-on-scroll animation-delay-200">
            <p className="mb-6">
              Ik ben een vierdejaars student Software Development aan de Hogeschool van Arnhem en Nijmegen (HAN), 
              met een passie voor software- en webdevelopment. Ik hou ervan om elegante en gebruiksvriendelijke 
              applicaties te bouwen die echte problemen oplossen.
            </p>
            <p>
              Mijn expertise ligt in ...
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Projecten
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-1 gap-8 animate-on-scroll animation-delay-200">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  Portfolio Website
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Een moderne, responsive portfolio website gebouwd met Next.js, TypeScript en Tailwind CSS. 
                  De website bevat animaties met Framer Motion en is volledig geoptimaliseerd voor performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    Next.js
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    TypeScript
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    Tailwind CSS
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    Framer Motion
                  </span>
                </div>
                <a
                  href="https://github.com/Arian13229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <FaGithub className="text-lg" />
                  Bekijk op GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Highlights Section */}
      <section id="cv-highlights" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              CV Highlights
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              De belangrijkste hoogtepunten uit mijn curriculum vitae
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-on-scroll animation-delay-200">
            {/* Opleiding */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200/30 dark:border-slate-700/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Opleiding</h3>
              </div>
              <div className="space-y-4 max-h-52 overflow-y-auto custom-scrollbar">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-slate-800 dark:text-white">HBO Software Development</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">HAN University of Applied Sciences</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">2021 - Heden</p>
                </div>
              </div>
            </div>

            {/* Technische Skills */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200/30 dark:border-slate-700/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Technische Skills</h3>
              </div>
              <div className="max-h-52 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-2 gap-3 pr-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded-lg text-sm font-medium">JavaScript</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded-lg text-sm font-medium">TypeScript</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded-lg text-sm font-medium">React</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded-lg text-sm font-medium">Next.js</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded-lg text-sm font-medium">Node.js</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded-lg text-sm font-medium">Git</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-2 rounded-lg text-sm font-medium">Vue.js</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-2 rounded-lg text-sm font-medium">Angular</span>
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-2 rounded-lg text-sm font-medium">Java</span>
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-2 rounded-lg text-sm font-medium">Haskell</span>
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-2 rounded-lg text-sm font-medium">C#</span>
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-2 rounded-lg text-sm font-medium">PHP</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-2 rounded-lg text-sm font-medium">SQL</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-2 rounded-lg text-sm font-medium">MongoDB</span>
                  <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-2 rounded-lg text-sm font-medium">TailwindCSS</span>
                  <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-2 rounded-lg text-sm font-medium">Bootstrap</span>
                  <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-2 rounded-lg text-sm font-medium">Docker</span>
                  <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-2 rounded-lg text-sm font-medium">HTML5</span>
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-2 rounded-lg text-sm font-medium">CSS3</span>
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-2 rounded-lg text-sm font-medium">GraphQL</span>
                  <span className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-3 py-2 rounded-lg text-sm font-medium">REST API</span>
                </div>
              </div>
            </div>

            {/* Ervaring */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200/30 dark:border-slate-700/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6m0 0v2m0-2a2 2 0 00-2-2H10a2 2 0 00-2 2v0m8 0V8a2 2 0 00-2 2H10a2 2 0 00-2-2V6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Ervaring</h3>
              </div>
              <div className="space-y-4 max-h-52 overflow-y-auto custom-scrollbar">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-slate-800 dark:text-white">Meewerkstage Software Developer</h4>
                  <p className="text-green-600 dark:text-green-400 font-medium">GorillaIT</p>
                  <p className="text-slate-600 dark:text-slate-300">Arnhem, Gelderland, Nederland · Hybride</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Februari 2025 - Juni 2025 · 5 maanden</p>
                </div>
              </div>
            </div>

            {/* Certificaten */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200/30 dark:border-slate-700/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Certificaten</h3>
              </div>
              <div className="space-y-3 max-h-52 overflow-y-auto custom-scrollbar">
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">In ontwikkeling</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Diverse certificeringen zijn gepland voor de komende periode</p>
                </div>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="text-center animate-on-scroll animation-delay-400">
            <a
              href="/cv.pdf"
              download="Arian_Hakopian_CV.pdf"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1 border border-emerald-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <span className="relative flex items-center gap-3">
                <svg className="w-6 h-6 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Volledige CV
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Contact
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Interesse in samenwerking of heb je een vraag? Ik sta altijd open voor nieuwe uitdagingen en interessante projecten.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-on-scroll animation-delay-200">
            {/* Email Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">E-mail</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Stuur me een bericht voor vragen of samenwerking
              </p>
              <a
                href="mailto:arianhakopian@icloud.com"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <FaEnvelope className="text-lg" />
                Stuur e-mail
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLinkedin className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">LinkedIn</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Bekijk mijn professionele profiel en connect
              </p>
              <a
                href="https://www.linkedin.com/in/arian-hakopian-7055322b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <FaLinkedin className="text-lg" />
                Bekijk profiel
              </a>
            </div>

            {/* GitHub Card */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGithub className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">GitHub</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Bekijk mijn projecten en code repositories
              </p>
              <a
                href="https://github.com/Arian13229"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <FaGithub className="text-lg" />
                Bekijk code
              </a>
            </div>
          </div>


        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-20 px-4 relative z-10 text-slate-800 dark:text-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Arian Hakopian</h3>
              <p className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
                Vierdejaars student Software Development aan de HAN University of Applied Sciences. 
                Passioneel over moderne webtechnologieën en het bouwen van elegante applicaties.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:arianhakopian@icloud.com?subject=Contact%20via%20portfolio&body=Hallo%20Arian%2C%20ik%20neem%20contact%20met%20je%20op%20via%20je%20portfolio%20website."
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-300"
                >
                  <FaEnvelope className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arian-hakopian-7055322b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-300"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/Arian13229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500 text-white p-3 rounded-lg transition-colors duration-300"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Snelle Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => window.location.href = '/'} className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300">
                    Homepage
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo('about')} className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300">
                    Over mij
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo('stats')} className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300">
                    Statistieken
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo('projects')} className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300">
                    Projecten
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo('contact')} className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300">
                    Contact
                  </button>
                </li>
                <li>
                  <a href="/cv" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300">
                    CV
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-500 dark:text-blue-400" />
                  <a 
                    href="mailto:arianhakopian@icloud.com?subject=Contact%20via%20portfolio&body=Hallo%20Arian%2C%20ik%20neem%20contact%20met%20je%20op%20via%20je%20portfolio%20website."
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300"
                  >
                    arianhakopian@icloud.com
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Nijmegen, Nederland
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-300 dark:border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm mb-4 md:mb-0 text-slate-600 dark:text-slate-300">
                © {currentYear} Arian Hakopian. Alle rechten voorbehouden.
              </p>
              <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
                <span>Gemaakt met</span>
                <FaHeart className="text-red-500 animate-pulse" />
                <span>in Nederland</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
} 