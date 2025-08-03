'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaDownload } from 'react-icons/fa'

export default function CVPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Arian Hakopian</h1>
              <p className="text-xl text-blue-100">Software Development Student</p>
              <p className="text-blue-100">HAN University of Applied Sciences</p>
            </div>
            <a
              href="/cv.pdf"
              download
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2"
            >
              <FaDownload />
              Download PDF
            </a>
          </div>
        </div>

        <div className="p-8">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Contact</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-600" />
                  <a href="mailto:arianhakopian@icloud.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600">
                    arianhakopian@icloud.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-blue-600" />
                  <span className="text-slate-600 dark:text-slate-300">+31 6 12345678</span>
                </div>
                                 <div className="flex items-center gap-3">
                   <FaMapMarkerAlt className="text-blue-600" />
                   <span className="text-slate-600 dark:text-slate-300">Nijmegen, Nederland</span>
                 </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Social Media</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaLinkedin className="text-blue-600" />
                  <a 
                    href="https://www.linkedin.com/in/arian-hakopian-7055322b5/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600"
                  >
                    linkedin.com/in/arian-hakopian-7055322b5
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaGithub className="text-blue-600" />
                  <a 
                    href="https://github.com/Arian13229" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600"
                  >
                    github.com/Arian13229
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Profile */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Profiel</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Vierdejaars student Software Development aan de Hogeschool van Arnhem en Nijmegen (HAN) 
              met een passie voor moderne webtechnologieën. Ik ben gedreven om elegante en gebruiksvriendelijke 
              applicaties te ontwikkelen die echte problemen oplossen. Mijn expertise ligt in React, Next.js, 
              TypeScript en Tailwind CSS.
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Opleiding</h2>
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">HBO Software Development</h3>
                <p className="text-blue-600 font-medium">HAN University of Applied Sciences</p>
                <p className="text-slate-600 dark:text-slate-300">2021 - Heden</p>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  Focus op moderne webdevelopment, software engineering en agile development methoden.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Vaardigheden</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Backend & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Git</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">GitHub</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">VS Code</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Agile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Projecten</h2>
            <div className="space-y-6">
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Portfolio Website</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Een moderne, responsive portfolio website gebouwd met Next.js, TypeScript en Tailwind CSS. 
                  Bevat animaties en is geoptimaliseerd voor performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">TypeScript</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Tailwind CSS</span>
                </div>
                <a 
                  href="https://github.com/Arian13229" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Bekijk op GitHub →
                </a>
              </div>
            </div>
          </div>

                     {/* Languages */}
           <div className="mb-8">
             <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Talen</h2>
             <div className="grid md:grid-cols-3 gap-4">
               <div>
                 <span className="font-semibold text-slate-800 dark:text-white">Armeens</span>
                 <p className="text-slate-600 dark:text-slate-300">Moedertaal</p>
               </div>
               <div>
                 <span className="font-semibold text-slate-800 dark:text-white">Nederlands</span>
                 <p className="text-slate-600 dark:text-slate-300">Vloeiend</p>
               </div>
               <div>
                 <span className="font-semibold text-slate-800 dark:text-white">Engels</span>
                 <p className="text-slate-600 dark:text-slate-300">Vloeiend</p>
               </div>
             </div>
           </div>

          {/* Back to Home */}
          <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-700">
            <a
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Terug naar Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 