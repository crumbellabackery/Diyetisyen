export default function Footer() {
  return (
    <footer className="bg-surface py-14 text-on-surface">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-primary">Buse Nur Polat</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-on-surface/80">Klinik beslenme alanında kişiye özel danışmanlık. Bilimsel yaklaşım, sürdürülebilir sonuç.</p>
          </div>

          <details className="md:block">
            <summary className="mb-4 cursor-pointer text-sm font-semibold uppercase tracking-[0.2em] text-secondary md:cursor-default">Hızlı Erişim</summary>
            <ul className="space-y-3 text-sm text-on-surface/80">
              <li>Hakkımda</li>
              <li>Hizmetler</li>
              <li>Randevu</li>
              <li>Blog</li>
            </ul>
          </details>

          <details className="md:block">
            <summary className="mb-4 cursor-pointer text-sm font-semibold uppercase tracking-[0.2em] text-secondary md:cursor-default">İletişim</summary>
            <ul className="space-y-3 text-sm text-on-surface/80">
              <li>busenurpolat4@gmail.com</li>
              <li>Türkiye</li>
            </ul>
          </details>
        </div>
      </div>
      <div className="mt-10 border-t border-outline/20 pt-6 text-center text-xs text-on-surface/70">
        © 2026 Buse Nur Polat. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
