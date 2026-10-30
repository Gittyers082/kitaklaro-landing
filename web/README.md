# KitaKlaro web

Showcase landing page for KitaKlaro. Next.js 16 (App Router, static export),
Tailwind 3.4, Framer Motion, Lucide.

```bash
npm install
npm run dev        # http://localhost:3100
npm run build      # static site in out/
npm run typecheck
```

`out/` is plain HTML, CSS and JS. Host it anywhere. If you host under a
sub-path, build with `NEXT_PUBLIC_BASE_PATH=/your-path`.

## What is here

| | |
|---|---|
| `app/page.tsx` | Landing page |
| `components/VoiceDemo.tsx` | The hero's live voice-capture demo |
| `components/Ways.tsx`, `TaxDraft.tsx` | Three input modes; BIR 1701Q draft |
| `tailwind.config.js` | Fonts, colour tokens, type scale, keyframes |

## Before this is real

**Fonts fall back.** The config names ITC Serif Gothic (display) and Helvetica
Neue (body), but neither is bundled: both are licensed. Android has neither, so
those phones get Roboto. ITC Serif Gothic is a heavy geometric gothic, not a
bookish serif, so its fallback is a heavy sans. To ship the real faces, buy the
webfont licence, add the `.woff2` files to `public/fonts/`, and fill in the
`@font-face` block in `app/globals.css`. Any self-hosted face must include the
peso sign, U+20B1 (the `latin-ext` subset).

## Performance, measured

| | |
|---|---|
| HTML | 4 to 10 KB gzip. Paints before any script arrives. |
| JS | about 204 KB gzip loaded with the page, plus about 24 KB deferred. About 154 KB of that is React and the Next runtime; Framer Motion is about 30 KB. |
| Photos | 70 to 190 KB each (WebP, two widths). Phones get the 800px one. |

The JS figure is the cost of this stack, not of this code. The earlier
framework-free build was about 15 KB gzip. Content does not depend on the
script: with JavaScript disabled, every section and number is present.

Motion is gated for slow connections. Above-the-fold entrances are CSS only.
Below-the-fold reveals start visible and hide only after the client mounts.
Everything honours `prefers-reduced-motion`.
