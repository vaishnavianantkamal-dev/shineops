import { MetaLogo } from './BrandIcons.jsx';

const columns = [
  {
    title: 'Product',
    links: [
      { href: '#features', label: 'Features' },
      { href: '#how', label: 'How it works' },
      { href: '#who', label: "Who it's for" },
      { href: '#faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '#demo', label: 'Request a demo' },
      { href: '#demo', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy' },
      { href: '/data-deletion', label: 'Data deletion' },
    ],
  },
];

const stroke = {
  fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
};

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-inner">
        <div className="ft-top">
          <div className="ft-brand">
            <a href="#top" className="ft-logo">
              <span className="ft-mark" aria-hidden="true"><span /></span>
              <span className="ft-name">Shineops <span>Ads Monitor</span></span>
            </a>
            <p>One read-only dashboard for every client’s Meta ad spend — funds, budgets, CPL and alerts.</p>
            <ul className="ft-badges">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" {...stroke} strokeWidth="2.6" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
                Read-only · never touches your ads
              </li>
              <li><MetaLogo size={20} /> Meta Tech Provider</li>
            </ul>
            <a href="#demo" className="ft-cta">
              Request a demo
              <svg width="18" height="18" viewBox="0 0 24 24" {...stroke} strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>

          <nav className="ft-cols" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title} className="ft-col">
                <h2>{col.title}</h2>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}><a href={l.href}>{l.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="ft-watermark" aria-hidden="true">Shineops</div>

        <div className="ft-bottom">
          <p>© 2026 Shineops. Meta, Facebook and Instagram are trademarks of Meta Platforms, Inc.</p>
          <a href="#top" className="ft-top-btn">
            Back to top
            <span aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" {...stroke} strokeWidth="2.4"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
