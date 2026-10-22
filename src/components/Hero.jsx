import DashboardPreview from './DashboardPreview.jsx';
import { MetaLogo, InstagramLogo, FacebookLogo, WhatsAppLogo } from './BrandIcons.jsx';

const stroke = {
  fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
};

const benefits = [
  {
    lines: ['Save hours', 'of manual work'],
    icon: <><circle cx="12" cy="13" r="7.5" /><path d="M12 9.5V13l2.5 1.5M9.5 2.5h5M4.5 6 3 4.5M19.5 6 21 4.5" /></>,
  },
  {
    lines: ['Track all clients', 'in one place'],
    icon: <><rect x="3" y="6" width="18" height="14" rx="2.5" /><path d="M3 10h18M16 15h2M7 6V4.5h10V6" /></>,
  },
  {
    lines: ['Stay on top', 'of budgets & trends'],
    icon: <><rect x="5" y="4" width="14" height="17" rx="2.5" /><path d="M9 4V3h6v1M9 13l2 2 4-4" /></>,
  },
];

export default function Hero() {
  return (
    <section className="fold light-scope">
      <div className="fold-inner">
        <div className="hero-copy">
          <span className="eyebrow-pill">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
              <path d="M10 3.5 11.6 8.4 16.5 10 11.6 11.6 10 16.5 8.4 11.6 3.5 10 8.4 8.4z" />
              <path d="M18 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
            </svg>
            FOR AD AGENCIES
          </span>

          <h1>
            One dashboard <span className="line">for every client’s</span> <span className="line"><span className="accent">Meta</span> ad spend.</span>
          </h1>

          <p className="hero-lead">
            Stop logging into ten different Ads Manager accounts. See available funds, daily budget, CPL
            trends and alerts for every client, in one place — read-only, nothing in their ads ever changes.
          </p>

          <div className="hero-ctas">
            <a href="#demo" className="btn btn-primary btn-hero">
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
                <path d="M14 4.5c2.5-1.5 5-1.5 5.5-1 .5.5.5 3-1 5.5l-5.5 5.5-4-4z" />
                <path d="M9 10 5.5 9.5 3 12l4 1M14 15l.5 3.5L12 21l-1-4M6.5 17.5 4 20" />
                <circle cx="15.5" cy="8.5" r="1.2" />
              </svg>
              Request a demo
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#how" className="btn btn-secondary btn-hero">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="11" fill="var(--ink)" />
                <path d="M10 8.2v7.6l6-3.8z" fill="var(--surface)" />
              </svg>
              See how it works
            </a>
          </div>

          <ul className="benefits">
            {benefits.map((b) => (
              <li key={b.lines[0]}>
                <span className="benefit-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" {...stroke} strokeWidth="1.8">{b.icon}</svg>
                </span>
                <span>{b.lines[0]}<br />{b.lines[1]}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <DashboardPreview />

          <div className="float-cards" aria-hidden="true">
            <div className="float-card alert">
              <span className="float-bell">
                <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
                  <path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4" />
                </svg>
                <span className="float-badge">2</span>
              </span>
              Open alerts
            </div>
            <div className="float-card">
              <span className="float-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" {...stroke} strokeWidth="2.2">
                  <path d="M6 13l6-6 6 6M6 19l6-6 6 6" />
                </svg>
              </span>
              <span>Better<br />performance</span>
            </div>
          </div>

          <div className="platforms">
            <ul aria-label="Supported platforms">
              <li className="chip chip-meta"><MetaLogo /> Meta <span className="live-dot" aria-hidden="true" /></li>
              <li className="chip" title="Instagram"><InstagramLogo /></li>
              <li className="chip" title="Facebook"><FacebookLogo /></li>
              <li className="chip" title="WhatsApp"><WhatsAppLogo /></li>
              <li className="chip" aria-label="More">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--ink-2)" aria-hidden="true">
                  <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
                </svg>
              </li>
            </ul>
            <div className="handnote" aria-hidden="true">
              <svg width="40" height="34" viewBox="0 0 40 34" fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M36 30C22 31 9 24 6 8M2 13l4-6 5 5" />
              </svg>
              <span>All your clients.<br />One place.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
