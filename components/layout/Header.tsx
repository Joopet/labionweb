'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { hospitalInfo } from '@/data/hospitalData'
import { cn } from '@/lib/utils'

const navItems = [
  { label: '소개', href: '#about' },
  { 
    label: '진료안내', 
    href: '#services',
    dropdown: [
      { label: '진료 안내', href: '/services' },
      { label: '진료/수술 케이스', href: '/cases' },
    ]
  },
  { 
    label: '의료진', 
    href: '/staff',
    dropdown: [
      { label: '의료진 소개', href: '/staff' },
      { label: '의료진 (메인)', href: '/#staff' },
    ]
  },
  { 
    label: '시설안내', 
    href: '/facilities',
    dropdown: [
      { label: '시설 및 장비', href: '/facilities' },
      { label: '시설 (메인)', href: '/#facilities' },
    ]
  },
  { label: '오시는 길', href: '#location' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Hydration 이후 마운트 플래그 설정
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    // 초기 스크롤 위치 확인
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 마운트 전에는 서버/클라이언트 일관된 상태 유지
  const scrolled = isMounted && isScrolled

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="라비온 동물의료센터"
              width={220}
              height={66}
              className={cn(
                'w-36 h-auto object-contain transition-all duration-500',
                scrolled ? '' : 'brightness-0 invert'
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={cn(
                        'flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#1da8fc]',
                        scrolled ? 'text-[#0f172a]' : 'text-white/90'
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        'w-4 h-4 transition-transform',
                        openDropdown === item.label && 'rotate-180'
                      )} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#e2e8f0] py-2 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2.5 text-sm text-[#0f172a] hover:bg-[#f8fafc] hover:text-[#1da8fc] transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-[#1da8fc]',
                      scrolled ? 'text-[#0f172a]' : 'text-white/90'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${hospitalInfo.contact.phone}`}
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#1da8fc]',
                scrolled ? 'text-[#0f172a]' : 'text-white/90'
              )}
            >
              <Phone className="h-4 w-4" />
              <span>{hospitalInfo.contact.phone}</span>
            </a>
            <a
              href={hospitalInfo.contact.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#1da8fc] text-white text-sm font-medium rounded-full hover:bg-[#0090e0] transition-colors"
            >
              카카오톡 상담
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              scrolled
                ? 'text-[#0f172a] hover:bg-[#f1f5f9]'
                : 'text-white hover:bg-white/10'
            )}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e2e8f0]">
          <nav className="container-custom py-4">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full py-3 text-[#0f172a] font-medium border-b border-[#f1f5f9]"
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        'w-4 h-4 transition-transform',
                        openDropdown === item.label && 'rotate-180'
                      )} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="bg-[#f8fafc] py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setOpenDropdown(null)
                            }}
                            className="block py-2.5 pl-6 text-sm text-[#64748b] hover:text-[#1da8fc] transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-[#0f172a] font-medium border-b border-[#f1f5f9] last:border-0 hover:text-[#1da8fc] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#e2e8f0]">
              <a
                href={`tel:${hospitalInfo.contact.phone}`}
                className="flex items-center justify-center gap-2 py-3 border border-[#e2e8f0] rounded-xl text-[#0f172a] font-medium"
              >
                <Phone className="h-4 w-4" />
                전화 상담
              </a>
              <a
                href={hospitalInfo.contact.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-3 bg-[#1da8fc] text-white font-medium rounded-xl"
              >
                카카오톡 상담
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
