import { useState } from 'react';

const stroke = {
  fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round',
};

const icons = {
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4.5 4.2-7 8-7s7 2.5 8 7" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 7l8.5 6 8.5-6" /></>,
  building: <><path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 10h4a1 1 0 0 1 1 1v10M3 21h18" /><path d="M8 8h3M8 12h3M8 16h3" /></>,
  team: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 14.8c1.6.8 2.6 2.6 3 5.2" /></>,
  chat: <path d="M4 5h16v11H9l-5 4z" />,
};

const benefits = [
  { label: ['Personalized', 'demo'], icon: <><rect x="3" y="5" width="18" height="16" rx="2.5" /><path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4" /></> },
  { label: ['Tailored', 'setup plan'], icon: <path d="M13 2 4 14h7l-1 8 9-12h-7z" /> },
  { label: ['Answers to', 'all your questions'], icon: icons.team },
];

function Icon({ d, size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} aria-hidden="true">{d}</svg>;
}

function Field({ id, label, optional, icon, full, textarea, ...input }) {
  return (
    <div className={full ? 'dm-field full' : 'dm-field'}>
      <label htmlFor={id}>{label}{optional && <span> (optional)</span>}</label>
      <div className={textarea ? 'dm-input area' : 'dm-input'}>
        <Icon d={icon} />
        {textarea ? <textarea id={id} rows={4} {...input} /> : <input id={id} {...input} />}
      </div>
    </div>
  );
}

export default function DemoForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: send `data` to your backend / CRM endpoint here.
    console.log('Demo request:', data);
    setSent(true);
  }

  return (
    <section id="demo" className="dm light-scope">
      <div className="dm-inner">
        <div className="dm-copy">
          <div className="dm-eyebrow">REQUEST A DEMO</div>
          <h2>Talk to us about your agency.</h2>
          <p>
            Tell us how many clients you manage. We'll walk you through the dashboard and set up a plan sized
            for your clients, ad accounts and team.
          </p>
          <ul className="dm-benefits">
            {benefits.map((b) => (
              <li key={b.label[0]}>
                <span className="dm-benefit-icon"><Icon d={b.icon} size={20} /></span>
                <span>{b.label[0]}<br />{b.label[1]}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="dm-panel">
          <svg className="dm-spark" width="34" height="34" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 2v6M20 6l-5 5M22 18h-6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {sent ? (
            <div className="dm-card dm-thanks" role="status">
              <span className="dm-thanks-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
              </span>
              <h3>Thanks — we'll be in touch.</h3>
              <p>We usually reply within one working day.</p>
            </div>
          ) : (
            <form className="dm-card dm-form" onSubmit={handleSubmit}>
              <Field id="f-name" name="name" label="Name" icon={icons.user} placeholder="Your name" required autoComplete="name" />
              <Field id="f-email" name="email" type="email" label="Work email" icon={icons.mail} placeholder="you@company.com" required autoComplete="email" />
              <Field id="f-agency" name="agency" label="Agency name" icon={icons.building} placeholder="Your agency name" required autoComplete="organization" />
              <Field id="f-clients" name="clients" type="number" min="1" inputMode="numeric" label="Number of clients" optional icon={icons.team} placeholder="e.g. 5, 10, 20" />
              <Field id="f-msg" name="message" label="Message" optional full textarea icon={icons.chat} placeholder="Tell us about your agency, your goals or any specific requirements..." />
              <div className="dm-actions">
                <button type="submit" className="dm-submit">
                  Request a demo
                  <svg width="20" height="20" viewBox="0 0 24 24" {...stroke} strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
