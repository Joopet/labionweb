'use client'

import type { ElementType } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, HeartPulse, PawPrint, Scan, Scissors, Shield, Smile, Stethoscope } from 'lucide-react'
import { services } from '@/data/hospitalData'

const iconMap: Record<string, ElementType> = {
  Stethoscope,
  Scissors,
  Shield,
  Scan,
  Smile,
  HeartPulse,
  PawPrint,
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-[#1da8fc] uppercase mb-3">LABION CARE</p>
            <h2 className="break-keep text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-4">
              라비온 진료과목
            </h2>
            <p className="break-keep text-[#64748b] leading-relaxed max-w-2xl">
              예방관리부터 내과·외과 진료까지, 반려동물의 상태와 생활 환경을 고려해 필요한 진료를 안내합니다.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00377b] hover:text-[#1da8fc] transition-colors shrink-0"
          >
            진료과목 전체 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Stethoscope
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
              >
                <Link
                  href="/services"
                  className="group block h-full rounded-2xl border border-[#e2e8f0] bg-white p-6 hover:border-[#1da8fc]/40 hover:shadow-xl hover:shadow-[#00377b]/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#00377b]/8 flex items-center justify-center mb-5 group-hover:bg-[#00377b] transition-colors">
                    <Icon className="w-6 h-6 text-[#00377b] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-[#94a3b8] uppercase mb-2">
                    {service.labelEn}
                  </p>
                  <h3 className="break-keep text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#00377b] transition-colors">
                    {service.title}
                  </h3>
                  <p className="break-keep text-sm text-[#64748b] leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.details.map((item) => (
                      <span key={item} className="break-keep rounded-full bg-[#f1f5f9] px-3 py-1 text-xs font-medium text-[#64748b]">
                        {item}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
