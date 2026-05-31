'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const HEADER_OFFSET = 116
const VISIBILITY_OFFSET = 140

const sections = [
  { id: 'about', label: '라비온 소개' },
  { id: 'services', label: '진료케이스' },
  { id: 'staff', label: '의료진' },
  { id: 'facilities', label: '시설·장비' },
  { id: 'location', label: '오시는 길' },
]

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState<string>('about')
  const [isVisible, setIsVisible] = useState(false)

  const sectionIds = useMemo(() => sections.map((section) => section.id), [])

  useEffect(() => {
    const getSectionTop = (id: string) => {
      const element = document.getElementById(id)
      if (!element) return Number.POSITIVE_INFINITY
      return element.getBoundingClientRect().top + window.scrollY
    }

    const updateIndicator = () => {
      const hero = document.getElementById('hero')
      const heroBottom = hero ? hero.getBoundingClientRect().bottom + window.scrollY : window.innerHeight
      const currentY = window.scrollY + HEADER_OFFSET + VISIBILITY_OFFSET

      setIsVisible(window.scrollY > heroBottom - VISIBILITY_OFFSET)

      let current = sectionIds[0]

      for (const id of sectionIds) {
        const top = getSectionTop(id)
        if (currentY >= top) {
          current = id
        }
      }

      setActiveSection(current)
    }

    updateIndicator()
    window.addEventListener('scroll', updateIndicator, { passive: true })
    window.addEventListener('resize', updateIndicator)

    return () => {
      window.removeEventListener('scroll', updateIndicator)
      window.removeEventListener('resize', updateIndicator)
    }
  }, [sectionIds])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const targetTop = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    setActiveSection(id)

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.25 }}
          className="fixed left-0 right-0 top-24 z-40 hidden justify-center px-4 md:flex"
        >
          <nav
            aria-label="메인 페이지 섹션 바로가기"
            className="inline-flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full border border-[#dbe7f3] bg-white/95 p-1.5 shadow-lg shadow-[#00377b]/10 backdrop-blur-md"
          >
            {sections.map((section) => {
              const isActive = activeSection === section.id

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleClick(section.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative shrink-0 break-keep rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300',
                    isActive ? 'text-white' : 'text-[#64748b] hover:text-[#00377b]'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-full bg-[#00377b]"
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{section.label}</span>
                </button>
              )
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
