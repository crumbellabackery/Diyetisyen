import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { SectionHeading } from '../../components/ui/SectionHeading';

const certificates = [
  { src: '/img/1734773101967.jpeg', title: 'Diyabet & İnsülin Direncinde PNİ Bakışı' },
  { src: '/img/1734773283081.jpeg', title: 'Hangi Besin Hangi Takviye' },
  { src: '/img/1735071749688.jpeg', title: 'Metabolik Sendrom ve Enerji Hesaplamaları' },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-on-surface">
      <Navbar />

      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[420px_1fr] lg:items-start">
            <div className="space-y-8">
              <Card className="overflow-hidden">
                <div className="relative aspect-[4/5] w-full bg-primary-fixed/50">
                  <Image src="/img/profile.svg" alt="Buse Nur Polat profil" fill className="object-cover" />
                </div>
              </Card>
              <Card tone="soft" className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-secondary">Klinik Beslenme Uzmanı</p>
                  <h1 className="mt-4 text-4xl font-semibold text-primary">Buse Nur Polat</h1>
                </div>
                <div className="space-y-3 text-sm leading-7 text-on-surface/80">
                  <p>
                    Klinik ve fonksiyonel beslenme alanında çalışarak bireysel metabolik ihtiyaçlara yönelik beslenme planları hazırlıyorum. Danışanlarıma sürdürülebilir sonuçlar ve günlük yaşama uyumlu destek sunuyorum.
                  </p>
                  <p>
                    Sağlık verilerini bütüncül değerlendirip, hedefe katkı sağlayacak adımlar tasarlıyorum. Amacım, enerji ve yaşam kalitesini artıran dengeli bir beslenme yaklaşımı oluşturmak.
                  </p>
                  <p>
                    <strong>İletişim:</strong> busenurpolat4@gmail.com
                  </p>
                </div>
                <Link href="/book">
                  <Button className="w-full">Randevu Planla</Button>
                </Link>
              </Card>
            </div>
            <div>
              <SectionHeading
                eyebrow="Hakkımda"
                title="Klinik bakışla, kişiye özel beslenme danışmanlığı."
                subtitle="Malatya merkezli diyetisyen olarak metabolik sendrom, hormon dengesi ve kronik hastalık yönetimi için bilimsel ve empatik bir yaklaşım sunuyorum."
              />
              <div className="mt-8 space-y-6 rounded-[2rem] border border-outline/20 bg-surface p-10 shadow-sm">
                <p className="text-base leading-8 text-on-surface/80">
                  Beslenme danışmanlığını yalnızca gıda listesi olarak görmüyor, bireyin yaşam tarzını, günlük ritmini ve hedeflerini bütünsel olarak ele alıyorum. Her danışmanlık süreci bilimsel veriler ve empatiyle şekilleniyor.
                </p>
                <p className="text-base leading-8 text-on-surface/80">
                  Danışanlarım için sürdürülebilir hedefler, dengeli beslenme stratejileri ve günlük yaşamda kolay uygulanabilir adımlar hazırlıyorum. Amacım daha sağlıklı, dengeli bir yaşam yaratmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-primary">Eğitim</h3>
              <p className="mt-4 text-on-surface/80 leading-7">
                Beslenme ve Diyetetik alanında uzmanlaşmış bir klinik diyetisyen olarak, kanıta dayalı beslenme yaklaşımlarıyla çalışıyorum.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-primary">Deneyim</h3>
              <div className="mt-4 space-y-4 text-on-surface/80 leading-7">
                <p>Klinik beslenme değerlendirmeleri, metabolik sağlık takibi ve bireysel danışmanlık süreçleri yürütüyorum.</p>
                <p>Hedef, danışanların günlük yaşamlarına uyumlu, sürdürülebilir beslenme stratejileri sunmaktır.</p>
              </div>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-primary">Yetenekler</h3>
              <ul className="mt-4 space-y-3 text-on-surface/80 leading-7">
                <li>Beslenme Danışmanlığı</li>
                <li>Kronik Hastalık Yönetimi</li>
                <li>Metabolik ve hormonal denge</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 pb-24 md:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {certificates.map((cert) => (
            <Card key={cert.title} className="overflow-hidden">
              <div className="relative h-72 w-full bg-surface">
                <Image src={cert.src} alt={cert.title} fill className="object-contain p-6" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">{cert.title}</h3>
                <p className="mt-3 text-sm text-on-surface/75">Nutrihome Akademi tarafından Aralık 2024'te verilen sertifika.</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
