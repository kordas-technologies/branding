/* @jsxRuntime classic @jsx React.createElement */
const { useState, useEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`kt-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="kt-nav-inner">
        <a href="#" className="kt-nav-logo" style={{ display:'inline-flex', alignItems:'center', gap:10 }}>
          <img src="../../assets/logos/kordas_kmark.svg" alt="Kordas Technologies" style={{ height: 28 }} />
          <span style={{ fontFamily:'var(--kt-font-mono)', fontSize:12, letterSpacing:'0.08em', color:'var(--kt-fg-1)' }}>
            KORDAS<span style={{ color:'var(--kt-fg-3)', marginLeft:6 }}>TECHNOLOGIES</span>
          </span>
        </a>
        <nav className="kt-nav-links">
          <a href="#capabilities">Możliwości</a>
          <a href="#process">Proces</a>
          <a href="#case">Realizacje</a>
          <a href="#about">O nas</a>
          <a href="#contact">Kontakt</a>
        </nav>
        <div className="kt-nav-cta">
          <a href="#contact" className="kt-btn kt-btn-ghost kt-btn-sm">+48 797 252 208</a>
          <a href="#contact" className="kt-btn kt-btn-primary kt-btn-sm">Umów rozmowę<i data-lucide="arrow-right" width="14" height="14"></i></a>
        </div>
      </div>
    </header>
  );
}

window.Nav = Nav;
