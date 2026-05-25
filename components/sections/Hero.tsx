'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Volume2, VolumeX, Phone } from 'lucide-react'
import { hospitalInfo } from '@/data/hospitalData'

// 영상 교체 방법:
// 1. /public/video/ 폴더에 hero.mp4 파일을 넣으세요
// 2. VIDEO_SRC 값을 '/video/hero.mp4' 로 변경하세요
const VIDEO_SRC = '' // 영상 파일 경로 (비어있으면 이미지 슬라이더로 대체)

const SLIDES = [
  {
    headline: '내 가족을 진료한다는\n마음으로',
    sub: 'Ansan Premium Animal Medical Center',
    image: '/images/hero-fallback.jpg',
  },
  {
    headline: '전문 의료진이\n함께합니다',
    sub: '내과 · 외과 · 예방의학 전문 3인 협진',
    image: '/images/hero-fallback-2.jpg',
  },
]

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)

  // 슬라이드 자동 전환 (텍스트 + 이미지 동기화)
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  const hasVideo = VIDEO_SRC && !videoError

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden">

      {/* ── 배경: 비디오 or 이미지 슬라이더 ── */}
      {hasVideo ? (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${SLIDES[slideIndex].image})` }}
            />
          </AnimatePresence>
        </div>
      )}

      {/* ── 다층 오버레이 ── */}
      {/* 하단 텍스트 가독성을 위한 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      {/* 좌측 텍스트 영역 강조 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* ── 상단 좌측 로고 ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="absolute top-8 left-8 z-10 hidden lg:block"
      >
        <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-1">
          La Bion
        </p>
        <div className="w-8 h-px bg-white/30" />
      </motion.div>

      {/* ── 메인 콘텐츠 ── */}
      <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 sm:px-12 lg:px-20 max-w-[1400px] mx-auto left-0 right-0">

        {/* 브랜드 배지 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-[#1da8fc]" />
          <span className="text-[#1da8fc] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
            라비온 동물의료센터
          </span>
        </motion.div>

        {/* 헤드라인 슬라이더 */}
        <div className="relative h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] mb-8">
          <AnimatePresence mode="wait">
            <motion.h1
              key={slideIndex}
              initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-pre-line text-balance"
            >
              {SLIDES[slideIndex].headline}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* 서브텍스트 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-white/60 text-sm sm:text-base tracking-wide mb-10"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={slideIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {SLIDES[slideIndex].sub}
            </motion.span>
          </AnimatePresence>
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a
            href={`tel:${hospitalInfo.contact.phone}`}
            className="group inline-flex items-center gap-3 px-7 py-4 bg-[#00377b] hover:bg-[#1da8fc] text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>진료 예약</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 hover:border-white text-white text-sm font-medium rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            병원 소개 보기
          </a>
        </motion.div>

        {/* 진료시간 인포 바 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-white/15 pt-6"
        >
          {[
            { label: '진료시간', value: hospitalInfo.hours.weekday },
            { label: '휴게시간', value: hospitalInfo.hours.breakTime },
            { label: '접수마감', value: `오전 ${hospitalInfo.hours.lastReception.morning} / 오후 ${hospitalInfo.hours.lastReception.afternoon}` },
            { label: '운영', value: hospitalInfo.hours.holiday },
          ].map((item) => (
            <div key={item.label} className="flex items-baseline gap-2">
              <span className="text-white/40 text-[10px] tracking-widest uppercase">{item.label}</span>
              <span className="text-white/90 text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── 우측 슬라이드 인디케이터 ── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlideIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === slideIndex
                ? 'w-1.5 h-8 bg-[#1da8fc]'
                : 'w-1.5 h-3 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* ── 음소거 버튼 (영상 있을 때만 표시) ── */}
      {hasVideo && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={toggleMute}
          className="absolute bottom-24 right-8 z-10 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all"
          aria-label={muted ? '음소거 해제' : '음소거'}
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </motion.button>
      )}

      {/* ── 스크롤 유도 ── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      </motion.a>

    </section>
  )
}
