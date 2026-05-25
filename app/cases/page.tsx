'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Calendar, PawPrint, FileText } from 'lucide-react'
import { medicalCases, surgicalCases } from '@/data/hospitalData'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// 진료과목 탭 정의
const serviceTabs = [
  { id: 'all', label: '전체', labelEn: 'ALL' },
  { id: 'internal', label: '내과 진료', labelEn: 'INTERNAL' },
  { id: 'surgery', label: '외과 수술', labelEn: 'SURGERY' },
  { id: 'dental', label: '치과 진료', labelEn: 'DENTAL' },
  { id: 'emergency', label: '응급 진료', labelEn: 'EMERGENCY' },
]

// 모든 케이스 합치기
const allCases = [...medicalCases, ...surgicalCases]

export default function CasesPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState('all')

  // URL 쿼리 파라미터에서 탭 설정
  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && serviceTabs.some(t => t.id === tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  // 탭에 따라 케이스 필터링
  const filteredCases = activeTab === 'all' 
    ? allCases 
    : allCases.filter(c => c.serviceId === activeTab)

  // 현재 탭 정보
  const currentTab = serviceTabs.find(t => t.id === activeTab) || serviceTabs[0]

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
              <p className="text-xs font-semibold tracking-[0.2em] text-[#1da8fc] uppercase mb-4">
                Medical Cases
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                진료 케이스
              </h1>
              <p className="text-lg text-white/70 max-w-2xl">
                라비온 동물의료센터에서 진행한 다양한 진료 및 수술 사례입니다.<br className="hidden md:block" />
                보호자분들의 동의 하에 공유되는 케이스입니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tabs - 진료과목별 */}
        <section className="bg-white border-b border-[#e2e8f0] sticky top-20 z-40">
          <div className="container-custom">
            <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-[#00377b] text-[#00377b]'
                      : 'border-transparent text-[#64748b] hover:text-[#0f172a]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-16 md:py-24 bg-[#f8fafc]">
          <div className="container-custom">
            {/* 현재 카테고리 표시 */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-10"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-[#94a3b8] uppercase mb-2">
                {currentTab.labelEn}
              </p>
              <h2 className="text-2xl font-bold text-[#0f172a]">
                {currentTab.label} 케이스
              </h2>
              <div className="w-8 h-0.5 bg-[#1da8fc] mt-3" />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCases.map((caseItem, index) => (
                  <motion.div
                    key={`${caseItem.serviceId}-${caseItem.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  >
                    {/* Image Placeholder */}
                    <div className="aspect-[16/10] bg-[#e8edf5] relative overflow-hidden">
                      {caseItem.image ? (
                        <Image
                          src={caseItem.image}
                          alt={caseItem.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <FileText className="w-10 h-10 text-[#00377b]/20" strokeWidth={1} />
                          <span className="text-xs font-medium text-[#00377b]/40 tracking-widest uppercase">
                            Case Image
                          </span>
                        </div>
                      )}
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#00377b] text-white text-xs font-medium rounded-full">
                          {caseItem.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-base font-bold text-[#0f172a] mb-2 group-hover:text-[#00377b] transition-colors line-clamp-1">
                        {caseItem.title}
                      </h3>
                      <p className="text-sm text-[#64748b] mb-4 line-clamp-2">
                        {caseItem.summary}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#94a3b8]">
                        <div className="flex items-center gap-1.5">
                          <PawPrint className="w-3.5 h-3.5" />
                          <span>{caseItem.animal} · {caseItem.breed}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{caseItem.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {filteredCases.length === 0 && (
              <div className="text-center py-20">
                <FileText className="w-16 h-16 text-[#e2e8f0] mx-auto mb-4" />
                <p className="text-[#64748b]">등록된 케이스가 없습니다.</p>
              </div>
            )}

            {/* Notice */}
            <div className="mt-12 p-6 bg-white rounded-2xl border border-[#e2e8f0]">
              <p className="text-sm text-[#64748b] text-center">
                * 모든 케이스는 보호자분의 동의 하에 교육 및 정보 공유 목적으로 게시됩니다.<br />
                * 실제 케이스 이미지 및 상세 내용은 추후 업데이트될 예정입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h3 className="text-xl font-bold text-[#0f172a] mb-8">관련 페이지</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/services"
                className="group p-6 bg-[#f8fafc] rounded-2xl hover:bg-[#00377b] transition-all duration-300"
              >
                <span className="text-sm text-[#64748b] group-hover:text-white/70 transition-colors">
                  Services
                </span>
                <h4 className="text-xl font-bold text-[#0f172a] group-hover:text-white mt-2 transition-colors">
                  진료 안내
                </h4>
                <p className="text-[#64748b] group-hover:text-white/70 mt-2 transition-colors">
                  내과, 외과, 예방의학 등 다양한 진료 서비스를 확인하세요.
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
