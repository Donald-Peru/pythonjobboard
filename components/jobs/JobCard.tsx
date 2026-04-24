export type Job = {
  title: string;
  company: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  salary: string;
  workType: "Remote" | "Onsite" | "Hybrid";
  datePosted: string;
  expiryDate: string;
  badge: "Editors Choice" | "Submitted" | null;
};

export default function JobCard({ job }: { job: Job }) {
  const workTypeColor: Record<string, string> = {
    Remote: "#4B8BBE",
    Onsite: "#FFD43B",
    Hybrid: "#56b06e",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&family=DM+Sans:wght@400;500;600&display=swap');

        .job-card {
          background: #16213e;
          border: 1.5px solid rgba(75,139,190,0.18);
		  width: 250px;
          border-radius: 4px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: border-color 0.2s, transform 0.2s;
          position: relative;
          font-family: 'DM Sans', sans-serif;
        }

        .job-card:hover {
          border-color: #fff;
          transform: translateY(-2px);
        }

        /* Badge */
        .job-card-badge {
          position: absolute;
          top: -1px;
          right: 5px;
          font-family: 'Source Code Pro', monospace;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 0.2rem 0.6rem;
          border-radius: 0 0 6px 6px;
        }

        .job-card-badge.editors {
          background: #fff;
          color: #1a1a2e;
        }

        .job-card-badge.submitted {
          background: rgba(75,139,190,0.2);
          color: #4B8BBE;
          border: 1px solid rgba(75,139,190,0.3);
          border-top: none;
        }

        /* Work type tag */
        .job-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .job-card-worktype {
          font-size: 0.72rem;
          font-weight: 600;
          font-family: 'Source Code Pro', monospace;
          padding: 0.2rem 0.6rem;
          border-radius: 20px;
          border: 1px solid;
        }

        /* Title */
        .job-card-title {
          font-size: 0.975rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.35;
          margin-top: 0.1rem;
        }

        /* Company */
        .job-card-company {
          font-size: 0.825rem;
          color: #4B8BBE;
          font-weight: 500;
        }

        /* Location */
        .job-card-location {
          font-size: 0.78rem;
          color: #7a8ab8;
          line-height: 1.4;
        }

        /* Salary */
        .job-card-salary {
          font-family: 'Source Code Pro', monospace;
          font-size: 0.875rem;
          font-weight: 600;
          color: #FFD43B;
        }

        /* Dates */
        .job-card-dates {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .job-card-date {
          font-size: 0.72rem;
          color: #4a5680;
        }

        .job-card-date span {
          color: #7a8ab8;
        }

        /* Divider */
        .job-card-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
        }

        /* CTA buttons */
        .job-card-actions {
          display: flex;
          gap: 0.5rem;
        }

        .job-card-btn {
          flex: 1;
          padding: 0.5rem 0;
          border-radius: 7px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          text-align: center;
          transition: all 0.2s;
        }

        .job-card-btn.apply {
          background: #FFD43B;
          color: #1a1a2e;
        }

        .job-card-btn.apply:hover {
          background: #ffe873;
        }

        .job-card-btn.view {
          background: transparent;
          color: #cdd6f4;
          border: 1.5px solid rgba(75,139,190,0.35);
        }

        .job-card-btn.view:hover {
          border-color: #4B8BBE;
          color: #4B8BBE;
        }
      `}</style>

      <div className="job-card">
        {/* Badge */}
        {job.badge && (
          <div className={`job-card-badge ${job.badge === "Editors Choice" ? "editors" : "submitted"}`}>
            {job.badge === "Editors Choice" ? "⭐ Editor's Choice" : "Submitted"}
          </div>
        )}

        {/* Work type */}
        <div className="job-card-top">
          <span
            className="job-card-worktype"
            style={{
              color: workTypeColor[job.workType],
              borderColor: workTypeColor[job.workType] + "55",
              background: workTypeColor[job.workType] + "15",
            }}
          >
            {job.workType}
          </span>
        </div>

        {/* Title & Company */}
        <div>
          <p className="job-card-title">{job.title}</p>
          <p className="job-card-company">{job.company}</p>
        </div>

        {/* Location */}
        <p className="job-card-location">
          📍 {job.address}, {job.city}, {job.state}, {job.country} — {job.postalCode}
        </p>

        {/* Salary */}
        <p className="job-card-salary">{job.salary}</p>

        {/* Dates */}
        <div className="job-card-dates">
          <p className="job-card-date">Posted: <span>{job.datePosted}</span></p>
          <p className="job-card-date">Expires: <span>{job.expiryDate}</span></p>
        </div>

        <div className="job-card-divider" />

        {/* CTAs */}
        <div className="job-card-actions">
          <button className="job-card-btn apply">Apply Now</button>
          <button className="job-card-btn view">View Details</button>
        </div>
      </div>
    </>
  );
}
