interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  category?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, category, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"}`}>
      {category && (
        <span className="block text-[11px] font-bold tracking-[0.2em] text-[var(--color-accent-blue)] mb-3 uppercase">
          {category}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-primary-blue)] tracking-tight mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm sm:text-base text-gray-500 max-w-2xl leading-relaxed font-medium ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
