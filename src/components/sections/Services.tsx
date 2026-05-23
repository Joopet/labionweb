import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hospitalData } from "@/data/hospitalData";
import {
  Shield,
  ClipboardCheck,
  Stethoscope,
  Sparkles,
  SmilePlus,
  Scissors,
  HeartPulse,
  ScanSearch,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const serviceIcons: Record<string, LucideIcon> = {
  vaccine: Shield,
  checkup: ClipboardCheck,
  internal: Stethoscope,
  skin: Sparkles,
  dental: SmilePlus,
  neuter: Scissors,
  surgery: HeartPulse,
  lab: ScanSearch,
  senior: HeartHandshake,
};

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionHeading
          category="LABION CARE"
          title="라비온 진료과목"
          subtitle="예방관리부터 내과·외과 진료까지, 반려동물의 상태와 생활 환경을 고려해 필요한 진료를 안내합니다."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hospitalData.services.map((service) => {
            const Icon = serviceIcons[service.id] || Stethoscope;
            return (
              <div
                key={service.id}
                className="group p-7 rounded-2xl bg-[var(--color-light-gray)] border border-transparent hover:border-[var(--color-accent-blue)]/20 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-[var(--color-primary-blue)] group-hover:bg-[var(--color-primary-blue)] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bold text-lg text-[var(--color-primary-blue)]">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1 font-medium">
                  {service.description}
                </p>

                {service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200/50">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white text-[11px] font-semibold text-gray-500 border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-primary-blue)]/20 text-sm font-bold text-[var(--color-primary-blue)] hover:bg-[var(--color-primary-blue)] hover:text-white transition-all duration-300"
          >
            진료과목 전체 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
