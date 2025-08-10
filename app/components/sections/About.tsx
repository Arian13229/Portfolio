'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative z-10">
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
            Mijn expertise ligt in moderne webtechnologieën zoals React, Next.js, TypeScript, en Tailwind CSS. 
            Ik ben altijd op zoek naar nieuwe uitdagingen en mogelijkheden om mijn vaardigheden verder te ontwikkelen.
          </p>
        </div>
      </div>
    </section>
  )
}
