"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (inverted) {
      html.setAttribute("data-inverted", "true");
    } else {
      html.removeAttribute("data-inverted");
    }
  }, [inverted]);

  return (
    <button
      onClick={() => setInverted((v) => !v)}
      title={inverted ? "Restaurar colores originales" : "Ver versión con colores invertidos"}
      aria-label={inverted ? "Restaurar colores originales" : "Ver colores invertidos"}
      className="fixed bottom-6 right-6 z-[200] flex items-center gap-2.5 px-4 py-2.5 text-xs tracking-widest uppercase font-sans font-medium shadow-lg transition-all duration-300 border"
      style={{
        background: inverted ? "#1C1916" : "#F7F4F0",
        color: inverted ? "#F7F4F0" : "#1C1916",
        borderColor: inverted ? "#A8967F40" : "#1C191620",
      }}
    >
      <span
        className="w-3 h-3 rounded-full border flex-shrink-0 transition-colors duration-300"
        style={{
          background: inverted ? "#A8967F" : "#1C1916",
          borderColor: inverted ? "#A8967F" : "#1C1916",
        }}
        aria-hidden="true"
      />
      {inverted ? "Versión original" : "Ver invertido"}
    </button>
  );
}
