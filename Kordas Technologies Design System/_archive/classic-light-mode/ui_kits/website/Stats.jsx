/* @jsxRuntime classic @jsx React.createElement */

const STATS = [
  { n: '12+', l: 'projektów AI / IoT', s: 'od 2021' },
  { n: '< 24h', l: 'czas pierwszej odpowiedzi', s: 'w dni robocze' },
  { n: '100%', l: 'dotrzymanych terminów', s: 'w 2025' },
  { n: 'PL · EN', l: 'pełna obsługa dwujęzyczna', s: '' },
];

function Stats() {
  return (
    <section className="kt-stats">
      <div className="kt-container">
        <div className="kt-stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="kt-stats-cell">
              <div className="kt-stats-num">{s.n}</div>
              <div className="kt-stats-lbl">{s.l}</div>
              {s.s && <div className="kt-stats-sub">{s.s}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Stats = Stats;
