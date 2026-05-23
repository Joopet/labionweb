import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { PageHero } from "@/components/ui/PageHero";
import { hospitalData } from "@/data/hospitalData";
import { MapPin, Phone, Clock, Car, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "오시는 길 | 라비온 동물의료센터",
  description: "라비온 동물의료센터 위치, 진료시간, 주차 안내입니다. 경기도 안산시 단원구 광덕대로 154, 2층.",
};

export default function LocationPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full pb-16 lg:pb-0">
        <PageHero
          category="LOCATION"
          title="오시는 길"
          description="라비온 동물의료센터로 오시는 길을 안내해 드립니다."
        />

        {/* Map + Info */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Map placeholder */}
              <div className="flex-1 lg:w-2/3">
                <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden relative bg-[var(--color-light-gray)] border border-gray-100 shadow-sm">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: "radial-gradient(circle, #999 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <MapPin className="w-12 h-12 text-[#03C75A] mb-3 relative z-10 animate-pulse" />
                    <span className="text-[#03C75A] font-bold text-lg mb-1 relative z-10">네이버 지도 연동 영역</span>
                    <span className="text-gray-400 text-sm font-medium relative z-10">배포 시 지도 API가 연동됩니다</span>
                  </div>
                </div>
              </div>

              {/* Info + Buttons */}
              <div className="lg:w-[380px] flex flex-col gap-5">
                <div className="bg-[var(--color-light-gray)] rounded-2xl p-7 sm:p-8 border border-gray-100 flex-1">
                  <h3 className="text-lg font-bold text-[var(--color-primary-blue)] mb-7 tracking-tight">
                    안내 정보
                  </h3>

                  <div className="space-y-6">
                    <InfoRow icon={MapPin} label="주소" value={hospitalData.address} />
                    <InfoRow icon={Phone} label="전화번호" value={hospitalData.phone} isPhone />
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-light-blue)] flex items-center justify-center text-[var(--color-accent-blue)] shrink-0">
                        <Clock className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-2">진료 시간</h4>
                        <ul className="text-sm text-gray-600 space-y-1.5 font-medium">
                          {hospitalData.hours.map((h, i) => (
                            <li key={i} className="flex justify-between max-w-[200px]">
                              <span>{h.day}</span>
                              <span className={`font-bold ${h.time === "휴진" ? "text-red-500" : "text-gray-800"}`}>
                                {h.time}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <InfoRow icon={Car} label="주차" value={hospitalData.parking} />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={hospitalData.links.naverMap}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#03C75A] px-5 py-4 text-sm font-bold text-white hover:bg-[#02b351] transition-colors shadow-sm"
                  >
                    <Navigation className="w-4 h-4" />
                    네이버 지도로 길찾기
                  </a>
                  <a
                    href={hospitalData.links.kakaoTalk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#FEE500] px-5 py-4 text-sm font-bold text-[#191919] hover:bg-[#FDD835] transition-colors shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12 3c-5.523 0-10 3.582-10 8 0 2.864 1.832 5.378 4.606 6.848-.305 1.135-1.104 4.095-1.127 4.195-.028.118.04.182.14.12 0 0 3.32-2.186 5.377-3.541.65.086 1.32.133 2.004.133 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                    </svg>
                    카카오톡 상담하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  isPhone,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  isPhone?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <div className="w-10 h-10 rounded-lg bg-[var(--color-light-blue)] flex items-center justify-center text-[var(--color-accent-blue)] shrink-0">
        <Icon className="w-4.5 h-4.5" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-0.5">{label}</h4>
        {isPhone ? (
          <a
            href={`tel:${value.replace(/-/g, "")}`}
            className="text-sm text-gray-600 leading-relaxed font-medium hover:text-[var(--color-accent-blue)] transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-gray-600 leading-relaxed font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}
