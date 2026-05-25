'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Camera, ArrowRight } from 'lucide-react'
import { facilities } from '@/data/hospitalData'
import { cn } from '@/lib/utils'

export default function Facilities() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const totalSlides = facilities.length
  const visibleSlides = 3

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= totalSlides - visibleSlides ? prev : prev + 1))
  }

  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < totalSlides - visibleSlides

  return (
    <section id="facilities" className="section-padding bg-[#f8fafc]">
      <div className="container-custom">
        {/* Header with Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#1da8fc] uppercase mb-2">
              Facilities & Equipment
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
              시설 및 장비
            </h2>
          </div>

          {/* Navigation + Link */}
          <div className="flex items-center gap-4">
            <Link
              href="/facilities"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[#00377b] hover:text-[#1da8fc] transition-colors"
            >
              전체 보기
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={!canGoPrev}
                className={cn(
                  'w-10 h-10 flex items-center justify-center rounded-full border border-[#e2e8f0] transition-all duration-200',
                  canGoPrev 
                    ? 'text-[#0f172a] hover:border-[#0f172a] hover:bg-[#0f172a] hover:text-white' 
                    : 'text-[#cbd5e1] cursor-not-allowed'
                )}
                aria-label="이전"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={cn(
                  'w-10 h-10 flex items-center justify-center rounded-full border border-[#e2e8f0] transition-all duration-200',
                  canGoNext 
                    ? 'text-[#0f172a] hover:border-[#0f172a] hover:bg-[#0f172a] hover:text-white' 
                    : 'text-[#cbd5e1] cursor-not-allowed'
                )}
                aria-label="다음"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Seamless Carousel */}
        <div className="relative overflow-hidden -mx-4 px-4" ref={containerRef}>
          <motion.div
            className="flex"
            animate={{ x: `calc(-${currentIndex * (100 / visibleSlides)}% - ${currentIndex * 0}px)` }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {facilities.map((facility, idx) => (
              <div
                key={facility.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pr-0"
                style={{ paddingRight: idx === facilities.length - 1 ? 0 : '2px' }}
              >
                <div className="group relative overflow-hidden bg-[#e8edf5]">
                  {/* Image Container - 이미지가 자연스럽게 연결 */}
                  <div className="relative aspect-[4/3]">
                    {facility.image ? (
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#e8edf5]">
                        <Camera className="w-16 h-16 text-[#00377b]/15" strokeWidth={1} />
                        <span className="text-xs font-medium text-[#00377b]/30 tracking-widest uppercase">
                          Photo Coming Soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content - 이미지 아래 */}
                  <div className="bg-white p-5">
                    <h3 className="text-base font-bold text-[#0f172a] mb-1">
                      {facility.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed line-clamp-2">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="h-0.5 bg-[#e2e8f0] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#0f172a]"
              initial={{ width: 0 }}
              animate={{ 
                width: `${((currentIndex + visibleSlides) / totalSlides) * 100}%` 
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
