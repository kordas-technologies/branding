/* @jsxRuntime classic @jsx React.createElement */

const STEPS = [
  { n: '01', title: 'Rozmowa wstępna', body: 'Bezpłatna konsultacja — definiujemy problem, ograniczenia i kryteria sukcesu.', dur: '30 min' },
  { n: '02', title: 'Aneks specyfikacyjny', body: 'Warsztat techniczny — parametry sprzętu, protokoły, twarde progi dokładności.', dur: '1 tydzień' },
  { n: '03', title: 'Realizacja', body: 'Cykliczne demo co 2 tygodnie. Kod na repo Klienta od dnia 1. Płatności milestone.', dur: '8–18 tyg.' },
  { n: '04', title: 'Stabilizacja + transfer', body: '30-dniowy okres stabilizacyjny. Pełny transfer IP, dokumentacja, modele, pipeline CI.', dur: '30 dni' },
];

function Process() {
  return (
    <section id="process" className="kt-section">
      <div className="kt-container">
        <div className="kt-section-head">
          <span className="kt-eyebrow">JAK PRACUJEMY</span>
          <h2>Cztery kroki. Bez niespodzianek.</h2>
          <hr className="kt-rule-blue" />
        </div>
        <div className="kt-process">
          {STEPS.map((s, i) => (
            <div key={i} className="kt-process-step">
              <div className="kt-process-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
              <span className="kt-process-dur">
                <i data-lucide="clock" width="12" height="12"></i> {s.dur}
              </span>
              {i < STEPS.length - 1 && <div className="kt-process-arrow"><i data-lucide="arrow-right" width="20" height="20"></i></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Process = Process;
