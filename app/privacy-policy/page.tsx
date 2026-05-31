import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: '개인정보처리방침 | 라비온 동물의료센터',
  description: '라비온 동물의료센터 개인정보처리방침 안내 페이지입니다.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-white">
        <section className="bg-[#00377b] py-20 md:py-28">
          <div className="container-custom">
            <p className="text-[#1da8fc] text-xs font-semibold tracking-[0.28em] uppercase mb-4">PRIVACY POLICY</p>
            <h1 className="break-keep text-3xl md:text-5xl font-bold text-white">개인정보처리방침</h1>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-custom max-w-3xl break-keep text-[#64748b] leading-relaxed space-y-6">
            <p>라비온 동물의료센터는 홈페이지 이용자의 개인정보를 중요하게 생각하며, 관련 법령에 따라 개인정보를 안전하게 관리하기 위해 노력합니다.</p>
            <p>본 페이지의 세부 내용은 병원 운영 정책과 실제 수집 항목 확인 후 최종 업데이트가 필요합니다.</p>
            <div className="rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] p-6">
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">수집 항목</h2>
              <p>문의, 상담, 예약 과정에서 필요한 최소한의 정보만 수집하도록 구성합니다.</p>
            </div>
            <div className="rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] p-6">
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">이용 목적</h2>
              <p>수집된 정보는 상담 응대, 예약 안내, 병원 소식 전달 등 명시된 목적에 한해 사용합니다.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
