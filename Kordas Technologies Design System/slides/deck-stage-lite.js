/**
 * <deck-stage-lite> — minimal slide-deck custom element.
 *
 * Why this exists: the full `deck-stage.js` (~1700 lines, with shadow-DOM
 * thumbnail rail, MutationObservers and lazy materialization) hangs in some
 * Chrome contexts (headless, sandboxed iframes, certain extension setups)
 * before reaching first paint. This lite replacement renders the deck
 * reliably in any modern browser using straight DOM and one event listener.
 *
 * Features kept:
 *  - Each direct <section> child of <deck-stage> = one slide.
 *  - Auto-scaling: slides are designed at 1920×1080; we scale to fit viewport.
 *  - Keyboard nav: ←/→, PgUp/PgDn, Space, Home/End, number keys (1–9).
 *  - Slide counter overlay (mono, bottom-center).
 *  - Print: each slide a page at design size (Ctrl+P → save PDF).
 *
 * Features dropped (use full deck-stage.js if you need them):
 *  - Speaker-notes panel; thumbnail rail; drag-reorder; live MutationObserver;
 *    presenter popup; localStorage persistence; tweaks-panel integration.
 */
(() => {
  if (customElements.get('deck-stage')) return;

  const DESIGN_W = 1920;
  const DESIGN_H = 1080;

  const style = document.createElement('style');
  style.textContent = `
    deck-stage {
      position: fixed; inset: 0;
      display: block; overflow: hidden;
      background: var(--kt-bg, #060a10);
    }
    deck-stage > section {
      position: absolute; left: 50%; top: 50%;
      width: ${DESIGN_W}px; height: ${DESIGN_H}px;
      transform-origin: center center;
      transform: translate(-50%, -50%) scale(0.5);
      visibility: hidden; opacity: 0;
      transition: opacity 200ms cubic-bezier(.2,.7,.3,1);
    }
    deck-stage > section.is-active { visibility: visible; opacity: 1; z-index: 1; }
    deck-stage > .ds-overlay {
      position: fixed; left: 50%; bottom: 24px;
      transform: translateX(-50%);
      font-family: 'JetBrains Mono', ui-monospace, monospace;
      font-size: 11px; letter-spacing: 0.10em; text-transform: uppercase;
      color: var(--kt-fg-3, #304060);
      background: rgba(6,10,16,0.6);
      border: 1px solid var(--kt-border, #1a2540);
      padding: 6px 14px;
      pointer-events: none; user-select: none;
      transition: opacity 600ms ease;
      z-index: 10;
    }
    deck-stage > .ds-overlay.is-faded { opacity: 0.15; }
    @media print {
      deck-stage { position: static; overflow: visible; }
      deck-stage > section {
        position: static; left: 0; top: 0;
        visibility: visible !important; opacity: 1 !important;
        transform: none !important;
        page-break-after: always;
        width: ${DESIGN_W}px; height: ${DESIGN_H}px;
      }
      deck-stage > .ds-overlay { display: none; }
    }
  `;
  document.head.appendChild(style);

  class DeckStage extends HTMLElement {
    constructor() {
      super();
      this._idx = 0;
      this._fadeTimer = null;
    }

    connectedCallback() {
      // connectedCallback fires when our opening tag is parsed — children
      // (the section slides) haven't been parsed yet. Defer init until the
      // document is fully parsed so this.querySelectorAll sees them.
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this._init(), { once: true });
      } else {
        this._init();
      }
    }

    _init() {
      this._slides = Array.from(this.querySelectorAll(':scope > section'));
      if (!this._slides.length) return;
      this._overlay = document.createElement('div');
      this._overlay.className = 'ds-overlay';
      this.appendChild(this._overlay);
      this._show(0, false);
      this._fit();

      this._onKey = (e) => this._key(e);
      this._onResize = () => this._fit();
      this._onMove = () => this._poke();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMove, { passive: true });
    }

    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMove);
      clearTimeout(this._fadeTimer);
    }

    _show(i, animate = true) {
      i = Math.max(0, Math.min(this._slides.length - 1, i));
      this._slides.forEach((s, n) => s.classList.toggle('is-active', n === i));
      this._idx = i;
      this._overlay.textContent = `// ${String(i + 1).padStart(2, '0')} / ${String(this._slides.length).padStart(2, '0')}`;
      this._poke();
    }

    _fit() {
      const sx = window.innerWidth / DESIGN_W;
      const sy = window.innerHeight / DESIGN_H;
      const s = Math.min(sx, sy);
      this._slides.forEach((slide) => {
        slide.style.transform = `translate(-50%, -50%) scale(${s})`;
      });
    }

    _key(e) {
      const k = e.key;
      if (k === 'ArrowRight' || k === 'PageDown' || k === ' ') { e.preventDefault(); this._show(this._idx + 1); }
      else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); this._show(this._idx - 1); }
      else if (k === 'Home') { e.preventDefault(); this._show(0); }
      else if (k === 'End') { e.preventDefault(); this._show(this._slides.length - 1); }
      else if (/^[1-9]$/.test(k)) { e.preventDefault(); this._show(parseInt(k, 10) - 1); }
    }

    _poke() {
      this._overlay.classList.remove('is-faded');
      clearTimeout(this._fadeTimer);
      this._fadeTimer = setTimeout(() => this._overlay.classList.add('is-faded'), 2000);
    }
  }

  customElements.define('deck-stage', DeckStage);
})();
