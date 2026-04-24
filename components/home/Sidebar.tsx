export default function Sidebar() {
  const jobCategories = [
    { label: "Remote Python Jobs", href: "/jobs/remote" },
    { label: "Cyber Security Jobs", href: "/jobs/cyber-security" },
    { label: "AI and ML Jobs", href: "/jobs/ai-ml" },
    { label: "Data Science Jobs", href: "/jobs/data-science" },
    { label: "Backend Developer Jobs", href: "/jobs/backend" },
    { label: "Django Developer Jobs", href: "/jobs/django" },
    { label: "FastAPI Developer Jobs", href: "/jobs/fastapi" },
    { label: "DevOps & Python Jobs", href: "/jobs/devops" },
    { label: "Automation Engineer Jobs", href: "/jobs/automation" },
    { label: "Cloud Engineer Jobs", href: "/jobs/cloud" },
  ];

  const locations = [
    { label: "Python Jobs in USA", href: "/job/usa" },
    { label: "Python Jobs in England", href: "/job/england" },
    { label: "Python Jobs in Canada", href: "/job/canada" },
    { label: "Python Jobs in India", href: "/job/india" },
    { label: "Python Jobs in Poland", href: "/job/poland" },
    { label: "Python Jobs in Germany", href: "/job/germany" },
    { label: "Python Jobs in Australia", href: "/job/australia" },
    { label: "Python Jobs in Netherlands", href: "/job/netherlands" },
    { label: "Python Jobs in France", href: "/job/france" },
    { label: "Python Jobs in Portugal", href: "/job/portugal" },
    { label: "Python Jobs in Spain", href: "/job/spain" },
    { label: "Python Jobs in Brazil", href: "/job/brazil" },
    { label: "Python Jobs in Singapore", href: "/job/singapore" },
    { label: "Python Jobs in UAE", href: "/job/uae" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }

        .sidebar-block {
          background-color: color-mix(in srgb, #1a1a2e 50%, transparent);
          border: 1.5px solid rgba(75,139,190,0.18);
          border-radius: 12px;
          overflow: hidden;
        }

        .sidebar-block-header {
          background: #1a1a2e;
          border-bottom: 2px solid #C0C0C0;
          padding: 0.85rem 1.1rem;
        }

        .sidebar-block-header h3 {
          font-family: 'Source Code Pro', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .sidebar-block-list {
          list-style: none;
          padding: 0.5rem 0;
        }

        .sidebar-block-list li a {
          display: block;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.845rem;
          color: #7a8ab8;
          padding: 0.5rem 1.1rem;
          transition: all 0.18s ease;
          border-left: 2px solid transparent;
        }

        .sidebar-block-list li a:hover {
          color: #FFD43B;
          background: rgba(255,212,59,0.05);
          border-left-color: #FFD43B;
        }
      `}</style>

      <aside className="sidebar">
        {/* Job Categories */}
        <div className="sidebar-block">
          <div className="sidebar-block-header">
            <h3>Browse by Category</h3>
          </div>
          <ul className="sidebar-block-list">
            {jobCategories.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div className="sidebar-block">
          <div className="sidebar-block-header">
            <h3>Locations We Cover</h3>
          </div>
          <ul className="sidebar-block-list">
            {locations.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
