export default function BeforeAfter() {
  return (
    <section className="before-after" aria-label="Before and after Shineops Ads Monitor">
      <div className="ba-grid">
        <article className="ba-card before">
          <div className="ba-copy">
            <span className="ba-tag">BEFORE</span>
            <h2>Spreadsheets. Client logins. Missed budget caps.</h2>
            <p>Manual CPL math every morning, and you hear about an empty ad account when the client calls.</p>
          </div>
          <img
            className="ba-art"
            src="/image1.png"
            width="1672"
            height="941"
            loading="lazy"
            alt="A stressed account manager surrounded by spreadsheets, client logins and a budget cap warning"
          />
        </article>

        <svg className="ba-arrow" width="120" height="70" viewBox="0 0 120 70" aria-hidden="true">
          <defs>
            <linearGradient id="ba-arrow-fill" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="var(--accent)" stopOpacity="0" />
              <stop offset="0.55" stopColor="var(--accent)" stopOpacity="0.75" />
              <stop offset="1" stopColor="var(--accent)" />
            </linearGradient>
          </defs>
          <path d="M2 60C26 30 52 22 84 26V10l34 25-34 25V42C56 38 30 44 2 60z" fill="url(#ba-arrow-fill)" />
        </svg>

        <article className="ba-card after">
          <div className="ba-copy">
            <span className="ba-tag">AFTER</span>
            <h2>One login. Every client's account, budget and CPL.</h2>
            <p>Synced automatically from Meta, with alerts before a client calls you.</p>
          </div>
          <img
            className="ba-art"
            src="/image.png"
            width="1774"
            height="887"
            loading="lazy"
            alt="The Ads Monitor dashboard on a laptop, synced from Meta, with a budget-at-80% alert"
          />
        </article>
      </div>
    </section>
  );
}
