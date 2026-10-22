export default function CtaBand() {
  return (
    <section className="cta-x" aria-label="Request a demo">
      <span className="cta-orb cta-orb-left" aria-hidden="true" />
      <span className="cta-orb cta-orb-right" aria-hidden="true" />
      <span className="cta-glow" aria-hidden="true" />
      <svg className="cta-arcs" viewBox="0 0 1600 420" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-40 250C200 250 330 330 420 440" />
        <path d="M1700 40C1520 60 1400 160 1330 440" />
      </svg>

      <div className="cta-inner">
        <div className="cta-copy-x">
          <div className="cta-eyebrow">READY TO SIMPLIFY REPORTING?</div>
          <h2>See your clients’ ad spend in one place.</h2>
          <p>No credit card. We’ll set your agency up ourselves.</p>
        </div>
        <a href="#demo" className="cta-btn">
          Request a demo
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
