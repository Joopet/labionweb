'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ClipboardList } from 'lucide-react'
import { caseCards } from '@/data/hospitalData'
import { useCmsContent } from '@/components/providers/CmsProvider'

export default function CasesPreview() {
  const cms = useCmsContent()
  const cases = cms?.cases?.length ? cms.cases : caseCards
  return (
    <section id="services" className="py-16 md:py-28 bg-[#f8fafc]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-14"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#1da8fc]">LABION CASE</p>
            <h2 className="break-keep text-3xl font-bold leading-tight text-[#0f172a] sm:text-4xl md:text-5xl">
              라비온 진료케이스
            </h2>
            <p className="mt-4 max-w-2xl break-keep text-sm leading-relaxed text-[#64748b] md:text-base">
              보호자님이 진료 흐름을 쉽게 이해하실 수 있도록 강아지와 고양이의 대표 진료케이스를 정리합니다.
            </p>
          </div>
          <Link
            href="/cases"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#00377b] transition-colors hover:text-[#1da8fc]"
          >
            진료케이스 전체 보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 md:mx-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {cases.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="min-w-[82vw] snap-center rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-sm shadow-[#00377b]/5 transition-all hover:-translate-y-1 hover:border-[#1da8fc]/50 hover:shadow-xl hover:shadow-[#00377b]/5 sm:min-w-[58vw] md:min-w-0 md:p-7"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00377b]/8">
                  <ClipboardList className="h-6 w-6 text-[#00377b]" />
                </div>
                <span className="rounded-full bg-[#1da8fc]/10 px-3 py-1 text-xs font-semibold text-[#00377b]">
                  {item.category}
                </span>
              </div>
              <h3 className="break-keep mb-3 text-xl font-bold leading-snug text-[#0f172a] md:text-2xl">{item.title}</h3>
              <p className="break-keep mb-5 text-sm leading-relaxed text-[#64748b]">{item.summary}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {(item.steps || []).slice(0, 3).map((step) => (
                  <span key={step} className="break-keep rounded-full bg-[#f1f5f9] px-3 py-1 text-xs font-medium text-[#334155]">
                    {step}
                  </span>
                ))}
              </div>
              <Link href="/cases" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00377b] transition-colors hover:text-[#1da8fc]">
                케이스 보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>

        <p className="mt-4 break-keep text-xs leading-relaxed text-[#94a3b8] md:mt-6 md:text-sm">
          실제 진료케이스 공개 시에는 보호자 동의, 개인정보 비식별화, 의료진 검수를 거친 내용만 게시합니다.
        </p>
      </div>
    </section>
  )
}
