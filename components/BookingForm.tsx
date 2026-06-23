'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { Button } from './ui/Button';

const timeSlots = Array.from({ length: 10 }, (_, index) => {
  const hour = 9 + index;
  return `${hour.toString().padStart(2, '0')}:00`;
});

const initialForm = {
  name: '',
  email: '',
  phone: '',
  method: 'Online' as 'Online' | 'Yüz yüze',
  date: new Date().toISOString().split('T')[0],
  timeSlot: timeSlots[0],
  message: '',
  consent: false,
};

type BookingStatus = 'idle' | 'sending' | 'success' | 'error';
type BookingFormState = typeof initialForm;

export default function BookingForm() {
  const [form, setForm] = useState<BookingFormState>(initialForm);
  const [status, setStatus] = useState<BookingStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().split('T')[0], []);
  const isValid = useMemo(
    () => form.name.trim().length > 2 && form.email.includes('@') && form.phone.trim().length >= 10 && form.consent,
    [form]
  );

  const handleChange = (field: keyof BookingFormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setStatus('idle');
    setErrorMessage('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid) {
      setStatus('error');
      setErrorMessage('Lütfen tüm gerekli alanları doldurun ve onayı işaretleyin.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result?.error || 'Bir hata oluştu.');
      }

      setStatus('success');
      setSuccessPopupOpen(true);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Bir hata oluştu.');
    }
  };

  return (
    <div className="glass-card rounded-[2.5rem] p-10 shadow-glow">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary">Randevu Talebi</p>
        <h2 className="mt-4 text-3xl font-semibold text-primary">Hızlı ve kullanışlı randevu ekranı</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-on-surface/75">
          En gerekli bilgilerle 09:00-18:00 arasında randevu seçin. Gereksiz adımları kaldırdım.
        </p>
      </div>

      {status === 'success' ? (
        <div className="rounded-[2rem] border border-primary/10 bg-primary-fixed/40 p-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary">
            ✓
          </div>
          <h3 className="text-2xl font-semibold text-primary">Talebiniz gönderildi!</h3>
          <p className="mt-4 text-on-surface/75">Randevunuz alındı ve en kısa sürede onaylanacaktır.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button className="w-full sm:w-auto" onClick={resetForm} type="button">
              Yeni Talep Oluştur
            </Button>
          </div>
        </div>
      ) : (
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-on-surface/90">
              Ad Soyad
              <input
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full rounded-3xl border border-outline px-5 py-3 text-sm outline-none"
                required
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-on-surface/90">
              E-posta
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full rounded-3xl border border-outline px-5 py-3 text-sm outline-none"
                required
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-on-surface/90">
              Telefon
              <input
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full rounded-3xl border border-outline px-5 py-3 text-sm outline-none"
                required
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-on-surface/90">
              Seans Türü
              <select
                value={form.method}
                onChange={(e) => handleChange('method', e.target.value as 'Online' | 'Yüz yüze')}
                className="w-full rounded-3xl border border-outline bg-white px-5 py-3 text-sm outline-none"
              >
                <option>Online</option>
                <option>Yüz yüze</option>
              </select>
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-on-surface/90">
              Tarih
              <input
                type="date"
                value={form.date}
                min={minDate}
                onChange={(e) => handleChange('date', e.target.value)}
                className="w-full rounded-3xl border border-outline px-5 py-3 text-sm outline-none"
                required
              />
            </label>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-3xl bg-primary-fixed/10 px-4 py-3 text-sm text-on-surface/80">
                <span>Saat Seçimi</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => handleChange('timeSlot', slot)}
                    className={`rounded-3xl border px-4 py-3 text-sm font-semibold transition ${
                      form.timeSlot === slot
                        ? 'border-primary bg-primary text-on-primary'
                        : 'border-outline bg-white text-on-surface hover:border-primary/80'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <label className="space-y-2 text-sm font-medium text-on-surface/90">
            Kısa not (isteğe bağlı)
            <textarea
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={4}
              className="w-full rounded-[1.5rem] border border-outline px-5 py-4 text-sm outline-none"
              placeholder="Özel not, alerji veya hazırlık bilgisi bırakabilirsiniz."
            />
          </label>

          <label className="flex items-start gap-3 text-sm text-on-surface/80">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => handleChange('consent', e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-outline text-primary focus:ring-primary"
              required
            />
            <span>Gizlilik politikasını okudum ve verilerimin gizli şekilde işlendiğini kabul ediyorum.</span>
          </label>

          {status === 'error' && (
            <div className="rounded-3xl bg-rose-50 p-5 text-sm text-rose-700">{errorMessage}</div>
          )}

          <Button className="w-full px-8 py-3" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Gönderiliyor...' : 'Randevuyu Talep Et'}
          </Button>
        </form>
      )}

      <div className="mt-10 rounded-[2rem] border border-outline/40 bg-surface p-6">
        <h3 className="text-lg font-semibold text-primary">Basit ve hızlı</h3>
        <ul className="mt-4 grid gap-3 text-sm text-on-surface/80 sm:grid-cols-2">
          <li className="rounded-3xl border border-outline/50 bg-white px-4 py-3">Sadece gerekli alanlar</li>
          <li className="rounded-3xl border border-outline/50 bg-white px-4 py-3">09:00 - 18:00 arasından saat seçimi</li>
          <li className="rounded-3xl border border-outline/50 bg-white px-4 py-3">Hızlı onay süreci</li>
          <li className="rounded-3xl border border-outline/50 bg-white px-4 py-3">İsteğe bağlı not alanı</li>
        </ul>
      </div>

      {isSuccessPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary">
              ✓
            </div>
            <h3 className="text-2xl font-semibold text-primary text-center">Randevu başarılı!</h3>
            <p className="mt-4 text-center text-on-surface/75">
              Talebiniz alındı. En kısa sürede onay bilgileri sizinle paylaşılacaktır.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                type="button"
                className="rounded-full px-8 py-3"
                onClick={() => {
                  setSuccessPopupOpen(false);
                  resetForm();
                }}
              >
                Tamam
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
