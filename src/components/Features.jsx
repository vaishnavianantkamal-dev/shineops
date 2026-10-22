import { useEffect, useState } from 'react';
import SectionHead from './SectionHead.jsx';
import { features } from '../data.js';
import {
  ClientsVisual, BudgetVisual, TrendVisual, CampaignsVisual, AlertsVisual, RolesVisual,
} from './FeatureVisuals.jsx';

// Same order as `features` in data.js
const visuals = [ClientsVisual, BudgetVisual, TrendVisual, CampaignsVisual, AlertsVisual, RolesVisual];

function useMediaQuery(query) {
  const get = () => typeof window !== 'undefined' && window.matchMedia(query).matches;
  const [matches, setMatches] = useState(get);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

function FeatureCard({ f, Visual, hidden }) {
  return (
    <li className="fx-card" aria-hidden={hidden || undefined}>
      <svg className="fx-spark" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2v5M19 5l-3.5 3.5M22 12h-5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="fx-text">
        <span className="fx-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={f.icon} />
          </svg>
        </span>
        <h3>{f.title}</h3>
        <p>{f.body}</p>
      </div>
      <div className="fx-visual" aria-hidden="true"><Visual /></div>
    </li>
  );
}

function MarqueeColumn({ items, reverse }) {
  return (
    <div className={reverse ? 'fx-col reverse' : 'fx-col'}>
      <ul className="fx-track">
        {items.map((it) => <FeatureCard key={it.f.title} {...it} />)}
        {/* duplicate set makes the vertical loop seamless */}
        {items.map((it) => <FeatureCard key={`${it.f.title}-dup`} {...it} hidden />)}
      </ul>
    </div>
  );
}

export default function Features() {
  const single = useMediaQuery('(max-width: 640px)');
  const items = features.map((f, i) => ({ f, Visual: visuals[i] }));
  const columns = single ? [items] : [items.filter((_, i) => i % 2 === 0), items.filter((_, i) => i % 2 === 1)];

  return (
    <section id="features" className="features-x">
      <SectionHead eyebrow="FEATURES" title="Everything you check every morning, on one screen." />
      <div className="fx-layout">
        <figure className="fx-photo">
          <img
            src="/features-desktop.png"
            width="1774"
            height="887"
            loading="lazy"
            alt="The Ads Monitor dashboard on a desktop monitor, showing spend, CPL trends, top clients and recent alerts"
          />
        </figure>
        <div className="fx-marquee">
          {columns.map((col, i) => <MarqueeColumn key={i} items={col} reverse={i === 1} />)}
        </div>
      </div>
    </section>
  );
}
