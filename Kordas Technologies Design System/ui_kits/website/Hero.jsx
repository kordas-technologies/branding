/* @jsxRuntime classic @jsx React.createElement */

function KMarkSVG({ size }) {
  const bw = size * 0.18, g = size * 0.048, h = size, rx = bw * 0.5;
  const midH = h * 0.38, bot = h * 0.56;
  return (
    <svg width={size * 0.82} height={h} viewBox={`0 0 ${size * 0.82} ${h}`} fill="none">
      {/* spine — cyan */}
      <rect x={0} y={0} width={bw} height={h} rx={rx} fill="var(--kt-cyan)" />
      {/* upper arm — cyan */}
      <rect x={bw + g} y={0} width={bw} height={midH} rx={rx} fill="var(--kt-cyan)" />
      <rect x={bw * 2 + g * 2} y={0} width={bw} height={bot * 0.72} rx={rx} fill="var(--kt-cyan)" />
      {/* lower arm — ice */}
      <rect x={bw + g} y={midH + g * 1.5} width={bw} height={h - midH - g * 1.5} rx={rx} fill="var(--kt-ice)" />
      <rect x={bw * 2 + g * 2} y={bot + g} width={bw} height={h - bot - g} rx={rx} fill="var(--kt-ice)" />
    </svg>
  );
}

function PillDivider() {
  const heights = [14, 7, 11, 14, 5, 12, 14, 9, 14, 4, 11, 14, 7, 13, 14, 6, 10, 14, 11, 14, 8, 13, 14, 9];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, height: 16, width: '100%', margin: '16px 0' }}>
      {Array.from({ length: 32 }).map((_, i) => {
        const h = heights[i % heights.length];
        const isAccent = i === 3 || i === 11 || i === 19 || i === 27;
        const isSub = i % 4 === 0;
        return (
          <div key={i} style={{
            width: 3, height: h,
            background: isAccent ? 'var(--kt-cyan)' : isSub ? 'var(--kt-fg-3)' : 'var(--kt-border)',
            borderRadius: 'var(--kt-r-pill)'
          }} />
        );
      })}
    </div>
  );
}

function Hero() {
  return (
    <section className="kt-hero">
      <div className="kt-container kt-hero-grid">
        <div>
          <span className="kt-eyebrow">// ai · rapid prototyping · iot</span>
          <h1 className="kt-hero-title">
            Smart, driven, <br />
            <span className="kt-light">cross-stack</span> innovation.
          </h1>
          <PillDivider />
          <p className="kt-hero-blurb">
            Budujemy systemy AI, IoT i edge-inference — od prototypu na Raspberry Pi 5
            do działającej instalacji w terenie. Krótkie cykle, mierzalne progi, transfer IP.
          </p>
          <div className="kt-hero-actions">
            <a href="#contact" className="kt-btn kt-btn-primary kt-btn-lg">
              [ umów rozmowę ] <i data-lucide="arrow-right" width="16" height="16"></i>
            </a>
            <a href="#case" className="kt-btn kt-btn-secondary kt-btn-lg">
              [ zobacz realizacje ]
            </a>
          </div>
          <div className="kt-hero-meta">
            <span><i data-lucide="map-pin" width="14" height="14"></i> Kraków, PL</span>
            <span><i data-lucide="check-circle-2" width="14" height="14"></i> NIP 6772446064</span>
            <span><i data-lucide="zap" width="14" height="14"></i> Pierwszy kontakt &lt; 24h</span>
          </div>
        </div>
        <div className="kt-hero-visual" style={{ position: 'relative', background: 'var(--kt-bg-elev)', border: '1px solid var(--kt-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, overflow: 'hidden' }}>
          {/* radial cyan glow */}
          <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '60%', background: 'radial-gradient(circle at 50% 40%, oklch(25% 0.12 220 / 0.45), transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, position: 'relative', zIndex: 1 }}>
            <KMarkSVG size={180} />
            <div style={{ fontFamily: 'var(--kt-font-mono)', fontSize: 9, color: 'var(--kt-fg-3)', lineHeight: 2.2, marginTop: 8 }}>
              <div><span style={{ color: 'var(--kt-cyan)' }}>▲</span> signal.upper</div>
              <div><span style={{ color: 'var(--kt-ice)' }}>▼</span> signal.lower</div>
              <div style={{ color: 'var(--kt-fg-3)' }}>── nodes: <span style={{ color: 'var(--kt-cyan)' }}>2,847</span> · live</div>
            </div>
          </div>
          <div className="kt-hero-stat" style={{ borderTop: '1px solid var(--kt-border)', paddingTop: 20, width: '100%', textAlign: 'center', marginTop: 24, position: 'relative', zIndex: 1 }}>
            <div className="kt-hero-stat-num">&lt; 1 s</div>
            <div className="kt-hero-stat-lbl">end-to-end inference<br/><span className="kt-mono">YOLOv8n · int8 · RPi5</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
