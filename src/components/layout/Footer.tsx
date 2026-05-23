import Link from "next/link";
import { hospitalData } from "@/data/hospitalData";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-blue)] text-white/60 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14 sm:py-16 border-b border-white/10">

          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 rounded-lg bg-white text-[var(--color-primary-blue)] flex items-center justify-center font-bold text-sm group-hover:scale-105 transition-transform">
                L
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {hospitalData.name}
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              보호자님이 충분히 안심하고 치료 과정을 신뢰하실 수 있도록 세심히 설명해 드립니다.
            </p>
          </div>

          {/* Hours */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
              진료 시간
            </h4>
            <ul className="text-sm space-y-2.5">
              {hospitalData.hours.map((hour, idx) => (
                <li key={idx} className="flex justify-between max-w-[200px]">
                  <span className="text-white/50 font-medium">{hour.day}</span>
                  <span className="text-white font-bold">{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
              채널
            </h4>
            <ul className="text-sm space-y-2.5">
              <li>
                <a href={hospitalData.links.naverMap} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors font-medium">
                  네이버 지도
                </a>
              </li>
              <li>
                <a href={hospitalData.links.blog} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors font-medium">
                  공식 블로그
                </a>
              </li>
              <li>
                <a href={hospitalData.links.kakaoTalk} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors font-medium">
                  카카오톡 상담
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 text-xs text-white/30">
          <div className="space-y-1">
            <p>{hospitalData.name} | {hospitalData.address} | T. {hospitalData.phone}</p>
            <p>대표자: {hospitalData.companyInfo.representative} | {hospitalData.companyInfo.businessNumber}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href={hospitalData.links.privacyPolicy} className="text-white/50 hover:text-white transition-colors font-semibold underline underline-offset-2">
              개인정보처리방침
            </Link>
            <span>&copy; {new Date().getFullYear()} {hospitalData.name}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
