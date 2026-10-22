export function MetaLogo({ size = 30 }) {
  return (
    <svg width={size} height={size * 0.62} viewBox="0 0 40 25" fill="none" aria-hidden="true">
      <path
        d="M3 15.5C3 9 6 3.5 10 3.5c4.2 0 7.2 5.6 10 10.5 2.9 5 5.4 8 8.4 8 2.6 0 3.8-2.4 3.8-6 0-6.3-3-12.5-7.4-12.5-3.6 0-6.4 4.2-9.6 10-2.6 4.8-4.8 8.5-8 8.5-2.6 0-4.2-2.6-4.2-6.5z"
        stroke="#0866FF" strokeWidth="3.2" strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramLogo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0">
          <stop offset="0" stopColor="#FEC053" />
          <stop offset="0.35" stopColor="#F2203E" />
          <stop offset="0.7" stopColor="#B729A8" />
          <stop offset="1" stopColor="#5342D6" />
        </linearGradient>
      </defs>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="url(#ig-grad)" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="4.3" stroke="url(#ig-grad)" strokeWidth="2.2" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="url(#ig-grad)" />
    </svg>
  );
}

export function FacebookLogo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path d="M13.4 23v-8.3h2.8l.4-3.2h-3.2V9.4c0-.9.3-1.6 1.6-1.6h1.7V5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.3v3.2h2.8V23z" fill="#fff" />
    </svg>
  );
}

export function WhatsAppLogo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.2 20.8l1.3-4.4A9 9 0 1 1 8 19.7z" stroke="#25D366" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M9 7.6c.3 0 .6 0 .8.5l.8 1.8c.1.3 0 .5-.1.7l-.6.7c.6 1.2 1.7 2.3 3 2.9l.7-.7c.2-.2.4-.2.7-.1l1.8.8c.4.2.4.5.4.8 0 1-.9 1.9-2 1.9-3.2-.2-6.9-3.7-7.1-7.1 0-1.1.8-2.2 1.6-2.2z"
        fill="#25D366"
      />
    </svg>
  );
}
