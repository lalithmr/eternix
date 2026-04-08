"use client";

import { useState } from "react";
import CrownLogo from "./crown-logo";

export default function NavBar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="topbar-wrapper">
      <nav className="topbar">
        <a className="brand-mini" href="#hero">
          <CrownLogo className="brand-mark" />
          <span>ETERNIX</span>
        </a>
        <div className="nav-menu">
          <div className={`nav-links ${isMenuOpen ? "mobile-open" : ""}`}>
            <a className="nav-link" href="#hero" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a className="nav-link" href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a className="nav-link" href="#programs" onClick={() => setIsMenuOpen(false)}>
              Programs
            </a>
            <a className="nav-link" href="#puzzle" onClick={() => setIsMenuOpen(false)}>
              Puzzle
            </a>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
    </div>
  );
}
