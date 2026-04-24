export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');

        .hero {
          .hero-background {
  background-color: #000000; /* Pure black fallback */
  background-image: radial-gradient(circle at center, #2b2b2b 0%, #000000 70%);
  background-size: cover;
  background-position: center;
  /* Optional: Add height for the hero */
  height: 100vh;
}
          padding: 5rem 2rem 4rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(75,139,190,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-eyebrow {
          font-family: 'Source Code Pro', monospace;
          font-size: 0.85rem;
          color: #4B8BBE;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        .hero-heading {
          font-family: 'Source Code Pro', monospace;
          font-size: clamp(2rem, 5vw, 3.25rem);
          font-weight: 700;
          color: #c54737;
          margin-bottom: 1.25rem;
          line-height: 1.15;
        }

        .hero-heading span {
          color: #ffffff;
        }

        .hero-para {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.05rem;
          color: #7a8ab8;
          max-width: 520px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
        }

        /* Search bar */
        .hero-search {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #16213e;
          border: 1.5px solid rgba(75,139,190,0.3);
          border-radius: 12px;
          padding: 0.6rem 0.6rem 0.6rem 1rem;
          max-width: 780px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .hero-search-field {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 140px;
        }

        .hero-search-field label {
          font-family: 'Source Code Pro', monospace;
          font-size: 0.6rem;
          color: #4B8BBE;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        .hero-search-field select,
        .hero-search-field input {
          background: transparent;
          border: none;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: #cdd6f4;
          padding: 0;
          width: 100%;
        }

        .hero-search-field select option {
          background: #16213e;
          color: #cdd6f4;
        }

        .hero-search-divider {
          width: 1px;
          height: 36px;
          background: rgba(75,139,190,0.2);
          flex-shrink: 0;
        }

        .hero-search-btn {
          background: #fff;
          color: #1a1a2e;
          border: none;
          border-radius: 8px;
          padding: 0.7rem 1.4rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.875rem;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .hero-search-btn:hover {
          background: #ffe873;
        }

        @media (max-width: 600px) {
          .hero-search {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-search-divider { display: none; }

          .hero-search-field {
            border-bottom: 1px solid rgba(75,139,190,0.15);
            padding-bottom: 0.5rem;
          }

          .hero-search-btn { width: 100%; text-align: center; }
        }
      `}</style>

      <section className="hero">
        <p className="hero-eyebrow">// python job board</p>
        <h1 className="hero-heading">
          <span>print(</span>"You Are Hired!"<span>)</span>
        </h1>
        <p className="hero-para">
          This is your place to get 50+ Python Developer Jobs every day.
          Find remote, onsite and hybrid roles from top companies worldwide.
        </p>

        {/* Search bar */}
        <div className="hero-search">
          <div className="hero-search-field">
            <label>Country</label>
            <select defaultValue="">
              <option value="" disabled>Select country</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Germany</option>
              <option>India</option>
              <option>Poland</option>
              <option>Australia</option>
            </select>
          </div>

          <div className="hero-search-divider" />

          <div className="hero-search-field">
            <label>Zoom In</label>
            <input type="text" placeholder="State / Region" />
          </div>

          <div className="hero-search-divider" />

          <div className="hero-search-field">
            <label>Pin Point</label>
            <input type="text" placeholder="City or Postcode" />
          </div>

          <button className="hero-search-btn">📍 Show Me Nearby</button>
        </div>
      </section>
    </>
  );
}
