import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const defaultRecipient = 'busenurpolat4@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, method, date, timeSlot, message, consent } = body;

    if (!name || !email || !phone || !method || !date || !timeSlot || !consent) {
      return NextResponse.json({ error: 'Lütfen tüm gerekli alanları doldurun.' }, { status: 400 });
    }

    const recipient = process.env.EMAIL_RECEIVER?.trim() || process.env.EMAIL?.trim() || defaultRecipient;
    const sender = process.env.EMAIL_SENDER?.trim();
    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const smtpHost = process.env.EMAIL_SMTP_HOST?.trim();
    const smtpPort = Number(process.env.EMAIL_SMTP_PORT || '465');
    const smtpUser = process.env.EMAIL_SMTP_USER?.trim();
    const smtpPass = process.env.EMAIL_SMTP_PASSWORD?.trim();

    const formattedDate = date ? new Date(date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }) : '-';
    const adminMailText = `Yeni randevu talebi:\n\nMerhaba,\n\n${name} adlı kişi yeni bir randevu talebinde bulundu.\n\nRandevu Detayları:\n• Ad Soyad: ${name}\n• E-posta: ${email}\n• Telefon: ${phone}\n• Seans Türü: ${method}\n• Tarih: ${formattedDate}\n• Saat: ${timeSlot}\n• Not: ${message || 'Yok'}\n\nBu ileti otomatik olarak oluşturulmuştur.`;
    const adminMailHtml = `
      <div style="font-family: Arial, sans-serif; background-color:#f7f4f0; padding:32px; color:#2f2a24;">
        <div style="max-width:640px; margin:0 auto; background:white; border-radius:24px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
          <div style="background:linear-gradient(135deg,#6b8f71,#4b6b53); padding:28px 32px; color:white;">
            <h2 style="margin:0 0 8px 0; font-size:24px;">Yeni Randevu Talebi</h2>
            <p style="margin:0; font-size:14px; opacity:0.95;">Yeni bir randevu talebi alındı.</p>
          </div>
          <div style="padding:32px;">
            <p style="margin-top:0; font-size:16px; line-height:1.6;">Merhaba,</p>
            <p style="font-size:16px; line-height:1.6;">${name} adlı kişi aşağıdaki randevu bilgileriyle yeni bir talep oluşturdu.</p>
            <div style="margin:24px 0; border:1px solid #e8dfd6; border-radius:16px; padding:20px; background:#fcfaf8;">
              <p style="margin:0 0 8px 0;"><strong>Ad Soyad:</strong> ${name}</p>
              <p style="margin:0 0 8px 0;"><strong>E-posta:</strong> ${email}</p>
              <p style="margin:0 0 8px 0;"><strong>Telefon:</strong> ${phone}</p>
              <p style="margin:0 0 8px 0;"><strong>Seans Türü:</strong> ${method}</p>
              <p style="margin:0 0 8px 0;"><strong>Tarih:</strong> ${formattedDate}</p>
              <p style="margin:0 0 8px 0;"><strong>Saat:</strong> ${timeSlot}</p>
              <p style="margin:0;"><strong>Not:</strong> ${message || 'Yok'}</p>
            </div>
            <p style="font-size:13px; color:#7a7169; margin-bottom:0;">Bu e-posta otomatik olarak oluşturulmuştur. Lütfen talebi inceleyip uygun şekilde yanıtlayın.</p>
          </div>
        </div>
      </div>
    `;
    const userMailText = `Randevu talebiniz alındı.\n\nMerhaba ${name},\n\nRandevu talebiniz başarıyla alındı. Aşağıdaki bilgilerle kayıtlıdır:\n\n• Tarih: ${formattedDate}\n• Saat: ${timeSlot}\n• Seans Türü: ${method}\n• Telefon: ${phone}\n\nEn kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.`;
    const userMailHtml = `
      <div style="font-family: Arial, sans-serif; background-color:#f7f4f0; padding:32px; color:#2f2a24;">
        <div style="max-width:640px; margin:0 auto; background:white; border-radius:24px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
          <div style="background:linear-gradient(135deg,#6b8f71,#4b6b53); padding:28px 32px; color:white;">
            <h2 style="margin:0 0 8px 0; font-size:24px;">Randevu Talebiniz Alındı</h2>
          </div>
          <div style="padding:32px;">
            <p style="margin-top:0; font-size:16px; line-height:1.6;">Merhaba ${name},</p>
            <p style="font-size:16px; line-height:1.6;">Randevu talebiniz başarıyla alındı. Aşağıdaki bilgilerle kayıtlıdır:</p>
            <div style="margin:24px 0; border:1px solid #e8dfd6; border-radius:16px; padding:20px; background:#fcfaf8;">
              <p style="margin:0 0 8px 0;"><strong>Tarih:</strong> ${formattedDate}</p>
              <p style="margin:0 0 8px 0;"><strong>Saat:</strong> ${timeSlot}</p>
              <p style="margin:0 0 8px 0;"><strong>Seans Türü:</strong> ${method}</p>
              <p style="margin:0;"><strong>Telefon:</strong> ${phone}</p>
            </div>
            <p style="font-size:13px; color:#7a7169; margin-bottom:0;">En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.</p>
          </div>
        </div>
      </div>
    `;


    if (resendApiKey) {
      if (!sender) {
        return NextResponse.json(
          {
            error:
              'Resend gönderimi için EMAIL_SENDER tanımlamanız gerekiyor. ' +
              'Bu adresin Resend hesabınızda doğrulanmış bir domain üzerinden olması gerekir.',
          },
          { status: 500 }
        );
      }

      console.log('Resend mail attempt', {
        recipient,
        sender,
        resendApiKeyLength: resendApiKey.length,
      });

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: sender,
          to: recipient,
          subject: 'Yeni Danışan | Yeni Randevu Talebi',
          text: adminMailText,
          html: adminMailHtml,
        }),
      });

      if (email) {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: sender,
            to: email,
            subject: 'Randevu Talebiniz Alındı',
            text: userMailText,
            html: userMailHtml,
          }),
        });
      }

      if (!response.ok) {
        const errorPayload = await response.text();
        const message = `Resend gönderim hatası: ${response.status} ${errorPayload}`;
        throw new Error(message);
      }

      return NextResponse.json({ success: true });
    }

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            'E-posta yapılandırması eksik. .env.local dosyanıza ya gerçek SMTP bilgilerini ya da RESEND_API_KEY ekleyin.',
          debug: {
            recipient,
            sender,
            resendApiKeyPresent: Boolean(resendApiKey),
            smtpHostPresent: Boolean(smtpHost),
            smtpUserPresent: Boolean(smtpUser),
            smtpPassPresent: Boolean(smtpPass),
          },
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      replyTo: email,
      to: recipient,
      subject: 'Yeni Danışan | Yeni Randevu Talebi',
      text: adminMailText,
      html: adminMailHtml,
    });

    if (email) {
      await transporter.sendMail({
        from: smtpUser,
        replyTo: smtpUser,
        to: email,
        subject: 'Randevu Talebiniz Alındı',
        text: userMailText,
        html: userMailHtml,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Bilinmeyen bir hata oluştu.';
    const responseMessage = process.env.NODE_ENV === 'development' ? message : 'E-posta gönderilirken bir sorun oluştu.';
    return NextResponse.json({ error: responseMessage }, { status: 500 });
  }
}
