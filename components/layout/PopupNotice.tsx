'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { popup } from '@/data/hospitalData'

const STORAGE_KEY = 'labion_popup_hidden_until'

export default function PopupNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!popup.active) return

    const hiddenUntil = localStorage.getItem(STORAGE_KEY)
    if (hiddenUntil && new Date().getTime() < Number(hiddenUntil)) return

    // 첫 렌더 후 살짝 딜레이 주어 Hero 애니메이션과 겹치지 않게
    const timer = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => setVisible(false)

  const handleDoNotShowToday = () => {
    const tomorrow = new Date()
    tomorrow.setHours(23, 59, 59, 999)
    localStorage.setItem(STORAGE_KEY, String(tomorrow.getTime()))
    setVisible(false)
  }

  if (!popup.active) return null

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm"
            onClick={popup.closable ? handleClose : undefined}
          />

          {/* Modal */}
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[81] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">

              {/* 닫기 버튼 */}
              {popup.closable && (
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                  aria-label="팝업 닫기"
                >
                  <X className="w-4 h-4 text-[#0f172a]" />
                </button>
              )}

              {/* 이미지 영역 */}
              {popup.image ? (
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={popup.image}
                    alt={popup.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                /* 이미지 없을 때: 네이비 상단 배너 */
                <div className="bg-[#00377b] px-6 pt-8 pb-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-[#1da8fc] border border-[#1da8fc]/40 rounded-full mb-4">
                    {popup.badge}
                  </span>
                  <h2 className="text-xl font-bold text-white leading-snug whitespace-pre-line">
                    {popup.title}
                  </h2>
                </div>
              )}

              {/* 본문 */}
              <div className="px-6 py-5">
                {/* 이미지 있을 때만 제목 본문에 표시 */}
                {popup.image && (
                  <>
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-[#1da8fc] bg-[#e8f4ff] rounded-full mb-3">
                      {popup.badge}
                    </span>
                    <h2 className="text-xl font-bold text-[#0f172a] leading-snug whitespace-pre-line mb-3">
                      {popup.title}
                    </h2>
                  </>
                )}
                <p className="text-sm text-[#64748b] leading-relaxed whitespace-pre-line">
                  {popup.description}
                </p>

                {/* CTA 버튼 */}
                {popup.cta && (
                  <a
                    href={popup.cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-center w-full py-3 bg-[#00377b] text-white text-sm font-semibold rounded-xl hover:bg-[#002a5e] transition-colors"
                  >
                    {popup.cta.label}
                  </a>
                )}
              </div>

              {/* 하단 : 오늘 하루 보지 않기 */}
              {popup.doNotShowTodayOption && (
                <div className="px-6 pb-5 flex items-center justify-between border-t border-[#f1f5f9] pt-4">
                  <button
                    onClick={handleDoNotShowToday}
                    className="text-xs text-[#94a3b8] hover:text-[#64748b] underline underline-offset-2 transition-colors"
                  >
                    오늘 하루 보지 않기
                  </button>
                  <button
                    onClick={handleClose}
                    className="text-xs text-[#64748b] hover:text-[#0f172a] font-medium transition-colors"
                  >
                    닫기
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
