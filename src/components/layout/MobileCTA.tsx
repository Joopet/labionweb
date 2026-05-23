import { Phone, MapPin, MessageCircle } from "lucide-react";
import { hospitalData } from "@/data/hospitalData";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] lg:hidden">
      <div className="flex items-stretch h-14 divide-x divide-gray-100">
        <a
          href={`tel:${hospitalData.phone.replace(/-/g, "")}`}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-[var(--color-primary-blue)] active:bg-gray-50 transition-colors"
        >
          <Phone className="w-4.5 h-4.5 text-[var(--color-accent-blue)]" />
          <span className="text-[10px] font-bold">전화</span>
        </a>

        <a
          href={hospitalData.links.naverMap}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-[var(--color-primary-blue)] active:bg-gray-50 transition-colors"
        >
          <MapPin className="w-4.5 h-4.5 text-[#03C75A]" />
          <span className="text-[10px] font-bold">길찾기</span>
        </a>

        <a
          href={hospitalData.links.kakaoTalk}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-[var(--color-primary-blue)] active:bg-gray-50 transition-colors"
        >
          <MessageCircle className="w-4.5 h-4.5 text-[#FEE500]" />
          <span className="text-[10px] font-bold">상담</span>
        </a>
      </div>
    </div>
  );
}
