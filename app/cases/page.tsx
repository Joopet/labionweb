import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import { ArrowRight, ClipboardList, Info } from 'lucide-react'
import { caseCards, hospitalInfo } from '@/data/hospitalData'

export const metadata = {
  title: '진료케이스 | 라비온 동물의료센터',
  description: '라비온 동물의료센터의 대표 진료 흐름과 상담 사례 예시를 안내합니다.',
}

export default function CasesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-white">
        <section className="bg-[#00377b] py-20 md:py-28">
          <div className="container-custom">
            <p className="text-[#1da8fc] text-xs font-semibold tracking-[0.28em] uppercase mb-4">LABION CASE</p>
            <h1 className="break-keep text-3xl md:text-5xl font-bold text-white mb-5">진료케이스</h1>
            <p className="break-keep text-white/75 max-w-2xl leading-relaxed">
              보호자님이 진료 과정을 쉽게 이해하실 수 있도록 대표 증상별 상담 흐름과 진료 안내 예시를 정리합니다.
            </p>
          </div>
        </section>

        <section className="section-padding bg-[#f8fafc]">
          <div className="container-custom">
            <div className="mb-10 rounded-3xl border border-[#bfdbfe] bg-white p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00377b]/10">
                  <Info className="h-6 w-6 text-[#00377b]" />
                </div>
                <div>
                  <h2 className="break-keep text-lg font-bold text-[#0f172a] mb-2">진료케이스 운영 기준</h2>
                  <p className="break-keep text-sm leading-relaxed text-[#64748b]">
                    현재 화면의 케이스는 홈페이지 구성을 위한 예시입니다. 실제 진료 사례는 보호자 동의, 개인정보 비식별화,
                    의료진 검수 후 공개하는 것을 원칙으로 합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {caseCards.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl border border-[#e2e8f0] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#1da8fc]/50 hover:shadow-xl hover:shadow-[#00377b]/5"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00377b]/8">
                    <ClipboardList className="h-6 w-6 text-[#00377b]" />
                  </div>
                  <span className="mb-4 inline-block rounded-full bg-[#1da8fc]/10 px-3 py-1 text-xs font-semibold text-[#00377b]">
                    {item.category}
                  </span>
                  <h2 className="break-keep mb-3 text-xl font-bold leading-snug text-[#0f172a]">{item.title}</h2>
                  <p className="break-keep mb-6 text-sm leading-relaxed text-[#64748b]">{item.summary}</p>
                  <div className="mb-6 space-y-2">
                    {item.steps.map((step, index) => (
                      <div key={step} className="flex items-center gap-2 text-sm text-[#334155]">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00377b] text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <span className="break-keep">{step}</span>
                      </div>
                    ))}
                  </div>
                  <p className="break-keep rounded-2xl bg-[#f8fafc] p-4 text-xs leading-relaxed text-[#64748b]">{item.note}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-[#00377b] p-8 md:p-10 text-white">
              <p className="mb-2 text-xs font-semibold tracking-[0.24em] text-[#1da8fc]">LABION CONSULTING</p>
              <h2 className="break-keep mb-4 text-2xl font-bold">아이의 증상이 걱정된다면 먼저 상담해 주세요.</h2>
              <p className="break-keep mb-6 max-w-2xl text-white/70">
                증상만으로 판단하기보다 아이의 상태와 생활환경을 함께 확인하는 것이 중요합니다.
              </p>
              <a
                href={hospitalInfo.links.kakaoTalk}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#00377b] transition-colors hover:bg-[#1da8fc] hover:text-white"
              >
                카카오톡 상담하기
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
