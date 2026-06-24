'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

const bmiCategory = (bmi: number) => {
  if (bmi < 18.5) return 'Zayıf';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Fazla kilolu';
  return 'Obez';
};

const activityOptions = [
  { value: 'light', label: 'Hafif hareket' },
  { value: 'moderate', label: 'Orta düzey' },
  { value: 'high', label: 'Yüksek seviye' },
] as const;

export default function HealthCalculator() {
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('170');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState<'female' | 'male'>('female');
  const [mode, setMode] = useState<'bmi' | 'water' | 'macro'>('bmi');
  const [activity, setActivity] = useState<typeof activityOptions[number]['value']>('moderate');

  const kg = Number(weight);
  const cm = Number(height);
  const years = Number(age);

  const bmi = useMemo(() => {
    if (!kg || !cm) return 0;
    return kg / ((cm / 100) ** 2);
  }, [kg, cm]);

  const bmr = useMemo(() => {
    if (!kg || !cm || !years) return 0;
    if (gender === 'male') {
      return 88.362 + 13.397 * kg + 4.799 * cm - 5.677 * years;
    }
    return 447.593 + 9.247 * kg + 3.098 * cm - 4.330 * years;
  }, [gender, kg, cm, years]);

  const activityFactor = useMemo(() => {
    if (activity === 'light') return 1.2;
    if (activity === 'high') return 1.65;
    return 1.45;
  }, [activity]);

  const maintenanceCalories = useMemo(() => Math.round(bmr * activityFactor), [bmr, activityFactor]);
  const waterMl = useMemo(() => (kg ? Math.round(kg * 35) : 0), [kg]);
  const proteinGrams = useMemo(() => (kg ? Math.round(kg * 1.8) : 0), [kg]);
  const fatGrams = useMemo(() => (kg ? Math.round(kg * 0.9) : 0), [kg]);
  const carbsGrams = useMemo(() => {
    const remaining = maintenanceCalories - proteinGrams * 4 - fatGrams * 9;
    return Math.max(0, Math.round(remaining / 4));
  }, [maintenanceCalories, proteinGrams, fatGrams]);

  const resultCards = {
    bmi: {
      title: 'Vücut Kitle İndeksi',
      value: bmi > 0 ? bmi.toFixed(1) : '-',
      note: bmi > 0 ? bmiCategory(bmi) : 'Bilgilerinizi girerek değerinizi görün.',
    },
    water: {
      title: 'Günlük Su İhtiyacı',
      value: waterMl > 0 ? `${waterMl} ml` : '-',
      note: 'Hafif egzersiz için bu miktarı hedefleyebilirsiniz.',
    },
    macro: {
      title: 'Makro Dağılımı',
      value: maintenanceCalories > 0 ? `${maintenanceCalories} kcal` : '-',
      note: 'Önerilen kalori hedefi ve makro besin dağılımı.',
    },
  };

  return (
    <section id="calculator" className="bg-background py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">Sağlık Hesaplayıcıları</span>
            <h2 className="mt-4 text-4xl font-semibold text-primary">Vücut verilerinizle beslenme planınızı daha akıllı hale getirin.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-on-surface/75">
              Kişisel sonuçlarınızı öğrenin, hedefe uygun su, kalori ve makro önerileri alın ve sonraki adım için danışmanlık planını hemen oluşturun.
            </p>
            <div className="mt-10 inline-flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setMode('bmi')}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  mode === 'bmi' ? 'bg-primary text-on-primary' : 'border border-outline bg-white text-on-surface'
                }`}
              >
                BMI + BMR
              </button>
              <button
                type="button"
                onClick={() => setMode('water')}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  mode === 'water' ? 'bg-primary text-on-primary' : 'border border-outline bg-white text-on-surface'
                }`}
              >
                Su İhtiyacı
              </button>
              <button
                type="button"
                onClick={() => setMode('macro')}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  mode === 'macro' ? 'bg-primary text-on-primary' : 'border border-outline bg-white text-on-surface'
                }`}
              >
                Makro Dağılımı
              </button>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-8 shadow-sm">
            <div className="grid gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-on-surface/90">
                  Kilogram
                  <input
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full rounded-3xl border border-outline px-4 py-3 text-sm outline-none"
                    type="number"
                    min="1"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-on-surface/90">
                  Boy (cm)
                  <input
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full rounded-3xl border border-outline px-4 py-3 text-sm outline-none"
                    type="number"
                    min="1"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-on-surface/90">
                  Yaş
                  <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full rounded-3xl border border-outline px-4 py-3 text-sm outline-none"
                    type="number"
                    min="1"
                  />
                </label>
                <div>
                  <p className="mb-2 text-sm font-medium text-on-surface/90">Cinsiyet</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['female', 'male'].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setGender(value as 'female' | 'male')}
                        className={`rounded-3xl border px-4 py-3 text-sm font-semibold transition ${
                          gender === value ? 'border-primary bg-primary text-on-primary' : 'border-outline bg-white text-on-surface'
                        }`}
                      >
                        {value === 'female' ? 'Kadın' : 'Erkek'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {mode === 'macro' && (
                <div>
                  <p className="mb-2 text-sm font-medium text-on-surface/90">Aktivite Seviyesi</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {activityOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setActivity(option.value)}
                        className={`rounded-3xl border px-4 py-3 text-sm font-semibold transition ${
                          activity === option.value
                            ? 'border-primary bg-primary text-on-primary'
                            : 'border-outline bg-white text-on-surface'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 rounded-[2rem] bg-primary-fixed/10 p-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-secondary">{resultCards[mode].title}</p>
                  <p className="mt-2 text-3xl font-semibold text-primary">{resultCards[mode].value}</p>
                  <p className="mt-2 text-sm leading-6 text-on-surface/75">{resultCards[mode].note}</p>
                </div>
                <div className="rounded-[1.75rem] border border-outline/60 bg-white p-5">
                  {mode === 'bmi' ? (
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-primary">BMI rehberi</p>
                      <ul className="space-y-2 text-sm text-on-surface/75">
                        <li>18.5 altı: Enerji ve kas desteği gerekebilir.</li>
                        <li>18.5–25: Dengeli beslenmeyle korunması hedeflenir.</li>
                        <li>25–30: Yağ kaybı ve metabolizma desteği önemlidir.</li>
                        <li>30+: Sağlık için adım adım sürdürülebilir plan.</li>
                      </ul>
                    </div>
                  ) : mode === 'water' ? (
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-primary">Su önerisi</p>
                      <p className="text-sm text-on-surface/75">Günlük ihtiyacı karşılamak için küçük adımlarla başlayın; her saat başı 1 bardak su içmeyi hedefleyin.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="grid gap-3">
                        <div className="rounded-3xl bg-surface p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-secondary">Protein</p>
                          <p className="mt-2 text-lg font-semibold text-primary">{proteinGrams} g</p>
                        </div>
                        <div className="rounded-3xl bg-surface p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-secondary">Yağ</p>
                          <p className="mt-2 text-lg font-semibold text-primary">{fatGrams} g</p>
                        </div>
                        <div className="rounded-3xl bg-surface p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-secondary">Karbonhidrat</p>
                          <p className="mt-2 text-lg font-semibold text-primary">{carbsGrams} g</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/book"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-xs font-semibold leading-5 text-on-primary transition hover:opacity-90 sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
              >
                Danışmanlık İçin Randevu Al
              </Link>
              <p className="max-w-xl text-sm text-on-surface/75">
                Hesaplayıcılardaki sonuçlar, kişisel değerlendirme yerine geçmez. Diyetisyen ile çalışarak hedeflerinize özel planınızı netleştirin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
