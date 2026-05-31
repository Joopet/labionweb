'use client'

import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Phone } from 'lucide-react'
import { hospitalInfo } from '@/data/hospitalData'
import { useCmsContent } from '@/components/providers/CmsProvider'

export default function Hero() {
  const cms = useCmsContent()
  const phone = cms?.site?.phone || hospitalInfo.contact.phone
  const hasVideo = Boolean(hospitalInfo.hero.videoUrl)
  const backgroundImage = hospitalInfo.hero.posterUrl || '/images/hero-fallback.jpg'

  return (
    <section id="hero" className="relative w-full h-screen min-h-[680px] overflow-hidden">
      {hasVideo ? (
        <video
          src={hospitalInfo.hero.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00377b]/65 via-black/10 to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="container-custom pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-px bg-[#1da8fc]" />
              <span className="break-keep text-[#1da8fc] text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold">
                {hospitalInfo.hero.badge}
              </span>
            </div>

            <h1 className="break-keep whitespace-pre-line text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-7">
              {hospitalInfo.hero.title}
            </h1>

            <p className="break-keep max-w-2xl text-base sm:text-lg text-white/76 leading-relaxed mb-10">
              {hospitalInfo.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#00377b] hover:bg-[#1da8fc] text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                전화 문의하기
              </a>
              <a
                href="#location"
                className="inline-flex items-center gap-3 px-7 py-4 border border-white/35 text-white text-sm font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                <MapPin className="w-4 h-4" />
                오시는 길 보기
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/55 hover:text-white transition-colors cursor-pointer z-10"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      </motion.a>
    </section>
  )
}
