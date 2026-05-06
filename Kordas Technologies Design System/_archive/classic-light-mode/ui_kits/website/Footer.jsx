/* @jsxRuntime classic @jsx React.createElement */

function Footer() {
  return (
    <footer className="kt-footer">
      <div className="kt-container kt-footer-inner">
        <div className="kt-footer-brand">
          <img src="../../assets/logos/kordas_logo_light.png" alt="Kordas Technologies" />
          <p>
            Smart, driven, cross-stack innovation. AI · Rapid Prototyping · IoT.
          </p>
        </div>
        <div className="kt-footer-cols">
          <div>
            <h5>Możliwości</h5>
            <a href="#">AI / Computer Vision</a>
            <a href="#">Rapid Prototyping</a>
            <a href="#">IoT / Edge</a>
            <a href="#">5G / Connectivity</a>
          </div>
          <div>
            <h5>Firma</h5>
            <a href="#">O nas</a>
            <a href="#">Realizacje</a>
            <a href="#">Blog</a>
            <a href="#">Kontakt</a>
          </div>
          <div>
            <h5>Kontakt</h5>
            <a href="mailto:biuro@kordas.tech">biuro@kordas.tech</a>
            <a href="tel:+48797252208">+48 797 252 208</a>
            <span>Przybyszewskiego 30/2,<br/>30-128 Kraków</span>
            <span className="kt-mono">NIP 6772446064</span>
          </div>
        </div>
      </div>
      <div className="kt-footer-bottom">
        <div className="kt-container kt-footer-bottom-inner">
          <span>© 2026 Kordas Technologies. Wszelkie prawa zastrzeżone.</span>
          <span className="kt-footer-legal">
            <a href="#">Polityka prywatności</a>
            <span className="kt-vbar"></span>
            <a href="#">Regulamin</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
