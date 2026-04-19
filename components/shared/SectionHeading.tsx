import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  script?: string;         // Decorative script word (e.g. "Bienvenida")
  title: string;
  titleItalic?: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  script,
  title,
  titleItalic,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  const center = align === "center";
  const titleColor = light ? "text-cream-light" : "text-ebony";
  const scriptColor = light ? "text-cream/60" : "text-taupe";
  const subtitleColor = light ? "text-cream/55" : "text-ebony-muted";
  const dividerColor = light ? "bg-taupe-light" : "bg-taupe";

  return (
    <AnimatedSection
      className={cn("mb-16 md:mb-24", center ? "text-center" : "text-left", className)}
    >
      {script && (
        <p className={cn("font-sans font-light tracking-[0.22em] uppercase text-sm mb-2", scriptColor)}>
          {script}
        </p>
      )}
      <h2 className={cn("font-serif text-display-md font-light leading-tight", titleColor)}>
        {title}{" "}
        {titleItalic && (
          <span>{titleItalic}</span>
        )}
      </h2>
      <span
        className={cn("block h-px w-12 mt-5 mb-5", dividerColor, center && "mx-auto")}
        aria-hidden="true"
      />
      {subtitle && (
        <p className={cn("text-base leading-relaxed max-w-xl", subtitleColor, center && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
