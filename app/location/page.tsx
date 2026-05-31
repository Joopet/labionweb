import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import Location from '@/components/sections/Location'

export const metadata = {
  title: '오시는 길 | 라비온 동물의료센터',
  description: '라비온 동물의료센터 주소, 진료시간, 주차 안내, 지도 링크를 확인하세요.',
}

export default function LocationPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-[#00377b] py-20 md:py-28">
          <div className="container-custom">
            <p className="text-[#1da8fc] text-xs font-semibold tracking-[0.28em] uppercase mb-4">LOCATION</p>
            <h1 className="break-keep text-3xl md:text-5xl font-bold text-white mb-5">오시는 길</h1>
            <p className="break-keep text-white/72 max-w-2xl leading-relaxed">라비온 동물의료센터로 오시는 길과 진료시간을 안내드립니다.</p>
          </div>
        </section>
        <Location />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
