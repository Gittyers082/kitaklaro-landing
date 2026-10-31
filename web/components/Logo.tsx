import { asset } from '@/lib/assets';

type LogoProps = {
  /** `dark` is for the oxblood field: cream "Kita", gold "Klaro". */
  tone?: 'light' | 'dark';
  className?: string;
};

/** The wordmark with the favicon mark beside it. */
export function Logo({ tone = 'light', className = '' }: LogoProps) {
  const dark = tone === 'dark';
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-display text-lg font-extrabold tracking-tight ${className}`}
    >
      {/* The PNG has ~12% transparent padding, so it is drawn a bit larger than the text. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset('/favicon.png')} alt="" width={36} height={36} className="-my-1 -ml-1 h-9 w-9 shrink-0" />
      <span className={dark ? 'text-cream' : 'text-ink'}>
        Kita<span className={dark ? 'text-gold' : 'text-oxblood'}>Klaro</span>
      </span>
    </span>
  );
}
