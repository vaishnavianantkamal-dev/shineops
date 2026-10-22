import { useEffect, useRef, useState } from 'react';
import { sampleRows } from '../data.js';

const stroke = {
  fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round',
};

const icons = {
  wallet: <><path d="M4 7.5h14a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M4 7.5 15 4v3.5M16 14h1.5" /></>,
  coins: <><ellipse cx="12" cy="6" rx="7" ry="2.8" /><path d="M5 6v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6M5 12v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6" /></>,
  bell: <path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4" />,
};

const TICK_MS = 2400;
const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
const toNum = (s) => Number(String(s).replace(/[^\d]/g, ''));
const rand = (min, max) => min + Math.random() * (max - min);

// Eases a displayed number towards `target` whenever it changes.
function useCountUp(target, ms = 900) {
  const [val, setVal] = useState(target);
  const current = useRef(target);
  useEffect(() => {
    const from = current.current;
    if (from === target) return undefined;
    let raf;
    let start = null;
    const step = (t) => {
      if (start === null) start = t;
      const p = Math.min(1, Math.max(0, (t - start) / ms));
      const v = from + (target - from) * (1 - Math.pow(1 - p, 3));
      current.current = v;
      setVal(v);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return val;
}

const initialRows = sampleRows.map((r) => ({
  ...r,
  fundsN: toNum(r.funds),
  startFunds: toNum(r.funds),
  cplN: toNum(r.cpl),
  startCpl: toNum(r.cpl),
  v: 0,
}));

export default function DashboardPreview() {
  const [spend, setSpend] = useState(184200);
  const [avgCpl, setAvgCpl] = useState(312);
  const [rows, setRows] = useState(initialRows);
  const [synced, setSynced] = useState(0);

  const spendShown = useCountUp(spend);
  const cplShown = useCountUp(avgCpl);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const tick = setInterval(() => {
      setSpend((s) => s + Math.round(rand(1200, 4800)));
      setAvgCpl((c) => Math.round(Math.min(330, Math.max(296, c + rand(-4, 4)))));
      setRows((rs) => {
        const i = Math.floor(Math.random() * rs.length);
        return rs.map((r, j) => {
          if (j !== i) return r;
          let funds = r.fundsN - Math.round(rand(150, 900));
          if (funds < r.startFunds * 0.82) funds = r.startFunds; // simulated top-up
          const cpl = Math.round(Math.min(r.startCpl * 1.08, Math.max(r.startCpl * 0.92, r.cplN + rand(-6, 6))));
          return { ...r, fundsN: funds, cplN: cpl, v: r.v + 1 };
        });
      });
      setSynced(0);
    }, TICK_MS);
    const clock = setInterval(() => setSynced((s) => s + 1), 1000);
    return () => {
      clearInterval(tick);
      clearInterval(clock);
    };
  }, []);

  const kpis = [
    { label: 'Spend today', value: inr(spendShown), delta: { dir: 'up', text: '12%', note: 'vs yesterday' }, icon: icons.wallet },
    { label: 'Avg CPL, 7D', value: inr(cplShown), delta: { dir: 'down', text: '8%', note: 'vs last week' }, icon: icons.coins },
    { label: 'Open alerts', value: '2', crit: true, icon: icons.bell },
  ];

  return (
    <figure className="preview" aria-label="Preview of the Shineops Ads Monitor dashboard with sample data">
      <div className="preview-window">
        <div className="preview-bar">
          <span className="preview-dot" aria-hidden="true" />
          <span className="preview-dot" aria-hidden="true" />
          <span className="preview-dot" aria-hidden="true" />
          <span className="preview-url">
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth="2.2">
              <circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" />
            </svg>
            <span className="preview-url-text">app.shineops / daily-monitor</span>
            <span className="live-pill"><span className="live-dot pulse" aria-hidden="true" />Live data</span>
          </span>
        </div>

        <div className="preview-body">
          <div className="preview-title-row">
            <div className="preview-title">Daily monitor</div>
            <div className="preview-meta">
              SAMPLE DATA <span aria-hidden="true">•</span> 6 clients
              <span aria-hidden="true">•</span>
              <span className="synced">{synced < 1 ? 'synced just now' : `synced ${synced}s ago`}</span>
            </div>
          </div>

          <div className="kpis">
            {kpis.map((k) => (
              <div key={k.label} className="kpi">
                <span className="kpi-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>{k.icon}</svg>
                </span>
                <div className="kpi-text">
                  <div className="kpi-label">{k.label}</div>
                  <div className={k.crit ? 'kpi-value crit' : 'kpi-value'}>{k.value}</div>
                  {k.delta ? (
                    <div className="kpi-delta">
                      <span className="good">{k.delta.dir === 'up' ? '↑' : '↓'} {k.delta.text}</span> {k.delta.note}
                    </div>
                  ) : (
                    <a href="#features" className="kpi-link" tabIndex={-1}>View all →</a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Client</th>
                  <th scope="col" className="num">Funds</th>
                  <th scope="col" className="num">Daily budget</th>
                  <th scope="col" className="num">CPL 7D</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={`${r.client}-${r.v}`} className={r.v ? 'row-flash' : undefined}>
                    <td className="client">{r.client}</td>
                    <td className="num">{inr(r.fundsN)}</td>
                    <td className="num">{r.budget}</td>
                    <td className="num">{inr(r.cplN)}</td>
                    <td><span className={`pill ${r.kind}`}>{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="trend">
            <div className="trend-head">
              <span>CPL trend · 10 days</span>
              <span>Yesterday · 7D · 14D · 30D</span>
            </div>
            <TrendChart />
          </div>
        </div>
      </div>
    </figure>
  );
}

// ---------- Scrolling trend chart ----------
const W = 600;
const H = 72;
const VISIBLE = 14; // points visible at once
const STEP = (W - 16) / (VISIBLE - 1);
const SCROLL_MS = 2400;

const seed = [12, 18, 24, 15, 30, 28, 42, 36, 46, 44, 56, 52, 58, 64, 60];
const nextValue = (last) => Math.min(88, Math.max(10, last + rand(-9, 9) + (50 - last) * 0.12));
const yOf = (v) => H - 8 - (v / 100) * (H - 24);

function TrendChart() {
  const [data, setData] = useState(seed); // VISIBLE + 1 points; the last one slides in
  const [p, setP] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    let raf;
    let start = null;
    const loop = (t) => {
      if (start === null) start = t;
      let q = Math.max(0, (t - start) / SCROLL_MS);
      if (q >= 1) {
        start = t;
        q = 0;
        setData((d) => [...d.slice(1), nextValue(d[d.length - 1])]);
      }
      setP(q);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pts = data.map((v, i) => [8 + (i - p) * STEP, yOf(v)]);
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = `M${pts[0][0]},${H} L${line.replaceAll(' ', ' L')} L${pts[pts.length - 1][0]},${H} Z`;
  const [hx, hy] = pts[VISIBLE - 1];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" aria-hidden="true" className="trend-chart">
      <defs>
        <linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.22" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
        <clipPath id="trend-clip">
          <rect x="0" y="0" width={W} height={H} />
        </clipPath>
      </defs>
      <g clipPath="url(#trend-clip)">
        <path d={area} fill="url(#trend-fill)" />
        <polyline points={line} fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.6" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
        ))}
        {!reduceMotion && <circle className="trend-ping" cx={hx} cy={hy} r="4" fill="var(--accent)" />}
      </g>
    </svg>
  );
}
