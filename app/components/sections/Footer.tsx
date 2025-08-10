'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

interface FooterProps {
  currentYear: number
}

export default function Footer({ currentYear }: FooterProps) {
  return (
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
                href="mailto:arianhakopian@icloud.com?subject=Contact%20via%20Portfolio&body=Hallo%20Arian,%0A%0A"
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
                <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300">
                  Homepage
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300">
                  Over mij
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300">
                  Statistieken
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300">
                  Projecten
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300">
                  Contact
                </a>
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
                  href="mailto:arianhakopian@icloud.com?subject=Contact%20via%20Portfolio&body=Hallo%20Arian,%0A%0A"
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
  )
}
