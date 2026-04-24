"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Who We Are", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Submit a Job", href: "/submit-job" },
    { label: "Publish a Guest Post", href: "/submit-a-guest-post" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');

        .pjb-header {
          background-color: color-mix(in srgb, #1a1a2e 50%, transparent);
          border-bottom: 3px solid #0000;
          font-family: 'DM Sans', sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 24px rgba(0,0,0,0.4);
        }

        .pjb-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .pjb-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
        }

        .pjb-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .pjb-logo-main {
          font-family: 'Source Code Pro', monospace;
          font-weight: 700;
          font-size: 1.15rem;
          color: #FFD43B;
          letter-spacing: -0.5px;
        }

        .pjb-logo-sub {
          font-size: 0.65rem;
          font-weight: 500;
          color: #4B8BBE;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 1px;
        }

        /* Nav */
        .pjb-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .pjb-nav a {
          text-decoration: none;
          color: #cdd6f4;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.45rem 0.9rem;
          border-radius: 6px;
          transition: all 0.2s ease;
          position: relative;
          white-space: nowrap;
        }

        .pjb-nav a:hover {
          color: #FFD43B;
          background: rgba(255, 212, 59, 0.08);
        }

        /* CTA link - Submit a Job */
        .pjb-nav a.pjb-cta {
          background: #FFD43B;
          color: #1a1a2e;
          font-weight: 600;
          padding: 0.45rem 1.1rem;
          margin-left: 0.5rem;
        }

        .pjb-nav a.pjb-cta:hover {
          background: #ffe873;
          color: #1a1a2e;
        }

        /* Hamburger */
        .pjb-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }

        .pjb-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #FFD43B;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .pjb-hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .pjb-hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .pjb-hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile menu */
        .pjb-mobile-menu {
          display: none;
          flex-direction: column;
          background: #16213e;
          border-top: 1px solid rgba(255,212,59,0.15);
          padding: 1rem 2rem 1.5rem;
          gap: 0.25rem;
        }

        .pjb-mobile-menu.open {
          display: flex;
        }

        .pjb-mobile-menu a {
          text-decoration: none;
          color: #cdd6f4;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.7rem 0.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s;
        }

        .pjb-mobile-menu a:hover {
          color: #FFD43B;
        }

        .pjb-mobile-menu a.pjb-cta {
          color: #FFD43B;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .pjb-nav { display: none; }
          .pjb-hamburger { display: flex; }
        }
      `}</style>

      <header className="pjb-header">
        <div className="pjb-inner">
          {/* Logo */}
          <a href="/" className="pjb-logo">
            <div className="pjb-logo-icon">
              {/* Python-inspired two-snake logo */}
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4C13 4 10 6.5 10 10v3h8v1H8C5 14 3 16 3 20s2 6 5 6h2v-3.5c0-2 1.5-3.5 3.5-3.5H18c3.5 0 6-2 6-5.5V10c0-3.5-2.5-6-6-6z" fill="#4B8BBE"/>
                <circle cx="14.5" cy="9.5" r="1.5" fill="#fff"/>
                <path d="M18 32c5 0 8-2.5 8-6v-3h-8v-1h10c3 0 5-2 5-6s-2-6-5-6h-2v3.5c0 2-1.5 3.5-3.5 3.5H18c-3.5 0-6 2-6 5.5V26c0 3.5 2.5 6 6 6z" fill="#FFD43B"/>
                <circle cx="21.5" cy="26.5" r="1.5" fill="#1a1a2e"/>
              </svg>
            </div>
            <div className="pjb-logo-text">
              <span className="pjb-logo-main">Python Jobs</span>
              <span className="pjb-logo-sub">Job Board</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="pjb-nav">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={i === 2 ? "pjb-cta" : ""}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className={`pjb-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`pjb-mobile-menu ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={i === 2 ? "pjb-cta" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>
    </>
  );
}
