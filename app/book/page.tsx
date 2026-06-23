import BookingForm from '../../components/BookingForm';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function BookPage() {
  return (
    <main className="bg-background text-on-surface">
      <Navbar />

      <section className="relative overflow-hidden bg-background pt-28 pb-16">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-primary-fixed/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1080px] px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">Kişisel Danışmanlık</span>
              <h1 className="mt-4 text-5xl font-semibold text-primary sm:text-6xl">Hedefinize uygun beslenme planını bugün planlayın.</h1>
              <p className="mt-6 text-lg leading-8 text-on-surface/80">
                Online ve yüz yüze seçeneklerle klinik beslenme, hormon dengeleme ve yaşam tarzı koçluğu. İlk görüşmede hedeflerinizi netleştiriyoruz.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#booking-form" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-on-primary transition hover:opacity-90">
                  Hemen Randevu Al
                </a>
                <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-outline bg-white px-8 py-4 text-sm font-semibold text-primary transition hover:bg-surface">
                  Süreç Nasıl İşliyor?
                </a>
              </div>
            </div>

            <div className="glass-card rounded-[2.5rem] border border-white/90 p-8 shadow-glow backdrop-blur-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-primary text-on-primary">
                <span className="material-symbols-outlined text-2xl">health_and_safety</span>
              </div>
              <h2 className="text-3xl font-semibold text-primary">Online ya da yüz yüze, sizin için uygun program.</h2>
              <p className="mt-4 text-on-surface/80 leading-7">
                İlk seansınızda beslenme hedeflerinizi, yaşam tarzınızı ve sağlık geçmişinizi değerlendirerek size özel bir yol haritası sunuyorum.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  { title: 'Kişiselleştirilmiş plan', description: 'Metabolik hedeflerinize göre hazırlanan beslenme ve takip şeması.' },
                  { title: 'Esnek seans seçenekleri', description: 'Online veya klinikte yüz yüze danışmanlık fırsatı.' },
                  { title: 'Hızlı geri dönüş', description: 'Randevu talebiniz onaylandığında aynı gün bilgilendirme.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl bg-surface p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-on-surface/75">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-[1080px] px-6 pb-20 md:px-10">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">Nasıl Çalışır</span>
          <h2 className="mt-4 text-4xl font-semibold text-primary">Basit, net ve sonuç odaklı randevu süreci.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { step: '01', title: 'Kısa Bilgiler', desc: 'İlk adımda iletişim ve hedef bilgilerinizi paylaşırsınız.' },
            { step: '02', title: 'Zaman Seçimi', desc: 'Size uygun tarih ve saati seçerek onay sürecini başlatırsınız.' },
            { step: '03', title: 'Onay & Hazırlık', desc: 'Randevu onaylandığında hazırlık önerileri ve daha fazla bilgi alırsınız.' },
          ].map((item) => (
            <div key={item.step} className="glass-card rounded-[2rem] border border-outline/30 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-primary text-on-primary text-lg font-semibold">{item.step}</div>
              <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-on-surface/75 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 pb-32 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-[2.5rem] border border-outline/20 bg-surface p-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-primary">Hemen rezervasyon yapmaya başlayın</h2>
              <p className="mt-4 text-on-surface/75 leading-7">
                Hedefinize uygun danışmanlık için gerekli tüm bilgileri hızlıca tamamlayın. Formda adım adım ilerleyerek kayıt işlemini güvenle tamamlayabilirsiniz.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-primary-fixed/80 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Tahmini süre</p>
                  <p className="mt-3 text-3xl font-semibold text-primary">10 dk</p>
                </div>
                <div className="rounded-3xl bg-primary-fixed/80 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Kapsam</p>
                  <p className="mt-3 text-3xl font-semibold text-primary">Ön değerlendirme + plan</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-outline/20 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary">Randevuda neler sunulur?</h3>
              <ul className="mt-6 space-y-4 text-on-surface/80">
                <li className="flex gap-3"><span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-on-primary text-xs">✓</span> Kişisel sağlık öyküsü ve beslenme analizi</li>
                <li className="flex gap-3"><span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-on-primary text-xs">✓</span> Metabolizma ve hedef değerlendirmesi</li>
                <li className="flex gap-3"><span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-on-primary text-xs">✓</span> İlk ay için net takip planı</li>
              </ul>
            </div>
          </div>

          <div id="booking-form">
            <BookingForm />
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-3 border-t border-outline/20 bg-surface px-5 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] md:hidden">
        <div>
          <p className="text-sm font-semibold text-on-surface">Randevu formuna hızlı erişim</p>
          <p className="text-xs text-on-surface/70">Hemen hızlıca formu doldurun.</p>
        </div>
        <a href="#booking-form" className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary transition hover:bg-primary/90">
          Formu Aç
        </a>
      </div>

      <Footer />
    </main>
  );
}
