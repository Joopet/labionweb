import type { ElementType } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import { HeartPulse, PawPrint, Scan, Scissors, Shield, Smile, Stethoscope, CheckCircle2, ClipboardList } from 'lucide-react'
import { hospitalInfo, serviceDetails, services } from '@/data/hospitalData'

export const metadata = {
  title: '진료과목 | 라비온 동물의료센터',
  description: '라비온 동물의료센터의 예방접종, 건강검진, 내과·외과 진료, 피부·귀 진료, 치과 진료를 안내합니다.',
}

const iconMap: Record<string, ElementType> = {
  Stethoscope,
  Scissors,
  Shield,
  Scan,
  Smile,
  HeartPulse,
  PawPrint,
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-white">
        <section className="bg-[#00377b] py-20 md:py-28">
          <div className="container-custom">
            <p className="text-[#1da8fc] text-xs font-semibold tracking-[0.28em] uppercase mb-4">LABION CARE</p>
            <h1 className="break-keep text-3xl md:text-5xl font-bold text-white mb-5">라비온 진료과목</h1>
            <p className="break-keep text-white/72 max-w-2xl leading-relaxed">
              첫 페이지에서 소개한 라비온의 주요 진료 항목을 더 자세히 안내합니다. 예방관리부터 내과·외과 진료까지, 아이의 상태와 생활 환경을 고려해 필요한 진료를 보호자님과 함께 고민합니다.
            </p>
          </div>
        </section>

        <section className="section-padding bg-[#f8fafc]">
          <div className="container-custom">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[#1da8fc] text-xs font-semibold tracking-[0.24em] uppercase mb-3">CARE OVERVIEW</p>
                <h2 className="break-keep text-2xl md:text-4xl font-bold text-[#0f172a]">주요 진료 항목 한눈에 보기</h2>
              </div>
              <p className="break-keep max-w-xl text-sm leading-relaxed text-[#64748b]">
                아래 카드를 통해 관심 있는 진료 항목을 확인하고, 이어지는 상세 안내에서 진료가 필요한 상황과 기본적인 진료 흐름을 살펴볼 수 있습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || Stethoscope
                return (
                  <a key={service.id} href={`#${service.id}`} className="group rounded-2xl border border-[#e2e8f0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1da8fc]/40 hover:shadow-xl hover:shadow-[#00377b]/8">
                    <div className="w-12 h-12 rounded-2xl bg-[#00377b]/8 flex items-center justify-center mb-5 transition-colors group-hover:bg-[#00377b]">
                      <Icon className="w-6 h-6 text-[#00377b] transition-colors group-hover:text-white" />
                    </div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#94a3b8] uppercase mb-2">{service.labelEn}</p>
                    <h2 className="break-keep text-xl font-bold text-[#0f172a] mb-3">{service.title}</h2>
                    <p className="break-keep text-sm text-[#64748b] leading-relaxed mb-5">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.details.map((detail) => (
                        <span key={detail} className="rounded-full bg-[#f1f5f9] px-3 py-1 text-xs font-medium text-[#64748b]">{detail}</span>
                      ))}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <p className="text-[#1da8fc] text-xs font-semibold tracking-[0.24em] uppercase mb-3">CARE DETAIL</p>
              <h2 className="break-keep text-2xl md:text-4xl font-bold text-[#0f172a] mb-4">진료과목 상세 안내</h2>
              <p className="break-keep mx-auto max-w-2xl text-sm md:text-base leading-relaxed text-[#64748b]">
                각 진료 항목별로 어떤 경우 상담이 필요한지, 진료가 어떤 흐름으로 진행되는지 보호자님이 쉽게 이해하실 수 있도록 정리했습니다.
              </p>
            </div>

            <div className="space-y-8">
              {serviceDetails.map((detail, index) => {
                const service = services.find((item) => item.id === detail.id)
                const Icon = service ? iconMap[service.icon] || Stethoscope : Stethoscope
                return (
                  <article key={detail.id} id={detail.id} className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-[#e2e8f0] bg-white shadow-sm">
                    <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="bg-[#00377b] p-8 md:p-10 text-white">
                        <div className="mb-8 flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12">
                            <Icon className="h-7 w-7 text-[#1da8fc]" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold tracking-[0.24em] text-[#1da8fc] uppercase">CARE {String(index + 1).padStart(2, '0')}</p>
                            <h3 className="break-keep mt-1 text-2xl md:text-3xl font-bold">{detail.title}</h3>
                          </div>
                        </div>
                        <p className="break-keep text-lg font-semibold leading-relaxed text-white/92">{detail.subtitle}</p>
                        <p className="break-keep mt-5 text-sm leading-7 text-white/70">{detail.intro}</p>
                        {service && (
                          <div className="mt-7 flex flex-wrap gap-2">
                            {service.details.map((tag) => (
                              <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">{tag}</span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="p-8 md:p-10">
                        <div className="grid gap-8 md:grid-cols-2">
                          <div>
                            <div className="mb-4 flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-[#1da8fc]" />
                              <h4 className="break-keep text-lg font-bold text-[#0f172a]">이럴 때 상담해 보세요</h4>
                            </div>
                            <ul className="space-y-3">
                              {detail.recommendedFor.map((item) => (
                                <li key={item} className="break-keep rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm leading-relaxed text-[#475569]">{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="mb-4 flex items-center gap-2">
                              <ClipboardList className="h-5 w-5 text-[#1da8fc]" />
                              <h4 className="break-keep text-lg font-bold text-[#0f172a]">기본 진료 흐름</h4>
                            </div>
                            <ol className="space-y-3">
                              {detail.process.map((item, processIndex) => (
                                <li key={item} className="break-keep flex gap-3 rounded-2xl border border-[#e2e8f0] px-4 py-3 text-sm leading-relaxed text-[#475569]">
                                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#00377b] text-xs font-bold text-white">{processIndex + 1}</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                        <div className="mt-8 rounded-2xl bg-[#eef6ff] px-5 py-4">
                          <p className="break-keep text-sm leading-relaxed text-[#00377b]">{detail.note}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="pb-24 bg-white">
          <div className="container-custom">
            <div className="rounded-[2rem] bg-[#00377b] p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="break-keep text-2xl font-bold mb-2">진료 상담이 필요하신가요?</h2>
                <p className="break-keep text-white/72">전화 또는 카카오톡으로 편하게 문의해 주세요.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${hospitalInfo.contact.phone}`} className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#00377b]">전화 문의</a>
                <a href={hospitalInfo.contact.kakaoUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#FEE500] px-6 py-3 text-sm font-semibold text-[#3C1E1E]">카카오톡 상담</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
