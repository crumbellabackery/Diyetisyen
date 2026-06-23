import Link from 'next/link';
import Footer from '../components/Footer';
import HealthCalculator from '../components/HealthCalculator';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';

const services = [
  {
    title: 'Online Koçluk',
    description: 'Kişiye özel beslenme planları, haftalık takip ve doğrudan danışman erişimi.',
    icon: 'cloud_sync',
  },
  {
    title: 'Klinik Beslenme',
    description: 'PCOS, insülin direnci ve metabolik sağlık için bilimsel tedavi planları.',
    icon: 'medical_services',
  },
  {
    title: 'Spor Beslenmesi',
    description: 'Performans ve toparlanma için enerji, makro ve mikronutrient stratejileri.',
    icon: 'fitness_center',
  },
];

export default function HomePage() {
  return (
    <main className="bg-background text-on-surface">
      <Navbar />
      <section className="relative overflow-hidden bg-background pt-28 pb-20">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-primary-fixed/20 blur-3xl" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 px-6 md:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Klinik Beslenme"
              title="Bilimsel yaklaşımla metabolik hedeflerinize yolculuk başlasın."
              subtitle="Bireysel beslenme planları, sürdürülebilir yaşam tarzı stratejileri ve net sonuçlara odaklı danışmanlık deneyimi sunuyorum."
            />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/book" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">Randevu Al</Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">Hizmetlere Bak</Button>
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xl overflow-hidden rounded-[2rem] bg-primary-fixed/20 shadow-glow">
            <div className="absolute inset-0 bg-primary-fixed/30" />
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(51,69,55,0.12),_transparent_45%),linear-gradient(180deg,#fff_0%,#f7f3f0_100%)] shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Çekirdek Hizmetler"
              title="Her adımda net hedefler, sürdürülebilir sonuçlar."
              subtitle="Klinik beslenme, performans ve yaşam tarzı stratejilerini kişisel ihtiyaçlarınıza göre tasarlıyorum."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="rounded-[2rem] p-8 shadow-sm transition hover:-translate-y-1">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-primary">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-on-surface/75">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">Metodoloji</span>
              <h2 className="mt-4 text-4xl font-semibold text-primary">Bilimsel değerlendirme, kişisel tasarım, sürekli evrim.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-on-surface/75">
                Her süreç başlangıçtaki veriyle başlar, bireysel ihtiyaçlara göre şekillenir ve sürekli geri bildirimle güçlenir.
              </p>
            </div>
            <div className="grid gap-6">
              {[
                { label: 'Detaylı Değerlendirme', text: 'Kan analizleri, yaşam tarzı analizi ve klinik veriler ile başlangıç oluşturulur.' },
                { label: 'Bireysel Tasarım', text: 'Metabolik hedeflere uygun, sürdürülebilir beslenme planları hazırlanır.' },
                { label: 'Sürekli Ayar', text: 'İlerleme izlenir, çıktılar doğrultusunda planlar dinamik olarak güncellenir.' },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-[2rem] p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-fixed text-primary font-semibold">
                    {item.label.split(' ')[0].slice(0, 1)}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">{item.label}</h3>
                  <p className="mt-3 text-on-surface/75">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-10">
        <div className="glass-card rounded-[3rem] p-14 text-center shadow-glow">
          <h2 className="text-4xl font-semibold text-primary">Sağlıklı bir ilişkiyle beslenmeyi yeniden tanımlayın.</h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-on-surface/75">
            Klinik güç ile içtenlikle yolculuk ederek, bedeninizin ihtiyaçlarını anlamaya ve onlara saygı duyan bir plan oluşturmaya odaklanıyorum.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/book" className="rounded-full bg-primary px-10 py-4 text-sm font-semibold text-on-primary transition hover:opacity-90">
              Randevu Planla
            </Link>
            <Link href="/about" className="rounded-full border border-outline px-10 py-4 text-sm font-semibold text-primary transition hover:bg-surface">
              Hakkımda Daha Fazla
            </Link>
          </div>
        </div>
      </section>

      <HealthCalculator />

      <Footer />
    </main>
  );
}
