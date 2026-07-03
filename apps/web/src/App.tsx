import { useMemo, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import {
  Bell,
  BookOpen,
  CalendarDays,
  ChevronRight,
  ClipboardList,
  FileBarChart,
  GraduationCap,
  LayoutDashboard,
  Lock,
  Mail,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  UserRound,
  UsersRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import academiyaLogo from "../../../assets/brand/academiya-logo.png";

type Role = "login" | "student" | "instructor" | "admin";
type View =
  | "login"
  | "register"
  | "verify"
  | "student"
  | "instructor"
  | "admin"
  | "programs"
  | "courses"
  | "classes"
  | "profile"
  | "users"
  | "roles"
  | "reports"
  | "settings";

type Program = {
  id: string;
  name: string;
  description: string;
  status: "Active" | "Draft";
};

type Course = {
  id: string;
  programId: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  fee: string;
  prerequisite?: string;
};

type ClassItem = {
  id: string;
  courseId: string;
  batch: string;
  status: "Open for Registration" | "Ongoing" | "Completed" | "Scheduled";
  instructor: string;
  schedule: string;
  location: string;
  mode: "Onsite" | "Online" | "Hybrid";
};

type DemoUser = {
  id: string;
  name: string;
  email: string;
  access: string;
  status: "Active" | "Pending Verification";
};

type NavItem = [View, string, LucideIcon];

const defaultPrograms: Program[] = [
  {
    id: "healthcare",
    name: "Healthcare Program",
    description: "Courses related to caregiving, first aid, and health support skills.",
    status: "Active"
  },
  {
    id: "language",
    name: "Language Program",
    description: "Basic English, communication, and language skills.",
    status: "Active"
  },
  {
    id: "computer",
    name: "Computer Skills Program",
    description: "Digital literacy, Excel, and productivity skills.",
    status: "Active"
  }
];

const defaultCourses: Course[] = [
  {
    id: "care-basic",
    programId: "healthcare",
    name: "Basic Caregiving",
    level: "Beginner",
    duration: "8 weeks",
    fee: "AED 1,200"
  },
  {
    id: "care-advanced",
    programId: "healthcare",
    name: "Advanced Caregiving",
    level: "Advanced",
    duration: "10 weeks",
    fee: "AED 1,800",
    prerequisite: "Basic Caregiving"
  },
  {
    id: "english-basic",
    programId: "language",
    name: "Basic English",
    level: "Beginner",
    duration: "6 weeks",
    fee: "AED 800"
  },
  {
    id: "excel-basic",
    programId: "computer",
    name: "Microsoft Excel for Beginners",
    level: "Beginner",
    duration: "4 weeks",
    fee: "AED 650"
  }
];

const defaultClasses: ClassItem[] = [
  {
    id: "care-2026-a",
    courseId: "care-basic",
    batch: "Basic Caregiving Batch 2026-A",
    status: "Open for Registration",
    instructor: "Liza Santos",
    schedule: "Every Saturday, 9:00 AM - 12:00 PM",
    location: "Dubai Campus, Room 101",
    mode: "Onsite"
  },
  {
    id: "english-2026-b",
    courseId: "english-basic",
    batch: "Basic English Batch 2026-B",
    status: "Ongoing",
    instructor: "Liza Santos",
    schedule: "Every Sunday, 2:00 PM - 5:00 PM",
    location: "Google Meet",
    mode: "Online"
  },
  {
    id: "excel-2025-c",
    courseId: "excel-basic",
    batch: "Microsoft Excel Batch 2025-C",
    status: "Completed",
    instructor: "Juan Dela Cruz",
    schedule: "Saturday, 1:00 PM - 4:00 PM",
    location: "Room 204",
    mode: "Onsite"
  },
  {
    id: "excel-2026-a",
    courseId: "excel-basic",
    batch: "Microsoft Excel Batch 2026-A",
    status: "Scheduled",
    instructor: "Juan Dela Cruz",
    schedule: "Sunday, 2:00 PM - 5:00 PM",
    location: "Zoom",
    mode: "Online"
  }
];

const defaultUsers: DemoUser[] = [
  {
    id: "USR-1001",
    name: "Ana Santos",
    email: "ana@example.com",
    access: "Registered User / Potential Student",
    status: "Active"
  },
  {
    id: "USR-1002",
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    access: "Instructor",
    status: "Active"
  },
  {
    id: "USR-1003",
    name: "Maria Santos",
    email: "maria@example.com",
    access: "Admin",
    status: "Active"
  }
];

const disabledMessage = "This feature is not yet enabled in Phase 1.";

export function App() {
  const [role, setRole] = useState<Role>("login");
  const [view, setView] = useState<View>("login");
  const [toast, setToast] = useState("This is prototype data. It will reset when the prototype is reopened.");
  const [programs, setPrograms] = useState(defaultPrograms);
  const [courses, setCourses] = useState(defaultCourses);
  const [classes, setClasses] = useState(defaultClasses);
  const [users, setUsers] = useState(defaultUsers);
  const [registrationName, setRegistrationName] = useState("New Learner");
  const [form, setForm] = useState({
    programName: "",
    courseName: "",
    className: "",
    prerequisiteCourse: "Basic Caregiving"
  });

  const today = useMemo(
    () =>
      new Intl.DateTimeFormat(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }).format(new Date()),
    []
  );

  const currentMonth = useMemo(
    () => new Intl.DateTimeFormat(undefined, { month: "long", year: "numeric" }).format(new Date()),
    []
  );

  const go = (nextView: View, nextRole: Role = role) => {
    setRole(nextRole);
    setView(nextView);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const phaseOneToast = () => setToast(disabledMessage);

  const loginWithoutRole = () => {
    setToast("This is a prototype. Please select one of the demo access options.");
  };

  const submitRegistration = () => {
    setRegistrationName("New Learner");
    setView("verify");
    setToast("A verification email has been sent. Please click Verify this email to continue.");
  };

  const verifyEmail = () => {
    setUsers((current) => [
      {
        id: "USR-DEMO",
        name: registrationName,
        email: "new.user@example.com",
        access: "Registered User / Potential Student",
        status: "Active"
      },
      ...current
    ]);
    setRole("student");
    setView("student");
    setToast("Your email has been verified successfully.");
  };

  const createProgram = () => {
    const name = form.programName.trim() || "Hospitality Program";
    setPrograms((current) => [
      ...current,
      {
        id: slug(name),
        name,
        description: "Demo program created for this prototype session.",
        status: "Active"
      }
    ]);
    setForm((current) => ({ ...current, programName: "" }));
    setToast("Program created successfully for this demo session.");
  };

  const createCourse = () => {
    const name = form.courseName.trim() || "Food Safety Training";
    setCourses((current) => [
      ...current,
      {
        id: slug(name),
        programId: programs[0]?.id ?? "healthcare",
        name,
        level: "Beginner",
        duration: "4 weeks",
        fee: "AED 500",
        prerequisite: form.prerequisiteCourse
      }
    ]);
    setForm((current) => ({ ...current, courseName: "" }));
    setToast("Course created successfully for this demo session.");
  };

  const createClass = () => {
    const batch = form.className.trim() || "Hospitality Batch Demo-A";
    setClasses((current) => [
      ...current,
      {
        id: slug(batch),
        courseId: courses[0]?.id ?? "care-basic",
        batch,
        status: "Scheduled",
        instructor: "Juan Dela Cruz",
        schedule: "Every Wednesday, 6:00 PM - 8:00 PM",
        location: "Dubai Campus, Room 202",
        mode: "Hybrid"
      }
    ]);
    setForm((current) => ({ ...current, className: "" }));
    setToast("Class created successfully and assigned to an instructor for this demo session.");
  };

  const assignInstructor = () => {
    setUsers((current) =>
      current.map((user) =>
        user.name === "Ana Santos" ? { ...user, access: "Instructor" } : user
      )
    );
    setToast("Instructor role assigned successfully for this demo session.");
  };

  const changeFirstClassStatus = () => {
    setClasses((current) =>
      current.map((classItem, index) =>
        index === 0 ? { ...classItem, status: "Ongoing" } : classItem
      )
    );
    setToast("Class status updated successfully for this demo session.");
  };

  const activeUser =
    role === "admin"
      ? "Admin"
      : role === "instructor"
        ? "Juan Dela Cruz"
        : role === "student"
          ? "Ana Santos"
          : "Guest";

  if (view === "login") {
    return (
      <PrototypeFrame toast={toast} setToast={setToast}>
        <LoginPage
          onLogin={loginWithoutRole}
          onRegister={() => go("register", "login")}
          onStudent={() => go("student", "student")}
          onInstructor={() => go("instructor", "instructor")}
          onAdmin={() => go("admin", "admin")}
        />
      </PrototypeFrame>
    );
  }

  if (view === "register") {
    return (
      <PrototypeFrame toast={toast} setToast={setToast}>
        <RegistrationPage
          registrationName={registrationName}
          setRegistrationName={setRegistrationName}
          onSubmit={submitRegistration}
          onBack={() => go("login", "login")}
        />
      </PrototypeFrame>
    );
  }

  if (view === "verify") {
    return (
      <PrototypeFrame toast={toast} setToast={setToast}>
        <VerificationPage onVerify={verifyEmail} onBack={() => go("register", "login")} />
      </PrototypeFrame>
    );
  }

  return (
    <PrototypeFrame toast={toast} setToast={setToast}>
      <main className={`app-shell ${role === "admin" ? "admin-theme" : ""}`}>
        <SideNav role={role} activeView={view} go={go} activeUser={activeUser} />
        <section className="app-workspace">
          <header className="app-topbar">
            <div>
              <p className="eyebrow">{today}</p>
              <h1>{titleFor(view, role)}</h1>
            </div>
            <div className="topbar-actions">
              <button type="button" className="icon-button" onClick={phaseOneToast} aria-label="Notifications">
                <Bell size={18} />
              </button>
              <button type="button" className="profile-chip" onClick={() => go("profile")}>
                <UserRound size={18} />
                {activeUser}
              </button>
            </div>
          </header>

          {view === "student" && (
            <StudentDashboard
              programs={programs}
              courses={courses}
              classes={classes}
              go={go}
              phaseOneToast={phaseOneToast}
            />
          )}

          {view === "instructor" && (
            <InstructorDashboard classes={classes} phaseOneToast={phaseOneToast} go={go} />
          )}

          {view === "admin" && (
            <AdminDashboard
              programs={programs}
              courses={courses}
              classes={classes}
              users={users}
              currentMonth={currentMonth}
              go={go}
              phaseOneToast={phaseOneToast}
            />
          )}

          {view === "programs" && (
            <ProgramsPage programs={programs} courses={courses} go={go} role={role} />
          )}

          {view === "courses" && (
            <CoursesPage courses={courses} programs={programs} classes={classes} phaseOneToast={phaseOneToast} />
          )}

          {view === "classes" && (
            <ClassesPage classes={classes} courses={courses} phaseOneToast={phaseOneToast} />
          )}

          {view === "profile" && <ProfilePage role={role} activeUser={activeUser} />}

          {view === "users" && (
            <AdminManagementPage
              title="User Management"
              description="Search users, view profile summaries, and assign demo roles."
              actionLabel="Assign Ana as Instructor"
              onAction={assignInstructor}
            >
              <div className="list-stack">
                {users.map((user) => (
                  <article className="list-row" key={user.id}>
                    <div>
                      <strong>{user.name}</strong>
                      <span>{user.id} - {user.email}</span>
                    </div>
                    <Badge>{user.access}</Badge>
                  </article>
                ))}
              </div>
            </AdminManagementPage>
          )}

          {view === "roles" && (
            <AdminManagementPage
              title="Role Assignment"
              description="Assign academy-level roles and scope in this prototype session."
              actionLabel="Assign Instructor Role"
              onAction={assignInstructor}
            >
              <InfoStrip text="Demo rule: every verified new user starts as Registered User / Potential Student until an authorized user assigns another role." />
            </AdminManagementPage>
          )}

          {view === "reports" && (
            <ReportsPage programs={programs} courses={courses} classes={classes} users={users} />
          )}

          {view === "settings" && (
            <AdminManagementPage
              title="Basic Settings"
              description="Phase 1 settings include roles, delivery modes, class statuses, and visibility rules."
              actionLabel="Save Demo Settings"
              onAction={() => setToast("Settings updated successfully for this demo session.")}
            >
              <div className="settings-grid">
                <Badge>Onsite</Badge>
                <Badge>Online</Badge>
                <Badge>Hybrid</Badge>
                <Badge>Draft</Badge>
                <Badge>Open for Registration</Badge>
                <Badge>Completed</Badge>
              </div>
            </AdminManagementPage>
          )}

          {role === "admin" && (
            <AdminDemoActions
              form={form}
              setForm={setForm}
              createProgram={createProgram}
              createCourse={createCourse}
              createClass={createClass}
              changeFirstClassStatus={changeFirstClassStatus}
            />
          )}
        </section>
        <MobileNav role={role} activeView={view} go={go} />
      </main>
    </PrototypeFrame>
  );
}

function PrototypeFrame({
  children,
  toast,
  setToast
}: {
  children: ReactNode;
  toast: string;
  setToast: (message: string) => void;
}) {
  return (
    <>
      {children}
      {toast && (
        <button className="toast" type="button" onClick={() => setToast("")}>
          {toast}
        </button>
      )}
    </>
  );
}

function LoginPage({
  onLogin,
  onRegister,
  onStudent,
  onInstructor,
  onAdmin
}: {
  onLogin: () => void;
  onRegister: () => void;
  onStudent: () => void;
  onInstructor: () => void;
  onAdmin: () => void;
}) {
  return (
    <main className="login-page">
      <section className="phone-card login-card">
        <div className="brand-center">
          <img src={academiyaLogo} alt="Academiya logo" />
          <h1>Academiya</h1>
          <p>
            <span>Learn Today.</span> <b>Grow Everyday.</b> <strong>Succeed Tomorrow.</strong>
          </p>
        </div>

        <div className="login-intro">
          <h2>Welcome Back!</h2>
          <p>Please log in to your account to continue.</p>
        </div>

        <label className="field">
          <span>User ID</span>
          <input placeholder="Enter your User ID" />
        </label>
        <label className="field">
          <span>Password</span>
          <input type="password" placeholder="Enter your password" />
        </label>

        <div className="login-options">
          <label><input type="checkbox" /> Remember me</label>
          <button type="button" className="link-button">Forgot Password?</button>
        </div>

        <button type="button" className="primary-button" onClick={onLogin}>Log In</button>
        <div className="divider"><span>OR</span></div>
        <button type="button" className="secondary-button" onClick={onRegister}>
          <Plus size={18} /> Create New Account
        </button>

        <div className="demo-panel">
          <p className="eyebrow">Prototype demo access</p>
          <div className="demo-grid">
            <button type="button" onClick={onRegister}>New User</button>
            <button type="button" onClick={onStudent}>Registered Student</button>
            <button type="button" onClick={onInstructor}>Instructor</button>
            <button type="button" onClick={onAdmin}>Admin</button>
          </div>
        </div>
      </section>
    </main>
  );
}

function RegistrationPage({
  registrationName,
  setRegistrationName,
  onSubmit,
  onBack
}: {
  registrationName: string;
  setRegistrationName: (value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
}) {
  return (
    <main className="login-page">
      <section className="phone-card">
        <button className="link-button" type="button" onClick={onBack}>Back to login</button>
        <div className="brand-center compact">
          <img src={academiyaLogo} alt="Academiya logo" />
          <h1>Create Account</h1>
          <p>Start your learning journey with Academiya.</p>
        </div>
        <div className="form-grid">
          <label className="field"><span>First name</span><input value={registrationName} onChange={(event) => setRegistrationName(event.target.value)} /></label>
          <label className="field"><span>Last name</span><input placeholder="Santos" /></label>
          <label className="field"><span>Email address</span><input placeholder="ana@example.com" /></label>
          <label className="field"><span>Password</span><input type="password" placeholder="Create password" /></label>
          <label className="field"><span>Confirm password</span><input type="password" placeholder="Confirm password" /></label>
          <label className="field"><span>Country, optional</span><input placeholder="United Arab Emirates" /></label>
          <label className="field"><span>Mobile number, optional</span><input placeholder="+971..." /></label>
        </div>
        <button type="button" className="primary-button" onClick={onSubmit}>Create Account</button>
      </section>
    </main>
  );
}

function VerificationPage({ onVerify, onBack }: { onVerify: () => void; onBack: () => void }) {
  return (
    <main className="login-page">
      <section className="phone-card center-card">
        <Mail size={48} />
        <h1>Check your email</h1>
        <p>A verification email has been sent. Please click "Verify this email" to continue.</p>
        <button type="button" className="primary-button" onClick={onVerify}>Verify this email</button>
        <button type="button" className="secondary-button" onClick={onBack}>Back to registration</button>
      </section>
    </main>
  );
}

function SideNav({
  role,
  activeView,
  go,
  activeUser
}: {
  role: Role;
  activeView: View;
  go: (view: View, role?: Role) => void;
  activeUser: string;
}) {
  const items: NavItem[] =
    role === "admin"
      ? [
          ["admin", "Dashboard", LayoutDashboard],
          ["users", "Users", UsersRound],
          ["classes", "Classes", CalendarDays],
          ["reports", "Reports", FileBarChart],
          ["settings", "Settings", Settings]
        ]
      : role === "instructor"
        ? [
            ["instructor", "Home", LayoutDashboard],
            ["classes", "My Classes", CalendarDays],
            ["programs", "Programs", BookOpen],
            ["profile", "Profile", UserRound]
          ]
        : [
            ["student", "Home", LayoutDashboard],
            ["programs", "Programs", BookOpen],
            ["classes", "Classes", CalendarDays],
            ["courses", "Courses", GraduationCap],
            ["profile", "Profile", UserRound]
          ];

  return (
    <aside className="side-nav">
      <div className="brand">
        <img src={academiyaLogo} alt="Academiya logo" />
        <div>
          <strong>Academiya</strong>
          <span>{activeUser}</span>
        </div>
      </div>
      <nav>
        {items.map(([itemView, label, Icon]) => (
          <button
            type="button"
            key={itemView}
            className={activeView === itemView ? "active" : ""}
            onClick={() => go(itemView)}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>
      <button type="button" className="logout-button" onClick={() => go("login", "login")}>Back to demo login</button>
    </aside>
  );
}

function StudentDashboard({
  programs,
  courses,
  classes,
  go,
  phaseOneToast
}: {
  programs: Program[];
  courses: Course[];
  classes: ClassItem[];
  go: (view: View) => void;
  phaseOneToast: () => void;
}) {
  return (
    <div className="dashboard-stack">
      <HeroCard
        title="Hello, Ana!"
        subtitle="Browse visible programs, courses, and classes designed to help you grow."
        roleLabel="Registered User / Potential Student"
      />
      <SearchPanel placeholder="Search programs, courses, or classes" />
      <MetricGrid
        metrics={[
          ["Programs", programs.length.toString()],
          ["Courses", courses.length.toString()],
          ["Open Classes", countStatus(classes, "Open for Registration").toString()],
          ["Ongoing Classes", countStatus(classes, "Ongoing").toString()]
        ]}
      />
      <SectionHeader title="Available Programs" action="View all" onAction={() => go("programs")} />
      <CardGrid>
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} courseCount={courses.filter((course) => course.programId === program.id).length} go={go} />
        ))}
      </CardGrid>
      <SectionHeader title="Classes Open for Registration" action="View classes" onAction={() => go("classes")} />
      <ClassList classes={classes.filter((classItem) => classItem.status !== "Scheduled")} courses={courses} phaseOneToast={phaseOneToast} />
      <FutureActions phaseOneToast={phaseOneToast} />
    </div>
  );
}

function InstructorDashboard({
  classes,
  phaseOneToast,
  go
}: {
  classes: ClassItem[];
  phaseOneToast: () => void;
  go: (view: View) => void;
}) {
  const assigned = classes.filter((classItem) => classItem.instructor === "Juan Dela Cruz" || classItem.batch.includes("English"));
  return (
    <div className="dashboard-stack">
      <HeroCard
        title="Hello, Juan!"
        subtitle="Here are your assigned classes and schedule."
        roleLabel="Instructor"
      />
      <SearchPanel placeholder="Search classes or schedules" />
      <MetricGrid
        metrics={[
          ["Assigned Courses", "2"],
          ["My Classes", assigned.length.toString()],
          ["Today's Sessions", "2"],
          ["Ongoing", countStatus(classes, "Ongoing").toString()]
        ]}
      />
      <SectionHeader title="My Assigned Classes" action="View all" onAction={() => go("classes")} />
      <div className="list-stack">
        {assigned.map((classItem) => (
          <article className="list-row rich" key={classItem.id}>
            <div>
              <strong>{classItem.batch}</strong>
              <span>{classItem.schedule} - {classItem.mode} - {classItem.location}</span>
              <small>Instructor - assigned class</small>
            </div>
            <Badge>{classItem.status}</Badge>
          </article>
        ))}
      </div>
      <SectionHeader title="Today's Schedule" action="View schedule" onAction={() => go("classes")} />
      <div className="schedule-grid">
        <ScheduleBlock time="9:00 AM" title="Microsoft Excel Batch 2026-A" detail="Data Visualization with Charts - Zoom" />
        <ScheduleBlock time="2:00 PM" title="Basic English Batch 2026-B" detail="Grammar in Context - Google Meet" />
      </div>
      <ActionGrid
        actions={["Mark Attendance", "Upload Learning Materials", "Create Exam", "Submit Grades", "Issue Certificate", "Send Announcement", "View Payments"]}
        onAction={phaseOneToast}
      />
    </div>
  );
}

function AdminDashboard({
  programs,
  courses,
  classes,
  users,
  currentMonth,
  go,
  phaseOneToast
}: {
  programs: Program[];
  courses: Course[];
  classes: ClassItem[];
  users: DemoUser[];
  currentMonth: string;
  go: (view: View) => void;
  phaseOneToast: () => void;
}) {
  return (
    <div className="dashboard-stack">
      <HeroCard
        title="Hello, Admin!"
        subtitle="Here is an overview of your academy."
        roleLabel={`Admin Dashboard - ${currentMonth}`}
        admin
      />
      <MetricGrid
        metrics={[
          ["Total Users", users.length.toString()],
          ["Instructors", users.filter((user) => user.access === "Instructor").length.toString()],
          ["Programs", programs.length.toString()],
          ["Courses", courses.length.toString()],
          ["Active Classes", classes.filter((classItem) => classItem.status !== "Completed").length.toString()],
          ["Open Classes", countStatus(classes, "Open for Registration").toString()]
        ]}
      />
      <div className="admin-grid">
        <section className="panel-card">
          <SectionHeader title="Recent Activities" action="View all" onAction={() => go("reports")} />
          <div className="list-stack">
            {[
              "New user registered - Maria Santos",
              "New class created - Basic Caregiving Batch 2026-A",
              "Program updated - Healthcare Program",
              "Instructor added - Liza Santos"
            ].map((activity) => (
              <article className="list-row" key={activity}>
                <div>
                  <strong>{activity}</strong>
                  <span>{new Date().toLocaleDateString()} - generated from browser date</span>
                </div>
                <ChevronRight size={18} />
              </article>
            ))}
          </div>
        </section>
        <section className="panel-card">
          <SectionHeader title="Quick Access" />
          <ActionGrid
            actions={[
              "User Management",
              "Role Assignment",
              "Program Management",
              "Course Management",
              "Course Prerequisite Setup",
              "Class Management",
              "Schedule Management",
              "Basic Reports",
              "Settings"
            ]}
            onAction={(label) => {
              const routes: Record<string, View> = {
                "User Management": "users",
                "Role Assignment": "roles",
                "Program Management": "programs",
                "Course Management": "courses",
                "Course Prerequisite Setup": "courses",
                "Class Management": "classes",
                "Schedule Management": "classes",
                "Basic Reports": "reports",
                Settings: "settings"
              };
              go(routes[label] ?? "admin");
            }}
          />
        </section>
      </div>
      <div className="admin-grid">
        <ReportsPage programs={programs} courses={courses} classes={classes} users={users} compact />
        <section className="panel-card">
          <SectionHeader title="System Announcements" action="Future" onAction={phaseOneToast} />
          <InfoStrip text="System maintenance announcement preview. Notifications and announcements are not yet enabled in Phase 1." />
        </section>
      </div>
    </div>
  );
}

function ProgramsPage({
  programs,
  courses,
  go,
  role
}: {
  programs: Program[];
  courses: Course[];
  go: (view: View) => void;
  role: Role;
}) {
  return (
    <div className="dashboard-stack">
      <SearchPanel placeholder="Search programs" />
      <CardGrid>
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} courseCount={courses.filter((course) => course.programId === program.id).length} go={go} admin={role === "admin"} />
        ))}
      </CardGrid>
    </div>
  );
}

function CoursesPage({
  courses,
  programs,
  classes,
  phaseOneToast
}: {
  courses: Course[];
  programs: Program[];
  classes: ClassItem[];
  phaseOneToast: () => void;
}) {
  return (
    <div className="dashboard-stack">
      <SearchPanel placeholder="Search courses" />
      <div className="course-grid">
        {courses.map((course) => (
          <article className="panel-card" key={course.id}>
            <p className="eyebrow">{programs.find((program) => program.id === course.programId)?.name}</p>
            <h2>{course.name}</h2>
            <p>{course.level} - {course.duration} - {course.fee}</p>
            <InfoStrip text={course.prerequisite ? `Prerequisite: ${course.prerequisite}` : "Prerequisite: None"} />
            <ClassList classes={classes.filter((classItem) => classItem.courseId === course.id)} courses={[course]} phaseOneToast={phaseOneToast} />
          </article>
        ))}
      </div>
    </div>
  );
}

function ClassesPage({
  classes,
  courses,
  phaseOneToast
}: {
  classes: ClassItem[];
  courses: Course[];
  phaseOneToast: () => void;
}) {
  return (
    <div className="dashboard-stack">
      <SearchPanel placeholder="Search classes" />
      <ClassList classes={classes} courses={courses} phaseOneToast={phaseOneToast} detailed />
    </div>
  );
}

function ProfilePage({ role, activeUser }: { role: Role; activeUser: string }) {
  return (
    <section className="panel-card profile-panel">
      <UserRound size={44} />
      <h2>{activeUser}</h2>
      <p>{role === "student" ? "ana@example.com" : role === "instructor" ? "juan@example.com" : "admin@example.com"}</p>
      <Badge>{role === "student" ? "Registered User / Potential Student" : role === "admin" ? "Admin" : "Instructor"}</Badge>
      <InfoStrip text="Status: Active. Email verification: Verified. This profile is prototype data." />
    </section>
  );
}

function ReportsPage({
  programs,
  courses,
  classes,
  users,
  compact
}: {
  programs: Program[];
  courses: Course[];
  classes: ClassItem[];
  users: DemoUser[];
  compact?: boolean;
}) {
  return (
    <section className="panel-card">
      <SectionHeader title={compact ? "Reports Snapshot" : "Basic Reports"} />
      <div className="report-lines">
        <ReportLine label="Registered Users" value={users.length} percent={80} />
        <ReportLine label="Programs" value={programs.length} percent={50} />
        <ReportLine label="Courses" value={courses.length} percent={65} />
        <ReportLine label="Active Classes" value={classes.filter((classItem) => classItem.status !== "Completed").length} percent={72} />
      </div>
      {!compact && <InfoStrip text="Reports use Phase 1 sample data only. Export is optional for Phase 1." />}
    </section>
  );
}

function AdminDemoActions({
  form,
  setForm,
  createProgram,
  createCourse,
  createClass,
  changeFirstClassStatus
}: {
  form: { programName: string; courseName: string; className: string; prerequisiteCourse: string };
  setForm: Dispatch<SetStateAction<{ programName: string; courseName: string; className: string; prerequisiteCourse: string }>>;
  createProgram: () => void;
  createCourse: () => void;
  createClass: () => void;
  changeFirstClassStatus: () => void;
}) {
  return (
    <section className="panel-card admin-actions">
      <SectionHeader title="Fake Client-Side Admin Actions" />
      <InfoStrip text="These actions update in-memory prototype data only. Refreshing the prototype resets the data." />
      <div className="admin-action-grid">
        <label className="field compact-field">
          <span>New program</span>
          <input value={form.programName} onChange={(event) => setForm((current) => ({ ...current, programName: event.target.value }))} placeholder="Hospitality Program" />
          <button type="button" onClick={createProgram}>Create program</button>
        </label>
        <label className="field compact-field">
          <span>New course</span>
          <input value={form.courseName} onChange={(event) => setForm((current) => ({ ...current, courseName: event.target.value }))} placeholder="Food Safety Training" />
          <button type="button" onClick={createCourse}>Create course</button>
        </label>
        <label className="field compact-field">
          <span>New class</span>
          <input value={form.className} onChange={(event) => setForm((current) => ({ ...current, className: event.target.value }))} placeholder="Hospitality Batch Demo-A" />
          <button type="button" onClick={createClass}>Create class</button>
        </label>
        <div className="field compact-field">
          <span>Class status</span>
          <button type="button" onClick={changeFirstClassStatus}>Change first class to Ongoing</button>
        </div>
      </div>
    </section>
  );
}

function AdminManagementPage({
  title,
  description,
  actionLabel,
  onAction,
  children
}: {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
  children: ReactNode;
}) {
  return (
    <section className="panel-card">
      <SectionHeader title={title} action={actionLabel} onAction={onAction} />
      <p>{description}</p>
      {children}
    </section>
  );
}

function HeroCard({ title, subtitle, roleLabel, admin }: { title: string; subtitle: string; roleLabel: string; admin?: boolean }) {
  return (
    <section className={`hero-card ${admin ? "admin-hero" : ""}`}>
      <div>
        <p>{roleLabel}</p>
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>
      <img src={academiyaLogo} alt="" />
    </section>
  );
}

function SearchPanel({ placeholder }: { placeholder: string }) {
  return (
    <label className="search-panel">
      <Search size={20} />
      <input placeholder={placeholder} />
      <button type="button">Filter</button>
    </label>
  );
}

function MetricGrid({ metrics }: { metrics: Array<[string, string]> }) {
  return (
    <section className="metric-grid">
      {metrics.map(([label, value]) => (
        <article className="metric-card" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </article>
      ))}
    </section>
  );
}

function SectionHeader({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {action && (
        <button type="button" className="link-button" onClick={onAction}>
          {action} <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}

function CardGrid({ children }: { children: ReactNode }) {
  return <div className="card-grid">{children}</div>;
}

function ProgramCard({ program, courseCount, go, admin }: { program: Program; courseCount: number; go: (view: View) => void; admin?: boolean }) {
  return (
    <article className="program-card">
      <div className="program-visual"><BookOpen size={24} /></div>
      <h3>{program.name}</h3>
      <p>{program.description}</p>
      <span>{courseCount} courses - {program.status}</span>
      <button type="button" onClick={() => go(admin ? "courses" : "courses")}>
        View Courses
      </button>
    </article>
  );
}

function ClassList({
  classes,
  courses,
  phaseOneToast,
  detailed
}: {
  classes: ClassItem[];
  courses: Course[];
  phaseOneToast: () => void;
  detailed?: boolean;
}) {
  return (
    <div className="list-stack">
      {classes.map((classItem) => {
        const course = courses.find((item) => item.id === classItem.courseId);
        return (
          <article className="list-row class-list-row" key={classItem.id}>
            <div>
              <strong>{classItem.batch}</strong>
              <span>{course?.name ?? "Course"} - {classItem.schedule}</span>
              {detailed && <small>{classItem.mode} - {classItem.location} - Instructor: {classItem.instructor}</small>}
            </div>
            <div className="row-actions">
              <Badge>{classItem.status}</Badge>
              <button type="button" onClick={phaseOneToast}>
                {classItem.status === "Open for Registration" ? "Registration Coming Soon" : "View Details"}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function FutureActions({ phaseOneToast }: { phaseOneToast: () => void }) {
  return (
    <section className="panel-card">
      <SectionHeader title="Future Features Preview" />
      <ActionGrid
        actions={["Enroll", "Pay Now", "Learning Materials", "Attendance", "Exams", "Certificate", "Notifications"]}
        onAction={phaseOneToast}
      />
    </section>
  );
}

function ActionGrid({ actions, onAction }: { actions: string[]; onAction: (label: string) => void }) {
  return (
    <div className="action-grid">
      {actions.map((action) => (
        <button type="button" key={action} onClick={() => onAction(action)}>
          {iconForAction(action)}
          {action}
        </button>
      ))}
    </div>
  );
}

function ScheduleBlock({ time, title, detail }: { time: string; title: string; detail: string }) {
  return (
    <article className="schedule-block">
      <strong>{time}</strong>
      <div>
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
      <Badge>Today</Badge>
    </article>
  );
}

function ReportLine({ label, value, percent }: { label: string; value: number; percent: number }) {
  return (
    <div className="report-line">
      <span>{label}</span>
      <div><i style={{ width: `${percent}%` }} /></div>
      <strong>{value}</strong>
    </div>
  );
}

function InfoStrip({ text }: { text: string }) {
  return <div className="info-strip">{text}</div>;
}

function Badge({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>;
}

function MobileNav({ role, activeView, go }: { role: Role; activeView: View; go: (view: View) => void }) {
  const items =
    role === "admin"
      ? [["admin", "Dashboard"], ["users", "Users"], ["classes", "Classes"], ["reports", "Reports"], ["settings", "More"]]
      : role === "instructor"
        ? [["instructor", "Home"], ["classes", "My Classes"], ["classes", "Schedule"], ["programs", "Programs"], ["profile", "Profile"]]
        : [["student", "Home"], ["programs", "Programs"], ["classes", "Classes"], ["classes", "Calendar"], ["profile", "Profile"]];

  return (
    <nav className="mobile-nav">
      {items.map(([itemView, label]) => (
        <button type="button" className={activeView === itemView ? "active" : ""} key={`${itemView}-${label}`} onClick={() => go(itemView as View)}>
          {label}
        </button>
      ))}
    </nav>
  );
}

function titleFor(view: View, role: Role) {
  if (view === "student") return "Registered Student Dashboard";
  if (view === "instructor") return "Instructor Dashboard";
  if (view === "admin") return "Admin Dashboard";
  if (view === "programs") return "Programs";
  if (view === "courses") return "Courses";
  if (view === "classes") return "Classes";
  if (view === "users") return "User Management";
  if (view === "roles") return "Role Assignment";
  if (view === "reports") return "Basic Reports";
  if (view === "settings") return "Settings";
  if (view === "profile") return role === "login" ? "Profile" : "Profile";
  return "Academiya";
}

function iconForAction(action: string) {
  if (action.includes("User") || action.includes("Role")) return <UsersRound size={18} />;
  if (action.includes("Program") || action.includes("Course")) return <BookOpen size={18} />;
  if (action.includes("Class") || action.includes("Schedule")) return <CalendarDays size={18} />;
  if (action.includes("Report")) return <FileBarChart size={18} />;
  if (action.includes("Setting")) return <Settings size={18} />;
  if (action.includes("Payment") || action.includes("Pay")) return <Lock size={18} />;
  if (action.includes("Attendance") || action.includes("Exam")) return <ClipboardList size={18} />;
  return <ShieldCheck size={18} />;
}

function countStatus(classes: ClassItem[], status: ClassItem["status"]) {
  return classes.filter((classItem) => classItem.status === status).length;
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "demo-item";
}
