// Small UI previews shown inside each feature card.

const check = <path d="M5 12l4 4 10-10" />;

export function ClientsVisual() {
  const rows = [
    { name: 'Client A', color: '#0866FF' },
    { name: 'Client B', color: '#E1306C' },
    { name: 'Client C', color: '#1877F2' },
    { name: 'Client D', color: '#E60023' },
  ];
  return (
    <div className="fv-panel">
      <div className="fv-title">All Clients</div>
      {rows.map((r) => (
        <div key={r.name} className="fv-row">
          <span className="fv-avatar" style={{ background: r.color }} />
          <span className="fv-name">{r.name}</span>
          <span className="fv-badge good">Active</span>
        </div>
      ))}
    </div>
  );
}

export function BudgetVisual() {
  const rows = [
    { name: 'Client A', pct: 75, tone: 'good' },
    { name: 'Client B', pct: 90, tone: 'warn' },
    { name: 'Client C', pct: 100, tone: 'crit' },
    { name: 'Client D', pct: 40, tone: 'good' },
  ];
  return (
    <div className="fv-panel">
      <div className="fv-title">Budget Usage</div>
      {rows.map((r) => (
        <div key={r.name} className="fv-row">
          <span className="fv-name fixed">{r.name}</span>
          <span className="fv-bar"><span className={`fv-fill ${r.tone}`} style={{ width: `${r.pct}%` }} /></span>
          <span className="fv-pct">{r.pct}%</span>
        </div>
      ))}
    </div>
  );
}

export function TrendVisual() {
  const lines = [
    { color: '#2A78D6', pts: '0,40 20,34 40,36 60,26 80,30 100,18 120,22 140,10' },
    { color: '#1FAE9B', pts: '0,46 20,44 40,38 60,40 80,32 100,34 120,26 140,24' },
    { color: '#8B5CF6', pts: '0,30 20,38 40,30 60,34 80,24 100,28 120,16 140,20' },
  ];
  return (
    <div className="fv-panel">
      <div className="fv-title fv-title-row">CPL Trends <span className="fv-chip">30 Days</span></div>
      <svg viewBox="0 0 140 52" width="100%" height="58" preserveAspectRatio="none" aria-hidden="true">
        {[12, 26, 40].map((y) => <line key={y} x1="0" x2="140" y1={y} y2={y} stroke="#E6EEEF" strokeWidth="1" vectorEffect="non-scaling-stroke" />)}
        {lines.map((l) => (
          <polyline key={l.color} points={l.pts} fill="none" stroke={l.color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <div className="fv-legend">
        <span><i style={{ background: '#2A78D6' }} />Client A</span>
        <span><i style={{ background: '#1FAE9B' }} />Client B</span>
        <span><i style={{ background: '#8B5CF6' }} />Client C</span>
      </div>
    </div>
  );
}

export function CampaignsVisual() {
  const rows = [
    { on: true, pts: '0,14 10,10 20,12 30,6 40,8 50,2' },
    { on: true, pts: '0,12 10,13 20,8 30,10 40,5 50,6' },
    { on: false, pts: '0,6 10,9 20,8 30,12 40,11 50,14' },
    { on: true, pts: '0,13 10,9 20,11 30,7 40,4 50,3' },
  ];
  return (
    <div className="fv-panel">
      <div className="fv-title">Campaigns</div>
      {rows.map((r, i) => (
        <div key={i} className="fv-row">
          <span className={r.on ? 'fv-toggle on' : 'fv-toggle'}><span /></span>
          <span className="fv-line" />
          <svg viewBox="0 0 50 16" width="46" height="16" aria-hidden="true">
            <polyline points={r.pts} fill="none" stroke={r.on ? '#1FAE5B' : '#A8B6B9'} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export function AlertsVisual() {
  const rows = [
    { tone: 'crit', mark: '!', name: 'Client B', note: 'Budget at 90%' },
    { tone: 'warn', mark: '!', name: 'Client C', note: 'Daily spend cap reached' },
    { tone: 'good', mark: '✓', name: 'Client A', note: 'Performance back to normal' },
  ];
  return (
    <div className="fv-stack">
      {rows.map((r) => (
        <div key={r.name} className={`fv-alert ${r.tone}`}>
          <span className="fv-alert-mark">{r.mark}</span>
          <span>
            <b>{r.name}</b>
            <small>{r.note}</small>
          </span>
        </div>
      ))}
    </div>
  );
}

export function RolesVisual() {
  const rows = [
    { role: 'Admin', color: '#2A78D6' },
    { role: 'Manager', color: '#1FAE5B' },
    { role: 'Analyst', color: '#8B5CF6' },
    { role: 'Client View', color: '#5B7076' },
  ];
  return (
    <div className="fv-panel">
      {rows.map((r) => (
        <div key={r.role} className="fv-row">
          <span className="fv-avatar person" style={{ background: r.color }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><circle cx="12" cy="8" r="5" /><path d="M3 22c1-5 4.5-8 9-8s8 3 9 8z" /></svg>
          </span>
          <span className="fv-name">{r.role}</span>
          <span className="fv-check">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{check}</svg>
          </span>
        </div>
      ))}
    </div>
  );
}
