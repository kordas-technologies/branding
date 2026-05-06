/* @jsxRuntime classic @jsx React.createElement */
const { useState: useStateContact } = React;

function ContactCTA() {
  const [sent, setSent] = useStateContact(false);
  const [form, setForm] = useStateContact({ name: '', email: '', type: '', desc: '' });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="kt-section kt-section-dark">
      <div className="kt-container kt-contact-grid">
        <div>
          <span className="kt-section-code">§ 04</span>
          <span className="kt-eyebrow">// ready?</span>
          <h2 style={{ color: 'var(--kt-fg-1)' }}>Pierwsza konsultacja jest <span style={{ color: 'var(--kt-cyan)' }}>bezpłatna</span>.</h2>
          <hr className="kt-rule-cyan" style={{ marginTop: 16 }} />
          <p style={{ color: 'var(--kt-fg-2)', marginTop: 16 }}>
            30 minut, bez zobowiązań. Dostaniesz konkretną opinię o realizowalności,
            ramowy harmonogram i przedział kosztowy — w formie pisemnej.
          </p>
          <div className="kt-contact-info">
            <a href="mailto:biuro@kordas.tech" className="kt-contact-line">
              <i data-lucide="mail" width="18" height="18"></i> biuro@kordas.tech
            </a>
            <a href="tel:+48797252208" className="kt-contact-line">
              <i data-lucide="phone" width="18" height="18"></i> +48 797 252 208
            </a>
            <span className="kt-contact-line">
              <i data-lucide="map-pin" width="18" height="18"></i> Przybyszewskiego 30/2, 30-128 Kraków
            </span>
          </div>
        </div>
        {!sent ? (
          <form className="kt-contact-form" onSubmit={submit}>
            <div className="kt-field">
              <label>Imię i nazwisko</label>
              <input className="kt-input" required value={form.name} onChange={update('name')} placeholder="Jan Kowalski" />
            </div>
            <div className="kt-field">
              <label>Email</label>
              <input type="email" className="kt-input" required value={form.email} onChange={update('email')} placeholder="jan@firma.pl" />
            </div>
            <div className="kt-field">
              <label>Typ projektu</label>
              <select className="kt-input" required value={form.type} onChange={update('type')}>
                <option value="">Wybierz…</option>
                <option>AI · Computer Vision</option>
                <option>IoT · Edge</option>
                <option>Rapid Prototyping</option>
                <option>Inne / nie wiem</option>
              </select>
            </div>
            <div className="kt-field">
              <label>Krótki opis</label>
              <textarea className="kt-input" rows="3" value={form.desc} onChange={update('desc')} placeholder="Detekcja obiektów na RPi5, < 1 s, walidacja w sadach…"></textarea>
            </div>
            <button type="submit" className="kt-btn kt-btn-primary kt-btn-lg" style={{ width: '100%' }}>
              [ wyślij zapytanie ] <i data-lucide="arrow-right" width="16" height="16"></i>
            </button>
            <p className="kt-contact-fineprint">Odpowiadam zwykle w ciągu 24h roboczych. Zapytania nie zobowiązują do zakupu.</p>
          </form>
        ) : (
          <div className="kt-contact-form kt-contact-success">
            <i data-lucide="check-circle-2" width="48" height="48" style={{ color: 'var(--kt-success)' }}></i>
            <h3 style={{ color: 'var(--kt-fg-1)', marginTop: 12 }}>Dziękuję, {form.name || 'do usłyszenia'}.</h3>
            <p style={{ color: 'var(--kt-fg-2)' }}>Otrzymałem Twoje zapytanie. Odpowiem na <strong>{form.email}</strong> w ciągu 24h roboczych.</p>
            <button onClick={() => { setSent(false); setForm({ name:'', email:'', type:'', desc:'' }); }} className="kt-btn kt-btn-secondary kt-btn-sm" style={{ marginTop: 16 }}>Wyślij kolejne</button>
          </div>
        )}
      </div>
    </section>
  );
}

window.ContactCTA = ContactCTA;
