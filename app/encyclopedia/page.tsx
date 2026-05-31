import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import { ArrowRight, BookOpenText, CheckCircle2 } from 'lucide-react'
import { encyclopediaCards, hospitalInfo } from '@/data/hospitalData'

export const metadata = {
  title: '질환 백과 | 라비온 동물의료센터',
  description: '강아지와 고양이 보호자를 위한 라비온 동물의료센터의 반려동물 건강정보를 안내합니다.',
}

export default function EncyclopediaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-white">
        <section className="bg-[#00377b] py-20 md:py-28">
          <div className="container-custom">
            <p className="text-[#1da8fc] text-xs font-semibold tracking-[0.28em] uppercase mb-4">LABION ENCYCLOPEDIA</p>
            <h1 className="break-keep text-3xl md:text-5xl font-bold text-white mb-5">질환 백과</h1>
            <p className="break-keep text-white/75 max-w-2xl leading-relaxed">
              보호자님이 자주 궁금해하는 강아지·고양이 건강 신호와 관리 정보를 이해하기 쉽게 정리합니다.
            </p>
          </div>
        </section>

        <section className="section-padding bg-[#f8fafc]">
          <div className="container-custom">
            <div className="mb-10 rounded-3xl border border-[#bfdbfe] bg-white p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00377b]/10">
                  <BookOpenText className="h-6 w-6 text-[#00377b]" />
                </div>
                <div>
                  <h2 className="break-keep text-lg font-bold text-[#0f172a] mb-2">질환 백과 이용 안내</h2>
                  <p className="break-keep text-sm leading-relaxed text-[#64748b]">
                    질환 백과는 보호자님을 위한 일반 건강정보입니다. 실제 진단과 치료는 아이의 상태를 확인한 뒤 의료진과 상담해 주세요.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {encyclopediaCards.map((item) => (
                <article
                  key={item.id}
                  className="group rounded-3xl border border-[#e2e8f0] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#1da8fc]/50 hover:shadow-xl hover:shadow-[#00377b]/5"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00377b]/8 group-hover:bg-[#00377b] transition-colors">
                      <BookOpenText className="h-6 w-6 text-[#00377b] group-hover:text-white transition-colors" />
                    </div>
                    <span className="rounded-full bg-[#1da8fc]/10 px-3 py-1 text-xs font-semibold text-[#00377b]">
                      {item.category}
                    </span>
                  </div>
                  <h2 className="break-keep mb-3 text-xl font-bold leading-snug text-[#0f172a] group-hover:text-[#00377b] transition-colors">
                    {item.title}
                  </h2>
                  <p className="break-keep mb-5 text-sm leading-relaxed text-[#64748b]">{item.summary}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {item.symptoms.map((symptom) => (
                      <span key={symptom} className="inline-flex items-center gap-1 rounded-full bg-[#f1f5f9] px-3 py-1 text-xs font-medium text-[#334155]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#1da8fc]" />
                        {symptom}
                      </span>
                    ))}
                  </div>
                  <p className="break-keep rounded-2xl bg-[#f8fafc] p-4 text-xs leading-relaxed text-[#64748b]">{item.caution}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-white p-8 md:p-10 border border-[#e2e8f0]">
              <p className="mb-2 text-xs font-semibold tracking-[0.24em] text-[#1da8fc]">LABION BLOG</p>
              <h2 className="break-keep mb-4 text-2xl font-bold text-[#0f172a]">더 많은 건강정보는 공식 블로그에서 확인하세요.</h2>
              <p className="break-keep mb-6 max-w-2xl text-[#64748b]">
                라비온 블로그에서 진료실에서 자주 듣는 질문과 반려동물 건강관리 정보를 계속 업데이트할 예정입니다.
              </p>
              <a
                href={hospitalInfo.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#00377b] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1da8fc]"
              >
                공식 블로그 바로가기
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
