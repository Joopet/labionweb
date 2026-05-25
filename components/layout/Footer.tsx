import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, MessageCircle } from 'lucide-react'
import { hospitalInfo } from '@/data/hospitalData'

const navItems = [
  { label: '병원 소개', href: '#about' },
  { label: '진료 안내', href: '#services' },
  { label: '의료진', href: '#staff' },
  { label: '시설 안내', href: '#facilities' },
  { label: '오시는 길', href: '#location' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo.png"
                alt="라비온 동물의료센터"
                width={140}
                height={42}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              사랑, 동물, 생명 그리고 따스한 온기
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-5 text-sm">바로가기</h4>
            <nav className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-sm">연락처</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${hospitalInfo.contact.phone}`}
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#1da8fc]" />
                {hospitalInfo.contact.phone}
              </a>
              <a
                href={hospitalInfo.contact.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#1da8fc]" />
                카카오톡 상담
              </a>
              <div className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-[#1da8fc] mt-0.5 flex-shrink-0" />
                <span>{hospitalInfo.location.address}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-5 text-sm">진료시간</h4>
            <div className="text-white/50 text-sm space-y-2">
              <p>매일 {hospitalInfo.hours.weekday}</p>
              <p>휴게 {hospitalInfo.hours.breakTime}</p>
              <p className="text-[#1da8fc] font-medium">{hospitalInfo.hours.holiday}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white/50 text-xs">
              <p>대표: {hospitalInfo.ceo}</p>
              <p>사업자등록증: {hospitalInfo.businessRegistration}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              &copy; {currentYear} {hospitalInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href={hospitalInfo.contact.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white text-sm transition-colors"
              >
                블로그
              </a>
              <a
                href={hospitalInfo.contact.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white text-sm transition-colors"
              >
                카카오톡
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
