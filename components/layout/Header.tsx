'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { hospitalInfo } from '@/data/hospitalData'
import { useCmsContent } from '@/components/providers/CmsProvider'
import { cn } from '@/lib/utils'

const navItems = [
  { label: '라비온 소개', href: '/' },
  {
    label: '진료과목',
    href: '/services',
    children: [
      { label: '진료과목 안내', href: '/services', description: '라비온의 주요 진료 항목' },
      { label: '진료케이스', href: '/cases', description: '진료 흐름과 상담 사례 안내' },
      { label: '질환 백과', href: '/encyclopedia', description: '보호자를 위한 건강정보' },
    ],
  },
  { label: '의료진', href: '/staff' },
  { label: '시설·장비', href: '/facilities' },
  { label: '오시는 길', href: '/location' },
]

export default function Header() {
  const cms = useCmsContent()
  const site = cms?.site
  const phone = site?.phone || hospitalInfo.contact.phone
  const kakaoUrl = site?.kakaoUrl || hospitalInfo.contact.kakaoUrl

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="라비온 동물의료센터 홈">
            <Image
              src={hospitalInfo.logoUrl}
              alt="라비온 동물의료센터 로고"
              width={220}
              height={66}
              className={cn('w-36 h-auto object-contain transition-all duration-500', !isScrolled && !isMobileMenuOpen && 'brightness-0 invert')}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const hasChildren = 'children' in item && item.children?.length

              if (hasChildren) {
                return (
                  <div key={item.href} className="group relative py-7">
                    <Link
                      href={item.href}
                      className={cn(
                        'break-keep flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#1da8fc]',
                        isScrolled ? 'text-[#0f172a]' : 'text-white/90'
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>

                    <div className="pointer-events-none absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-xl shadow-[#00377b]/10">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block border-b border-[#f1f5f9] px-5 py-4 last:border-0 transition-colors hover:bg-[#f4f8ff]"
                          >
                            <span className="block break-keep text-sm font-bold text-[#00377b]">{child.label}</span>
                            <span className="mt-1 block break-keep text-xs leading-relaxed text-[#808080]">{child.description}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'break-keep text-sm font-semibold transition-colors hover:text-[#1da8fc]',
                    isScrolled ? 'text-[#0f172a]' : 'text-white/90'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${phone}`}
              className={cn(
                'flex items-center gap-2 break-keep text-sm font-semibold transition-colors hover:text-[#1da8fc]',
                isScrolled ? 'text-[#0f172a]' : 'text-white/90'
              )}
            >
              <Phone className="h-4 w-4" />
              <span>{phone}</span>
            </a>
            <a
              href={kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="break-keep px-5 py-2.5 bg-[#00377b] text-white text-sm font-semibold rounded-full hover:bg-[#1da8fc] transition-colors"
            >
              카카오톡 상담
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled || isMobileMenuOpen ? 'text-[#0f172a] hover:bg-[#f1f5f9]' : 'text-white hover:bg-white/10'
            )}
            aria-label="메뉴 열기"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e2e8f0]">
          <nav className="container-custom py-4">
            {navItems.map((item) => {
              const hasChildren = 'children' in item && item.children?.length

              if (hasChildren) {
                return (
                  <div key={item.href} className="border-b border-[#f1f5f9] py-2">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between break-keep py-3 text-[#0f172a] font-semibold hover:text-[#1da8fc] transition-colors"
                    >
                      {item.label}
                      <span className="rounded-full bg-[#eef6ff] px-2 py-1 text-xs font-bold text-[#00377b]">상위</span>
                    </Link>
                    <div className="ml-4 mt-1 rounded-2xl bg-[#f8fbff] p-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block break-keep rounded-xl px-4 py-3 text-sm font-medium text-[#334155] transition-colors hover:bg-white hover:text-[#00377b]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block break-keep py-3 text-[#0f172a] font-semibold border-b border-[#f1f5f9] last:border-0 hover:text-[#1da8fc] transition-colors"
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#e2e8f0]">
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 py-3 border border-[#e2e8f0] rounded-xl text-[#0f172a] font-semibold"
              >
                <Phone className="h-4 w-4" />
                전화
              </a>
              <a
                href={kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-3 bg-[#00377b] text-white font-semibold rounded-xl"
              >
                상담
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
