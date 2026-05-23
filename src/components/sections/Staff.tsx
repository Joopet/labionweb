import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hospitalData } from "@/data/hospitalData";
import { UserCircle2, GraduationCap, Quote, ArrowRight } from "lucide-react";

export function Staff() {
  return (
    <section id="staff" className="py-20 sm:py-28 bg-[var(--color-light-gray)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionHeading
          category="LABION PEOPLE"
          title="아이의 건강한 일상을 함께 고민하는 사람들"
          subtitle="각 분야의 전문성을 갖춘 의료진이 세심한 진료와 배려로 보답하겠습니다."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {hospitalData.staff.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Photo placeholder */}
              <div className="h-52 sm:h-56 bg-gradient-to-br from-[var(--color-primary-blue)] to-[var(--color-primary-blue-dark)] relative overflow-hidden">
                {/* Pattern texture */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Placeholder graphic */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 group-hover:text-white/50 transition-colors duration-500">
                  <UserCircle2 className="w-14 h-14 mb-1.5" strokeWidth={1} />
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase">Profile Photo</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col">
                {/* Name + Role */}
                <div className="flex items-baseline gap-2.5 mb-5">
                  <h3 className="text-xl font-extrabold text-[var(--color-primary-blue)] tracking-tight">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-[var(--color-accent-blue)] bg-[var(--color-light-blue)] px-2 py-0.5 rounded">
                    {member.role}
                  </span>
                </div>

                {/* Specialty */}
                <div className="mb-5">
                  <span className="inline-block text-[11px] font-bold tracking-wide text-[var(--color-primary-blue)] uppercase border border-[var(--color-primary-blue)]/15 px-2.5 py-1 rounded-full bg-[var(--color-light-gray)]">
                    {member.specialty}
                  </span>
                </div>

                {/* Philosophy */}
                <div className="p-4 rounded-xl bg-[var(--color-light-gray)] mb-6 flex gap-2.5">
                  <Quote className="w-4 h-4 text-[var(--color-accent-blue)] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 italic leading-relaxed font-medium">
                    {member.philosophy}
                  </p>
                </div>

                {/* History */}
                <div className="pt-5 border-t border-gray-100 mt-auto">
                  <h4 className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary-blue)] mb-3">
                    <GraduationCap className="w-3.5 h-3.5 text-[var(--color-accent-blue)]" />
                    주요 약력
                  </h4>
                  <ul className="space-y-2">
                    {member.history?.map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed font-medium">
                        <span className="w-1 h-1 rounded-full bg-[var(--color-accent-blue)] mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/staff"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-primary-blue)]/20 text-sm font-bold text-[var(--color-primary-blue)] hover:bg-[var(--color-primary-blue)] hover:text-white transition-all duration-300"
          >
            의료진 자세히 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
