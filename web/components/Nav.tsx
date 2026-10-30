import { Logo } from './Logo';
import { asset } from '@/lib/assets';

const LINKS = [
  { href: '#paano', label: 'Paano gumagana' },
  { href: '#buwis', label: 'Buwis' },
  { href: '#para-kanino', label: 'Para kanino' },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-paper">
      <nav
        aria-label="Pangunahin"
        className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-2 sm:px-6"
      >
        <a href={asset('/')} aria-label="KitaKlaro, pangunahing pahina">
          <Logo />
        </a>

        <div className="ml-auto hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-ink underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
