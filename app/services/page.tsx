import Link from 'next/link';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { SectionHeading } from '../../components/ui/SectionHeading';

const services = [
  { title: 'Kilo Verme Programı', desc: 'Size özel enerji dengeli planlarla sağlıklı, sürdürülebilir kilo kaybı. Haftalık takip ve ayarlama.' },
  { title: 'Kilo Alma Programı', desc: 'Güvenli, sağlıklı kilonuzu artırmaya odaklı enerji artırıcı planlar.' },
  { title: 'Sporcu Beslenmesi', desc: 'Performans ve toparlanma için makro/mikro beslenme stratejileri.' },
  { title: 'Medikal Beslenme', desc: 'Kan sonuçlarına ve klinik bulgulara dayalı kişisel tedavi odaklı planlar.' },
  { title: 'Gebelik & Emzirme', desc: 'Gebelikte konforu artıran, emzirme döneminde süt kalitesini destekleyen beslenme desteği.' },
  { title: 'Çocuk Beslenmesi', desc: 'Büyüme ve gelişmeyi destekleyen, sağlıklı beslenme alışkanlıkları.' },
  { title: 'Online Beslenme', desc: 'Uzaktan takip, esnek seans ve dijital destek ile süreklilik.' },
  { title: 'Kurumsal Danışmanlık', desc: 'İş yerleri için atölye, seminer ve sağlık politikası danışmanlığı.' },
];

export default function ServicesPage() {
  return (
    <main className="bg-background text-on-surface">
      <Navbar />

      <section className="pt-28 pb-12">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 text-center">
          <SectionHeading
            eyebrow="Hizmetler"
            title="Bireysel ve klinik yaklaşımla kapsamlı beslenme hizmetleri"
            subtitle="Metabolik sağlık, hormon dengesi, performans ve yaşam döngüsü odaklı yaklaşımlarla size özel çözümler sunuyorum."
          />
          <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
            <Link href="/book" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto">Randevu Al</Button>
            </Link>
            <a href="mailto:busenurpolat4@gmail.com" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto">E-posta Gönder</Button>
            </a>
            <Link href="/#calculator" className="w-full sm:w-auto">
              <Button variant="ghost" className="w-full sm:w-auto">Diyet Hesaplama Aracı</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="flex flex-col justify-between p-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-4 text-on-surface/75 leading-7">{s.desc}</p>
              </div>
              <div className="mt-8">
                <Link href="/book">
                  <Button variant="outline" className="w-full">Bilgi / Randevu Al</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10">
          <Card tone="soft" className="flex flex-col items-center gap-6 p-10 text-center">
            <div>
              <h2 className="text-3xl font-semibold text-primary">Hemen bilgi almak veya ön randevu oluşturmak ister misiniz?</h2>
              <p className="mt-4 max-w-2xl text-on-surface/75">Hızlı sorular için e-posta atabilir veya formu doldurarak randevu talep edebilirsiniz.</p>
            </div>
            <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
              <Link href="/book" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">Randevu Talebi</Button>
              </Link>
              <a href="mailto:busenurpolat4@gmail.com" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">E-posta Gönder</Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
