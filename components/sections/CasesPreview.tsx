'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'
import { medicalCases, surgicalCases } from '@/data/hospitalData'

type TabType = 'medical' | 'surgical'

export default function CasesPreview() {
  const [activeTab, setActiveTab] = useState<TabType>('medical')

  const cases = activeTab === 'medical' ? medicalCases : surgicalCases

  return (
    <section id="cases" className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">
          {/* Left Side - Sticky Title */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#00377b]/5 text-[#00377b] text-sm font-medium rounded-full mb-6">
                CASES
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
                진료 케이스
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-8">
                라비온 동물의료센터에서 진행한<br />
                다양한 진료 및 수술 케이스를<br />
                소개합니다.
              </p>

              {/* Tab Buttons */}
              <div className="flex flex-col gap-3 mb-8">
                <button
                  onClick={() => setActiveTab('medical')}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all ${
                    activeTab === 'medical'
                      ? 'bg-[#00377b] text-white shadow-lg'
                      : 'bg-[#f8fafc] text-[#0f172a] hover:bg-[#f1f5f9]'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">진료 케이스</p>
                    <p className={`text-sm ${activeTab === 'medical' ? 'text-white/70' : 'text-[#64748b]'}`}>
                      내과 진료 사례
                    </p>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('surgical')}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all ${
                    activeTab === 'surgical'
                      ? 'bg-[#00377b] text-white shadow-lg'
                      : 'bg-[#f8fafc] text-[#0f172a] hover:bg-[#f1f5f9]'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">수술 케이스</p>
                    <p className={`text-sm ${activeTab === 'surgical' ? 'text-white/70' : 'text-[#64748b]'}`}>
                      외과 수술 사례
                    </p>
                  </div>
                </button>
              </div>

              {/* View All Link */}
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 text-[#00377b] font-medium hover:text-[#1da8fc] transition-colors"
              >
                전체 케이스 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Scrollable Cases */}
          <div className="space-y-6">
            {cases.map((caseItem, index) => (
              <motion.div
                key={`${activeTab}-${caseItem.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={`/cases?tab=${activeTab}`}
                  className="group block bg-[#f8fafc] rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#e2e8f0]"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Placeholder Image */}
                    <div className="w-full md:w-48 h-32 md:h-36 bg-[#e8edf5] rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-10 h-10 text-[#00377b]/20" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-[#00377b]/10 text-[#00377b] text-xs font-semibold rounded-full">
                          {caseItem.category}
                        </span>
                        <span className="text-xs text-[#94a3b8]">
                          {caseItem.animal} · {caseItem.breed} · {caseItem.age}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#00377b] transition-colors">
                        {caseItem.title}
                      </h3>
                      <p className="text-[#64748b] text-sm md:text-base leading-relaxed line-clamp-2">
                        {caseItem.summary}
                      </p>
                      <p className="text-xs text-[#94a3b8] mt-3">{caseItem.date}</p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center group-hover:bg-[#00377b] group-hover:border-[#00377b] transition-all">
                        <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
