'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { hospitalInfo } from '@/data/hospitalData'
import { useCmsContent } from '@/components/providers/CmsProvider'

export default function FloatingButtons() {
  const cms = useCmsContent()
  const phone = cms?.site?.phone || hospitalInfo.contact.phone
  const kakaoUrl = cms?.site?.kakaoUrl || hospitalInfo.contact.kakaoUrl

  return (
    <>
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        <a
          href={kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-3 bg-[#FEE500] rounded-full shadow-lg shadow-black/10 hover:pr-5 transition-all duration-200 whitespace-nowrap"
          aria-label="카카오톡 상담"
        >
          <MessageCircle className="w-5 h-5 text-[#3C1E1E] flex-shrink-0" />
          <span className="text-sm font-semibold text-[#3C1E1E]">카톡상담</span>
        </a>
        <a
          href={`tel:${phone}`}
          className="group flex items-center gap-3 px-4 py-3 bg-[#00377b] rounded-full shadow-lg shadow-[#00377b]/30 hover:pr-5 transition-all duration-200 whitespace-nowrap"
          aria-label="전화 문의"
        >
          <Phone className="w-5 h-5 text-white flex-shrink-0" />
          <span className="text-sm font-semibold text-white">전화문의</span>
        </a>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[70] border-t border-[#e2e8f0] bg-white/96 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(15,23,42,0.14)] backdrop-blur-xl">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <a
            href={kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-[#FEE500] px-3 text-sm font-bold text-[#3C1E1E] shadow-sm active:scale-[0.98] transition-transform"
            aria-label="카카오톡 상담하기"
          >
            <MessageCircle className="h-5 w-5 flex-shrink-0" />
            카톡 상담
          </a>
          <a
            href={`tel:${phone}`}
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-[#00377b] px-3 text-sm font-bold text-white shadow-sm shadow-[#00377b]/20 active:scale-[0.98] transition-transform"
            aria-label="전화 문의하기"
          >
            <Phone className="h-5 w-5 flex-shrink-0" />
            전화 문의
          </a>
        </div>
      </div>
    </>
  )
}
