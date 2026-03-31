"use client";

import { useRef, useCallback, ReactNode } from "react";
import { gsap } from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  as = "button",
  href,
  target,
  rel,
  onClick,
  type,
  disabled,
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const btn = btnRef.current;
      const inner = innerRef.current;
      if (!btn || !inner) return;
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      gsap.to(btn, { x: dx * strength, y: dy * strength, duration: 0.4, ease: "power2.out" });
      gsap.to(inner, { x: dx * (strength * 0.5), y: dy * (strength * 0.5), duration: 0.4, ease: "power2.out" });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
    gsap.to(innerRef.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
  }, []);

  const props = {
    ref: btnRef as React.Ref<HTMLAnchorElement & HTMLButtonElement>,
    className,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    "aria-label": ariaLabel,
  };

  if (as === "a" && href) {
    return (
      <a {...props} href={href} target={target} rel={rel}>
        <span ref={innerRef} className="inline-block pointer-events-none">{children}</span>
      </a>
    );
  }

  return (
    <button {...props} type={type ?? "button"} disabled={disabled}>
      <span ref={innerRef} className="inline-block pointer-events-none">{children}</span>
    </button>
  );
}
