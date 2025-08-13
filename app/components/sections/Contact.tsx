'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
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
              href="mailto:arianhakopian@icloud.com?subject=Contact%20via%20Portfolio&body=Hallo%20Arian,%0A%0A"
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
              Bekijk overzicht
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
