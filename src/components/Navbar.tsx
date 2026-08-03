import { useState } from 'react';
import { navLinks } from '../data/portfolio';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-content">
        <h1 className="logo">Ayisha Baterina</h1>
        <div className="nav-right">
          <nav className={menuOpen ? 'open' : ''}>
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            ))}
          </nav>
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle dark mode">
            <div className="theme-toggle-circle">
              <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
            </div>
          </button>
          <button
            className={`menu-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="menu-bar" />
            <span className="menu-bar" />
            <span className="menu-bar" />
          </button>
        </div>
      </div>
    </header>
  );
}
