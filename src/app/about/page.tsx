import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { PageHero } from "@/components/ui/PageHero";
import { hospitalData } from "@/data/hospitalData";
import { Ear, HandHeart, Eye, ArrowRight, Heart, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "라비온 소개 | 라비온 동물의료센터",
  description: "라비온 동물의료센터의 진료 철학과 가치를 소개합니다. 충분한 설명과 책임 있는 진료를 지향합니다.",
};

const promises = [
  {
    icon: Ear,
    title: "충분히 듣고 설명합니다",
    description:
      "보호자님의 이야기를 끝까지 경청하고, 반려동물의 상태와 진료 방향을 이해하기 쉽게 설명드립니다.",
  },
  {
    icon: HandHeart,
    title: "필요한 진료를 함께 결정합니다",
    description:
      "일방적인 진료가 아닌, 보호자님과 충분히 상의한 후 가장 적합한 진료 방향을 함께 결정합니다.",
  },
  {
    icon: Eye,
    title: "아이의 입장에서 살핍니다",
    description:
      "반려동물의 스트레스와 불편함을 최소화하는 방식으로 진료하며, 작은 변화도 놓치지 않겠습니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full pb-16 lg:pb-0">
        <PageHero
          category="ABOUT LABION"
          title="라비온 동물의료센터를 소개합니다"
          description="충분한 설명과 세심한 진료로 보호자님과 반려동물이 안심할 수 있는 의료 환경을 만들어갑니다."
        />

        {/* Brand Meaning Section */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-[var(--color-accent-blue)] mb-4 uppercase">
                BRAND STORY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-primary-blue)] tracking-tight leading-tight mb-6">
                라비온, 그 이름의 의미
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-medium mb-12">
                라비온(Labion)은 연구와 분석을 의미하는 &apos;Lab&apos;과 생명을 뜻하는 그리스어 &apos;Bion&apos;에서 영감을 받았습니다.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[var(--color-light-gray)] rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[var(--color-primary-blue)] mx-auto mb-5 shadow-sm">
                  <FlaskConical className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary-blue)] mb-2">Lab</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  과학적이고 체계적인 접근을 통해 반려동물의 건강 상태를 정밀하게 파악합니다.
                </p>
              </div>
              <div className="bg-[var(--color-light-gray)] rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[var(--color-primary-blue)] mx-auto mb-5 shadow-sm">
                  <Heart className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary-blue)] mb-2">Bion</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  생명에 대한 존중을 바탕으로 따뜻하고 세심한 진료를 지향합니다.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-10">
              <p className="text-center text-sm sm:text-base text-gray-500 leading-relaxed font-medium">
                과학적 근거에 기반한 진료와 생명을 향한 따뜻한 마음 — 이 두 가지를 함께 담은 이름이 바로 <strong className="text-[var(--color-primary-blue)]">라비온</strong>입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 sm:py-28 bg-[var(--color-light-gray)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-[var(--color-accent-blue)] mb-3 uppercase">
                PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-primary-blue)] tracking-tight leading-tight mb-3">
                라비온의 진료 철학
              </h2>
              <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
                라비온 동물의료센터가 진료에서 가장 소중하게 생각하는 가치입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {hospitalData.philosophyTabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-light-blue)] flex items-center justify-center text-[var(--color-accent-blue)] mb-5">
                    <span className="text-sm font-extrabold">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xs font-bold tracking-[0.15em] text-[var(--color-accent-blue)] uppercase mb-3">
                    {tab.tabName}
                  </h3>
                  <h4 className="text-lg font-bold text-[var(--color-primary-blue)] leading-snug mb-4">
                    {tab.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {tab.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promises Section */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-[var(--color-accent-blue)] mb-3 uppercase">
                OUR PROMISE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-primary-blue)] tracking-tight leading-tight mb-3">
                보호자님께 드리는 약속
              </h2>
              <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
                라비온은 다음 세 가지를 항상 지키겠습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {promises.map((promise) => {
                const Icon = promise.icon;
                return (
                  <div
                    key={promise.title}
                    className="group p-8 rounded-2xl bg-[var(--color-light-gray)] border border-transparent hover:border-[var(--color-accent-blue)]/20 hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[var(--color-primary-blue)] mx-auto mb-5 group-hover:bg-[var(--color-primary-blue)] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-primary-blue)] mb-3">
                      {promise.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {promise.description}
                    </p>
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
              라비온을 직접 만나보세요
            </h2>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed font-medium mb-8">
              편안한 환경에서 반려동물의 건강을 함께 살펴드립니다.
            </p>
            <Link
              href="/location"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[var(--color-primary-blue)] hover:bg-white/90 transition-colors shadow-lg"
            >
              오시는 길 보기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
