'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Stethoscope, 
  Scissors, 
  Shield, 
  Scan, 
  Smile, 
  AlertCircle,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react'
import { services, hospitalInfo } from '@/data/hospitalData'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Scissors,
  Shield,
  Scan,
  Smile,
  AlertCircle,
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0].id)

  const currentService = services.find(s => s.id === activeService) || services[0]
  const Icon = iconMap[currentService.icon] || Stethoscope

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#00377b] py-20 md:py-28">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/#services" 
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                메인으로 돌아가기
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                진료 안내
              </h1>
              <p className="text-lg text-white/70 max-w-2xl">
                라비온 동물의료센터는 내과, 외과, 예방의학 전문 수의사 3인이 협진하여<br className="hidden md:block" />
                최선의 치료를 제공합니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Navigation */}
        <section className="bg-white border-b border-[#e2e8f0] sticky top-20 z-40">
          <div className="container-custom">
            <div className="flex overflow-x-auto scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-all ${
                    activeService === service.id
                      ? 'border-[#00377b] text-[#00377b]'
                      : 'border-transparent text-[#64748b] hover:text-[#0f172a]'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Service Detail */}
        <section className="py-16 md:py-24 bg-[#f8fafc]">
          <div className="container-custom">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Left: Info */}
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-[#00377b] rounded-2xl mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
                  {currentService.title}
                </h2>
                <p className="text-lg text-[#64748b] mb-8 leading-relaxed">
                  {currentService.description}
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`tel:${hospitalInfo.contact.phone}`}
                    className="px-6 py-3 bg-[#00377b] text-white font-medium rounded-xl hover:bg-[#002a5c] transition-colors"
                  >
                    전화 예약
                  </a>
                  <a
                    href={hospitalInfo.contact.kakaoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#FEE500] text-[#0f172a] font-medium rounded-xl hover:bg-[#FDD800] transition-colors"
                  >
                    카카오톡 상담
                  </a>
                </div>
              </div>

              {/* Right: Details */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#0f172a] mb-6">
                  세부 진료 항목
                </h3>
                <ul className="space-y-4">
                  {currentService.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1da8fc] flex-shrink-0 mt-0.5" />
                      <span className="text-[#0f172a]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h3 className="text-xl font-bold text-[#0f172a] mb-8">관련 페이지</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/cases"
                className="group p-6 bg-[#f8fafc] rounded-2xl hover:bg-[#00377b] transition-all duration-300"
              >
                <span className="text-sm text-[#64748b] group-hover:text-white/70 transition-colors">
                  Case Study
                </span>
                <h4 className="text-xl font-bold text-[#0f172a] group-hover:text-white mt-2 transition-colors">
                  진료 및 수술 케이스
                </h4>
                <p className="text-[#64748b] group-hover:text-white/70 mt-2 transition-colors">
                  라비온 동물의료센터의 다양한 진료 및 수술 사례를 확인하세요.
                </p>
              </Link>
              <Link
                href="/#staff"
                className="group p-6 bg-[#f8fafc] rounded-2xl hover:bg-[#00377b] transition-all duration-300"
              >
                <span className="text-sm text-[#64748b] group-hover:text-white/70 transition-colors">
                  Medical Staff
                </span>
                <h4 className="text-xl font-bold text-[#0f172a] group-hover:text-white mt-2 transition-colors">
                  의료진 소개
                </h4>
                <p className="text-[#64748b] group-hover:text-white/70 mt-2 transition-colors">
                  각 분야 전문 수의사 3인의 프로필과 경력을 확인하세요.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
