'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

type MobileMenuProps = {
  links: { href: string; label: string }[];
};

/** The nav links behind a button, below the md breakpoint. Closes on a link tap or Escape. */
export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="ml-auto md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Isara ang menu' : 'Buksan ang menu'}
        onClick={() => setOpen((v) => !v)}
        className="-mr-2 flex h-12 w-12 items-center justify-center rounded-full text-ink active:scale-95"
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-t border-sunk bg-paper shadow-lg"
      >
        <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center text-lg font-semibold text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
