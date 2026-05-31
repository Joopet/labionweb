import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import { Camera } from 'lucide-react'
import { facilities } from '@/data/hospitalData'

export const metadata = {
  title: '시설·장비 | 라비온 동물의료센터',
  description: '라비온 동물의료센터의 대기 공간, 진료실, 처치실, 수술실, 영상검사실, 입원실을 소개합니다.',
}

export default function FacilitiesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-white">
        <section className="bg-[#00377b] py-20 md:py-28">
          <div className="container-custom">
            <p className="text-[#1da8fc] text-xs font-semibold tracking-[0.28em] uppercase mb-4">LABION SPACE</p>
            <h1 className="break-keep text-3xl md:text-5xl font-bold text-white mb-5">시설·장비</h1>
            <p className="break-keep text-white/72 max-w-2xl leading-relaxed">보호자와 반려동물이 편안하게 머무를 수 있는 진료 공간을 소개합니다.</p>
          </div>
        </section>

        <section className="section-padding bg-[#f8fafc]">
          <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((facility) => (
              <article key={facility.id} className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#eaf6ff] to-[#eef2f7] flex flex-col items-center justify-center gap-3">
                  <Camera className="w-16 h-16 text-[#00377b]/18" strokeWidth={1} />
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#00377b]/35 uppercase">Photo Coming Soon</span>
                </div>
                <div className="p-6">
                  <h2 className="break-keep text-xl font-bold text-[#0f172a] mb-3">{facility.title}</h2>
                  <p className="break-keep text-sm text-[#64748b] leading-relaxed">{facility.description}</p>
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
