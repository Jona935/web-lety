# Session Context
_Última actualización: 2026-03-19_

## Objetivo Principal
Sitio web completo para **Lety Maldonado Eventos** — Wedding & Event Planner en Monclova, Coahuila.
Diseño elegante, editorial, con paleta dusty rose + gold. Listo para producción.

## Estado Actual
- **Fase:** complete (código) → pendiente (assets del cliente)
- **Progreso:** 8 de 8 fases completadas
- **Último completado:** Subida a GitHub (`Jona935/web-lety`) + instalación de Ruflo/claude-flow

## Próximos Pasos
1. Cliente entrega: logo, fotos profesionales, video hero, URLs redes sociales
2. Reemplazar placeholders en `HeroSection.tsx`, `AboutPreview.tsx`, `PortfolioPreview.tsx`
3. Agregar Google Maps embed en `contacto/page.tsx`
4. Conectar formulario de contacto a backend (Resend o SMTP) en `app/api/contact/route.ts`
5. Deploy a Vercel (`vercel --prod`)
6. Configurar dominio (`letymaldonadoeventos.com`)

## Decisiones Tomadas
| Decisión | Razón | Fecha |
|----------|-------|-------|
| Next.js 14 App Router | SSR nativo, SEO óptimo, Server Components | 2026-03-19 |
| Tailwind CSS v3 (no v4) | Versión del instalador de Next.js disponible | 2026-03-19 |
| Cormorant Garamond + DM Sans | Editorial + legible, marca elegante | 2026-03-19 |
| Paleta dusty rose + gold + wine | Estilo "Elegante/Lujoso + Cálido/Orgánico" del cliente | 2026-03-19 |
| No usar imágenes stock | Anti-pattern del CLAUDE.md, usar placeholders hasta tener fotos reales | 2026-03-19 |
| next.config.mjs en vez de .ts | Next.js 14.2.5 no soporta next.config.ts | 2026-03-19 |
| Precios orientativos (no fijos) | Cada evento es único, cotización personalizada | 2026-03-19 |

## Contexto Técnico
- **Stack:** Next.js 14.2.5 · Tailwind CSS · react-hook-form + zod · lucide-react · Google Fonts
- **Repositorio GitHub:** `https://github.com/Jona935/web-lety` (rama: main)
- **Directorio local:** `/home/jonar935/Documentos/agente para paginas web/proyectos/LETY MALDONADO/lety-eventos/`
- **URL local dev:** `http://localhost:3002` (3000 y 3001 ocupados)

### Archivos clave
| Archivo | Propósito |
|---------|-----------|
| `app/layout.tsx` | Root layout, fuentes, metadata global |
| `app/globals.css` | Design tokens, utilidades, animaciones |
| `tailwind.config.ts` | Paleta personalizada completa |
| `components/home/HeroSection.tsx` | Hero con video — agregar `<source>` real |
| `components/home/AboutPreview.tsx` | Foto de Lety — reemplazar placeholder |
| `components/home/PortfolioPreview.tsx` | Galería masonry — reemplazar con `<Image>` reales |
| `components/shared/ContactForm.tsx` | Formulario con zod — conectar a API route |
| `app/contacto/page.tsx` | Incluye mapa placeholder (Google Maps) |
| `.env.example` | Variables de entorno documentadas |

## Páginas del sitio
| Ruta | Estado |
|------|--------|
| `/` | ✅ Completa (6 secciones) |
| `/nosotros` | ✅ Completa |
| `/servicios` | ✅ Completa (6 servicios detallados) |
| `/catalogo` | ✅ Completa (6 categorías) |
| `/precios` | ✅ Completa (3 paquetes) |
| `/portafolio` | ✅ Estructura lista (fotos pendientes) |
| `/contacto` | ✅ Formulario + mapa placeholder |
| `/faq` | ✅ 4 categorías, 12 preguntas |
| `/sitemap.xml` | ✅ Auto-generado |
| `/robots.txt` | ✅ Configurado |

## Herramientas instaladas (2026-03-19)
- **Ruflo (claude-flow v3.5):** instalado vía `install.sh`
  - 99 agentes, 30 skills, 10 comandos, 7 hooks
  - Config en `.claude-flow/`, settings en `.claude/settings.json`
  - README completo en `/home/jonar935/Descargas/README (2).md`
  - Inicializar con: `npx ruflo@latest init --wizard`
  - Agregar como MCP: `claude mcp add ruflo -- npx -y ruflo@latest mcp start`

## Problemas Activos
- [ ] Formulario de contacto sin backend (solo simula envío con timeout)
- [ ] Hero: video placeholder (esperando archivo real del cliente)
- [ ] Portafolio: gradientes placeholder (esperando fotos profesionales)
- [ ] Mapa: placeholder de texto (necesita Google Maps API key)
- [ ] Redes sociales: URLs de Facebook e Instagram no reales

## Notas Importantes
- El cliente tiene logo propio — reemplazar el texto "Lety Maldonado / Eventos" en Header y Footer
- El dominio objetivo es `letymaldonadoeventos.com` (ya configurado en metadata)
- El sitio está en GitHub público — si el cliente quiere privado, cambiar a repo privado
- Build de Next.js EXITOSO: 13 páginas estáticas generadas
- Git configurado con: `user.email=jonarios2511@gmail.com`, `user.name=Jonathan Rios`
