import { useState } from 'react';
import Logo from './Logo.jsx';
import { navLinks } from '../data.js';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header light-scope">
      <nav className="nav container" aria-label="Primary">
        <a href="#top" className="brand">
          <Logo />
          <span className="brand-name">
            Shineops <span>Ads Monitor</span>
          </span>
        </a>
        <div className="nav-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#demo" className="btn btn-primary">
            Request a demo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <button
          className="nav-burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div id="mobile-menu" className="mobile-menu">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
          ))}
          <a href="#demo" className="btn btn-primary" onClick={closeMenu}>Request a demo</a>
        </div>
      )}
    </header>
  );
}
