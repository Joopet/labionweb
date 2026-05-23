"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { hospitalData } from "@/data/hospitalData";

const navigation = [
  { name: "라비온 소개", href: "/about" },
  { name: "진료과목", href: "/services" },
  { name: "의료진", href: "/staff" },
  { name: "시설·장비", href: "/facilities" },
  { name: "오시는 길", href: "/location" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrolled = isHome ? scrollY : true;

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="sr-only">{hospitalData.name}</span>
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-500 ${
              scrolled
                ? "bg-[var(--color-primary-blue)] text-white"
                : "bg-white/90 text-[var(--color-primary-blue)]"
            }`}
          >
            L
          </div>
          <span
            className={`text-lg font-bold tracking-tight transition-colors duration-500 hidden sm:block ${
              scrolled ? "text-[var(--color-primary-blue)]" : "text-white"
            }`}
          >
            {hospitalData.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                scrolled
                  ? "text-gray-600 hover:text-[var(--color-primary-blue)] hover:bg-gray-50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href={`tel:${hospitalData.phone.replace(/-/g, "")}`}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-500 ${
              scrolled
                ? "bg-[var(--color-primary-blue)] text-white hover:bg-[var(--color-primary-blue-dark)] shadow-sm"
                : "bg-white text-[var(--color-primary-blue)] hover:bg-white/90 shadow-lg"
            }`}
          >
            <Phone className="h-4 w-4" />
            {hospitalData.phone}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`lg:hidden -m-2 p-2 rounded-lg transition-colors ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="메뉴 열기"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div
          className={`absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-blue)] text-white flex items-center justify-center font-bold text-sm">L</div>
              <span className="text-base font-bold text-[var(--color-primary-blue)]">{hospitalData.name}</span>
            </Link>
            <button
              type="button"
              className="p-2 -m-2 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="메뉴 닫기"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="px-4 py-6 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3.5 text-base font-semibold text-gray-800 rounded-xl hover:bg-[var(--color-light-gray)] hover:text-[var(--color-primary-blue)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
            <a
              href={`tel:${hospitalData.phone.replace(/-/g, "")}`}
              className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-[var(--color-primary-blue)] py-3.5 text-base font-bold text-white hover:bg-[var(--color-primary-blue-dark)] transition-colors"
            >
              <Phone className="h-5 w-5" />
              전화 문의하기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
