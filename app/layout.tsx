import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Buse Nur Polat | Klinik Beslenme & Wellness',
  description: 'Buse Nur Polat için profesyonel diyetsyen web sitesi - klinik beslenme, holistik wellness ve danışmanlık hizmetleri.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
