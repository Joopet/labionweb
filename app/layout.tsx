import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '라비온 동물의료센터 | 안산 고잔동 동물병원',
  description: '사랑(Love), 동물(Animal), 생명(Bio), 따스한 온기(On). 라비온 동물의료센터는 내 가족을 진료한다는 마음으로 반려동물의 건강을 책임집니다. 심장내과, 외과, 응급중환자 전문 수의사 3인 진료.',
  keywords: ['동물병원', '안산동물병원', '고잔동동물병원', '라비온', '심장내과', '정형외과', '응급진료', '반려동물'],
  authors: [{ name: '라비온 동물의료센터' }],
  openGraph: {
    title: '라비온 동물의료센터 | 안산 고잔동 동물병원',
    description: '사랑, 동물, 생명 그리고 따스한 온기. 내 가족을 진료한다는 마음으로.',
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
