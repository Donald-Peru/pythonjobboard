"use client";
import { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Company = {
  id: string;
  name: string;
  legalName: string;
  url: string;
  description: string;
  logo: string;
  image: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  telephone: string;
  email: string;
  contactType: string;
  areaServed: string;
  availableLanguage: string;
  sameAs: string;
  taxID: string;
  vatID: string;
  duns: string;
  leiCode: string;
  iso6523Code: string;
  foundingDate: string;
  foundingLocation: string;
  numberOfEmployees: string;
  parentOrganization: string;
  subOrganization: string;
  award: string;
};

type Job = {
  id: string;
  title: string;
  description: string;
  identifier: string;
  jobId: string;
  slug: string;
  datePosted: string;
  validThrough: string;
  dateModified: string;
  hiringOrgName: string;
  hiringOrgUrl: string;
  hiringOrgLogo: string;
  hiringOrgSameAs: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  employmentType: string;
  workHours: string;
  jobStartDate: string;
  jobLocationType: string;
  applicantLocationRequirements: string;
  salaryValue: string;
  salaryCurrency: string;
  salaryUnitText: string;
  applicationDeadline: string;
  applicationContact: string;
  directApply: string;
  applyUrl: string;
  educationRequirements: string;
  experienceRequirements: string;
  qualifications: string;
  skills: string;
  responsibilities: string;
  incentives: string;
  incentiveCompensation: string;
  benefits: string;
  industry: string;
  occupationalCategory: string;
  jobBenefits: string;
  specialCommitments: string;
  totalJobOpenings: string;
  employmentUnit: string;
  estimatedSalary: string;
  category: string;
  seniority: string;
  isActive: boolean;
  whoShouldApply: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  joined: string;
};

// ─── Empty states ─────────────────────────────────────────────────────────────

const emptyCompany: Omit<Company, "id"> = {
  name: "", legalName: "", url: "", description: "", logo: "", image: "",
  streetAddress: "", addressLocality: "", addressRegion: "", postalCode: "",
  addressCountry: "", telephone: "", email: "", contactType: "", areaServed: "",
  availableLanguage: "", sameAs: "", taxID: "", vatID: "", duns: "", leiCode: "",
  iso6523Code: "", foundingDate: "", foundingLocation: "", numberOfEmployees: "",
  parentOrganization: "", subOrganization: "", award: "",
};

const emptyJob: Omit<Job, "id"> = {
  title: "", description: "", identifier: "", jobId: "", slug: "",
  datePosted: "", validThrough: "", dateModified: "", hiringOrgName: "",
  hiringOrgUrl: "", hiringOrgLogo: "", hiringOrgSameAs: "", streetAddress: "",
  addressLocality: "", addressRegion: "", postalCode: "", addressCountry: "",
  employmentType: "", workHours: "", jobStartDate: "", jobLocationType: "",
  applicantLocationRequirements: "", salaryValue: "", salaryCurrency: "",
  salaryUnitText: "", applicationDeadline: "", applicationContact: "",
  directApply: "", applyUrl: "", educationRequirements: "", experienceRequirements: "",
  qualifications: "", skills: "", responsibilities: "", incentives: "",
  incentiveCompensation: "", benefits: "", industry: "", occupationalCategory: "",
  jobBenefits: "", specialCommitments: "", totalJobOpenings: "", employmentUnit: "",
  estimatedSalary: "", category: "", seniority: "", isActive: true, whoShouldApply: "",
};

const emptyUser = { name: "", email: "", role: "Viewer" };
const userRoles = ["Admin", "Editor", "Moderator", "Viewer"];

const categoryOptions = [
  "Django", "FastAPI", "Flask", "Machine Learning", "Data Science",
  "DevOps", "Automation", "Web Scraping", "Data Engineering", "AI/LLM",
];

const seniorityOptions = ["Junior", "Mid", "Senior", "Lead", "Staff", "Principal"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toLabel(key: string) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()).trim();
}

function generateSlug(title: string, company: string, city: string): string {
  return `${title} ${company} ${city}`
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

const companyTextareas = ["description", "award", "sameAs", "subOrganization"];
const jobTextareas = [
  "description", "qualifications", "skills", "responsibilities",
  "benefits", "incentives", "incentiveCompensation", "jobBenefits",
  "educationRequirements", "experienceRequirements", "whoShouldApply",
];

const jobSkipAutoRender = ["category", "seniority", "isActive", "slug"];

// ─── Field component ──────────────────────────────────────────────────────────

function Field({
  label, name, value, onChange, textarea = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
}) {
  return (
    <div className="adm-field">
      <label className="adm-label">{label}</label>
      {textarea ? (
        <textarea className="adm-input adm-textarea" name={name} value={value} onChange={onChange} rows={3} />
      ) : (
        <input className="adm-input" name={name} value={value} onChange={onChange} />
      )}
    </div>
  );
}

// ─── Manage Companies ─────────────────────────────────────────────────────────

function ManageCompanies() {
  const [subTab, setSubTab] = useState<"add" | "list">("add");
  const [form, setForm] = useState<Omit<Company, "id">>(emptyCompany);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/companies")
      .then((r) => r.json())
      .then((data) => setCompanies(data))
      .catch(() => {});
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name) return alert("Company name is required.");
    setLoading(true);
    try {
      if (editId) {
        const res = await fetch("/api/companies", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: Number(editId), ...form }),
        });
        const updated = await res.json();
        setCompanies(companies.map((c) => (c.id === editId ? updated : c)));
        setEditId(null);
      } else {
        const res = await fetch("/api/companies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const created = await res.json();
        setCompanies([created, ...companies]);
      }
      setForm(emptyCompany);
      setSubTab("list");
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const handleEdit = (c: Company) => {
    const { id, ...rest } = c;
    setForm(rest);
    setEditId(id);
    setSubTab("add");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this company?")) return;
    await fetch("/api/companies", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: Number(id) }),
    });
    setCompanies(companies.filter((c) => c.id !== id));
  };

  return (
    <div className="adm-section">
      <div className="adm-subtabs">
        <button className={`adm-subtab ${subTab === "add" ? "active" : ""}`} onClick={() => setSubTab("add")}>
          {editId ? "Edit Company" : "Add Company"}
        </button>
        <button className={`adm-subtab ${subTab === "list" ? "active" : ""}`} onClick={() => setSubTab("list")}>
          Edit / Remove a Company
        </button>
      </div>

      {subTab === "add" && (
        <div className="adm-form-wrap">
          <h3 className="adm-form-title">{editId ? "Edit Company" : "Add a New Company"}</h3>
          <div className="adm-form-grid">
            {(Object.keys(emptyCompany) as (keyof typeof emptyCompany)[]).map((key) => (
              <Field key={key} label={toLabel(key)} name={key} value={form[key]} onChange={handleChange} textarea={companyTextareas.includes(key)} />
            ))}
          </div>
          <div className="adm-form-actions">
            <button className="adm-btn-primary" onClick={handleSubmit} disabled={loading}>
              {loading ? "Saving..." : editId ? "Save Changes" : "Add Company"}
            </button>
            {editId && <button className="adm-btn-ghost" onClick={() => { setEditId(null); setForm(emptyCompany); }}>Cancel</button>}
          </div>
        </div>
      )}

      {subTab === "list" && (
        <div className="adm-table-wrap">
          <h3 className="adm-form-title">All Companies ({companies.length})</h3>
          {companies.length === 0 ? (
            <p className="adm-empty">No companies added yet.</p>
          ) : (
            <div className="adm-table-scroll">
              <table className="adm-table">
                <thead>
                  <tr><th>Name</th><th>Legal Name</th><th>URL</th><th>Country</th><th>Email</th><th>Founded</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  {companies.map((c) => (
                    <tr key={String(c.id)}>
                      <td>{c.name}</td><td>{c.legalName}</td>
                      <td><a href={c.url} target="_blank" rel="noreferrer">{c.url}</a></td>
                      <td>{c.addressCountry}</td><td>{c.email}</td><td>{c.foundingDate}</td>
                      <td>
                        <div className="adm-row-actions">
                          <button className="adm-btn-edit" onClick={() => handleEdit(c)}>Edit</button>
                          <button className="adm-btn-delete" onClick={() => handleDelete(c.id)}>Remove</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Manage Jobs ──────────────────────────────────────────────────────────────

function ManageJobs() {
  const [subTab, setSubTab] = useState<"add" | "list">("add");
  const [form, setForm] = useState<Omit<Job, "id">>(emptyJob);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/jobs")
      .then((r) => r.json())
      .then((data) => setJobs(data))
      .catch(() => {});
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    if (["title", "hiringOrgName", "addressLocality"].includes(e.target.name)) {
      updated.slug = generateSlug(
        e.target.name === "title" ? e.target.value : form.title,
        e.target.name === "hiringOrgName" ? e.target.value : form.hiringOrgName,
        e.target.name === "addressLocality" ? e.target.value : form.addressLocality,
      );
    }
    setForm(updated);
  };

  const handleSubmit = async () => {
    if (!form.title) return alert("Job title is required.");
    if (!form.slug) return alert("Slug is required.");
    setLoading(true);
    try {
      if (editId) {
        const res = await fetch("/api/jobs", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: Number(editId), ...form }),
        });
        const updated = await res.json();
        setJobs(jobs.map((j) => (j.id === editId ? updated : j)));
        setEditId(null);
      } else {
        const res = await fetch("/api/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const created = await res.json();
        setJobs([created, ...jobs]);
      }
      setForm(emptyJob);
      setSubTab("list");
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const handleEdit = (j: Job) => {
    const { id, ...rest } = j;
    setForm(rest);
    setEditId(id);
    setSubTab("add");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this job?")) return;
    await fetch("/api/jobs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: Number(id) }),
    });
    setJobs(jobs.filter((j) => j.id !== id));
  };

  return (
    <div className="adm-section">
      <div className="adm-subtabs">
        <button className={`adm-subtab ${subTab === "add" ? "active" : ""}`} onClick={() => setSubTab("add")}>
          {editId ? "Edit Job" : "Add a Job"}
        </button>
        <button className={`adm-subtab ${subTab === "list" ? "active" : ""}`} onClick={() => setSubTab("list")}>
          Edit / Remove a Job
        </button>
      </div>

      {subTab === "add" && (
        <div className="adm-form-wrap">
          <h3 className="adm-form-title">{editId ? "Edit Job" : "Add a New Job"}</h3>

          {/* Auto-generated slug preview */}
          <div className="adm-field" style={{ marginBottom: "1rem" }}>
            <label className="adm-label">Auto-generated Slug</label>
            <input className="adm-input" value={form.slug} readOnly style={{ opacity: 0.6 }} />
          </div>

          <div className="adm-form-grid">

            {/* Category — datalist */}
            <div className="adm-field">
              <label className="adm-label">Category</label>
              <input
                className="adm-input"
                name="category"
                value={form.category}
                onChange={handleChange}
                list="category-options"
                placeholder="Select or type..."
              />
              <datalist id="category-options">
                {categoryOptions.map((o) => <option key={o} value={o} />)}
              </datalist>
            </div>

            {/* Seniority — datalist */}
            <div className="adm-field">
              <label className="adm-label">Seniority</label>
              <input
                className="adm-input"
                name="seniority"
                value={form.seniority}
                onChange={handleChange}
                list="seniority-options"
                placeholder="Select or type..."
              />
              <datalist id="seniority-options">
                {seniorityOptions.map((o) => <option key={o} value={o} />)}
              </datalist>
            </div>

            {/* isActive checkbox */}
            <div className="adm-field" style={{ justifyContent: "center" }}>
              <label className="adm-label">Active Listing</label>
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                style={{ width: 20, height: 20, marginTop: 8 }}
              />
            </div>

            {/* All other fields */}
            {(Object.keys(emptyJob) as (keyof typeof emptyJob)[])
              .filter((key) => !jobSkipAutoRender.includes(key))
              .map((key) => (
                <Field
                  key={key}
                  label={toLabel(key)}
                  name={key}
                  value={String(form[key])}
                  onChange={handleChange}
                  textarea={jobTextareas.includes(key)}
                />
              ))}
          </div>

          <div className="adm-form-actions">
            <button className="adm-btn-primary" onClick={handleSubmit} disabled={loading}>
              {loading ? "Saving..." : editId ? "Save Changes" : "Add Job"}
            </button>
            {editId && <button className="adm-btn-ghost" onClick={() => { setEditId(null); setForm(emptyJob); }}>Cancel</button>}
          </div>
        </div>
      )}

      {subTab === "list" && (
        <div className="adm-table-wrap">
          <h3 className="adm-form-title">All Jobs ({jobs.length})</h3>
          {jobs.length === 0 ? (
            <p className="adm-empty">No jobs added yet.</p>
          ) : (
            <div className="adm-table-scroll">
              <table className="adm-table">
                <thead>
                  <tr><th>Title</th><th>Company</th><th>Location</th><th>Category</th><th>Seniority</th><th>Type</th><th>Posted</th><th>Active</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  {jobs.map((j) => (
                    <tr key={String(j.id)}>
                      <td>{j.title}</td>
                      <td>{j.hiringOrgName}</td>
                      <td>{j.addressLocality}, {j.addressCountry}</td>
                      <td>{j.category}</td>
                      <td>{j.seniority}</td>
                      <td>{j.employmentType}</td>
                      <td>{j.datePosted}</td>
                      <td>{j.isActive ? "✅" : "❌"}</td>
                      <td>
                        <div className="adm-row-actions">
                          <button className="adm-btn-edit" onClick={() => handleEdit(j)}>Edit</button>
                          <button className="adm-btn-delete" onClick={() => handleDelete(j.id)}>Remove</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Manage Users ─────────────────────────────────────────────────────────────

function ManageUsers() {
  const [subTab, setSubTab] = useState<"add" | "list">("add");
  const [form, setForm] = useState(emptyUser);
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "Admin User", email: "admin@pythonjobs.com", role: "Admin", joined: "01 Jan 2026" },
  ]);
  const [editId, setEditId] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name) return alert("Name is required.");
    if (!form.email) return alert("Email is required.");
    if (editId) {
      setUsers(users.map((u) => (u.id === editId ? { ...u, ...form } : u)));
      setEditId(null);
    } else {
      setUsers([...users, {
        id: Date.now().toString(),
        ...form,
        joined: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
      }]);
    }
    setForm(emptyUser);
    setSubTab("list");
  };

  const handleEdit = (u: User) => {
    setForm({ name: u.name, email: u.email, role: u.role });
    setEditId(u.id);
    setSubTab("add");
  };

  const handleDelete = (id: string) => {
    if (confirm("Remove this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="adm-section">
      <div className="adm-subtabs">
        <button className={`adm-subtab ${subTab === "add" ? "active" : ""}`} onClick={() => setSubTab("add")}>
          {editId ? "Edit User" : "Add User"}
        </button>
        <button className={`adm-subtab ${subTab === "list" ? "active" : ""}`} onClick={() => setSubTab("list")}>
          Edit / Remove a User
        </button>
      </div>

      {subTab === "add" && (
        <div className="adm-form-wrap">
          <h3 className="adm-form-title">{editId ? "Edit User" : "Add a New User"}</h3>
          <div className="adm-form-grid">
            <div className="adm-field">
              <label className="adm-label">Name</label>
              <input className="adm-input" name="name" value={form.name} onChange={handleChange} />
            </div>
            <div className="adm-field">
              <label className="adm-label">Email</label>
              <input className="adm-input" name="email" type="email" value={form.email} onChange={handleChange} />
            </div>
            <div className="adm-field">
              <label className="adm-label">Role</label>
              <select className="adm-input" name="role" value={form.role} onChange={handleChange}>
                {userRoles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="adm-form-actions">
            <button className="adm-btn-primary" onClick={handleSubmit}>
              {editId ? "Save Changes" : "Add User"}
            </button>
            {editId && (
              <button className="adm-btn-ghost" onClick={() => { setEditId(null); setForm(emptyUser); }}>
                Cancel
              </button>
            )}
          </div>
        </div>
      )}

      {subTab === "list" && (
        <div className="adm-table-wrap">
          <h3 className="adm-form-title">All Users ({users.length})</h3>
          <div className="adm-table-scroll">
            <table className="adm-table">
              <thead>
                <tr><th>Name</th><th>Email</th><th>Role</th><th>Joined</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td><span className="adm-role-badge">{u.role}</span></td>
                    <td>{u.joined}</td>
                    <td>
                      <div className="adm-row-actions">
                        <button className="adm-btn-edit" onClick={() => handleEdit(u)}>Edit</button>
                        <button className="adm-btn-delete" onClick={() => handleDelete(u.id)}>Remove</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Dashboard Page ──────────────────────────────────────────────────────

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"companies" | "jobs" | "users">("companies");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
        .adm-page { background: #0f0f1a; min-height: 100vh; font-family: 'DM Sans', sans-serif; }
        .adm-wrapper { max-width: 1300px; margin: 0 auto; padding: 2.5rem 2rem; }
        .adm-page-title { font-family: 'Source Code Pro', monospace; font-size: 1.4rem; font-weight: 700; color: #FFD43B; margin-bottom: 2rem; }
        .adm-tabs { display: flex; gap: 0.5rem; border-bottom: 2px solid rgba(75,139,190,0.2); margin-bottom: 2rem; }
        .adm-tab { font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600; color: #7a8ab8; background: none; border: none; padding: 0.75rem 1.4rem; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: all 0.2s; }
        .adm-tab:hover { color: #cdd6f4; }
        .adm-tab.active { color: #FFD43B; border-bottom-color: #FFD43B; }
        .adm-subtabs { display: flex; gap: 0.4rem; margin-bottom: 1.75rem; }
        .adm-subtab { font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 500; color: #7a8ab8; background: #16213e; border: 1.5px solid rgba(75,139,190,0.2); border-radius: 7px; padding: 0.45rem 1rem; cursor: pointer; transition: all 0.2s; }
        .adm-subtab:hover { color: #cdd6f4; }
        .adm-subtab.active { background: rgba(255,212,59,0.1); border-color: #FFD43B; color: #FFD43B; }
        .adm-form-wrap { background: #16213e; border: 1.5px solid rgba(75,139,190,0.18); border-radius: 12px; padding: 2rem; }
        .adm-form-title { font-family: 'Source Code Pro', monospace; font-size: 0.95rem; font-weight: 700; color: #FFD43B; margin-bottom: 1.5rem; letter-spacing: 0.5px; }
        .adm-form-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.1rem; }
        .adm-field { display: flex; flex-direction: column; gap: 0.35rem; }
        .adm-label { font-size: 0.72rem; font-weight: 600; color: #4B8BBE; text-transform: uppercase; letter-spacing: 1px; font-family: 'Source Code Pro', monospace; }
        .adm-input { background: #1a1a2e; border: 1.5px solid rgba(75,139,190,0.2); border-radius: 7px; padding: 0.55rem 0.75rem; color: #cdd6f4; font-family: 'DM Sans', sans-serif; font-size: 0.875rem; outline: none; transition: border-color 0.2s; width: 100%; }
        .adm-input:focus { border-color: #FFD43B; }
        .adm-textarea { resize: vertical; min-height: 80px; }
        .adm-form-actions { display: flex; gap: 0.75rem; margin-top: 1.75rem; }
        .adm-btn-primary { background: #FFD43B; color: #1a1a2e; border: none; border-radius: 8px; padding: 0.65rem 1.75rem; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 0.875rem; cursor: pointer; transition: background 0.2s; }
        .adm-btn-primary:hover { background: #ffe873; }
        .adm-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
        .adm-btn-ghost { background: transparent; color: #7a8ab8; border: 1.5px solid rgba(75,139,190,0.3); border-radius: 8px; padding: 0.65rem 1.4rem; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; }
        .adm-btn-ghost:hover { color: #cdd6f4; border-color: #4B8BBE; }
        .adm-table-wrap { background: #16213e; border: 1.5px solid rgba(75,139,190,0.18); border-radius: 12px; padding: 1.5rem; }
        .adm-table-scroll { overflow-x: auto; margin-top: 1rem; }
        .adm-table { width: 100%; border-collapse: collapse; font-size: 0.845rem; color: #cdd6f4; }
        .adm-table th { font-family: 'Source Code Pro', monospace; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #4B8BBE; padding: 0.65rem 0.85rem; text-align: left; border-bottom: 1px solid rgba(75,139,190,0.2); white-space: nowrap; }
        .adm-table td { padding: 0.7rem 0.85rem; border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: middle; }
        .adm-table td a { color: #4B8BBE; text-decoration: none; }
        .adm-table tr:hover td { background: rgba(255,212,59,0.03); }
        .adm-row-actions { display: flex; gap: 0.4rem; }
        .adm-btn-edit { background: rgba(75,139,190,0.15); color: #4B8BBE; border: 1px solid rgba(75,139,190,0.3); border-radius: 6px; padding: 0.3rem 0.7rem; font-size: 0.775rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .adm-btn-edit:hover { background: rgba(75,139,190,0.3); }
        .adm-btn-delete { background: rgba(220,53,69,0.12); color: #e06c75; border: 1px solid rgba(220,53,69,0.25); border-radius: 6px; padding: 0.3rem 0.7rem; font-size: 0.775rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .adm-btn-delete:hover { background: rgba(220,53,69,0.25); }
        .adm-role-badge { background: rgba(255,212,59,0.1); color: #FFD43B; border: 1px solid rgba(255,212,59,0.25); border-radius: 20px; padding: 0.15rem 0.6rem; font-size: 0.72rem; font-weight: 600; font-family: 'Source Code Pro', monospace; }
        .adm-empty { color: #4a5680; font-size: 0.875rem; padding: 1rem 0; }
        .adm-section { width: 100%; }
        @media (max-width: 900px) { .adm-form-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .adm-form-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="adm-page">
        <div className="adm-wrapper">
          <h1 className="adm-page-title">// Admin Dashboard</h1>
          <div className="adm-tabs">
            <button className={`adm-tab ${activeTab === "companies" ? "active" : ""}`} onClick={() => setActiveTab("companies")}>Manage Companies</button>
            <button className={`adm-tab ${activeTab === "jobs" ? "active" : ""}`} onClick={() => setActiveTab("jobs")}>Manage Jobs</button>
            <button className={`adm-tab ${activeTab === "users" ? "active" : ""}`} onClick={() => setActiveTab("users")}>Manage Users</button>
          </div>
          {activeTab === "companies" && <ManageCompanies />}
          {activeTab === "jobs" && <ManageJobs />}
          {activeTab === "users" && <ManageUsers />}
        </div>
      </div>
    </>
  );
}