import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hospitalData } from "@/data/hospitalData";
import { Camera, ArrowRight } from "lucide-react";

export function Facilities() {
  return (
    <section id="facilities" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionHeading
          category="LABION SPACE"
          title="편안하고 안정적인 진료 공간"
          subtitle="보호자와 반려동물이 편안하게 머무를 수 있는 안전한 의료 환경을 갖추고 있습니다."
        />

        {/* Gallery Grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {hospitalData.facilities.map((facility, index) => {
            // First two items are wider
            const isWide = index < 2;

            return (
              <div
                key={facility.id}
                className={`group relative rounded-2xl overflow-hidden cursor-default ${
                  isWide ? "col-span-2" : "col-span-1"
                } ${isWide ? "aspect-[16/9]" : "aspect-square"}`}
              >
                {/* Background placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-blue)] to-[var(--color-primary-blue-dark)]">
                  {/* Dot pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  {/* Centered icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:text-white/30 transition-colors duration-500">
                    <Camera className="w-8 h-8" strokeWidth={1} />
                  </div>
                </div>

                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Text overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
                  <div className="w-6 h-0.5 bg-[var(--color-accent-blue)] rounded-full mb-2 group-hover:w-10 transition-all duration-300" />
                  <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 tracking-tight">
                    {facility.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed line-clamp-2 font-medium">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/facilities"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-primary-blue)]/20 text-sm font-bold text-[var(--color-primary-blue)] hover:bg-[var(--color-primary-blue)] hover:text-white transition-all duration-300"
          >
            시설·장비 자세히 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
