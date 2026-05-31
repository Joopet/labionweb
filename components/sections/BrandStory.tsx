'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HeartHandshake, MessageCircle, ShieldCheck } from 'lucide-react'
import { hospitalInfo } from '@/data/hospitalData'

const keywordIcons = [HeartHandshake, MessageCircle, ShieldCheck]

export default function BrandStory() {
  const [activeTab, setActiveTab] = useState(hospitalInfo.philosophyTabs[0].id)
  const active = hospitalInfo.philosophyTabs.find((tab) => tab.id === activeTab) || hospitalInfo.philosophyTabs[0]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.28em] text-[#1da8fc] uppercase mb-5">
              {hospitalInfo.brandIntro.category}
            </p>
            <h2 className="break-keep text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-7">
              {hospitalInfo.brandIntro.title}
            </h2>
            <p className="break-keep text-base md:text-lg text-[#64748b] leading-relaxed max-w-2xl">
              {hospitalInfo.brandIntro.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[320px] rounded-[2rem] bg-gradient-to-br from-[#f8fafc] to-[#eaf6ff] border border-[#e2e8f0] overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,rgba(29,168,252,0.22),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(0,55,123,0.18),transparent_30%)]" />
            <Image
              src={hospitalInfo.logoUrl}
              alt="라비온 동물의료센터 로고"
              width={320}
              height={120}
              className="relative z-10 w-64 sm:w-80 h-auto object-contain"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-24">
          {hospitalInfo.brandIntro.keywords.map((keyword, index) => {
            const Icon = keywordIcons[index] || ShieldCheck
            return (
              <motion.div
                key={keyword}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-[#e2e8f0] bg-white p-7 shadow-sm hover:shadow-lg hover:shadow-[#00377b]/5 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#00377b]/8 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#00377b]" />
                </div>
                <h3 className="break-keep text-xl font-bold text-[#0f172a] mb-2">{keyword}</h3>
                <p className="break-keep text-sm text-[#64748b] leading-relaxed">
                  보호자와 반려동물이 안심할 수 있도록 라비온이 중요하게 생각하는 기준입니다.
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-[#f8fafc] border border-[#e2e8f0] p-6 md:p-10"
        >
          <div className="flex flex-wrap gap-3 mb-9">
            {hospitalInfo.philosophyTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`break-keep px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#00377b] text-white shadow-lg shadow-[#00377b]/15'
                    : 'bg-white text-[#64748b] border border-[#e2e8f0] hover:text-[#00377b]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid lg:grid-cols-[0.75fr_1fr] gap-8 items-start"
            >
              <p className="text-xs font-semibold tracking-[0.28em] text-[#1da8fc] uppercase">LABION PHILOSOPHY</p>
              <div>
                <h3 className="break-keep text-2xl md:text-3xl font-bold text-[#0f172a] leading-snug mb-4">
                  {active.title}
                </h3>
                <p className="break-keep text-base md:text-lg text-[#64748b] leading-relaxed">
                  {active.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
