import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hospitalData } from "@/data/hospitalData";
import { MapPin, Phone, Clock, Car, Navigation, ArrowRight } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[var(--color-light-gray)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionHeading
          title="오시는 길"
          subtitle="라비온 동물의료센터로 오시는 길을 안내해 드립니다."
        />

        <div className="mt-14 flex flex-col lg:flex-row gap-8">
          {/* Map placeholder */}
          <div className="flex-1 lg:w-2/3">
            <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] rounded-2xl overflow-hidden relative bg-white border border-gray-100 shadow-sm">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #999 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <MapPin className="w-10 h-10 text-[#03C75A] mb-3 relative z-10 animate-pulse" />
                <span className="text-[#03C75A] font-bold text-base mb-1 relative z-10">네이버 지도 연동 영역</span>
                <span className="text-gray-400 text-sm font-medium relative z-10">배포 시 지도 API가 연동됩니다</span>
              </div>
            </div>
          </div>

          {/* Info + Buttons */}
          <div className="lg:w-[340px] flex flex-col gap-5">
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex-1">
              <h3 className="text-lg font-bold text-[var(--color-primary-blue)] mb-6 tracking-tight">
                안내 정보
              </h3>

              <div className="space-y-5">
                <InfoRow icon={MapPin} label="주소" value={hospitalData.address} />
                <InfoRow icon={Phone} label="전화번호" value={hospitalData.phone} />
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--color-light-blue)] flex items-center justify-center text-[var(--color-accent-blue)] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1.5">진료 시간</h4>
                    <ul className="text-xs text-gray-600 space-y-1 font-medium">
                      {hospitalData.hours.map((h, i) => (
                        <li key={i} className="flex justify-between max-w-[180px]">
                          <span>{h.day}</span>
                          <span className={`font-bold ${h.time === "휴진" ? "text-red-500" : "text-gray-800"}`}>{h.time}</span>
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
                className="flex items-center justify-center gap-2 rounded-xl bg-[#03C75A] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#02b351] transition-colors"
              >
                <Navigation className="w-4 h-4" />
                네이버 지도로 길찾기
              </a>
              <a
                href={hospitalData.links.kakaoTalk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FEE500] px-5 py-3.5 text-sm font-bold text-[#191919] hover:bg-[#FDD835] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 3c-5.523 0-10 3.582-10 8 0 2.864 1.832 5.378 4.606 6.848-.305 1.135-1.104 4.095-1.127 4.195-.028.118.04.182.14.12 0 0 3.32-2.186 5.377-3.541.65.086 1.32.133 2.004.133 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                </svg>
                카카오톡 상담하기
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/location"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-primary-blue)]/20 text-sm font-bold text-[var(--color-primary-blue)] hover:bg-[var(--color-primary-blue)] hover:text-white transition-all duration-300"
          >
            오시는 길 자세히 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

/* Small helper component */
function InfoRow({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-9 h-9 rounded-lg bg-[var(--color-light-blue)] flex items-center justify-center text-[var(--color-accent-blue)] shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-0.5">{label}</h4>
        <p className="text-xs text-gray-600 leading-relaxed font-medium">{value}</p>
      </div>
    </div>
  );
}
