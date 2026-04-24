"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "Contact Us", href: "/contact" },
    ],
    Jobs: [
      { label: "Browse All Jobs", href: "/jobs" },
      { label: "Jobs in USA", href: "/job/usa" },
      { label: "Submit a Job", href: "/submit-job" },
    ],
    Resources: [
      { label: "Publish a Guest Post", href: "/guest-post" },
      { label: "Python Blog", href: "/blog" },
      { label: "Python Docs", href: "https://docs.python.org", external: true },
    ],
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');

        .pjb-footer {
          background-color: #1a1a2e;
          border-top: 3px solid #FFD43B;
          font-family: 'DM Sans', sans-serif;
          color: #cdd6f4;
        }

        .pjb-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3.5rem 2rem 2rem;
        }

        .pjb-footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 2.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        /* Brand column */
        .pjb-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .pjb-footer-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
        }

        .pjb-footer-logo-icon {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
        }

        .pjb-footer-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .pjb-footer-logo-main {
          font-family: 'Source Code Pro', monospace;
          font-weight: 700;
          font-size: 1.1rem;
          color: #FFD43B;
          letter-spacing: -0.5px;
        }

        .pjb-footer-logo-sub {
          font-size: 0.62rem;
          font-weight: 600;
          color: #4B8BBE;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-top: 2px;
        }

        .pjb-footer-tagline {
          font-size: 0.875rem;
          color: #7a8ab8;
          line-height: 1.6;
          max-width: 260px;
        }

        .pjb-footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(75, 139, 190, 0.12);
          border: 1px solid rgba(75, 139, 190, 0.25);
          border-radius: 20px;
          padding: 0.3rem 0.75rem;
          font-size: 0.75rem;
          color: #4B8BBE;
          font-family: 'Source Code Pro', monospace;
          width: fit-content;
        }

        .pjb-footer-badge::before {
          content: '';
          width: 7px;
          height: 7px;
          background: #4B8BBE;
          border-radius: 50%;
          display: inline-block;
        }

        /* Link columns */
        .pjb-footer-col h4 {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #FFD43B;
          margin-bottom: 1.1rem;
        }

        .pjb-footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .pjb-footer-col ul li a {
          text-decoration: none;
          color: #7a8ab8;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }

        .pjb-footer-col ul li a:hover {
          color: #FFD43B;
        }

        /* Bottom bar */
        .pjb-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.75rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .pjb-footer-copy {
          font-size: 0.8rem;
          color: #4a5680;
        }

        .pjb-footer-copy span {
          color: #FFD43B;
          font-family: 'Source Code Pro', monospace;
        }

        .pjb-footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .pjb-footer-legal a {
          text-decoration: none;
          color: #4a5680;
          font-size: 0.8rem;
          transition: color 0.2s;
        }

        .pjb-footer-legal a:hover {
          color: #cdd6f4;
        }

        @media (max-width: 900px) {
          .pjb-footer-grid {
            grid-template-columns: 1fr 1fr;
          }

          .pjb-footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 540px) {
          .pjb-footer-grid {
            grid-template-columns: 1fr;
          }

          .pjb-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer className="pjb-footer">
        <div className="pjb-footer-inner">
          <div className="pjb-footer-grid">

            {/* Brand column */}
            <div className="pjb-footer-brand">
              <a href="/" className="pjb-footer-logo">
                <div className="pjb-footer-logo-icon">
                  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 4C13 4 10 6.5 10 10v3h8v1H8C5 14 3 16 3 20s2 6 5 6h2v-3.5c0-2 1.5-3.5 3.5-3.5H18c3.5 0 6-2 6-5.5V10c0-3.5-2.5-6-6-6z" fill="#4B8BBE"/>
                    <circle cx="14.5" cy="9.5" r="1.5" fill="#fff"/>
                    <path d="M18 32c5 0 8-2.5 8-6v-3h-8v-1h10c3 0 5-2 5-6s-2-6-5-6h-2v3.5c0 2-1.5 3.5-3.5 3.5H18c-3.5 0-6 2-6 5.5V26c0 3.5 2.5 6 6 6z" fill="#FFD43B"/>
                    <circle cx="21.5" cy="26.5" r="1.5" fill="#1a1a2e"/>
                  </svg>
                </div>
                <div className="pjb-footer-logo-text">
                  <span className="pjb-footer-logo-main">Python Jobs</span>
                  <span className="pjb-footer-logo-sub">Job Board</span>
                </div>
              </a>
              <p className="pjb-footer-tagline">
                The #1 job board for Python developers. Find your next role or hire top Python talent.
              </p>
              <div className="pjb-footer-badge">python 3.x friendly</div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div className="pjb-footer-col" key={title}>
                <h4>{title}</h4>
                <ul>
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pjb-footer-bottom">
            <p className="pjb-footer-copy">
              © {currentYear} <span>Python Job Board</span>. All rights reserved.
            </p>
            <nav className="pjb-footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
              <a href="/sitemap.xml">Sitemap</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
