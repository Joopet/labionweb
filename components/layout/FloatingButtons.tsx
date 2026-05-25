'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { hospitalInfo } from '@/data/hospitalData'

export default function FloatingButtons() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 lg:gap-4 md:gap-3 sm:bottom-6 sm:top-auto sm:right-4 sm:-translate-y-0">
      {/* 카카오톡 */}
      <a
        href={hospitalInfo.contact.kakaoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-4 py-3 lg:px-4 lg:py-3 md:px-3 md:py-2.5 sm:px-3 sm:py-2 bg-[#FEE500] rounded-full shadow-lg shadow-black/10 hover:pr-5 md:hover:pr-4 sm:hover:pr-3 transition-all duration-200 whitespace-nowrap"
        aria-label="카카오톡 상담"
      >
        <MessageCircle className="w-5 h-5 lg:w-5 lg:h-5 md:w-4 md:h-4 sm:w-4 sm:h-4 text-[#3C1E1E] flex-shrink-0" />
        <span className="text-sm lg:text-sm md:text-xs sm:text-xs font-semibold text-[#3C1E1E]">카톡상담</span>
      </a>
      
      {/* 전화 */}
      <a
        href={`tel:${hospitalInfo.contact.phone}`}
        className="group flex items-center gap-3 px-4 py-3 lg:px-4 lg:py-3 md:px-3 md:py-2.5 sm:px-3 sm:py-2 bg-[#00377b] rounded-full shadow-lg shadow-[#00377b]/30 hover:pr-5 md:hover:pr-4 sm:hover:pr-3 transition-all duration-200 whitespace-nowrap"
        aria-label="전화 상담"
      >
        <Phone className="w-5 h-5 lg:w-5 lg:h-5 md:w-4 md:h-4 sm:w-4 sm:h-4 text-white flex-shrink-0" />
        <span className="text-sm lg:text-sm md:text-xs sm:text-xs font-semibold text-white">전화상담</span>
      </a>
    </div>
  )
}
