import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CmsProvider } from '@/components/providers/CmsProvider'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '라비온 동물의료센터 | 안산 고잔동 동물병원',
  description: '안산 고잔동 라비온 동물의료센터는 보호자와 반려동물이 안심할 수 있도록 세심한 설명과 책임 있는 진료를 지향합니다. 예방접종, 건강검진, 내과·외과 진료, 피부·귀 진료, 치과 진료를 안내합니다.',
  keywords: ['안산 동물병원', '고잔동 동물병원', '라비온 동물의료센터', '강아지 진료', '고양이 진료', '건강검진', '예방접종', '중성화'],
  authors: [{ name: '라비온 동물의료센터' }],
  openGraph: {
    title: '라비온 동물의료센터 | 안산 고잔동 동물병원',
    description: '세심한 설명과 진료로 반려동물의 건강한 일상을 함께합니다.',
    url: 'https://labionamc.com',
    siteName: '라비온 동물의료센터',
    locale: 'ko_KR',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00377b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-background">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        <CmsProvider>{children}</CmsProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
