'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const sections = [
  { id: 'services', label: '진료 안내' },
  { id: 'cases', label: '진료 케이스' },
  { id: 'staff', label: '의료진 소개' },
  { id: 'facilities', label: '시설 및 장비' },
  { id: 'location', label: '오시는 길' },
]

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -50% 0px',
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0
      setIsVisible(window.scrollY > heroHeight - 100)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 right-0 z-40 flex justify-center"
        >
          <nav className="inline-flex items-center bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-[#e2e8f0] p-1.5">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleClick(section.id)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
                    activeSection === section.id
                      ? 'text-white'
                      : 'text-[#64748b] hover:text-[#0f172a]'
                  )}
                >
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-[#00377b] rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{section.label}</span>
                </button>
              ))}
            </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
