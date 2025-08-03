import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollAnimation from './components/ScrollAnimation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Arian Hakopian',
  description: 'Persoonlijke portfolio website van Arian Hakopian, Software Development student – HAN University of Applied Sciences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <ScrollAnimation />
        {children}
      </body>
    </html>
  )
} 