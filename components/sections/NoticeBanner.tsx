'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CalendarDays, Gift, Megaphone, X } from 'lucide-react'
import { homeNotices } from '@/data/hospitalData'
import { useCmsContent } from '@/components/providers/CmsProvider'

type NoticeItem = (typeof homeNotices)[number]

export default function NoticeBanner() {
  const cms = useCmsContent()
  const cmsNotices = cms?.notices || []
  const notices = cmsNotices.length
    ? homeNotices.map((template) => {
        const override = cmsNotices.find((item) => item.id === template.id)
        return override
          ? {
              ...template,
              badge: override.badge || template.badge,
              title: override.title || template.title,
              description: override.description || template.description,
              ctaLabel: override.ctaLabel || template.ctaLabel,
            }
          : template
      })
    : homeNotices
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null)

  const openNotice = (notice: NoticeItem) => setSelectedNotice(notice)
  const closeNotice = () => setSelectedNotice(null)

  return (
    <>
      <section id="notice" className="bg-[#00377b] py-10 md:py-12">
        <div className="container-custom">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
              <Megaphone className="h-5 w-5 text-[#1da8fc]" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-[#1da8fc] uppercase">LABION NOTICE</p>
              <h2 className="break-keep text-xl md:text-2xl font-bold text-white">진료일정과 이벤트를 한눈에 안내합니다</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {notices.map((notice, index) => {
              const Icon = notice.id === 'june-schedule' ? CalendarDays : Gift
              return (
                <motion.button
                  key={notice.id}
                  type="button"
                  onClick={() => openNotice(notice)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group w-full rounded-3xl border border-white/15 bg-white/10 p-6 text-left backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#1da8fc]/70"
                  aria-haspopup="dialog"
                  aria-label={`${notice.title} 팝업 열기`}
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="inline-flex rounded-full bg-[#1da8fc]/20 px-3 py-1 text-xs font-semibold text-[#bde8ff]">
                      {notice.badge}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#1da8fc] transition-colors group-hover:bg-white/15">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mb-3 break-keep text-xl font-bold text-white">{notice.title}</h3>
                  <p className="mb-5 break-keep text-sm leading-relaxed text-white/72">{notice.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                    {notice.ctaLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedNotice && (
          <NoticeDetailModal notice={selectedNotice} onClose={closeNotice} />
        )}
      </AnimatePresence>
    </>
  )
}

function NoticeDetailModal({ notice, onClose }: { notice: NoticeItem; onClose: () => void }) {
  const Icon = notice.id === 'june-schedule' ? CalendarDays : Gift

  return (
    <>
      <motion.div
        key="notice-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[90] bg-black/55 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        key="notice-modal"
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 18 }}
        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[91] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-modal-title"
      >
        <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="안내 팝업 닫기"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="bg-[#00377b] px-6 py-8 md:px-8 md:py-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1da8fc]/40 bg-[#1da8fc]/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[#bde8ff]">
              <Icon className="h-4 w-4" />
              {notice.badge}
            </div>
            <h3 id="notice-modal-title" className="break-keep text-2xl font-bold leading-snug text-white md:text-3xl">
              {notice.modalTitle}
            </h3>
            <p className="mt-4 break-keep text-sm leading-relaxed text-white/75 md:text-base">
              {notice.modalDescription}
            </p>
          </div>

          <div className="px-6 py-6 md:px-8 md:py-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {notice.details.map((detail) => (
                <div key={detail.label} className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-4">
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#808080] uppercase">{detail.label}</p>
                  <p className="mt-2 break-keep text-base font-bold leading-snug text-[#00377b]">{detail.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-[#eff6ff] p-5">
              <p className="mb-3 text-sm font-bold text-[#00377b]">안내사항</p>
              <ul className="space-y-2">
                {notice.notices.map((item) => (
                  <li key={item} className="break-keep text-sm leading-relaxed text-[#475569]">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={notice.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-2xl bg-[#00377b] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#002a5e]"
              >
                {notice.primaryCta.label}
              </a>
              <a
                href={notice.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-2xl border border-[#cbd5e1] bg-white px-5 py-3 text-sm font-semibold text-[#00377b] transition-colors hover:bg-[#f8fafc]"
              >
                {notice.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
