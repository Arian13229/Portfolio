'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaCodeBranch, FaGithub, FaFileCode } from 'react-icons/fa'

interface GitHubStats {
  experience: number
  publicRepos: number
  totalCommits: number
  linesOfCode: number
}

interface GitHubRepo {
  name: string
  fork: boolean
}

interface GitHubLanguages {
  [language: string]: number
}

export default function Statistics() {
  const GITHUB_USERNAME = 'Arian13229'
  const START_YEAR = 2021
  const MAX_REPOS_TO_PROCESS = 20
  const API_DELAY_MS = 100
  const LINES_OF_CODE_DIVISOR = 50

  const [stats, setStats] = useState<GitHubStats>({
    experience: 0,
    publicRepos: 0,
    totalCommits: 0,
    linesOfCode: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const currentYear = new Date().getFullYear()
        const experience = currentYear - START_YEAR

        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        const userData = await userResponse.json()

        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
        const reposData: GitHubRepo[] = await reposResponse.json()

        const ownRepos = reposData.filter((repo) => !repo.fork)

        let totalCommits = 0
        let totalLinesOfCode = 0

        for (const repo of ownRepos.slice(0, MAX_REPOS_TO_PROCESS)) {
          try {
            const commitsResponse = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=1`)
            if (commitsResponse.ok) {
              const linkHeader = commitsResponse.headers.get('Link')
              if (linkHeader) {
                const lastPageMatch = linkHeader.match(/page=(\d+)>; rel="last"/)
                if (lastPageMatch) {
                  totalCommits += parseInt(lastPageMatch[1])
                } else {
                  const commitsData = await commitsResponse.json()
                  totalCommits += commitsData.length
                }
              } else {
                const commitsData = await commitsResponse.json()
                totalCommits += commitsData.length
              }
            }

            const languagesResponse = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/languages`)
            if (languagesResponse.ok) {
              const languagesData: GitHubLanguages = await languagesResponse.json()
              const repoLinesOfCode = Object.values(languagesData).reduce((sum: number, bytes: number) => sum + bytes, 0)
              totalLinesOfCode += repoLinesOfCode
            }

            await new Promise(resolve => setTimeout(resolve, API_DELAY_MS))
          } catch (repoError) {
            if (process.env.NODE_ENV === 'development') {
              console.warn(`Error fetching data for repo ${repo.name}:`, repoError)
            }
          }
        }

        const estimatedLinesOfCode = Math.round(totalLinesOfCode / LINES_OF_CODE_DIVISOR)

        setStats({
          experience,
          publicRepos: userData.public_repos || 0,
          totalCommits,
          linesOfCode: estimatedLinesOfCode
        })
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error fetching GitHub stats:', error)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  const statItems = [
    {
      icon: FaCode,
      value: stats.experience,
      label: 'Jaren ervaring',
      suffix: '',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaGithub,
      value: stats.publicRepos,
      label: 'Projecten voltooid',
      suffix: '',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaCodeBranch,
      value: stats.totalCommits,
      label: 'Code commits',
      suffix: '',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaFileCode,
      value: stats.linesOfCode,
      label: 'Lines of code',
      suffix: '',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const hoverVariants = {
    scale: 1.05,
    y: -5,
    transition: { duration: 0.3 }
  }

  const tapVariants = {
    scale: 0.95
  }

  return (
    <section id="stats" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Statistieken
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Een overzicht van mijn ontwikkelervaring en GitHub activiteit
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg transition-all duration-500 border border-slate-200/20 dark:border-slate-700/20 text-center hover:shadow-2xl"
              whileHover={hoverVariants}
              whileTap={tapVariants}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl mb-6 shadow-lg mx-auto`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="relative text-4xl font-bold text-slate-800 dark:text-white mb-4">
                {loading ? (
                  <div className="animate-pulse bg-slate-300 dark:bg-slate-600 h-12 w-24 rounded mx-auto"></div>
                ) : (
                  <span className="bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                    {item.value.toLocaleString()}
                    {item.suffix}
                  </span>
                )}
              </div>
              
              <p className="relative text-slate-600 dark:text-slate-300 font-medium text-lg group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                {item.label}
              </p>
              
              <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${item.color}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
