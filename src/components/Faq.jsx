import { useState } from 'react';
import { faqs } from '../data.js';

const stroke = {
  fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
};

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="fq">
      <div className="fq-inner">
        <aside className="fq-side">
          <div className="eyebrow">FAQ</div>
          <h2 className="h2">Questions agencies ask first.</h2>
          <p className="fq-lead">
            Everything about access, data and pricing — answered plainly. Can’t find what you need? We’re a message away.
          </p>

          <div className="fq-help">
            <span className="fq-help-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
                <path d="M4 5h16v11H9l-5 4z" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.4M12 15.5h.01" />
              </svg>
            </span>
            <div>
              <b>Still have questions?</b>
              <span>Talk to our team — we usually reply within one working day.</span>
            </div>
            <a href="#demo" className="fq-help-btn">
              Contact us
              <svg width="18" height="18" viewBox="0 0 24 24" {...stroke} strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </aside>

        <ul className="fq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={isOpen ? 'fq-item open' : 'fq-item'}>
                <h3>
                  <button
                    type="button"
                    id={`fq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`fq-a-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="fq-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="fq-q">{item.q}</span>
                    <span className="fq-toggle" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke} strokeWidth="2.4">
                        <path d="M5 12h14" /><path className="fq-vert" d="M12 5v14" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div id={`fq-a-${i}`} role="region" aria-labelledby={`fq-q-${i}`} className="fq-a" inert={isOpen ? undefined : ''}>
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
