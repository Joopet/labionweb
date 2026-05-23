import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "라비온 동물의료센터 | 안산 고잔동 동물병원",
  description: "따뜻함과 전문성이 만나는 안산 라비온 동물의료센터입니다. 반려동물의 작은 이상 신호까지 세심하게 살피고 책임 있는 진료를 제공합니다.",
  openGraph: {
    title: "라비온 동물의료센터",
    description: "따뜻함과 전문성이 만나는 안산 라비온 동물의료센터입니다.",
    url: "https://labion-animal.com",
    siteName: "라비온 동물의료센터",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
