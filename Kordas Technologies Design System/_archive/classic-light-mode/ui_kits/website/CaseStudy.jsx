/* @jsxRuntime classic @jsx React.createElement */

function CaseStudy() {
  return (
    <section id="case" className="kt-section kt-section-tint">
      <div className="kt-container">
        <div className="kt-section-head">
          <span className="kt-eyebrow">REALIZACJA · 2026</span>
          <h2>Antyszpak — detekcja ptaków w sadach</h2>
          <hr className="kt-rule-blue" />
        </div>
        <div className="kt-case-grid">
          <div className="kt-case-visual">
            <div className="kt-case-photo">
              <div className="kt-case-photo-overlay">
                <span className="kt-eyebrow" style={{ color: '#bfdbfe' }}>RPi5 · YOLOv8n · INT8</span>
                <div className="kt-case-photo-stat">≥ 65%</div>
                <div className="kt-case-photo-cap">Precision/Recall na 7 scenariuszach</div>
              </div>
            </div>
            <div className="kt-case-tags">
              <span className="kt-tag">YOLOv8</span>
              <span className="kt-tag">Raspberry Pi 5</span>
              <span className="kt-tag">TFLite</span>
              <span className="kt-tag">REST + gRPC</span>
              <span className="kt-tag">MQTT</span>
            </div>
          </div>
          <div className="kt-case-content">
            <h3>Wyzwanie</h3>
            <p>Klient z branży agritech potrzebował algorytmu AI rozpoznającego ptaki w sadach owocowych — w czasie rzeczywistym, na sprzęcie edge, z odpornością na ruch roślinności i zmienne oświetlenie.</p>
            <h3>Rozwiązanie</h3>
            <p>Pełna realizacja Z1-B: trening na danych pilotażowych, kwantyzacja int8, multi-frame confirmation, integracja z prototypem przez MQTT. Walidacja na 7+ scenariuszach.</p>
            <div className="kt-case-results">
              <div className="kt-case-result">
                <div className="kt-case-result-num">&lt; 1 s</div>
                <div className="kt-case-result-lbl">end-to-end na RPi5</div>
              </div>
              <div className="kt-case-result">
                <div className="kt-case-result-num">≥ 65%</div>
                <div className="kt-case-result-lbl">gwarantowana dokładność</div>
              </div>
              <div className="kt-case-result">
                <div className="kt-case-result-num">18 tyg.</div>
                <div className="kt-case-result-lbl">od Aneksu Spec. do dostawy</div>
              </div>
            </div>
            <a href="#" className="kt-btn kt-btn-secondary">Pobierz pełny case study (PDF) <i data-lucide="arrow-right" width="14" height="14"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.CaseStudy = CaseStudy;
