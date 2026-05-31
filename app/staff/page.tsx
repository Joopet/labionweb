import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import { UserCircle2 } from 'lucide-react'
import { staff } from '@/data/hospitalData'

export const metadata = {
  title: '의료진 소개 | 라비온 동물의료센터',
  description: '라비온 동물의료센터 의료진의 진료 분야와 진료 철학을 소개합니다.',
}

export default function StaffPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-white">
        <section className="bg-[#00377b] py-20 md:py-28">
          <div className="container-custom">
            <p className="text-[#1da8fc] text-xs font-semibold tracking-[0.28em] uppercase mb-4">LABION PEOPLE</p>
            <h1 className="break-keep text-3xl md:text-5xl font-bold text-white mb-5">의료진 소개</h1>
            <p className="break-keep text-white/72 max-w-2xl leading-relaxed">아이의 건강한 일상을 함께 고민하는 라비온 의료진을 소개합니다.</p>
          </div>
        </section>

        <section className="section-padding bg-[#f8fafc]">
          <div className="container-custom space-y-8">
            {staff.map((member) => (
              <article key={member.id} className="grid lg:grid-cols-[260px_1fr] gap-8 rounded-[2rem] border border-[#e2e8f0] bg-white p-6 md:p-8">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#eaf6ff] to-[#eef2f7] flex flex-col items-center justify-center gap-4">
                  <UserCircle2 className="w-24 h-24 text-[#00377b]/22" strokeWidth={1} />
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#00377b]/35 uppercase">Photo Coming Soon</span>
                </div>
                <div className="py-2">
                  <p className="text-sm text-[#94a3b8] mb-1">{member.nameEn}</p>
                  <h2 className="text-3xl font-bold text-[#0f172a] mb-2">
                    {member.name} <span className="text-lg font-medium text-[#64748b]">{member.title}</span>
                  </h2>
                  <p className="mb-6 inline-flex rounded-full bg-[#00377b]/8 px-4 py-2 text-sm font-semibold text-[#00377b]">{member.specialty}</p>
                  <p className="break-keep text-[#64748b] leading-relaxed mb-8">{member.philosophy}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#f8fafc] p-5">
                      <h3 className="font-bold text-[#0f172a] mb-3">주요 약력</h3>
                      <ul className="space-y-2 text-sm text-[#64748b]">
                        {[...member.education, ...member.experience].map((item) => <li key={item}>· {item}</li>)}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-[#f8fafc] p-5">
                      <h3 className="font-bold text-[#0f172a] mb-3">학회/교육</h3>
                      <ul className="space-y-2 text-sm text-[#64748b]">
                        {[...member.certifications, ...member.training].map((item) => <li key={item}>· {item}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
