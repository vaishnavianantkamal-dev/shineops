import { steps } from '../data.js';
import { MetaLogo, FacebookLogo } from './BrandIcons.jsx';

const stroke = {
  fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
};

function ConnectArt() {
  return (
    <div className="hw-art hw-connect">
      <span className="hw-tile"><MetaLogo size={64} /></span>
      <span className="hw-fb"><FacebookLogo size={38} /></span>
      <span className="hw-bubble">
        <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
          <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1" />
        </svg>
      </span>
    </div>
  );
}

function SyncArt() {
  const dots = ['#3CC4B0', '#8EDBD0', '#1660B8'];
  return (
    <div className="hw-art hw-sync">
      <div className="hw-panel">
        {dots.map((c) => (
          <div key={c} className="hw-row">
            <span className="hw-dot" style={{ background: c }} />
            <svg width="18" height="18" viewBox="0 0 24 24" {...stroke} stroke="#5B7076" strokeWidth="1.8">
              <path d="M3 10v4h3l6 4V6L6 10zM16 9a4 4 0 0 1 0 6" />
            </svg>
            <span className="hw-lines"><i /><i /></span>
          </div>
        ))}
      </div>
      <span className="hw-sync-badge">
        <svg width="30" height="30" viewBox="0 0 24 24" {...stroke} strokeWidth="2.2">
          <path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4" />
        </svg>
      </span>
    </div>
  );
}

function DashboardArt() {
  const bars = [18, 30, 24, 42, 36, 58, 72, 88];
  return (
    <div className="hw-art hw-dash">
      <div className="hw-screen">
        <div className="hw-screen-bar"><i /><i /><i /></div>
        <div className="hw-screen-body">
          <div className="hw-side">{[0, 1, 2, 3, 4, 5].map((i) => <i key={i} />)}</div>
          <div className="hw-chart">
            {bars.map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} className={i % 2 ? 'b2' : undefined} />
            ))}
          </div>
        </div>
      </div>
      <div className="hw-stats">
        <div>
          <svg width="18" height="18" viewBox="0 0 24 24" {...stroke} stroke="var(--accent)" strokeWidth="2.4"><path d="M6 20v-6M12 20V8M18 20V4" /></svg>
          <span><small>Total Spend</small><b>₹1,24,320</b></span>
        </div>
        <div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1660B8" aria-hidden="true"><path d="M5 3l14 7-6 2-2 6z" /></svg>
          <span><small>Avg. CPL</small><b>₹86</b></span>
        </div>
      </div>
    </div>
  );
}

function InviteArt() {
  const people = ['#3CC4B0', '#6BA8E8', '#8B5CF6'];
  return (
    <div className="hw-art hw-invite">
      <div className="hw-panel">
        {people.map((c) => (
          <div key={c} className="hw-row">
            <span className="hw-person" style={{ background: c }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><circle cx="12" cy="8" r="4.5" /><path d="M4 21c1-4.5 4.2-7 8-7s7 2.5 8 7z" /></svg>
            </span>
            <span className="hw-lines"><i /><i /></span>
          </div>
        ))}
      </div>
      <div className="hw-invite-card">
        <span className="hw-plus">
          <svg width="20" height="20" viewBox="0 0 24 24" {...stroke} stroke="#fff" strokeWidth="2.8"><path d="M12 5v14M5 12h14" /></svg>
        </span>
        Invite<br />Team
      </div>
      <svg className="hw-spark" width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 2v6M20 8l-5 5M22 20h-6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

const arts = [ConnectArt, SyncArt, DashboardArt, InviteArt];

export default function HowItWorks() {
  return (
    <section id="how" className="how-x light-scope">
      <div className="hw-inner">
        <div className="hw-head">
          <div className="hw-eyebrow">HOW IT WORKS</div>
          <h2 className="h2">Connect once. The dashboard fills itself.</h2>
        </div>
        <ol className="hw-steps">
          {steps.map((s, i) => {
            const Art = arts[i];
            return (
              <li key={s.n} className="hw-card">
                <span className="hw-num">{s.n}</span>
                {i < steps.length - 1 && (
                  <span className="hw-connector" aria-hidden="true">
                    <svg width="12" height="14" viewBox="0 0 12 14"><path d="M2 2l7 5-7 5" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                )}
                <div aria-hidden="true"><Art /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
