'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MoveHorizontal, UserCircle2 } from 'lucide-react'
import { staff } from '@/data/hospitalData'
import { useCmsContent } from '@/components/providers/CmsProvider'

export default function Staff() {
  const cms = useCmsContent()
  const staffMembers = cms?.staff?.length ? cms.staff : staff
  return (
    <section id="staff" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-14"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#1da8fc]">LABION PEOPLE</p>
            <h2 className="break-keep text-3xl font-bold leading-tight text-[#0f172a] sm:text-4xl md:text-5xl">
              아이의 건강한 일상을 함께 고민하는 사람들
            </h2>
            <p className="mt-4 max-w-2xl break-keep text-sm leading-relaxed text-[#64748b] md:text-base">
              라비온의 의료진은 반려동물의 상태를 세심하게 확인하고, 보호자님이 진료 과정을 충분히 이해하실 수 있도록 차분히 설명드립니다.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#94a3b8] md:hidden">
              <MoveHorizontal className="h-4 w-4" />
              의료진 카드를 좌우로 밀어보세요
            </p>
          </div>
          <Link href="/staff" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#00377b] transition-colors hover:text-[#1da8fc]">
            의료진 자세히 보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:gap-8">
          {staffMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="min-w-[82vw] snap-center overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm shadow-[#00377b]/5 transition-all hover:shadow-xl hover:shadow-[#00377b]/5 sm:min-w-[58vw] md:min-w-0"
            >
              <div className="relative flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#eaf6ff] to-[#eef2f7] md:aspect-[4/4] md:gap-4">
                <UserCircle2 className="h-20 w-20 text-[#00377b]/22 md:h-24 md:w-24" strokeWidth={1} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#00377b]/35 md:text-xs">Photo Coming Soon</span>
                <div className="absolute left-4 top-4 rounded-full bg-[#00377b] px-3 py-1 text-xs font-semibold text-white">
                  {member.specialty}
                </div>
              </div>
              <div className="p-5 md:p-6">
                <p className="mb-1 text-xs text-[#94a3b8] md:text-sm">{member.nameEn}</p>
                <h3 className="mb-1 text-2xl font-bold text-[#0f172a]">
                  {member.name} <span className="text-sm font-medium text-[#64748b] md:text-base">{member.title}</span>
                </h3>
                <p className="mt-4 break-keep text-sm leading-relaxed text-[#64748b]">
                  {member.philosophy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
