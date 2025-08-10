'use client'

import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  return (
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
  )
}
