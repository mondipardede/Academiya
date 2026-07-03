import { BookOpen, CalendarDays, GraduationCap, LayoutDashboard, Search, ShieldCheck, UsersRound } from "lucide-react";
import { classStatuses, discoveryCourses, phaseOneRoles } from "@academiya/domain";
import academiyaLogo from "../../../assets/brand/academiya-logo.png";

const statusTone: Record<string, string> = {
  Draft: "muted",
  Scheduled: "scheduled",
  "Open for Registration": "open",
  Ongoing: "ongoing",
  Completed: "completed",
  Cancelled: "muted"
};

export function App() {
  return (
    <main className="shell">
      <aside className="sidebar" aria-label="Academiya navigation">
        <div className="brand">
          <img className="brand-logo" src={academiyaLogo} alt="Academiya logo" />
          <div>
            <strong>Academiya</strong>
            <span>Phase 1 Console</span>
          </div>
        </div>
        <nav>
          <a className="active" href="#dashboard"><LayoutDashboard size={18} /> Dashboard</a>
          <a href="#programs"><BookOpen size={18} /> Programs</a>
          <a href="#classes"><CalendarDays size={18} /> Classes</a>
          <a href="#users"><UsersRound size={18} /> Users</a>
          <a href="#access"><ShieldCheck size={18} /> Access</a>
        </nav>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Registered User / Potential Student</p>
            <h1>Student-facing discovery dashboard</h1>
          </div>
          <label className="search">
            <Search size={18} />
            <input aria-label="Search courses and classes" placeholder="Search programs, courses, classes" />
          </label>
        </header>

        <section className="summary-grid" aria-label="Phase 1 summary">
          <div>
            <span>Visible programs</span>
            <strong>3</strong>
          </div>
          <div>
            <span>Open classes</span>
            <strong>1</strong>
          </div>
          <div>
            <span>Phase 1 roles</span>
            <strong>{phaseOneRoles.length}</strong>
          </div>
          <div>
            <span>Class statuses</span>
            <strong>{classStatuses.length}</strong>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel wide" id="programs">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Programs, courses, and classes</p>
                <h2>Visible academy offerings</h2>
              </div>
              <button type="button">Browse</button>
            </div>
            <div className="course-list">
              {discoveryCourses.map((item) => (
                <article className="course-card" key={item.id}>
                  <div>
                    <p>{item.program}</p>
                    <h3>{item.course}</h3>
                    <span>{item.level} · {item.duration} · {item.fee}</span>
                  </div>
                  <div className="class-stack">
                    {item.classes.map((classItem) => (
                      <div className="class-row" key={classItem.batch}>
                        <div>
                          <strong>{classItem.batch}</strong>
                          <span>{classItem.schedule} · {classItem.deliveryMode}</span>
                        </div>
                        <span className={`status ${statusTone[classItem.status]}`}>{classItem.status}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="panel" id="access">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Access model</p>
                <h2>Phase 1 roles</h2>
              </div>
              <GraduationCap size={22} />
            </div>
            <ul className="role-list">
              {phaseOneRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
