'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, GraduationCap, Award, Briefcase, BookOpen, UserCircle2 } from 'lucide-react'
import { staff } from '@/data/hospitalData'

export default function Staff() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section id="staff" className="section-padding bg-[#f8fafc]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#00377b]/10 text-[#00377b] text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
            Medical Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            의료진 소개
          </h2>
          <p className="text-base md:text-lg text-[#64748b] max-w-2xl mx-auto">
            각 분야 전문 수의사가 협진하여 최선의 치료를 제공합니다
          </p>
        </motion.div>

        {/* Staff Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {staff.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] hover:shadow-xl hover:shadow-[#00377b]/5 transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e8edf5]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} ${member.title}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    /* Placeholder */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <UserCircle2 className="w-24 h-24 text-[#00377b]/20" strokeWidth={1} />
                      <span className="text-xs font-medium text-[#00377b]/40 tracking-widest uppercase">
                        Photo Coming Soon
                      </span>
                    </div>
                  )}
                  {/* Gradient Overlay — 사진 있을 때만 표시 */}
                  {member.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent" />
                  )}
                  
                  {/* Specialty Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#1da8fc] text-white text-xs font-medium rounded-full">
                      {member.specialty}
                    </span>
                  </div>
                  
                  {/* Info Overlay — 사진 있을 때는 이미지 위, 없을 때는 하단에 배치 */}
                  <div className={`absolute bottom-0 left-0 right-0 p-5 ${member.image ? '' : 'bg-[#00377b]'}`}>
                    <p className={`text-sm mb-1 ${member.image ? 'text-white/60' : 'text-white/70'}`}>{member.nameEn}</p>
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                      <span className="text-base font-normal text-white/70 ml-2">{member.title}</span>
                    </h3>
                  </div>
                </div>

                {/* Expand Toggle */}
                <div className="flex items-center border-t border-[#e2e8f0]">
                  <button
                    onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
                    className="flex-1 flex items-center justify-between px-5 py-4 hover:bg-[#f8fafc] transition-colors"
                  >
                    <span className="text-sm font-medium text-[#0f172a]">상세 이력 보기</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#1da8fc] transition-transform duration-300 ${
                        expandedId === member.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <Link
                    href="/staff"
                    className="px-4 py-4 text-xs font-medium text-[#1da8fc] hover:text-[#00377b] border-l border-[#e2e8f0] transition-colors whitespace-nowrap"
                  >
                    전체 프로필
                  </Link>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedId === member.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-[#e2e8f0]"
                    >
                      <div className="p-5 space-y-5 bg-[#f8fafc]">
                        {/* Education */}
                        {member.education.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <GraduationCap className="w-4 h-4 text-[#00377b]" />
                              <h4 className="text-sm font-semibold text-[#0f172a]">학력</h4>
                            </div>
                            <ul className="space-y-1 pl-6">
                              {member.education.map((item, idx) => (
                                <li key={idx} className="text-sm text-[#64748b]">{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Certifications */}
                        {member.certifications.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Award className="w-4 h-4 text-[#00377b]" />
                              <h4 className="text-sm font-semibold text-[#0f172a]">자격/학회</h4>
                            </div>
                            <ul className="space-y-1 pl-6">
                              {member.certifications.map((item, idx) => (
                                <li key={idx} className="text-sm text-[#64748b]">{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Experience */}
                        {member.experience.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Briefcase className="w-4 h-4 text-[#00377b]" />
                              <h4 className="text-sm font-semibold text-[#0f172a]">경력</h4>
                            </div>
                            <ul className="space-y-1 pl-6">
                              {member.experience.map((item, idx) => (
                                <li key={idx} className="text-sm text-[#64748b]">{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Training */}
                        {member.training.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <BookOpen className="w-4 h-4 text-[#00377b]" />
                              <h4 className="text-sm font-semibold text-[#0f172a]">교육/연수</h4>
                            </div>
                            <ul className="space-y-1 pl-6">
                              {member.training.slice(0, 5).map((item, idx) => (
                                <li key={idx} className="text-sm text-[#64748b]">{item}</li>
                              ))}
                              {member.training.length > 5 && (
                                <li className="text-sm text-[#1da8fc]">
                                  외 {member.training.length - 5}건
                                </li>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
