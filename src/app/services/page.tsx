import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { PageHero } from "@/components/ui/PageHero";
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
  Phone,
  Clock,
  FileText,
  PawPrint,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "진료과목 | 라비온 동물의료센터",
  description: "예방접종, 건강검진, 내과, 외과, 피부, 치과, 중성화, 노령동물 관리까지 라비온의 진료과목을 안내합니다.",
};

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

const beforeVisitTips = [
  {
    icon: Clock,
    title: "예약 후 방문을 권장합니다",
    description: "원활한 진료를 위해 전화 또는 카카오톡으로 사전 예약 후 방문해 주시면 대기 시간을 줄일 수 있습니다.",
  },
  {
    icon: FileText,
    title: "검사 전 금식 안내",
    description: "혈액검사나 초음파 검사가 예정된 경우, 검사 당일 최소 8시간 이상 금식이 필요할 수 있습니다. 사전에 안내드립니다.",
  },
  {
    icon: PawPrint,
    title: "이동 시 안전에 유의해 주세요",
    description: "강아지는 리드줄, 고양이는 이동장을 사용해 주시면 다른 동물과의 접촉을 최소화하여 스트레스를 줄일 수 있습니다.",
  },
  {
    icon: Stethoscope,
    title: "평소 증상을 메모해 주세요",
    description: "증상이 시작된 시기, 빈도, 식욕·배변 변화 등을 메모해 오시면 보다 정확한 진료에 도움이 됩니다.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full pb-16 lg:pb-0">
        <PageHero
          category="LABION CARE"
          title="라비온 진료과목"
          description="예방관리부터 내과·외과 진료까지, 반려동물의 상태와 생활 환경을 고려해 필요한 진료를 안내합니다."
        />

        {/* Services Grid */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
          </div>
        </section>

        {/* Before Visit Tips */}
        <section className="py-20 sm:py-28 bg-[var(--color-light-gray)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-[var(--color-accent-blue)] mb-3 uppercase">
                BEFORE YOUR VISIT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-primary-blue)] tracking-tight leading-tight mb-3">
                진료 전 안내
              </h2>
              <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
                원활한 진료를 위해 내원 전 아래 사항을 확인해 주세요.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {beforeVisitTips.map((tip) => {
                const Icon = tip.icon;
                return (
                  <div
                    key={tip.title}
                    className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-light-blue)] flex items-center justify-center text-[var(--color-accent-blue)] shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--color-primary-blue)] mb-2">
                        {tip.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-[var(--color-primary-blue)]">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              진료 문의 및 예약
            </h2>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed font-medium mb-8">
              궁금한 점이 있으시면 편하게 연락해 주세요. 친절하게 안내해 드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${hospitalData.phone.replace(/-/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[var(--color-primary-blue)] hover:bg-white/90 transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4" />
                {hospitalData.phone}
              </a>
              <a
                href={hospitalData.links.kakaoTalk}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FEE500] px-7 py-3.5 text-sm font-bold text-[#191919] hover:bg-[#FDD835] transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 3c-5.523 0-10 3.582-10 8 0 2.864 1.832 5.378 4.606 6.848-.305 1.135-1.104 4.095-1.127 4.195-.028.118.04.182.14.12 0 0 3.32-2.186 5.377-3.541.65.086 1.32.133 2.004.133 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                </svg>
                카카오톡 상담하기
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
