'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { facilities } from '@/data/hospitalData'

// 카테고리 정의
const categories = [
  { id: 'all', label: '전체' },
  { id: 'diagnosis', label: '진단 장비' },
  { id: 'surgery', label: '수술 장비' },
  { id: 'care', label: '입원/케어' },
]

// 시설에 카테고리 매핑 (실제 데이터에 추가 가능)
const facilitiesWithCategory = facilities.map((f) => ({
  ...f,
  category: f.title.includes('초음파') || f.title.includes('X-ray') || f.title.includes('혈액')
    ? 'diagnosis'
    : f.title.includes('수술') || f.title.includes('마취')
    ? 'surgery'
    : 'care',
}))

export default function FacilitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredFacilities = selectedCategory === 'all'
    ? facilitiesWithCategory
    : facilitiesWithCategory.filter((f) => f.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const goToPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredFacilities.length - 1 : lightboxIndex - 1)
    }
  }

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredFacilities.length - 1 ? 0 : lightboxIndex + 1)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-[#00377b] pt-28 pb-16">
        <div className="container-custom">
          <Link
            href="/#facilities"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            메인으로 돌아가기
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#1da8fc] text-sm font-medium tracking-widest uppercase mb-3">
              Facilities & Equipment
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              시설 및 장비 안내
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              라비온 동물의료센터는 정확한 진단과 안전한 치료를 위해<br className="hidden sm:block" />
              최신 의료 장비를 갖추고 있습니다.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-20 z-30 bg-white border-b border-[#e2e8f0]">
        <div className="container-custom py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#00377b] text-white'
                    : 'bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFacilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
              >
                <div
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#e8edf5] rounded-xl mb-4">
                    {facility.image ? (
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <Camera className="w-16 h-16 text-[#00377b]/15" strokeWidth={1} />
                        <span className="text-xs font-medium text-[#00377b]/30 tracking-widest uppercase">
                          Photo Coming Soon
                        </span>
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#00377b]/0 group-hover:bg-[#00377b]/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        자세히 보기
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-xs text-[#1da8fc] font-medium uppercase tracking-wider">
                      {categories.find((c) => c.id === facility.category)?.label}
                    </span>
                    <h3 className="text-lg font-bold text-[#0f172a] mt-1 mb-2 group-hover:text-[#00377b] transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredFacilities.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#94a3b8]">해당 카테고리의 시설이 없습니다.</p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-[#f8fafc] py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
              최신 장비로 정확한 진단을 약속합니다
            </h2>
            <p className="text-[#64748b] leading-relaxed mb-8">
              라비온 동물의료센터는 대학병원급 의료 장비를 갖추고 정밀한 진단과 안전한 치료를 제공합니다.
              심장 초음파, 디지털 X-ray, 혈액 검사 등 다양한 검사를 원내에서 신속하게 진행할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0507-1381-2786"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00377b] text-white rounded-full font-medium hover:bg-[#002a5c] transition-colors"
              >
                전화 예약
              </a>
              <a
                href="https://pf.kakao.com/_xfLxgxj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FEE500] text-[#3C1E1E] rounded-full font-medium hover:bg-[#e6cf00] transition-colors"
              >
                카카오톡 상담
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content */}
            <div
              className="max-w-4xl w-full mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] bg-[#1a1a1a] rounded-xl overflow-hidden mb-4">
                {filteredFacilities[lightboxIndex]?.image ? (
                  <Image
                    src={filteredFacilities[lightboxIndex].image}
                    alt={filteredFacilities[lightboxIndex].title}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <Camera className="w-20 h-20 text-white/20" strokeWidth={1} />
                    <span className="text-white/40 text-sm">Photo Coming Soon</span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {filteredFacilities[lightboxIndex]?.title}
                </h3>
                <p className="text-white/60">
                  {filteredFacilities[lightboxIndex]?.description}
                </p>
                <p className="text-white/40 text-sm mt-4">
                  {lightboxIndex + 1} / {filteredFacilities.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
