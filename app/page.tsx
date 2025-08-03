'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 animate-slide-up">
            Hallo, ik ben{' '}
            <span className="text-blue-600 dark:text-blue-400">Arian Hakopian</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 animate-slide-up animation-delay-200">
            Software Developer & Student
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up animation-delay-400">
            <a
              href="#about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Meer over mij
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Bekijk projecten
            </a>
            <a
              href="/cv"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Bekijk CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-slate-800">
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
      <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Projecten
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-1 gap-8 animate-on-scroll animation-delay-200">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  Portfolio Website
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Een moderne, responsive portfolio website gebouwd met Next.js, TypeScript en Tailwind CSS. 
                  De website bevat animaties met Framer Motion en is volledig geoptimaliseerd voor performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Next.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    TypeScript
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Tailwind CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Laten we samenwerken!
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
    </div>
  )
} 