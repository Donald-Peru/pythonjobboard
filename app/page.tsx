import HeroSection from "@/components/home/HeroSection";
import JobCard, { Job } from "@/components/jobs/JobCard";
import Sidebar from "@/components/home/Sidebar";

const sampleJobs: Job[] = [
  {
    title: "Senior Python Developer",
    company: "Acme Tech Ltd.",
    address: "123 Silicon Street",
    city: "Austin",
    state: "Texas",
    country: "USA",
    postalCode: "TX 78701",
    salary: "$120,000 – $150,000 / yr",
    workType: "Remote",
    datePosted: "22 Apr 2026",
    expiryDate: "22 May 2026",
    badge: "Editors Choice",
  },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

        .home-body {
          background: #0f0f1a;
          min-height: 100vh;
        }

        .home-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 2rem;
          align-items: start;
        }

        .home-jobs {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .home-jobs-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .home-jobs-title {
          font-family: 'Source Code Pro', monospace;
          font-size: 1rem;
          font-weight: 700;
          color: #FFD43B;
          letter-spacing: 1px;
        }

        .home-jobs-count {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: #4a5680;
        }

        .home-jobs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .home-empty-state {
          padding: 1.5rem;
          border: 1px dashed rgba(255, 212, 59, 0.4);
          border-radius: 12px;
          color: #cbd5e1;
          font-family: 'DM Sans', sans-serif;
          background: rgba(255, 255, 255, 0.02);
        }

        .home-publish-cta {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border: 1.5px solid rgba(255,212,59,0.25);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .home-publish-cta-text h2 {
          font-family: 'Source Code Pro', monospace;
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.4rem;
        }

        .home-publish-cta-text p {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          color: #7a8ab8;
        }

        .home-publish-cta-btn {
          background: #FFD43B;
          color: #1a1a2e;
          border: none;
          border-radius: 8px;
          padding: 0.75rem 1.75rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .home-publish-cta-btn:hover {
          background: #ffe873;
        }

        @media (max-width: 1024px) {
          .home-jobs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .home-content {
            grid-template-columns: 1fr;
          }

          .home-jobs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="home-body">
        <HeroSection />

        <div className="home-content">
          <div className="home-jobs">
            <div className="home-jobs-header">
              <h2 className="home-jobs-title">// Latest Python Jobs</h2>
              <span className="home-jobs-count">
                Showing {sampleJobs.length} of 50+ jobs today
              </span>
            </div>

            {sampleJobs.length > 0 ? (
              <div className="home-jobs-grid">
                {sampleJobs.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            ) : (
              <div className="home-empty-state">
                No jobs are available right now.
              </div>
            )}

            <div className="home-publish-cta">
              <div className="home-publish-cta-text">
                <h2>Publish a Python Job</h2>
                <p>Reach thousands of Python developers actively looking for their next role.</p>
              </div>
              <button className="home-publish-cta-btn">Post a Job →</button>
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </>
  );
}