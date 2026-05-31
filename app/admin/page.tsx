import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import AdminDashboard from '@/components/admin/AdminDashboard'

export const metadata = {
  title: '관리자 페이지 | 라비온 동물의료센터',
  description: '라비온 동물의료센터 홈페이지 콘텐츠 유지보수용 관리자 페이지입니다.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f8fb] pb-28 pt-28 md:pb-16">
        <AdminDashboard />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
