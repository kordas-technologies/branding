/* @jsxRuntime classic @jsx React.createElement */

const CAPABILITIES = [
  {
    code: 'SRV.01',
    icon: 'bot',
    eyebrow: 'AI · COMPUTER VISION',
    title: 'Algorytmy AI dla realnych warunków',
    body: 'Detekcja obiektów, klasyfikacja, segmentacja. Optymalizacja pod ARM (TFLite, ONNX, NCNN). Twarde progi dokładności gwarantowane na danych Klienta.',
    points: ['YOLO v8 / v10', 'Multi-frame confirmation', 'Walidacja scenariuszowa']
  },
  {
    code: 'SRV.02',
    icon: 'rocket',
    eyebrow: 'RAPID PROTOTYPING',
    title: 'Od pomysłu do prototypu w 8 tygodni',
    body: 'Cross-stack: hardware (RPi, Arduino, custom PCB), firmware, backend, dashboard. Jeden punkt kontaktu — bez przerzucania pomiędzy zespołami.',
    points: ['MVP w 8–12 tyg.', 'Transfer IP w wariantach Pro', 'Dokumentacja techniczna']
  },
  {
    code: 'SRV.03',
    icon: 'radio-tower',
    eyebrow: 'IoT · 5G · EDGE',
    title: 'Praca ciągła, w terenie, bez nadzoru',
    body: 'Watchdog, auto-restart, logging, zarządzanie pamięcią i termiką. Komunikacja MQTT / REST / gRPC. Stabilność > 7 dni potwierdzona w pilotażach.',
    points: ['Stabilność > 7 dni', 'MQTT + REST + gRPC', 'Health-check + telemetria']
  }
];

function Capabilities() {
  return (
    <section id="capabilities" className="kt-section">
      <div className="kt-container">
        <div className="kt-section-head">
          <span className="kt-eyebrow">CO ROBIMY</span>
          <h2>Trzy filary, jeden zespół.</h2>
          <hr className="kt-rule-blue" />
          <p className="kt-section-lead">
            Kordas Technologies łączy te trzy obszary w jednej, krótkiej linii decyzyjnej —
            jeden Wykonawca, jeden harmonogram, jedna umowa.
          </p>
        </div>
        <div className="kt-cap-grid">
          {CAPABILITIES.map((c, i) => (
            <article key={i} className="kt-cap-card">
              <div className="kt-cap-srv-code">{c.code}</div>
              <div className="kt-cap-icon">
                <i data-lucide={c.icon} width="24" height="24"></i>
              </div>
              <span className="kt-eyebrow">{c.eyebrow}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <ul className="kt-cap-points">
                {c.points.map((p, j) => (
                  <li key={j}><i data-lucide="check" width="14" height="14"></i>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Capabilities = Capabilities;
