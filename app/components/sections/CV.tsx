'use client'

export default function CV() {
  return (
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
  )
}
