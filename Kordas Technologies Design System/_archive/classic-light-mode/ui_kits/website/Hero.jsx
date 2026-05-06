/* @jsxRuntime classic @jsx React.createElement */

function DataBarMotif() {
  // Three groups of three pills — abstracted from the K icon
  const groups = [
    [80, 60, 42],
    [70, 50, 32],
    [90, 64, 46],
    [56, 38, 24],
  ];
  return (
    <div className="kt-databar">
      {groups.map((g, gi) => (
        <div key={gi} className="kt-databar-group">
          {g.map((h, i) => (
            <span key={i} className="kt-databar-bar" style={{
              height: `${h}px`,
              background: ['#3b82f6', '#60a5fa', '#bfdbfe'][i]
            }} />
          ))}
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="kt-hero">
      <div className="kt-container kt-hero-grid">
        <div>
          <span className="kt-eyebrow">AI · RAPID PROTOTYPING · IoT</span>
          <h1 className="kt-hero-title">
            Smart, driven, <br />
            <span className="kt-light">cross-stack</span> innovation.
          </h1>
          <p className="kt-hero-blurb">
            Budujemy systemy AI, IoT i edge-inference — od prototypu na Raspberry Pi 5
            do działającej instalacji w terenie. Krótkie cykle, mierzalne progi, transfer IP.
          </p>
          <div className="kt-hero-actions">
            <a href="#contact" className="kt-btn kt-btn-primary kt-btn-lg">
              Umów rozmowę <i data-lucide="arrow-right" width="16" height="16"></i>
            </a>
            <a href="#case" className="kt-btn kt-btn-secondary kt-btn-lg">
              Zobacz realizacje
            </a>
          </div>
          <div className="kt-hero-meta">
            <span><i data-lucide="map-pin" width="14" height="14"></i> Kraków, PL</span>
            <span><i data-lucide="check-circle-2" width="14" height="14"></i> NIP 6772446064</span>
            <span><i data-lucide="zap" width="14" height="14"></i> Pierwszy kontakt &lt; 24h</span>
          </div>
        </div>
        <div className="kt-hero-visual">
          <DataBarMotif />
          <div className="kt-hero-stat">
            <div className="kt-hero-stat-num">&lt; 1 s</div>
            <div className="kt-hero-stat-lbl">end-to-end inference<br/><span className="kt-mono">YOLOv8n · int8 · RPi5</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
