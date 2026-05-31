'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Camera, MoveHorizontal } from 'lucide-react'
import { facilities } from '@/data/hospitalData'
import { useCmsContent } from '@/components/providers/CmsProvider'

export default function Facilities() {
  const cms = useCmsContent()
  const facilityItems = cms?.facilities?.length ? cms.facilities : facilities
  return (
    <section id="facilities" className="section-padding bg-[#f8fafc]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-14"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#1da8fc]">LABION SPACE</p>
            <h2 className="break-keep text-3xl font-bold leading-tight text-[#0f172a] sm:text-4xl md:text-5xl">
              편안하고 안정적인 진료 공간
            </h2>
            <p className="mt-4 max-w-2xl break-keep text-sm leading-relaxed text-[#64748b] md:text-base">
              라비온은 보호자와 반려동물이 편안하게 머무를 수 있도록 깨끗하고 안정적인 진료 환경을 준비합니다.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#94a3b8] md:hidden">
              <MoveHorizontal className="h-4 w-4" />
              공간 이미지를 좌우로 밀어보세요
            </p>
          </div>
          <Link href="/facilities" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#00377b] transition-colors hover:text-[#1da8fc]">
            시설·장비 자세히 보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {facilityItems.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.04 }}
              className={`group relative min-h-[320px] min-w-[82vw] snap-center overflow-hidden rounded-2xl border border-[#e2e8f0] bg-[#e8edf5] sm:min-w-[58vw] md:min-w-0 ${index === 0 ? 'md:col-span-2 md:row-span-2 md:min-h-[420px]' : 'md:min-h-[280px]'}`}
            >
              {facility.image ? (
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#eaf6ff] to-[#eef2f7]">
                  <Camera className="h-14 w-14 text-[#00377b]/18" strokeWidth={1} />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00377b]/35">Photo Coming Soon</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/78 via-[#0f172a]/18 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="break-keep mb-2 text-lg font-bold">{facility.title}</h3>
                <p className="break-keep text-sm leading-relaxed text-white/74 md:line-clamp-2">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
