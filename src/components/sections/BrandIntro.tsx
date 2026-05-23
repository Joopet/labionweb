import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hospitalData } from "@/data/hospitalData";

export function BrandIntro() {
  const { category, title, description } = hospitalData.brandIntro;

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[var(--color-accent-blue)] mb-4 uppercase">
              {category}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-primary-blue)] leading-snug tracking-tight mb-6">
              {title}
            </h2>
            <div className="w-12 h-0.5 bg-[var(--color-accent-blue)] mb-6 mx-auto lg:mx-0" />
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
              {description}
            </p>
          </div>

          {/* Symbol */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-[var(--color-light-gray)] flex items-center justify-center border border-gray-100 relative overflow-hidden group">
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-blue)]/[0.03] to-[var(--color-accent-blue)]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <svg
                viewBox="0 0 120 120"
                className="w-28 h-28 sm:w-36 sm:h-36 transition-transform duration-500 group-hover:scale-105"
                fill="none"
              >
                {/* Outer ring */}
                <circle cx="60" cy="60" r="52" stroke="var(--color-primary-blue)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.2" />

                {/* Heart */}
                <path
                  d="M60 48C57 41 47 39 42 45C37 51 40 60 60 75C80 60 83 51 78 45C73 39 63 41 60 48Z"
                  stroke="var(--color-primary-blue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                {/* L mark */}
                <path
                  d="M54 52V66H66"
                  stroke="var(--color-accent-blue)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Accent dots */}
                <circle cx="80" cy="38" r="2.5" fill="var(--color-accent-blue)" opacity="0.6" />
                <circle cx="40" cy="82" r="2" fill="var(--color-accent-blue)" opacity="0.4" />
              </svg>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-primary-blue)]/20 text-sm font-bold text-[var(--color-primary-blue)] hover:bg-[var(--color-primary-blue)] hover:text-white transition-all duration-300"
          >
            라비온 소개 자세히 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
