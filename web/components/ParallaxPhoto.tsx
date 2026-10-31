'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { asset } from '@/lib/assets';
import { Photo, type PhotoName } from './Photo';

type ParallaxPhotoProps = {
  name: PhotoName;
  className?: string;
  sizes?: string;
  /** Image path under public/ laid over the photo; fades in and out as the frame scrolls past. */
  overlay?: string;
  overlayAlt?: string;
};

/**
 * A photograph that drifts slowly against the scroll. The image is taller than
 * its frame so the drift never shows an edge, and it moves with `transform`
 * only, so it never forces a layout.
 */
export function ParallaxPhoto({ name, className = '', sizes, overlay, overlayAlt = '' }: ParallaxPhotoProps) {
  const frame = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // The server can't know the motion preference, so the first client render
  // must match it; switch to the still version only after mount.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const still = mounted && reduce;

  const { scrollYProgress } = useScroll({ target: frame, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);

  return (
    <div ref={frame} className={`relative overflow-hidden bg-sunk ${className}`}>
      <m.div
        style={{ y: still ? 0 : y }}
        className="absolute inset-x-0 -top-[9%] h-[118%] will-change-transform"
      >
        <Photo name={name} sizes={sizes} className="h-full w-full object-cover" />
      </m.div>
      {overlay && (
        <m.div
          style={{ opacity: still ? 1 : opacity }}
          className="absolute inset-0 flex items-center justify-center bg-ink/45 pb-24 sm:pb-32"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(overlay)}
            alt={overlayAlt}
            loading="lazy"
            decoding="async"
            // Hidden until the file exists in public/, so no broken-image icon shows.
            onError={(e) => (e.currentTarget.style.display = 'none')}
            // main.png has wide transparent margins, so scale it up to fill the space.
            className="h-full w-auto scale-[1.4] object-contain drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
          />
        </m.div>
      )}
    </div>
  );
}
