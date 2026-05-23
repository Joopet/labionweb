import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { PageHero } from "@/components/ui/PageHero";
import { hospitalData } from "@/data/hospitalData";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "시설·장비 | 라비온 동물의료센터",
  description: "라비온 동물의료센터의 진료 공간과 의료 장비를 소개합니다. 안전하고 편안한 의료 환경을 갖추고 있습니다.",
};

export default function FacilitiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full pb-16 lg:pb-0">
        <PageHero
          category="LABION SPACE"
          title="편안하고 안정적인 진료 공간"
          description="보호자와 반려동물이 편안하게 머무를 수 있는 안전한 의료 환경을 갖추고 있습니다."
        />

        {/* Facilities Gallery */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {hospitalData.facilities.map((facility) => (
                <div
                  key={facility.id}
                  className="group relative rounded-2xl overflow-hidden aspect-[16/10]"
                >
                  {/* Background placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-blue)] to-[var(--color-primary-blue-dark)]">
                    <div
                      className="absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:text-white/30 transition-colors duration-500">
                      <Camera className="w-10 h-10" strokeWidth={1} />
                    </div>
                  </div>

                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Text overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10">
                    <div className="w-8 h-0.5 bg-[var(--color-accent-blue)] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 tracking-tight">
                      {facility.name}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-medium">
                      {facility.description}
                    </p>
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
