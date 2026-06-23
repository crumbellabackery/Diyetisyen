"use client";

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hakkımda', href: '/about' },
  { label: 'Hizmetler', href: '/services' },
  { label: 'Randevu', href: '/book' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-outline/20 bg-surface/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 md:px-10">
        <Link href="/" className="font-display text-lg font-semibold text-primary md:text-2xl">
          Buse Nur Polat
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-on-surface transition hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/book" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-on-primary transition hover:opacity-90 md:inline-flex">
            Danışma Al
          </Link>

          <button
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-outline bg-white/85 shadow-sm transition hover:bg-primary-fixed/90"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${open ? 'block' : 'hidden'} bg-surface/95 border-t border-outline/20`}> 
        <div className="mx-auto max-w-[1280px] px-4 py-4">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-3xl px-4 py-3 text-base font-medium text-on-surface transition hover:bg-primary-fixed/50">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book" onClick={() => setOpen(false)} className="block rounded-3xl bg-primary px-4 py-3 text-center font-semibold text-on-primary transition hover:bg-primary/90">
                Randevu Al
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
