import type { Metadata, Viewport } from 'next';
import './globals.css';
import { MotionProvider } from '@/components/MotionProvider';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: {
    default: 'KitaKlaro: alamin ang tunay na kita ng tindahan',
    template: '%s | KitaKlaro',
  },
  description:
    'Itala ang benta sa boses o litrato, awtomatikong bawas sa stock, at ulat na tanggap ng BIR at ng lender. Gumagana kahit walang internet.',
  applicationName: 'KitaKlaro',
  icons: { icon: asset('/favicon.png'), apple: asset('/icons/icon-192.png') },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#F2F1EE',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fil">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Lumaktaw sa nilalaman
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
