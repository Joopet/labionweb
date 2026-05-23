import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { PageHero } from "@/components/ui/PageHero";
import { hospitalData } from "@/data/hospitalData";
import { UserCircle2, GraduationCap, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "의료진 소개 | 라비온 동물의료센터",
  description: "라비온 동물의료센터의 의료진을 소개합니다. 각 분야의 전문성을 갖춘 의료진이 세심한 진료를 제공합니다.",
};

export default function StaffPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full pb-16 lg:pb-0">
        <PageHero
          category="LABION PEOPLE"
          title="아이의 건강한 일상을 함께 고민하는 사람들"
          description="각 분야의 전문성을 갖춘 의료진이 세심한 진료와 배려로 보답하겠습니다."
        />

        {/* Staff Cards */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10">
              {hospitalData.staff.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col md:flex-row group"
                >
                  {/* Photo placeholder */}
                  <div className="md:w-80 h-64 md:h-auto bg-gradient-to-br from-[var(--color-primary-blue)] to-[var(--color-primary-blue-dark)] relative overflow-hidden shrink-0">
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent md:hidden" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 group-hover:text-white/50 transition-colors duration-500">
                      <UserCircle2 className="w-16 h-16 mb-2" strokeWidth={1} />
                      <span className="text-[10px] font-bold tracking-[0.15em] uppercase">Profile Photo</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8 sm:p-10 flex-1 flex flex-col">
                    {/* Name + Role */}
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-2xl font-extrabold text-[var(--color-primary-blue)] tracking-tight">
                        {member.name}
                      </h3>
                      <span className="text-xs font-bold text-[var(--color-accent-blue)] bg-[var(--color-light-blue)] px-2.5 py-1 rounded">
                        {member.role}
                      </span>
                    </div>

                    {/* Specialty */}
                    <div className="mb-6">
                      <span className="inline-block text-[11px] font-bold tracking-wide text-[var(--color-primary-blue)] uppercase border border-[var(--color-primary-blue)]/15 px-3 py-1 rounded-full bg-[var(--color-light-gray)]">
                        {member.specialty}
                      </span>
                    </div>

                    {/* Philosophy */}
                    <div className="p-5 rounded-xl bg-[var(--color-light-gray)] mb-7 flex gap-3">
                      <Quote className="w-5 h-5 text-[var(--color-accent-blue)] shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed font-medium">
                        {member.philosophy}
                      </p>
                    </div>

                    {/* History */}
                    <div className="pt-6 border-t border-gray-100 mt-auto">
                      <h4 className="flex items-center gap-2 text-sm font-bold text-[var(--color-primary-blue)] mb-4">
                        <GraduationCap className="w-4 h-4 text-[var(--color-accent-blue)]" />
                        주요 약력
                      </h4>
                      <ul className="space-y-2.5">
                        {member.history?.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2.5 leading-relaxed font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-blue)] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
