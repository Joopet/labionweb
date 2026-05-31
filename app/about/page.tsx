import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import { hospitalInfo, coreValues } from '@/data/hospitalData'

export const metadata = {
  title: '라비온 소개 | 라비온 동물의료센터',
  description: '라비온 동물의료센터의 브랜드 의미와 진료 철학을 소개합니다.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-white">
        <section className="bg-[#00377b] py-20 md:py-28">
          <div className="container-custom">
            <p className="text-[#1da8fc] text-xs font-semibold tracking-[0.28em] uppercase mb-4">ABOUT LABION</p>
            <h1 className="break-keep text-3xl md:text-5xl font-bold text-white mb-5">라비온 소개</h1>
            <p className="break-keep text-white/72 max-w-2xl leading-relaxed">{hospitalInfo.brandIntro.title}</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom grid lg:grid-cols-[0.75fr_1fr] gap-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-[#1da8fc] uppercase mb-4">BRAND STORY</p>
              <h2 className="break-keep text-3xl md:text-4xl font-bold text-[#0f172a] leading-tight">보호자와 반려동물이 함께 안심할 수 있는 진료를 지향합니다.</h2>
            </div>
            <div className="space-y-5 break-keep text-[#64748b] leading-relaxed">
              <p>{hospitalInfo.brandIntro.description}</p>
              <p>라비온은 강아지와 고양이 보호자가 병원 정보를 한눈에 확인하고, 방문 전 필요한 정보를 쉽게 찾을 수 있는 병원 경험을 만들어가고자 합니다.</p>
            </div>
          </div>
        </section>

        <section className="pb-24 bg-white">
          <div className="container-custom grid md:grid-cols-3 gap-5">
            {coreValues.map((value) => (
              <div key={value.title} className="rounded-2xl border border-[#e2e8f0] p-7 bg-[#f8fafc]">
                <h3 className="break-keep text-xl font-bold text-[#00377b] mb-3">{value.title}</h3>
                <p className="break-keep text-sm text-[#64748b] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
