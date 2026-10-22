import { useEffect, useRef, useState } from 'react';
import { audiences } from '../data.js';
import { MetaLogo } from './BrandIcons.jsx';

const ROTATE_MS = 6000;
const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// ---------- Stage views (one per persona) ----------
function AgenciesView() {
  const accounts = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  return (
    <div className="wv wv-accounts">
      <div className="wv-label">Connected ad accounts</div>
      <div className="wv-hub">
        <span className="wv-hub-core"><MetaLogo size={44} /></span>
        {accounts.map((a, i) => (
          <span key={a} className="wv-orbit" style={{ '--i': i }}>
            <span>{a}</span>
          </span>
        ))}
      </div>
      <div className="wv-big"><b>12</b> ad accounts · <b>1</b> login</div>
    </div>
  );
}

function OwnersView() {
  const tiles = [
    ['A', 'good', 78], ['B', 'crit', 22], ['C', 'warn', 64], ['D', 'good', 52],
    ['E', 'warn', 88], ['F', 'good', 40], ['G', 'good', 70], ['H', 'good', 35],
    ['I', 'warn', 58], ['J', 'good', 82], ['K', 'crit', 18], ['L', 'good', 46],
  ];
  return (
    <div className="wv wv-owners">
      <div className="wv-label">All clients at a glance</div>
      <div className="wv-tiles">
        {tiles.map(([n, tone, pct], i) => (
          <div key={n} className="wv-tile" style={{ '--d': `${i * 40}ms` }}>
            <span className="wv-tile-top"><span>Client {n}</span><i className={tone} /></span>
            <span className="wv-meter"><span className={tone} style={{ width: `${pct}%` }} /></span>
          </div>
        ))}
      </div>
      <div className="wv-legend">
        <span><i className="good" />Healthy</span>
        <span><i className="warn" />Watch</span>
        <span><i className="crit" />Act now</span>
      </div>
    </div>
  );
}

function ManagersView() {
  const alerts = [
    { tone: 'crit', title: 'Client B · Low funds', note: '₹3,150 left · runs out in ~14h', time: 'now' },
    { tone: 'warn', title: 'Client C · CPL up 28%', note: '₹412 vs ₹322 last week', time: '12m' },
    { tone: 'warn', title: 'Client E · Near daily cap', note: '92% of ₹6,000 spent', time: '1h' },
    { tone: 'good', title: 'Client A · Back to normal', note: 'Alert resolved automatically', time: '3h' },
  ];
  return (
    <div className="wv wv-managers">
      <div className="wv-label">Alerts · before the client calls</div>
      <ul className="wv-feed">
        {alerts.map((a, i) => (
          <li key={a.title} className={`wv-alert ${a.tone}`} style={{ '--d': `${i * 90}ms` }}>
            <span className="wv-alert-dot" />
            <span className="wv-alert-text"><b>{a.title}</b><small>{a.note}</small></span>
            <span className="wv-alert-time">{a.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const views = [AgenciesView, OwnersView, ManagersView];

const stats = [
  { from: 0, to: 5, suffix: '+', label: 'ad accounts per team, all in one place' },
  { from: 12, to: 1, label: 'login instead of one per client' },
  { from: 12, to: 0, label: 'changes to your ads — read-only, always' },
];

// Animates from `from` to `to` every time the number scrolls into view.
function CountStat({ from, to, suffix = '', label }) {
  const ref = useRef(null);
  const [val, setVal] = useState(reduceMotion ? to : from);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const el = ref.current;
    let raf;
    const run = () => {
      cancelAnimationFrame(raf);
      setRunning(true);
      let start = null;
      const ms = 1600;
      const step = (t) => {
        if (start === null) start = t;
        const p = Math.min(1, Math.max(0, (t - start) / ms));
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(from + (to - from) * eased));
        if (p < 1) raf = requestAnimationFrame(step);
        else setRunning(false);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) run();
      else { cancelAnimationFrame(raf); setVal(from); }
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [from, to]);

  return (
    <div className={running ? 'wx-stat counting' : 'wx-stat'}>
      <dt ref={ref} aria-label={`${to}${suffix}`}>
        <span className="wx-count" aria-hidden="true">{val}{suffix}</span>
      </dt>
      <dd>{label}</dd>
    </div>
  );
}

export default function WhoItsFor() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || paused) return undefined;
    const t = setTimeout(() => setActive((a) => (a + 1) % audiences.length), ROTATE_MS);
    return () => clearTimeout(t);
  }, [active, paused]);

  const View = views[active];

  return (
    <section id="who" className="who-x">
      <div
        className="wx-layout"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="wx-left">
          <div className="eyebrow">WHO IT'S FOR</div>
          <h2 className="h2">Built for agencies running many Meta accounts.</h2>

          <div className="wx-personas" role="tablist" aria-label="Who it's for">
            {audiences.map((a, i) => {
              const on = i === active;
              return (
                <button
                  key={a.title}
                  type="button"
                  role="tab"
                  id={`who-tab-${i}`}
                  aria-selected={on}
                  aria-controls="who-panel"
                  className={on ? 'wx-persona on' : 'wx-persona'}
                  onClick={() => setActive(i)}
                >
                  <span className="wx-num">0{i + 1}</span>
                  <span className="wx-body">
                    <span className="wx-title">{a.title}</span>
                    <span className="wx-desc">{a.body}</span>
                    {on && (
                      <ul className="wx-points">
                        {a.points.map((p) => (
                          <li key={p}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}
                  </span>
                  <span className="wx-progress" aria-hidden="true">
                    {on && (
                      <span
                        key={`${active}-${paused}`}
                        className={paused || reduceMotion ? 'wx-bar full' : 'wx-bar'}
                        style={{ animationDuration: `${ROTATE_MS}ms` }}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="wx-stage light-scope" id="who-panel" role="tabpanel" aria-labelledby={`who-tab-${active}`}>
          <div className="wx-stage-glow" aria-hidden="true" />
          <div key={active} className="wx-view">
            <View />
          </div>
        </div>
      </div>

      <dl className="wx-stats">
        {stats.map((s) => <CountStat key={s.label} {...s} />)}
      </dl>
    </section>
  );
}
