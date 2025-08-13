'use client'

import { FaGraduationCap, FaHeart, FaGamepad, FaDumbbell, FaFistRaised, FaMusic, FaCode, FaUsers, FaGem, FaLightbulb, FaRocket, FaUser } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Over mij
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Wie ik ben en wat ik leuk vind om te doen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Introductie */}
          <div className="animate-on-scroll">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <FaUser className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Wie ben ik?</h3>
              </div>
              <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
                <p>
                  Ik ben een vierdejaars student Software Development aan de Hogeschool van Arnhem en Nijmegen (HAN). 
                  Ik hou ervan om elegante en gebruiksvriendelijke applicaties te bouwen die echte problemen oplossen.
                </p>
                <p>
                  Mijn focus ligt op het creëren van intuïtieve gebruikerservaringen en het schrijven van schone, 
                  onderhoudbare code. Ik ben altijd op zoek naar nieuwe uitdagingen en mogelijkheden om te groeien 
                  als developer.
                </p>
              </div>
            </div>
          </div>

          {/* Persoonlijke Informatie */}
          <div className="animate-on-scroll animation-delay-200">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <FaHeart className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Wat maakt mij uniek?</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-slate-200 dark:bg-slate-700 p-2 rounded-lg mt-1">
                    <FaGem className="text-slate-600 dark:text-slate-300 text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-1">Perfectionistisch</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Ik streef naar kwaliteit in elke regel code en let op de kleinste details
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-slate-200 dark:bg-slate-700 p-2 rounded-lg mt-1">
                    <FaGraduationCap className="text-slate-600 dark:text-slate-300 text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-1">Leergierig</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Altijd nieuwsgierig naar nieuwe technologieën en best practices in de development wereld
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-slate-200 dark:bg-slate-700 p-2 rounded-lg mt-1">
                    <FaUsers className="text-slate-600 dark:text-slate-300 text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-1">Teamspeler</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Werk graag samen met anderen en deel kennis om samen betere resultaten te behalen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbys & Interesses */}
        <div className="mt-16 animate-on-scroll animation-delay-400">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Mijn hobbys & interesses
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Wat ik doe wanneer ik niet aan het werken ben
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGamepad className="text-2xl text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Gaming</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Games met een leuk verhaal en hoge moeilijkheidsgraad voor de ultieme uitdaging
              </p>
            </div>

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaDumbbell className="text-2xl text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Gewichtheffen</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Kracht opbouwen en fysiek fit blijven voor mentale balans
              </p>
            </div>

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFistRaised className="text-2xl text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">(Kick)boksen</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Techniek verfijnen en conditie verbeteren door vechtsporten
              </p>
            </div>

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMusic className="text-2xl text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Muziek</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Verschillende genres ontdekken en genieten van goede muziek
              </p>
            </div>

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-2xl text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Side Projects</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Experimenteren met nieuwe technologieën in persoonlijke projecten
              </p>
            </div>

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Vrienden & Familie</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Quality time doorbrengen en leuke activiteiten ondernemen met dierbaren
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
