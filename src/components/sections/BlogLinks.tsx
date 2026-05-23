import { SectionHeading } from "@/components/ui/SectionHeading";
import { hospitalData } from "@/data/hospitalData";
import { BookOpen, ArrowUpRight } from "lucide-react";

export function BlogLinks() {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[var(--color-light-gray)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <SectionHeading
            category="LABION STORY"
            title="라비온의 소식을 전합니다"
            subtitle="보호자님을 위한 유익한 반려동물 건강 상식과 병원 소식을 전합니다."
            align="left"
          />
          <a
            href={hospitalData.links.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-bold text-[var(--color-primary-blue)] shadow-sm hover:shadow-md hover:border-[var(--color-accent-blue)] transition-all shrink-0"
          >
            <BookOpen className="w-4 h-4 text-[var(--color-accent-blue)]" />
            공식 블로그
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {hospitalData.storyCards.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Card top visual */}
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-primary-blue)] to-[var(--color-primary-blue-dark)] relative overflow-hidden flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent-blue)]/10 to-transparent" />
                <span className="relative z-10 text-white/60 text-xs font-bold tracking-[0.15em] uppercase">
                  Labion Story
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-primary-blue)] mb-3 group-hover:text-[var(--color-accent-blue)] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3 mb-5 leading-relaxed font-medium flex-1">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-sm font-bold text-[var(--color-primary-blue)]">
                    자세히 보기
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[var(--color-light-gray)] text-gray-400 flex items-center justify-center group-hover:bg-[var(--color-primary-blue)] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
