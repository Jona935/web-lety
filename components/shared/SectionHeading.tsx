import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  overline,
  title,
  titleItalic,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const titleColor = light ? "text-cream" : "text-charcoal";
  const overlineColor = light ? "text-gold/80" : "text-gold";
  const subtitleColor = light ? "text-cream/65" : "text-charcoal-muted";
  const lineAlign = align === "center" ? "mx-auto" : "";

  return (
    <AnimatedSection className={cn("mb-14 md:mb-20", textAlign, className)}>
      {overline && (
        <p className={cn("overline-label mb-4", overlineColor)}>{overline}</p>
      )}
      <h2
        className={cn(
          "font-serif text-display-md font-light leading-tight mb-4",
          titleColor
        )}
      >
        {title}{" "}
        {titleItalic && (
          <span className="italic text-primary">{titleItalic}</span>
        )}
      </h2>
      <span className={cn("gold-line mb-6", lineAlign)} aria-hidden="true" />
      {subtitle && (
        <p
          className={cn(
            "text-base leading-relaxed mt-4 max-w-2xl",
            subtitleColor,
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
