export const phaseOneRoles = [
  "Registered User / Potential Student",
  "Super Admin",
  "Admin",
  "Instructor"
] as const;

export const futureRoles = [
  "Academy Manager",
  "Admission Staff",
  "Finance Staff",
  "Content Manager",
  "Certificate Officer"
] as const;

export const classStatuses = [
  "Draft",
  "Scheduled",
  "Open for Registration",
  "Ongoing",
  "Completed",
  "Cancelled"
] as const;

export type PhaseOneRole = (typeof phaseOneRoles)[number];
export type FutureRole = (typeof futureRoles)[number];
export type ClassStatus = (typeof classStatuses)[number];

export type CourseCard = {
  id: string;
  program: string;
  course: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  fee: string;
  prerequisite?: string;
  classes: Array<{
    batch: string;
    status: ClassStatus;
    schedule: string;
    deliveryMode: "Onsite" | "Online" | "Hybrid";
  }>;
};

export const discoveryCourses: CourseCard[] = [
  {
    id: "care-basic",
    program: "Healthcare Program",
    course: "Basic Caregiving",
    level: "Beginner",
    duration: "8 weeks",
    fee: "AED 1,200",
    classes: [
      {
        batch: "Basic Caregiving Batch 2026-A",
        status: "Open for Registration",
        schedule: "Every Saturday, 9:00 AM to 12:00 PM",
        deliveryMode: "Onsite"
      }
    ]
  },
  {
    id: "english-basic",
    program: "Language Program",
    course: "Basic English",
    level: "Beginner",
    duration: "6 weeks",
    fee: "To be confirmed",
    classes: [
      {
        batch: "Basic English Batch 2026-B",
        status: "Ongoing",
        schedule: "Every Sunday, 2:00 PM to 4:00 PM",
        deliveryMode: "Hybrid"
      }
    ]
  },
  {
    id: "excel-basic",
    program: "Computer Skills Program",
    course: "Microsoft Excel for Beginners",
    level: "Beginner",
    duration: "4 weeks",
    fee: "To be confirmed",
    classes: [
      {
        batch: "Microsoft Excel Batch 2025-C",
        status: "Completed",
        schedule: "Completed class history",
        deliveryMode: "Online"
      }
    ]
  }
];
