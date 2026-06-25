import Image from 'next/image';
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
    icon: '☁️',
  },
  {
    title: 'Klinik Beslenme',
    description: 'PCOS, insülin direnci ve metabolik sağlık için bilimsel tedavi planları.',
    icon: '🩺',
  },
  {
    title: 'Spor Beslenmesi',
    description: 'Performans ve toparlanma için enerji, makro ve mikronutrient stratejileri.',
    icon: '🥗',
  },
];

const testimonials = [
  { displayName: 'A. K.', meta: '34 yaş • Hedef: kilo kontrolü', quote: 'Belirsizliğim azaldı; plan net, destek sürekli ve benim yaşam tarzıma uygun oldu.' },
  { displayName: 'D. Y.', meta: '41 yaş • Hedef: enerji ve sindirim', quote: 'Yalnızca yemek listesi değil, benim günlük ritmimi de dikkate alan bir yaklaşım sundu.' },
  { displayName: 'S. T.', meta: '29 yaş • Hedef: spor performansı', quote: 'İlerlemeyi takip etmek çok daha kolay hale geldi; kendime güvenim arttı.' },
  { displayName: 'M. A.', meta: '38 yaş • Hedef: hormon dengesi', quote: 'Her adımda daha rahat hissettim; süreci gerçekten anlaşılır kılan bir rehberlik oldu.' },
  { displayName: 'C. B.', meta: '27 yaş • Hedef: beslenme düzeni', quote: 'Uygulaması zor olmadan, günlük hayata uygun bir plan çıkardık.' },
  { displayName: 'İ. C.', meta: '45 yaş • Hedef: sindirim ve halsizlik', quote: 'İlk haftalardan itibaren kendimi daha iyi hissetmeye başladım.' },
  { displayName: 'B. D.', meta: '31 yaş • Hedef: performans ve toparlanma', quote: 'Beslenme artık bir yük değil, benimle birlikte çalışan bir sistem haline geldi.' },
  { displayName: 'P. E.', meta: '36 yaş • Hedef: metabolik destek', quote: 'Sürekli destek alıyor olmak beni çok rahatlattı; motive kalmamı sağladı.' },
  { displayName: 'E. F.', meta: '33 yaş • Hedef: düzen ve alışkanlık', quote: 'Kendime ait bir planım oldu; bu yüzden değişim daha kalıcı hale geldi.' },
  { displayName: 'G. G.', meta: '40 yaş • Hedef: kilo verme ve enerji', quote: 'Yemeklerden korkmadan, daha bilinçli seçimler yapmaya başladım.' },
  { displayName: 'D. H.', meta: '35 yaş • Hedef: bağışıklık ve uyku', quote: 'Sadece bir diyet değil, yaşam kalitemi düzene sokan bir süreç oldu.' },
  { displayName: 'A. İ.', meta: '42 yaş • Hedef: dengeli beslenme', quote: 'Çok daha sakin ve net bir şekilde ilerliyorum; bu da bana büyük güven verdi.' },
];

export default function HomePage() {
  const displayedTestimonials = [...testimonials]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

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
            <div className="absolute inset-0 p-6 sm:p-8">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(51,69,55,0.12),_transparent_45%),linear-gradient(180deg,#fff_0%,#f7f3f0_100%)] shadow-2xl">
                <Image
                  src="/img/hero-food.jpg"
                  alt="Sağlıklı beslenme ve yaşam tarzı"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover"
                />
              </div>
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
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary text-2xl">
                  <span>{service.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-primary">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-on-surface/75">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-20 sm:px-6 md:px-10">
        <div className="rounded-[2rem] bg-surface p-6 shadow-sm sm:rounded-[3rem] sm:p-8 md:p-14">
          <SectionHeading
            eyebrow="Danışan Deneyimleri"
            title="Danışan görüşleri, güveni destekleyen doğal izlerdir."
            titleClassName="text-3xl sm:text-4xl"
          />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedTestimonials.map((item) => (
              <Card key={item.displayName} className="rounded-[1.5rem] p-5 shadow-sm sm:rounded-[2rem] sm:p-6 md:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-primary">{item.displayName}</p>
                    <p className="mt-1 text-sm text-on-surface/60">{item.meta}</p>
                  </div>
                  <div className="inline-flex w-fit rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">★★★★★</div>
                </div>
                <p className="mt-4 text-sm leading-7 text-on-surface/75 sm:mt-6 sm:text-base">“{item.quote}”</p>
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
