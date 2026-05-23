interface PageHeroProps {
  title: string;
  description: string;
  category?: string;
  backgroundImage?: string;
}

export function PageHero({ title, description, category, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden bg-[var(--color-primary-blue-dark)] pt-20">
      {backgroundImage && (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00377b] via-[#001d44]/90 to-[#000c1f]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center py-16">
        {category && (
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-[var(--color-accent-blue)] mb-4 uppercase">{category}</span>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">{title}</h1>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto font-medium">{description}</p>
      </div>
    </section>
  );
}
