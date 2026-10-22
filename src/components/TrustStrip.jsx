import { MetaLogo } from './BrandIcons.jsx';

const items = [
  { text: 'Read-only · never touches your ads', tone: 'good', icon: <path d="M5 12l5 5 9-10" /> },
  { text: 'Meta Tech Provider', tone: 'meta', brand: <MetaLogo size={26} /> },
  { text: 'Role-based team access', icon: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 14.8c1.6.8 2.6 2.6 3 5.2" /></> },
  { text: 'Multi-client by design', icon: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></> },
  { text: 'Low-funds & budget alerts', tone: 'crit', icon: <path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4" /> },
  { text: 'CPL trends · 7D, 14D, 30D', icon: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" /> },
  { text: 'Auto-sync from Meta', tone: 'meta', icon: <path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4" /> },
  { text: 'Encrypted access tokens', icon: <><rect x="5" y="10.5" width="14" height="10" rx="2" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2.5" /></> },
  { text: 'Daily budget tracking', tone: 'warn', icon: <><path d="M4 7.5h14a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M4 7.5 15 4v3.5M16 14h1.5" /></> },
  { text: 'Campaign-level detail', icon: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /> },
  { text: 'Agency data isolated', tone: 'good', icon: <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6zM9 12l2 2 4-4" /> },
  { text: 'Facebook & Instagram ads', tone: 'meta', icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".6" /></> },
];

function Pill({ item }) {
  return (
    <li className={`marquee-pill tone-${item.tone || 'accent'}`}>
      <span className="marquee-icon" aria-hidden="true">
        {item.brand || (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            {item.icon}
          </svg>
        )}
      </span>
      {item.text}
    </li>
  );
}

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="Key facts">
      <div className="marquee">
        <div className="marquee-track">
          <ul>
            {items.map((it) => <Pill key={it.text} item={it} />)}
          </ul>
          {/* duplicate set makes the loop seamless */}
          <ul aria-hidden="true">
            {items.map((it) => <Pill key={it.text} item={it} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}
