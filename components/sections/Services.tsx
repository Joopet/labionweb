'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const servicesData = [
  {
    id: 'internal',
    labelEn: 'INTERNAL MEDICINE',
    title: '내과 진료',
    description: '심장, 호흡기, 소화기, 내분비 등 내과 전반에 걸친 전문 진료',
    details: ['심장 질환 (심장초음파, 심전도)', '호흡기 / 소화기 질환', '내분비 질환 (당뇨, 갑상선)', '비뇨기 / 신경계 질환'],
    image: '/images/service-internal.jpg',
  },
  {
    id: 'surgery',
    labelEn: 'SURGERY',
    title: '외과 수술',
    description: '정형외과, 연부조직, 종양 수술 등 다양한 외과적 치료',
    details: ['정형외과 수술 (TPLO, 골절 정복)', '연부조직 / 종양 제거 수술', '응급 수술 / 중성화 수술', '관절경 수술'],
    image: '/images/service-surgery.jpg',
  },
  {
    id: 'prevention',
    labelEn: 'PREVENTIVE CARE',
    title: '예방의학',
    description: '건강검진과 예방접종으로 반려동물의 건강한 삶을 지원',
    details: ['종합 건강검진', '예방접종 (DHPPL, 코로나, 광견병)', '심장사상충 / 외부기생충 예방', '노령동물 정기검진'],
    image: '/images/service-prevention.jpg',
  },
  {
    id: 'imaging',
    labelEn: 'IMAGING DIAGNOSIS',
    title: '영상진단',
    description: '첨단 영상 장비를 통한 정확한 진단',
    details: ['디지털 X-ray', '복부 / 심장 초음파', '내시경 검사'],
    image: '/images/service-imaging.jpg',
  },
  {
    id: 'dental',
    labelEn: 'DENTAL CARE',
    title: '치과 진료',
    description: '구강 건강 관리 및 치과 시술',
    details: ['치석 제거 (스케일링)', '발치 / 구강 종양 치료', '치주 질환 치료'],
    image: '/images/service-dental.jpg',
  },
  {
    id: 'emergency',
    labelEn: 'EMERGENCY',
    title: '응급 진료',
    description: '응급 상황에 대한 신속한 대응과 중환자 집중 치료',
    details: ['응급 환자 처치', '중환자 집중 치료 (ICU)', '수혈 / 응급 수술'],
    image: '/images/service-emergency.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#1da8fc] uppercase mb-3">Our Services</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] leading-snug">
              전문 진료 서비스
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#00377b] hover:text-[#1da8fc] transition-colors shrink-0"
          >
            전체 진료 안내
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* 6-card grid — 스크롤 시 아래에서 위로 올라오는 애니메이션 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/cases?tab=${service.id}`} className="group block">

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f1f5f9] mb-5">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#e8edf5]">
                      <span className="text-[#94a3b8] text-sm">이미지 준비중</span>
                    </div>
                  )}
                </div>

                {/* English Label */}
                <p className="text-[11px] font-semibold tracking-[0.18em] text-[#94a3b8] uppercase mb-2">
                  {service.labelEn}
                </p>

                {/* Korean Title */}
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#00377b] transition-colors">
                  {service.title}
                </h3>

                {/* Blue Underline */}
                <div className="w-7 h-0.5 bg-[#1da8fc] mb-4" />

                {/* Short description */}
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Detail list */}
                <ul className="space-y-1.5">
                  {service.details.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#94a3b8]">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1da8fc] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


