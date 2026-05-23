import Link from "next/link";
import { Phone, MapPin, ChevronDown } from "lucide-react";
import { hospitalData } from "@/data/hospitalData";

export function Hero() {
  const { videoUrl, posterUrl, imageUrl, title, description } = hospitalData.hero;
  const hasVideo = Boolean(videoUrl);
  const hasImage = Boolean(posterUrl || imageUrl);

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[var(--color-primary-blue-dark)]">

      {/* Background Media */}
      <div className="absolute inset-0">
        {hasVideo ? (
          <video
            src={videoUrl}
            poster={posterUrl || imageUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : hasImage ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${posterUrl || imageUrl})` }}
          />
        ) : (
          /* Brand gradient fallback */
          <div className="w-full h-full bg-gradient-to-br from-[#00377b] via-[#001d44] to-[#000c1f]" />
        )}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Subtle dot pattern for texture */}
      {!hasVideo && !hasImage && (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center pt-20">
        {/* Tag badge */}
        <div className="animate-fade-in inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider text-white/70 bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
          안산 고잔동 동물의료센터
        </div>

        {/* Main title */}
        <h1 className="animate-fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.3] sm:leading-[1.25] mb-6 whitespace-pre-line">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up animate-delay-100 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animate-delay-200 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={`tel:${hospitalData.phone.replace(/-/g, "")}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[var(--color-primary-blue)] shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all"
          >
            <Phone className="h-4 w-4" />
            전화 문의하기
          </a>
          <Link
            href="#location"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all"
          >
            <MapPin className="h-4 w-4 text-[var(--color-accent-blue)]" />
            오시는 길 보기
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/40">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
