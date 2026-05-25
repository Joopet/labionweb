'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Briefcase, BookOpen, ArrowLeft, Phone } from 'lucide-react'
import { staff } from '@/data/hospitalData'
import { hospitalInfo } from '@/data/hospitalData'

const sectionIcon = {
  education: GraduationCap,
  certifications: Award,
  experience: Briefcase,
  training: BookOpen,
}

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Page Header */}
      <div className="bg-[#00377b] pt-32 pb-16">
        <div className="container-custom">
          <Link
            href="/#staff"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            메인으로
          </Link>
          <p className="text-[#1da8fc] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Medical Team
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            의료진 소개
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl">
            각 분야 전문 수의사가 협진하여 최선의 치료를 제공합니다
          </p>
        </div>
      </div>

      {/* Staff List */}
      <div className="container-custom py-20">
        <div className="flex flex-col gap-24">
          {staff.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Divider (not first) */}
              {index > 0 && <div className="border-t border-[#e2e8f0] mb-24" />}

              <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">

                {/* Left — Photo + basic info */}
                <div className="flex flex-col gap-6">
                  {/* Photo */}
                  <div className="relative aspect-[3/4] bg-[#e8edf5] overflow-hidden rounded-2xl">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="300px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#e8edf5] to-[#d4dce8]">
                        <div className="w-20 h-20 rounded-full bg-[#00377b]/10 flex items-center justify-center">
                          <span className="text-3xl font-bold text-[#00377b]/30">
                            {member.name[0]}
                          </span>
                        </div>
                        <span className="text-xs text-[#94a3b8] tracking-widest uppercase">
                          Photo Coming Soon
                        </span>
                      </div>
                    )}
                    {/* Specialty badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#1da8fc] text-white text-xs font-medium rounded-full">
                        {member.specialty}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={`tel:${hospitalInfo.contact.phone}`}
                    className="flex items-center justify-center gap-2 py-3 border-2 border-[#00377b] text-[#00377b] font-medium rounded-full hover:bg-[#00377b] hover:text-white transition-all duration-200 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    진료 예약 문의
                  </a>
                </div>

                {/* Right — Detail info */}
                <div>
                  {/* Name / Title */}
                  <div className="mb-8 pb-8 border-b border-[#e2e8f0]">
                    <p className="text-sm text-[#94a3b8] tracking-widest uppercase mb-2">
                      {member.nameEn}
                    </p>
                    <div className="flex items-baseline gap-3 mb-1">
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a]">
                        {member.name}
                      </h2>
                      <span className="text-lg text-[#64748b] font-normal">
                        {member.title}
                      </span>
                    </div>
                    <div className="w-10 h-0.5 bg-[#1da8fc] mt-4" />
                  </div>

                  {/* Detail sections */}
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">

                    {/* Education */}
                    {member.education.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <GraduationCap className="w-4 h-4 text-[#00377b]" />
                          <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider">
                            학력
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {member.education.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-[#475569]">
                              <span className="mt-2 w-1 h-1 rounded-full bg-[#1da8fc] shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Certifications */}
                    {member.certifications.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="w-4 h-4 text-[#00377b]" />
                          <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider">
                            자격 / 학회
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {member.certifications.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-[#475569]">
                              <span className="mt-2 w-1 h-1 rounded-full bg-[#1da8fc] shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Experience */}
                    {member.experience.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Briefcase className="w-4 h-4 text-[#00377b]" />
                          <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider">
                            경력
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {member.experience.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-[#475569]">
                              <span className="mt-2 w-1 h-1 rounded-full bg-[#1da8fc] shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Training */}
                    {member.training.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="w-4 h-4 text-[#00377b]" />
                          <h3 className="text-sm font-semibold text-[#0f172a] uppercase tracking-wider">
                            교육 / 연수
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {member.training.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-[#475569]">
                              <span className="mt-2 w-1 h-1 rounded-full bg-[#1da8fc] shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
