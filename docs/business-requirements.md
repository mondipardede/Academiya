# Academiya Business Requirements

## 1. Product Overview

Academiya is an academy management platform designed for non-formal education centers, training institutes, and community-based learning organizations. The product is available as both a web application and a mobile application.

The web application is mainly used by academy administrators, staff, management, and instructors to manage daily academic and administrative operations. The mobile application can be downloaded by the public through the Apple App Store and Google Play Store, allowing students, instructors, and other users to access Academiya from their mobile devices.

Academiya supports the full learning operations cycle, starting from user registration, program and course setup, instructor management, class creation, student admission, learning material distribution, attendance tracking, exam management, and certificate issuance.

The main purpose of Academiya is to make academy operations more organized, efficient, and transparent. It allows academy administrators, staff, instructors, and students to access the right information, manage learning activities, and track academic progress from enrollment until course completion.

Academiya is especially suitable for non-formal academies that offer short courses, professional training, skills-based programs, community education, and certification-based learning.

In future phases, Academiya may also support user notifications, academy announcements, payment reminders, and online payment processing to provide a more complete digital academy experience.

## 2. Users & Roles

Academiya will support different types of users based on their responsibilities within the platform and within each academy. Each user role will have different access rights, features, and permissions depending on what they need to manage or access.

For Phase 1 of the project, Academiya will support four main access types:

1. Registered User / Potential Student
2. Super Admin
3. Admin
4. Instructor

The Registered User / Potential Student is the default access type for every newly registered and verified user. The Super Admin manages the Academiya platform at the system level. The Admin manages academy-level operations. The Instructor manages assigned teaching activities.

A user may start as a Registered User / Potential Student and later be assigned a specific role by an authorized user.

Example:

Maria registers in Academiya using her email address. After clicking the "Verify this email" link, her account becomes active. By default, Maria is treated as a Registered User / Potential Student. She can browse available programs, courses, classes open for registration, ongoing classes, and completed classes.

Later, an Admin searches for Maria using her User ID or email address and assigns her as an Instructor for the Basic English course. After the role assignment, Maria's dashboard changes from the potential student dashboard to the instructor dashboard.

Although Phase 1 will focus on the main access types above, the system should be designed with a flexible role and permission structure. This will allow Academiya to support additional roles in the future without requiring major changes to the application structure.

Future roles may include:

- Academy Manager
- Admission Staff
- Finance Staff
- Content Manager
- Certificate Officer

The system should allow roles to be assigned to users and should control what each user can view, create, update, approve, delete, assign, upload, download, generate, or export based on their assigned role and permission scope.

### 2.1 Registered User / Potential Student

The Registered User / Potential Student is the default access type given to every newly registered and verified user.

This user is not yet assigned to an operational role such as Admin or Instructor. However, the user can still access student-facing discovery features. This allows the user to explore the academy's offerings before registering for a class.

A Registered User / Potential Student may be able to view:

- Available programs
- Courses under each program
- Course details
- Course prerequisites
- Classes open for registration
- Ongoing classes
- Completed classes
- Basic account profile
- Registration or application status, when class registration is available

A Registered User / Potential Student does not automatically become an enrolled student. The user only becomes connected to a specific class after completing the class registration, admission, or enrollment process.

Example:

Juan registers in Academiya and verifies his email address. He logs in and sees the default potential student dashboard. He can browse the Healthcare Program, view the Basic Caregiving course, and see that Basic Caregiving Batch 2026-A is open for registration.

He can also see that Advanced Caregiving Batch 2026-B is ongoing, but he cannot register for it because the class has already started. He can also view completed classes such as Basic Caregiving Batch 2025-C to understand the academy's previous activity.

Another example:

Ana wants to take Advanced Caregiving, but the course details show that Basic Caregiving is a prerequisite. This helps Ana understand that she must complete Basic Caregiving before she can register for Advanced Caregiving in the future.

### 2.2 Super Admin

The Super Admin is responsible for managing the Academiya platform at the system level. This role has the highest level of access across the platform.

The Super Admin is not limited to one academy. This role is intended for users who manage the overall Academiya system, platform configuration, academy setup, and platform-level access.

Typical Super Admin responsibilities include:

- Managing academy accounts
- Approving, activating, or deactivating academy accounts
- Managing academy profiles at the platform level
- Assigning Admin users to academies
- Managing global system settings
- Managing platform-level user access and permissions
- Monitoring overall platform usage
- Viewing platform-level reports and analytics
- Supporting troubleshooting and administrative support requests

Example:

Raymond is the Super Admin of Academiya. A new academy called Filipino Skills Academy Dubai is created in the platform. Raymond reviews the academy profile, activates the academy account, and assigns Maria as the Admin for that academy.

After Maria is assigned as Admin, she can manage users, programs, courses, and class schedules for Filipino Skills Academy Dubai, but she cannot manage other academies unless permission is granted.

Another example:

The Super Admin sees that a user account has been incorrectly assigned to the wrong academy. The Super Admin updates the user's academy assignment and records the change.

### 2.3 Admin

The Admin is responsible for managing the daily operations of a specific academy inside Academiya. This role has the highest level of access within the assigned academy.

The Admin can manage users, roles, programs, courses, instructors, class schedules, and academy-level settings. In future phases, the Admin may also manage admissions, enrollment, learning materials, attendance, exams, certifications, and reports.

Typical Admin responsibilities include:

- Searching registered users
- Assigning roles to registered users
- Assigning Instructors to courses, subjects, or classes
- Creating and managing programs
- Creating and managing courses
- Setting course prerequisites
- Creating and managing class schedules
- Managing class status and visibility
- Viewing academy-level dashboard data
- Managing academy-level settings
- Activating or deactivating users within the academy

Example:

Maria is the Admin of Filipino Skills Academy Dubai. She searches for Juan using his email address and sees that Juan is currently a Registered User / Potential Student. Since Juan will help teach computer classes, Maria assigns him as an Instructor.

Maria then assigns Juan to the Microsoft Excel for Beginners course. After the assignment, Juan can see instructor-related information for that course.

Another example:

Maria creates a new program called Healthcare Program. Under this program, she creates two courses:

- Basic Caregiving
- Advanced Caregiving

She sets Basic Caregiving as a prerequisite for Advanced Caregiving. This means future students should complete Basic Caregiving before taking Advanced Caregiving.

Another example:

Maria schedules a new class called Basic Caregiving Batch 2026-A. She selects the Healthcare Program, chooses the Basic Caregiving course, assigns an Instructor, sets the schedule to every Saturday from 9:00 AM to 12:00 PM, sets the class capacity to 25 students, and marks the class as Open for Registration.

### 2.4 Instructor

The Instructor is responsible for delivering learning activities and managing assigned teaching responsibilities.

For Phase 1, the Instructor role may focus on viewing assigned programs, courses, subjects, and scheduled classes. In future phases, the Instructor may manage attendance, learning materials, exams, assessments, and student progress.

Typical Instructor responsibilities include:

- Viewing assigned courses
- Viewing assigned subjects, if applicable
- Viewing assigned scheduled classes
- Viewing upcoming class schedules
- Viewing class delivery mode, location, or online meeting details
- Managing teaching-related tasks in future phases

Example:

Juan is assigned as an Instructor for the Microsoft Excel for Beginners course. When Juan logs in, he sees the Instructor dashboard. His dashboard shows that he is assigned to Computer Skills Program -> Microsoft Excel for Beginners.

If a class has already been scheduled, Juan may also see Microsoft Excel Batch 2026-A, scheduled every Sunday from 2:00 PM to 5:00 PM.

Another example:

Liza is assigned as an Instructor for the Basic English course under the Language Program. She can view the scheduled class Basic English Batch 2026-B, including the class schedule, delivery mode, and location.

In a future phase, Liza may also be able to upload learning materials, mark attendance, create assessments, and submit student scores.

### 2.5 Student

The Student is the learner who registers for a class, completes the admission or enrollment process, attends sessions, accesses learning materials, completes assessments, and receives certificates after meeting academy requirements.

In Phase 1, the full student lifecycle may not yet be implemented. Therefore, most newly registered users will function as Registered Users / Potential Students until class registration, admission, and enrollment features are added.

A user becomes an actual Student in relation to a specific class only after completing the required registration, admission, or enrollment process.

Typical Student activities in future phases may include:

- Registering for a class
- Tracking admission or enrollment status
- Viewing enrolled classes
- Accessing learning materials
- Viewing class schedules
- Checking attendance records
- Taking exams or assessments
- Viewing assessment results
- Tracking course completion status
- Downloading certificates

Example:

Ana is a Registered User / Potential Student. She views Basic Caregiving Batch 2026-A, which is open for registration. In a future phase, Ana submits a class registration form. After the academy approves her application and confirms her enrollment, Ana becomes a Student for that specific class.

Another example:

Rico is enrolled in Basic English Batch 2026-C. He attends the class sessions, completes the required assessments, and meets the attendance requirement. In a future phase, Academiya marks him as eligible for a certificate, and Rico can download his certificate from the Student dashboard.

### 2.6 Future Roles

Academiya should be prepared to support additional roles as academy operations become more structured. These roles may not be part of the active Phase 1 scope, but the system should be designed so they can be added later.

#### 2.6.1 Academy Manager

The Academy Manager monitors academy performance, class operations, student progress, instructor activity, and reports.

This role may have access to operational dashboards and reports but may not need full administrative control.

Example:

An Academy Manager logs in to review how many classes are currently open, how many are ongoing, how many students are enrolled, and which courses have the highest demand.

#### 2.6.2 Admission Staff

The Admission Staff manages student applications, registration forms, admission review, document checking, and enrollment processing.

Example:

A student applies for Basic Caregiving Batch 2026-A. The Admission Staff reviews the application, checks the submitted documents, confirms that the student meets the requirements, and marks the application as approved for enrollment.

#### 2.6.3 Finance Staff

The Finance Staff manages payment-related activities, course fees, invoices, receipts, payment status, online payment transactions, installment tracking, payment reversals, and financial reports when payment features are included in the system.

Example:

A student enrolls in Basic Caregiving Batch 2026-A with a course fee of AED 1,200. The academy allows the student to pay in three installments of AED 400 each. The Finance Staff monitors the payment status, checks executed online transactions, and performs a reversal if a payment was duplicated or recorded incorrectly.

#### 2.6.4 Content Manager

The Content Manager manages learning materials such as PDFs, videos, links, lesson files, course references, and other digital resources.

Example:

A Content Manager uploads a PDF file called Basic Caregiving Module 1 and links it to the Basic Caregiving course. The material becomes available to enrolled students when the Learning Materials module is implemented.

#### 2.6.5 Certificate Officer

The Certificate Officer reviews completion requirements, validates certificate eligibility, generates certificates, approves certificate issuance, and manages certificate records.

Example:

A student completes Microsoft Excel for Beginners, meets the attendance requirement, and passes the final assessment. The Certificate Officer reviews the student's record, approves the certificate, and issues a certificate with a unique certificate number.

### 2.7 Role and Permission Requirement

Academiya should include a role-based access control structure. This means the system must control what each user can access and what actions they can perform based on their assigned role and permission scope.

The permission structure should support actions such as:

- View
- Create
- Update
- Delete
- Approve
- Assign
- Activate
- Deactivate
- Upload
- Download
- Generate
- Export

Role permissions should also support scope. Scope defines where the permission applies.

Examples of permission scope include:

- Platform level
- Academy level
- Program level
- Course level
- Subject level
- Class level

Example:

A Super Admin may view all academies in the platform.

An Admin may only manage users, programs, courses, and classes under the assigned academy.

An Instructor may only view courses or classes assigned to them.

A Registered User / Potential Student may only browse visible programs, visible courses, and visible class information.

Another example:

Maria is an Admin for Filipino Skills Academy Dubai. She can create courses and schedule classes for that academy. However, she should not be able to create or update courses for another academy unless she is granted permission.

Juan is an Instructor assigned to Microsoft Excel Batch 2026-A. He can view that class schedule, but he should not be able to update unrelated classes such as Basic Caregiving Batch 2026-A.

### 2.8 Phase 1 Role Summary

For Phase 1, Academiya should support the following role behavior:

1. Every new verified user becomes a Registered User / Potential Student by default.
   - The user can browse visible programs, courses, open classes, ongoing classes, and completed classes.
2. Super Admin manages platform-level setup and access.
   - Example: Super Admin assigns an Admin to an academy.
3. Admin manages academy-level operations.
   - Example: Admin creates programs, creates courses, assigns instructors, and schedules classes.
4. Instructor manages assigned teaching-related activities.
   - Example: Instructor views assigned courses and scheduled classes.
5. Student lifecycle is prepared for future phases.
   - Example: A potential student becomes an enrolled student after class registration, admission, and enrollment are implemented.
6. Future roles should be supported by the system design.
   - Example: Admission Staff, Finance Staff, Content Manager, and Certificate Officer can be activated later without major redevelopment.
7. Role assignment changes the user's dashboard and available features.
   - Example: A user who starts as a potential student sees the student-facing dashboard. After being assigned as Instructor, the user sees the Instructor dashboard.

## 3. Core Business Modules

Academiya will be structured into core business modules. Each module represents a major functional area of the platform and supports the academy's academic and administrative operations.

The long-term goal of Academiya is to support the full academy operation cycle, from user registration, role assignment, program and course setup, class scheduling, student admission, learning delivery, attendance tracking, assessment, and certificate issuance.

For Phase 1, the project will focus on building the foundation of the platform. The Phase 1 scope will include:

- User registration
- Email verification using a "Verify this email" link
- Email and password login
- Default Registered User / Potential Student access
- Role assignment
- User management
- Program creation
- Course creation
- Course prerequisite setup
- Basic class scheduling
- Program, course, and class browsing
- Phase 1 dashboard with real data from available modules

Other modules may be defined in the overall product structure, but they may be implemented in later phases.

Example:

A new user named Ana registers in Academiya using her email address. After clicking the "Verify this email" link, she becomes a Registered User / Potential Student. She can browse the Healthcare Program, view the Basic Caregiving course, and see that Basic Caregiving Batch 2026-A is open for registration.

Later, if an Admin assigns Ana as an Instructor, her dashboard and available features will change based on the Instructor role.

### 3.1 Authentication & Account Access

The Authentication & Account Access module manages how users register, verify their email address, log in, log out, and access Academiya.

All users must go through the same account registration process before they can access the platform. This applies to all user types, including Super Admin, Admin, Instructor, Student, Admission Staff, Finance Staff, Content Manager, Certificate Officer, and other future roles.

For Phase 1, authentication will be implemented using email only. During registration, the user must provide a valid email address. After registration is submitted, the system will send a verification email containing a "Verify this email" link. The user must click the link to verify the email address and complete the account verification process.

The registration process creates a basic user account in Academiya. After the account is successfully registered and verified, the user can log in to the platform.

By default, every newly registered and verified user is treated as a Registered User / Potential Student. This means the user can browse student-facing information such as programs, courses, open classes, ongoing classes, and completed classes.

If an authorized user assigns a specific role to the user, such as Admin or Instructor, the user's dashboard and available features will change based on the assigned role.

This module may include:

- User registration
- User ID creation
- Email-based login
- Password creation
- Password reset
- Email verification using a verification link
- Account activation
- Account deactivation
- Role-based login access
- Session management
- Logout
- Failed login handling
- Account lockout after multiple failed attempts

The recommended Phase 1 account registration flow is:

User Registration -> Verification Email Sent -> User Clicks "Verify this email" Link -> Account Verified -> Registered User / Potential Student Access

Example:

Juan registers using the email address `juan@example.com`. After submitting the registration form, Academiya sends Juan a verification email. Juan clicks the "Verify this email" link. His account becomes verified, and he can now log in as a Registered User / Potential Student.

Another example:

Liza registers but does not click the email verification link. When she tries to log in, the system should prevent access and display a message asking her to verify her email address first.

For Phase 1, mobile number verification, SMS OTP, email OTP, social login, and alternative login methods are not included. These may be considered in future phases.

### 3.2 Dashboard

The Dashboard is the main landing page users see after they successfully log in to Academiya.

The dashboard provides a quick overview of important information, activities, alerts, and shortcuts based on the user's assigned role and permissions.

The dashboard must be role-based. This means each user should only see information and actions relevant to their current access type or assigned role.

For Phase 1, the dashboard should only display real data related to available Phase 1 modules. Other dashboard cards, summaries, or widgets may be planned for future phases but should not display dummy or misleading data.

#### 3.2.1 Registered User / Potential Student Dashboard

A Registered User / Potential Student dashboard should help the user discover academy offerings.

The dashboard may show:

- Available programs
- Available courses
- Courses with prerequisites
- Classes open for registration
- Ongoing classes
- Completed classes
- User profile information
- Account status

Example:

Ana logs in as a newly registered user. Her dashboard shows:

- Healthcare Program
- Language Program
- Basic Caregiving Course
- Basic English Course
- Basic Caregiving Batch 2026-A - Open for Registration
- Basic English Batch 2026-B - Ongoing
- Microsoft Excel Batch 2025-C - Completed

This helps Ana understand what the academy offers and what classes are currently active.

#### 3.2.2 Super Admin Dashboard

The Super Admin Dashboard provides a platform-level overview of Academiya.

For Phase 1, the Super Admin Dashboard may include:

- Total registered users
- Users by role
- Users without assigned operational roles
- Active and inactive users
- Total academies, if academy setup is included
- Total programs
- Total courses
- Courses with prerequisites
- Total scheduled classes
- Upcoming scheduled classes
- Classes by status
- Quick access to user management
- Quick access to role assignment
- Quick access to program and course management
- Quick access to class scheduling

Example:

Raymond logs in as Super Admin. His dashboard shows:

- 1,250 registered users
- 18 Admin users
- 42 Instructor users
- 1,190 Registered Users / Potential Students
- 8 active programs
- 35 active courses
- 12 scheduled classes

This gives Raymond a platform-level view of Academiya activity.

#### 3.2.3 Admin Dashboard

The Admin Dashboard provides an academy-level overview of available operations.

For Phase 1, the Admin Dashboard may include:

- Total users within the academy
- Users by assigned role
- Users without assigned operational roles
- Total programs
- Active programs
- Draft programs
- Total courses
- Active courses
- Draft courses
- Courses with prerequisites
- Total scheduled classes
- Upcoming scheduled classes
- Draft classes
- Classes open for registration
- Ongoing classes
- Completed classes
- Quick access to user management
- Quick access to role assignment
- Quick access to program management
- Quick access to course management
- Quick access to class scheduling

Example:

Maria is the Admin of Filipino Skills Academy Dubai. Her dashboard shows:

- 320 registered users
- 12 instructors
- 5 active programs
- 22 active courses
- 6 classes open for registration
- 9 ongoing classes
- 18 completed classes

This helps Maria manage the academy's daily setup and class activity.

#### 3.2.4 Instructor Dashboard

The Instructor Dashboard provides an overview of the instructor's assigned teaching activities.

For Phase 1, the Instructor Dashboard may include:

- Assigned programs
- Assigned courses
- Assigned subjects, if applicable
- Assigned scheduled classes
- Upcoming scheduled classes
- Ongoing assigned classes
- Profile information
- Account status

Example:

Juan is assigned as Instructor for the Microsoft Excel for Beginners course. His dashboard shows:

- Computer Skills Program
- Microsoft Excel for Beginners
- Microsoft Excel Batch 2026-A
- Schedule: Sunday, 2:00 PM to 5:00 PM
- Delivery Mode: Onsite
- Location: Dubai Campus Room 204

In future phases, Juan may also see attendance tasks, learning materials, assessments, and student progress.

#### 3.2.5 Dashboard Requirements

The dashboard should meet the following requirements:

- Display information based on user role and permissions
- Display only real data from modules already available in the system
- Avoid showing dummy, placeholder, or misleading operational data
- Provide quick links to commonly used Phase 1 modules
- Highlight pending actions and important alerts
- Support both web and mobile layouts
- Allow dashboard content to expand as new modules are added in future phases
- Prevent users from seeing data they are not authorized to access

Example:

If class registration is not yet implemented, the dashboard should not show a fake number for "Pending Applications." It should only show real data, such as registered users, programs, courses, and scheduled classes.

### 3.3 Academy Management

The Academy Management module is used to manage academy profiles and academy-level information.

This module is mainly used by the Super Admin and Admin. The Super Admin can manage academies at the platform level, while the Admin can manage the profile and settings of their own academy.

This module may include:

- Academy registration
- Academy profile
- Academy approval and activation
- Academy branches or locations
- Academy contact information
- Academy status
- Academy settings

Example:

Academiya may support an academy called Filipino Skills Academy Dubai.

The academy profile may include:

- Academy Name: Filipino Skills Academy Dubai
- Country: United Arab Emirates
- City: Dubai
- Contact Email: info@filipinoskillsacademy.com
- Contact Number: +971 XX XXX XXXX
- Status: Active
- Main Branch: Dubai Campus

Another example:

In the future, one academy may have multiple branches:

- Dubai Branch
- Abu Dhabi Branch
- Sharjah Branch

For Phase 1, this module may be limited depending on whether Academiya will support multiple academies from the beginning. If multi-academy support is included, the Super Admin should be able to create, approve, activate, or deactivate academy accounts.

In future phases, this module may support more advanced features such as branch management, academy subscription status, academy branding, and academy-level configuration.

### 3.4 User & Role Management

The User & Role Management module is used to manage registered users and control system access.

This module supports user search, user profile management, role assignment, role scope, account activation, account deactivation, and permission control.

In Academiya, users do not register separately as Admin, Instructor, or Student. Instead, all users register through the same registration process. After registration, each user becomes a Registered User / Potential Student by default. An authorized user may later assign a specific operational role.

This module may include:

- User search
- User profile management
- User status management
- Role assignment
- Academy assignment
- Instructor assignment to subjects, courses, or classes
- Account activation and deactivation
- Permission management
- Access control
- User status

For Phase 1, this module should support:

- Viewing registered users
- Searching users by User ID, email, or name
- Assigning roles to users
- Updating assigned roles
- Activating or deactivating users
- Controlling access based on role
- Supporting future roles even if they are not fully active yet

The active Phase 1 access types and roles are:

- Registered User / Potential Student
- Super Admin
- Admin
- Instructor

Future roles may include:

- Academy Manager
- Admission Staff
- Finance Staff
- Content Manager
- Certificate Officer

Example:

Maria is an Admin. She searches for the user `juan@example.com` and sees that Juan is currently a Registered User / Potential Student. Maria assigns Juan as an Instructor for the Microsoft Excel for Beginners course.

After this role assignment, Juan's dashboard changes from the potential student dashboard to the instructor dashboard.

Another example:

Raymond is a Super Admin. He searches for `maria@example.com` and assigns Maria as the Admin for Filipino Skills Academy Dubai. Maria can now manage users, programs, courses, and classes for that academy.

The system should be designed so that future roles can be activated and assigned without major redevelopment.

### 3.5 Program & Course Management

The Program & Course Management module is used to define the academy's learning offerings.

This module manages the academic structure of the academy, including programs, courses, subjects, course requirements, and course prerequisites. It acts as the master setup before classes or batches can be scheduled or opened for student registration.

The recommended structure is:

Program -> Course -> Subject

Examples:

- Healthcare Program -> Basic Caregiving Course -> Elderly Care, First Aid, Basic Nursing Skills
- Language Program -> Basic English Course -> Grammar, Vocabulary, Conversation Practice
- Computer Skills Program -> Microsoft Excel for Beginners -> Basic Formulas, Formatting, Charts, Data Filtering

This module may include:

- Program creation
- Program description
- Program status
- Program visibility
- Course creation
- Course description
- Course level
- Course duration
- Course requirements
- Course fees, if applicable
- Course visibility
- Subject creation
- Subject description
- Course prerequisite setup
- Program, course, and subject status

For Phase 1, this module should support the creation and management of programs and courses. If subjects are part of the initial academic structure, subject setup may also be included.

#### 3.5.1 Program Management

A Program represents a broad area of learning offered by the academy.

Examples of programs:

- Healthcare Program
- Language Program
- Computer Skills Program
- Business Program
- Hospitality Program
- Caregiving Program
- Professional Development Program

A program may contain one or more courses.

Example:

The Healthcare Program may contain:

- Basic Caregiving
- Advanced Caregiving
- First Aid Training
- Elderly Care Support

Program information may include:

- Program name
- Program code
- Program description
- Program category
- Program image or thumbnail, optional
- Program visibility
- Program status
- Created by
- Created date
- Updated by
- Updated date

Possible program statuses include:

- Draft
- Active
- Inactive
- Archived

Example of program status usage:

- Draft: Healthcare Program is still being prepared and is not visible to potential students.
- Active: Healthcare Program is available and visible to potential students.
- Inactive: Healthcare Program is temporarily not offered.
- Archived: Healthcare Program is no longer offered but kept for historical records.

#### 3.5.2 Course Management

A Course represents a specific learning offering under a program.

Examples of courses:

- Basic Caregiving
- Advanced Caregiving
- Basic English
- Intermediate English
- Microsoft Excel for Beginners
- Food Safety Training
- Office Administration
- Customer Service Basics

A course may belong to one program and may contain one or more subjects or learning components.

Example:

The Language Program may contain:

- Basic English
- Intermediate English
- Business English
- Arabic for Beginners

Course information may include:

- Course name
- Course code
- Program
- Course description
- Course level
- Course duration
- Course requirements
- Course fee, if applicable
- Course image or thumbnail, optional
- Course visibility
- Course status
- Prerequisite requirement
- Created by
- Created date
- Updated by
- Updated date

Possible course statuses include:

- Draft
- Active
- Inactive
- Archived

Example of course status usage:

- Draft: Basic English course details are still being prepared.
- Active: Basic English is available for class scheduling and browsing.
- Inactive: Basic English is temporarily not available.
- Archived: Basic English is no longer offered but kept for historical reporting.

#### 3.5.3 Course Prerequisites

Some courses in Academiya may require students to complete one or more prerequisite courses before they are allowed to register for or enroll in the course.

This requirement should be managed as part of course setup.

When creating or updating a course, an authorized user should be able to define whether the course has prerequisites. If prerequisites are required, the user should be able to select one or more existing courses that must be completed before the student can take the course.

Examples:

- Advanced Caregiving may require completion of Basic Caregiving.
- Intermediate English may require completion of Basic English.
- Advanced Computer Skills may require completion of Computer Literacy.
- Business English may require completion of Intermediate English.

The system should support the following prerequisite setup:

- No prerequisite required
- One prerequisite course required
- Multiple prerequisite courses required
- Prerequisite based on completed course status
- Prerequisite based on passed course status, if exam or assessment results are included
- Prerequisite visibility when students view course information

For Phase 1, Academiya should allow authorized users to define prerequisite courses during course creation or course update.

Example:

Maria creates a course called Advanced Caregiving. She enables prerequisites and selects Basic Caregiving as the required prerequisite course. When Ana views Advanced Caregiving, the course details should clearly show: "Prerequisite: Basic Caregiving must be completed before taking this course."

In future phases, when class registration, admission, enrollment, exams, and completion tracking are fully available, the system should automatically check whether the student has completed the required prerequisite courses before allowing registration or enrollment.

#### 3.5.4 Subject Management

A Subject represents a specific topic, lesson area, or learning component within a course.

Examples of subjects:

- Elderly Care
- First Aid
- Basic Nursing Skills
- Grammar
- Conversation Practice
- Spreadsheet Basics
- Formulas and Functions
- Food Safety Principles

Examples:

- Healthcare Program -> Basic Caregiving Course -> Elderly Care, First Aid, Basic Nursing Skills
- Computer Skills Program -> Microsoft Excel for Beginners -> Spreadsheet Basics, Formatting, Formulas and Functions, Charts, Data Filtering

Subject information may include:

- Subject name
- Subject code
- Related course
- Subject description
- Subject duration
- Assigned instructor, if applicable
- Subject status

For Phase 1, subject management may be included if the academy needs to assign instructors to specific subjects. If not included in Phase 1, the system should still be designed to support subjects in future phases.

### 3.6 Class Scheduling & Class Management

The Class Scheduling & Class Management module is used to manage actual classes or batches that students can join.

A course defines what will be taught. A class defines when it will be taught, who will teach it, where it will happen, how it will be delivered, and how many students can join.

The recommended structure is:

Course -> Class / Batch -> Sessions

Examples:

- Basic Caregiving Course -> Basic Caregiving Batch 2026-A -> Every Saturday, 9:00 AM to 12:00 PM
- Microsoft Excel for Beginners -> Excel Batch 2026-B -> Every Sunday, 2:00 PM to 5:00 PM

For Phase 1, this module should focus on basic class scheduling. This means authorized users should be able to schedule new classes based on existing active programs and courses.

This module may include:

- Class or batch creation
- Related program
- Related course
- Class name or batch name
- Class schedule
- Class start date
- Class end date
- Class capacity
- Assigned instructor
- Class location
- Online class link, if applicable
- Delivery mode
- Class visibility
- Class status

Possible class statuses include:

- Draft
- Scheduled
- Open for Registration
- Ongoing
- Completed
- Cancelled

Example of class status usage:

- Draft: Basic English Batch 2026-A is still being prepared and is not visible to potential students.
- Scheduled: Basic English Batch 2026-A has a planned schedule but is not yet open for registration.
- Open for Registration: Basic English Batch 2026-A is accepting student registrations.
- Ongoing: Basic English Batch 2026-A has already started and is no longer accepting registration.
- Completed: Basic English Batch 2026-A has finished and is shown as historical activity.
- Cancelled: Basic English Batch 2026-A was cancelled and may be hidden or shown depending on academy preference.

For Phase 1, the required class scheduling capabilities may include:

- Create a new scheduled class
- Select the related program and course
- Assign an instructor, if available
- Define the class schedule
- Define the class start and end date
- Define the class capacity
- Define whether the class is online, onsite, or hybrid
- Save the class as draft, scheduled, open for registration, ongoing, completed, or cancelled
- View scheduled classes
- Update scheduled class details
- Cancel a scheduled class, if needed

Example:

Maria schedules Basic Caregiving Batch 2026-A with the following details:

- Program: Healthcare Program
- Course: Basic Caregiving
- Instructor: Liza Santos
- Start Date: August 1, 2026
- End Date: September 26, 2026
- Schedule: Every Saturday, 9:00 AM to 12:00 PM
- Capacity: 25 students
- Delivery Mode: Onsite
- Location: Dubai Campus Room 101
- Status: Open for Registration

In future phases, this module may expand to include student enrollment, session-level attendance, learning materials, exams, class completion, and certification.

### 3.7 Admissions & Enrollment

The Admissions & Enrollment module manages the student journey from registration interest to confirmed enrollment.

This module supports student applications, class registration, admission review, approval, and enrollment into a class or batch.

This module may include:

- Student class registration
- Application form
- Required documents
- Application review
- Admission status
- Enrollment approval
- Enrollment confirmation
- Student class assignment
- Prerequisite validation before enrollment

The recommended student flow is:

Registered User / Potential Student -> Applicant -> Admitted -> Enrolled -> Active Student

Example:

Ana is a Registered User / Potential Student. She sees that Basic Caregiving Batch 2026-A is open for registration. She submits a class application. The Admission Staff reviews her application, approves it, and marks her as enrolled. Ana then becomes an active student for that class.

Another example:

Rico wants to register for Advanced Caregiving Batch 2026-B. The system checks that Advanced Caregiving requires Basic Caregiving as a prerequisite. If Rico has not completed Basic Caregiving, the system should prevent the enrollment and display the missing prerequisite.

This module is not part of the main Phase 1 scope unless class registration is included. However, the system should be designed so that future admissions and enrollment processes can use the existing user, course, prerequisite, and class scheduling data.

### 3.8 Learning Materials

The Learning Materials module is used to manage and distribute learning content to students and instructors.

This module allows authorized users to upload, organize, and share materials based on program, course, subject, class, or session.

This module may include:

- PDF uploads
- Video links
- Document files
- Presentation files
- Lesson notes
- Assignment files
- External learning links
- Material visibility control

Examples:

- A Content Manager uploads Basic Caregiving Module 1.pdf and links it to the Basic Caregiving course.
- An Instructor adds a video link called Introduction to Elderly Care and assigns it to the Elderly Care subject.
- A PDF file called Excel Formula Practice Sheet.pdf is attached to the Formulas and Functions subject under Microsoft Excel for Beginners.

This module is planned for a future phase unless included in the Phase 1 scope. When implemented, it should connect to programs, courses, subjects, classes, or sessions.

### 3.9 Attendance Management

The Attendance Management module is used to record and monitor student attendance.

Attendance may be recorded per class session and can be used as one of the requirements for course completion and certificate eligibility.

This module may include:

- Session attendance
- Present, absent, late, and excused statuses
- Attendance percentage
- Attendance summary
- Attendance correction
- Attendance reports
- Instructor attendance submission

Example:

For Basic English Batch 2026-A, the Instructor records attendance for the session on August 8, 2026.

Attendance status examples:

- Ana: Present
- Juan: Late
- Rico: Absent
- Liza: Excused

Another example:

The academy requires students to attend at least 80% of sessions to become eligible for a certificate. If a student attends only 60%, the system should mark the student as not meeting the attendance requirement.

This module is planned for a future phase. When implemented, it should connect to scheduled classes, enrolled students, instructors, and class sessions.

### 3.10 Exam & Assessment Management

The Exam & Assessment Management module is used to manage student evaluations.

This module supports exams, quizzes, assignments, practical assessments, scoring, grading, and pass or fail decisions.

This module may include:

- Exams
- Quizzes
- Assignments
- Practical assessments
- Exam schedules
- Score entry
- Grade calculation
- Pass or fail status
- Assessment reports

Examples:

- For Microsoft Excel for Beginners, the final assessment may include a practical test to create a spreadsheet with formulas and charts, with a passing score of 75%.
- For Basic Caregiving, the assessment may include a written quiz, practical demonstration, and instructor evaluation.

This module is planned for a future phase. When implemented, assessment results may be used to determine course completion, prerequisite completion, and certificate eligibility.

### 3.11 Certification Management

The Certification Management module is used to manage certificate eligibility, generation, approval, and issuance.

Certificates may be issued after a student completes the required attendance, assessments, and course requirements.

This module may include:

- Certificate eligibility checking
- Certificate templates
- Certificate generation
- Certificate approval
- Certificate number
- Certificate issue date
- Certificate download
- Certificate verification
- Certificate records

Example:

Ana completes Basic Caregiving Batch 2026-A, attends at least 80% of sessions, and passes the final assessment. The system marks her as eligible for a certificate. The Certificate Officer reviews her record and issues a certificate with a unique certificate number.

Another example:

Rico completes the course but fails the final assessment. The system does not mark him as eligible for certification until he passes the required assessment.

This module is planned for a future phase. When implemented, it should use data from enrollment, attendance, assessments, and course completion records.

### 3.12 Notification & Announcement Management

The Notification & Announcement Management module will be used to send important messages, announcements, alerts, and reminders to users.

This module is not included in Phase 1, but it should be planned as part of the future product roadmap. The system design should allow future notifications and announcements to connect with users, classes, schedules, payments, certificates, and other modules.

Notifications and announcements may be used for:

- Academy-wide announcements
- Class-specific announcements
- Schedule change notifications
- Course update notifications
- Payment reminders
- Certificate availability notifications
- System alerts
- General user notifications

Examples:

- The academy sends an announcement: "Early bird discount available for Basic Caregiving Batch 2026-A until July 31."
- The schedule for Basic English Batch 2026-B changes from Saturday to Sunday. The system notifies enrolled students and the assigned Instructor.
- A student has an upcoming installment payment due. The system sends a payment reminder.
- A student's certificate is ready for download. The system sends a notification.

The module should support targeted communication. For example, an announcement may be sent to:

- All registered users
- All students
- Students in a specific class
- Instructors
- Users with pending payments
- Users enrolled in a specific program or course

For future implementation, notifications may be delivered through:

- In-app notifications
- Email notifications
- Mobile push notifications
- SMS notifications, if supported later

This module should include notification history so users can view previous announcements and alerts.

### 3.13 Payment Management

The Payment Management module will be used to manage course fees, online payments, installment payments, payment transactions, refunds, reversals, and finance-related controls.

This module is not included in Phase 1, but it should be planned as part of the future product roadmap. The system design should allow future payment features to connect with class registration, admission, enrollment, invoices, receipts, payment reminders, and finance reports.

Payment Management may include:

- Course fee setup
- Class fee setup
- Online payment
- Multiple payment or installment support
- Payment due dates
- Payment reminders
- Payment transaction history
- Payment status tracking
- Invoice generation
- Receipt generation
- Refund handling
- Payment reversal
- Finance approval controls
- Payment gateway integration
- Finance Staff configuration panel
- Transaction search and reconciliation
- Failed transaction handling

Examples:

- A student registers for Basic Caregiving Batch 2026-A with a course fee of AED 1,200. The student pays online using the available payment gateway.
- The academy allows the course fee to be paid in three installments: AED 400 upon registration, AED 400 before the second month, and AED 400 before course completion.
- A student misses an installment due date. The system sends a payment reminder through the Notification & Announcement Management module.
- A payment is accidentally recorded twice. Finance Staff reviews the transaction and performs a payment reversal.
- Finance Staff searches executed transactions for Basic English Batch 2026-B to reconcile payment records with the payment gateway or bank records.

The Payment Management module should include proper permission control. Only authorized finance users should be allowed to:

- View payment transactions
- Configure payment rules
- Reverse payments
- Check executed transactions
- Reconcile payments
- Manage refunds
- Access finance reports

This module should be designed carefully because payment activities are financially sensitive and may require audit logs, approval rules, and transaction history.

### 3.14 Reports & Analytics

The Reports & Analytics module provides operational and academic insights for authorized users.

This module helps Super Admins, Admins, and future Academy Managers monitor performance, track progress, and make decisions.

This module may include:

- User reports
- Role assignment reports
- Program reports
- Course reports
- Course prerequisite reports
- Class schedule reports
- Class status reports
- Student reports
- Enrollment reports
- Attendance reports
- Exam reports
- Certificate reports
- Instructor reports
- Academy reports
- Platform-level reports

For Phase 1, reports may be limited to available data, such as registered users, role assignments, programs, courses, prerequisites, and scheduled classes.

Example Phase 1 reports:

- List of registered users
- Users without assigned operational roles
- Users assigned as Instructors
- Active programs
- Active courses
- Courses with prerequisites
- Scheduled classes by status
- Classes open for registration
- Ongoing classes
- Completed classes

Future reports should only be available when the related modules are implemented and real data exists in the system.

Example future reports:

- Enrollment summary by class
- Attendance percentage by student
- Assessment results by course
- Certificate issuance report
- Revenue report, if payment features are implemented

### 3.15 Settings & Configuration

The Settings & Configuration module is used to manage system, academy, and operational settings.

This module allows authorized users to configure rules, preferences, templates, and setup information required by the platform.

This module may include:

- Academy settings
- Role and permission settings
- Program categories
- Course categories
- Course levels
- Class delivery modes
- Class statuses
- Visibility settings
- Email verification settings
- Password policy settings
- Attendance rules
- Grading rules
- Certificate templates
- Notification settings
- System preferences
- General configuration

For Phase 1, settings may focus on basic account, role, academy, program, course, and class scheduling configurations.

Example Phase 1 settings:

- Course Levels: Beginner, Intermediate, Advanced
- Delivery Modes: Onsite, Online, Hybrid
- Class Statuses: Draft, Scheduled, Open for Registration, Ongoing, Completed, Cancelled
- Program Visibility: Hidden, Visible to Registered Users
- Password Policy: Minimum 8 characters

In future phases, this module may expand to support attendance rules, grading rules, certificate templates, notification preferences, payment settings, and integration settings.

Example future settings:

- Attendance Requirement: Minimum 80%
- Passing Score: Minimum 75%
- Certificate Template: Filipino Skills Academy Standard Certificate
- Payment Methods: Cash, Bank Transfer, Online Payment

### 3.16 Phase 1 Module Summary

For Phase 1, Academiya should focus on the following modules and capabilities:

1. Authentication & Account Access
   - User registration
   - Email verification using a "Verify this email" link
   - Email and password login
   - Account activation and deactivation
   - Example: Juan registers using his email address, verifies the email, and logs in as a Registered User / Potential Student.
2. User & Role Management
   - User search
   - Role assignment
   - Role-based access control
   - Support for current and future roles
   - Example: Maria searches for Juan and assigns him as an Instructor for Microsoft Excel for Beginners.
3. Program & Course Management
   - Program creation
   - Course creation
   - Course prerequisite setup
   - Optional subject setup, if needed for instructor assignment
   - Example: Maria creates Healthcare Program, Basic Caregiving, and Advanced Caregiving. She sets Basic Caregiving as a prerequisite for Advanced Caregiving.
4. Class Scheduling & Class Management
   - Basic class scheduling
   - Course-based class creation
   - Instructor assignment
   - Schedule, capacity, location, delivery mode, and class status setup
   - Example: Maria schedules Basic Caregiving Batch 2026-A every Saturday from 9:00 AM to 12:00 PM.
5. Program, Course, and Class Browsing
   - Registered Users / Potential Students can browse programs, courses, open classes, ongoing classes, and completed classes.
   - Example: Ana logs in and views open, ongoing, and completed classes to understand what the academy offers.
6. Dashboard
   - Role-based dashboard
   - Real data only from available Phase 1 modules
   - Quick access to user, role, program, course, and class scheduling functions
   - Example: An Admin dashboard shows total users, active courses, and scheduled classes based on real Phase 1 data.
7. Reports & Settings
   - Basic reports and configuration related to Phase 1 modules only
   - Example: Admin views a report of all courses with prerequisites and all classes open for registration.

The Phase 1 implementation should establish the foundation of Academiya while preparing the system structure for future modules such as admissions, enrollment, learning materials, attendance, exams, assessments, certifications, payments, and advanced analytics.

Notification & Announcement Management and Payment Management are not included in Phase 1. However, the Phase 1 architecture should be prepared so these modules can be added later without major redevelopment.

For example, class schedules should be designed so future schedule changes can trigger notifications. Course and class fee fields should be designed carefully so future online payment and installment features can connect to them.

## 4. Core Business Processes

Academiya will support several core business processes that represent how users interact with the platform and how academy operations are performed.

For Phase 1, the main business processes will focus on establishing the foundation of the platform:

1. User registration and email verification
2. User login and account access
3. Default Registered User / Potential Student access
4. Role assignment
5. Program creation and management
6. Course creation and management
7. Course prerequisite setup
8. Basic class scheduling
9. Program, course, and class browsing
10. Dashboard data display based on available Phase 1 modules

Future business processes such as student admission, enrollment, learning materials, attendance, exams, assessments, certifications, and payments will be added in later phases.

### 4.1 User Registration Process

The User Registration Process allows any user to create a basic Academiya account through the web application or mobile application.

All users must go through the same registration process before they can access Academiya. This includes Super Admin, Admin, Instructor, Student, Admission Staff, Finance Staff, Content Manager, Certificate Officer, and other future roles.

For Phase 1, user registration will use email-based verification only. The system will send a verification email containing a "Verify this email" link. The user must click the link to verify the email address and complete account verification.

The registration process creates a basic user account. By default, every newly registered and verified user is considered a Registered User / Potential Student.

A registered user does not automatically become an enrolled student. The user only becomes an enrolled student after completing the class registration, admission, or enrollment process in a future phase.

#### Recommended Flow

Open Academiya -> Register Account -> Enter User Information -> Create Password -> Submit Registration -> Verification Email Sent -> Click "Verify this email" Link -> Account Verified -> Registered User / Potential Student Access

#### Process Description

1. The user opens Academiya through the web application or mobile application.
2. The user selects the registration option.
3. The user enters the required personal information.
4. The user provides a valid email address.
5. The user creates a password.
6. The user submits the registration form.
7. The system creates a unique User ID.
8. The system sends a verification email to the registered email address.
9. The user opens the verification email.
10. The user clicks the "Verify this email" link.
11. The system validates the verification link.
12. The user account is marked as verified.
13. The user receives default access as a Registered User / Potential Student.

#### Example

Ana downloads the Academiya mobile app from the Apple App Store. She registers using her email address and creates a password. After submitting the form, she receives an email with a "Verify this email" link.

Ana clicks the link. Her account is verified, and she can now log in as a Registered User / Potential Student.

After login, Ana can browse programs such as:

- Healthcare Program
- Language Program
- Computer Skills Program

She can also view courses and classes that are visible to registered users.

#### Another Example

Juan registers using `juan@example.com`, but he does not click the verification link. When Juan tries to log in, the system should prevent access and display a message such as:

"Please verify your email address before logging in. Check your inbox for the verification email."

#### Expected Result

After successful registration and email verification, the user has a verified basic Academiya account.

By default, the user can access student-facing discovery features, such as browsing available programs, courses, open classes, ongoing classes, and completed classes.

Mobile verification, SMS OTP, email OTP, social login, and other authentication methods are not included in Phase 1. These may be considered for future phases.

### 4.2 Login and Account Access Process

The Login and Account Access Process allows registered users to securely access Academiya.

For Phase 1, users should log in using their registered email address and password. Login using mobile number, OTP, or other authentication methods is not included in Phase 1.

After login, the system should check whether the user has an assigned operational role. If the user does not have a specific assigned role, the system should treat the user as a Registered User / Potential Student and display the default student-facing dashboard.

If the user has been assigned a specific role, such as Super Admin, Admin, or Instructor, the system should display the dashboard and features related to that role.

#### Recommended Flow

Open Academiya -> Login -> Enter Email and Password -> Validate Credentials -> Check Email Verification Status -> Check Account Status -> Check Assigned Role -> Display Default or Role-Based Dashboard

#### Process Description

1. The user opens the Academiya web application or mobile application.
2. The user enters the registered email address and password.
3. The system validates the login credentials.
4. The system checks whether the email address has been verified.
5. The system checks whether the account is active.
6. The system checks whether the account has an assigned operational role.
7. If the user has no assigned operational role, the system displays the Registered User / Potential Student dashboard.
8. If the user has an assigned role, the system applies role-based access control.
9. The user is redirected to the appropriate dashboard based on role and permission.

#### Example

Ana logs in using her verified email address and password. She has not been assigned any operational role. The system displays the Registered User / Potential Student Dashboard.

Ana can see:

- Available programs
- Available courses
- Classes open for registration
- Ongoing classes
- Completed classes

#### Another Example

Maria logs in using her verified email address and password. She has been assigned as Admin for Filipino Skills Academy Dubai. The system displays the Admin Dashboard.

Maria can see:

- Registered users in her academy
- Programs
- Courses
- Scheduled classes
- Users pending role assignment
- Quick links to role assignment and class scheduling

#### Expected Result

After successful login, the user can access features based on their current account status and assigned role.

If the user has not verified their email address, the system should prevent access and ask the user to verify the email first.

If the user does not have a specific assigned operational role, the system should not block the user. Instead, the user should receive default access as a Registered User / Potential Student.

### 4.3 Registered User / Potential Student Access Process

The Registered User / Potential Student Access Process allows newly registered users to explore the academy's learning offerings before applying for or enrolling in a class.

This process is important because every new user in Academiya is considered a potential student by default.

#### Recommended Flow

User Logs In -> System Detects No Assigned Operational Role -> Display Potential Student Dashboard -> User Browses Programs, Courses, and Classes

#### Process Description

1. The user logs in successfully.
2. The system checks the user's role assignment.
3. If no specific operational role is assigned, the system treats the user as a Registered User / Potential Student.
4. The system displays the default student-facing dashboard.
5. The user can browse available programs.
6. The user can view courses under each program.
7. The user can view classes that are open for registration.
8. The user can view ongoing classes that are already running.
9. The user can view completed or past classes as historical information.

#### Class Visibility for Potential Students

The system should display classes based on their status:

- Open for Registration: classes that the user may be allowed to register for
- Ongoing: classes that are already running and no longer available for registration
- Completed: historical classes that have already finished

Ongoing and completed classes should be visible even if registration is no longer allowed. This helps show that the academy is active, regularly runs classes, and has historical learning activity.

#### Example

Ana logs in as a Registered User / Potential Student. She opens the class list and sees:

- Basic Caregiving Batch 2026-A - Open for Registration
- Basic English Batch 2026-B - Ongoing
- Microsoft Excel Batch 2025-C - Completed

Ana can register interest in Basic Caregiving if registration is enabled. She cannot register for Basic English because it is already ongoing. She can view Microsoft Excel Batch 2025-C as historical information.

#### Another Example

Rico wants to understand whether the academy actively runs computer-related classes. He checks completed classes and sees:

- Microsoft Excel Batch 2025-A
- Microsoft Excel Batch 2025-B
- Computer Literacy Batch 2025-C

This helps Rico trust that the academy has experience running those classes.

#### Expected Result

A newly registered user can explore the academy's offerings without needing to wait for an Admin to assign a role.

The user remains a potential student until they register for a class, are admitted, are enrolled, or are assigned another role by an authorized user.

### 4.4 Role Assignment Process

The Role Assignment Process allows authorized users to assign specific operational roles to registered users.

This process is important because all users start from the same registration process. After registration and email verification, a user may remain as a Registered User / Potential Student or may be assigned a specific role by an authorized user.

When a role is assigned, the user's dashboard and available features should change based on the assigned role and permissions.

#### Recommended Flow

Authorized User Logs In -> Search Registered User -> View User Profile -> Assign Role -> Assign Scope -> Save -> User Gets Role-Based Access

#### Process Description

1. The authorized user logs in to Academiya.
2. The authorized user opens the User & Role Management module.
3. The authorized user searches for a registered user using User ID, email address, or name.
4. The system displays matching registered users.
5. The authorized user selects the correct user.
6. The authorized user assigns a role to the user.
7. If needed, the authorized user assigns the role scope, such as academy, program, course, subject, or class.
8. The system saves the role assignment.
9. The assigned user receives access based on the assigned role and scope.
10. The assigned user's dashboard changes based on the new role and permissions.

#### Role Assignment Examples

- A Super Admin assigns a registered user as an Admin for a specific academy.
- An Admin assigns a registered user as an Instructor.
- An Admin assigns an Instructor to a specific subject, course, or scheduled class.
- An Admin assigns a registered user as Admission Staff, Finance Staff, Content Manager, or Certificate Officer when those roles are activated.
- A registered user remains as a Potential Student if no operational role is assigned.

#### Example

Raymond is the Super Admin. He searches for Maria using her email address and assigns her as Admin for Filipino Skills Academy Dubai.

After the assignment, Maria can manage academy-level data, such as users, programs, courses, and class schedules for Filipino Skills Academy Dubai.

#### Another Example

Maria is an Admin. She searches for Juan using his User ID. Juan is currently a Registered User / Potential Student. Maria assigns Juan as an Instructor for the Microsoft Excel for Beginners course.

After the assignment, Juan's dashboard changes to the Instructor Dashboard. Juan can now view his assigned course and scheduled classes.

#### Expected Result

The assigned user can access features based on the assigned role and scope.

The system must prevent users from accessing modules, records, or actions outside their assigned role and permission.

### 4.5 Program Creation and Management Process

The Program Creation and Management Process allows authorized users to define the academy's broad learning categories.

A program acts as the parent structure for courses. Programs may also be visible to Registered Users / Potential Students if the program status allows student-facing visibility.

#### Recommended Flow

Open Program Management -> Create Program -> Enter Program Details -> Save as Draft or Activate -> Program Available for Course Setup and Browsing

#### Process Description

1. The authorized user opens the Program & Course Management module.
2. The user selects the option to create a new program.
3. The user enters program information such as program name, code, description, category, and status.
4. The user defines whether the program is visible to potential students, if visibility control is included.
5. The user saves the program as Draft or Active.
6. The system stores the program record.
7. If the program is Active and visible, it becomes available for course creation and student-facing browsing.

#### Program Statuses

Possible program statuses include:

- Draft
- Active
- Inactive
- Archived

#### Example

Maria creates a new program with the following details:

- Program Name: Healthcare Program
- Program Code: HLTH
- Category: Healthcare
- Description: Courses related to caregiving, elderly care, first aid, and health support skills
- Status: Active
- Visibility: Visible to Registered Users

After saving, the Healthcare Program becomes visible to Registered Users / Potential Students.

#### Another Example

Maria creates a Hospitality Program, but the course details are not ready yet. She saves the program as Draft. Since it is still in Draft status, potential students should not see it.

#### Expected Result

The program is created and can be used as the parent structure for related courses.

If the program is active and visible, Registered Users / Potential Students can view the program in the program list.

### 4.6 Course Creation and Management Process

The Course Creation and Management Process allows authorized users to create specific courses under a program.

A course defines what students will learn. Later, classes or batches can be scheduled based on the course.

Courses may also be visible to Registered Users / Potential Students if the course status allows student-facing visibility.

#### Recommended Flow

Open Course Management -> Select Program -> Create Course -> Enter Course Details -> Define Prerequisite if Required -> Save as Draft or Activate -> Course Available for Class Scheduling and Browsing

#### Process Description

1. The authorized user opens the Program & Course Management module.
2. The user selects the related program.
3. The user creates a new course under the selected program.
4. The user enters course information such as course name, code, description, level, duration, requirements, fee, and status.
5. The user defines whether the course has prerequisites.
6. The user defines whether the course is visible to potential students, if visibility control is included.
7. The user saves the course as Draft or Active.
8. If the course is Active and visible, it becomes available for class scheduling and student-facing browsing.

#### Course Statuses

Possible course statuses include:

- Draft
- Active
- Inactive
- Archived

#### Example

Maria creates a course under the Healthcare Program:

- Program: Healthcare Program
- Course Name: Basic Caregiving
- Course Code: CARE-BASIC
- Level: Beginner
- Duration: 8 weeks
- Requirement: No prior caregiving experience required
- Fee: AED 1,200
- Status: Active
- Visibility: Visible to Registered Users

After saving, Basic Caregiving becomes available for class scheduling and browsing.

#### Another Example

Maria creates Advanced Caregiving under Healthcare Program. She sets the course level as Advanced and adds a prerequisite requirement: Basic Caregiving.

When potential students view Advanced Caregiving, they should see that Basic Caregiving is required first.

#### Expected Result

The course is created under the selected program and can be used for class scheduling once active.

If the course is active and visible, Registered Users / Potential Students can view the course information.

### 4.7 Course Prerequisite Setup Process

The Course Prerequisite Setup Process allows authorized users to define whether a course requires students to complete another course before taking it.

This process is part of course setup.

#### Recommended Flow

Create or Edit Course -> Enable Prerequisite Requirement -> Select Required Course or Courses -> Save Course -> Prerequisite Rule Created

#### Process Description

1. The authorized user creates or edits a course.
2. The user selects whether the course requires prerequisites.
3. If prerequisites are required, the user selects one or more existing courses.
4. The system saves the prerequisite rule.
5. The prerequisite information becomes visible in the course details, if the course is visible to potential students.

#### Prerequisite Setup Options

The system should support:

- No prerequisite required
- One prerequisite course required
- Multiple prerequisite courses required
- Prerequisite based on completed course status
- Prerequisite based on passed course status, when exam or assessment results are available in future phases

#### Example

Maria creates Advanced Caregiving and selects Basic Caregiving as a prerequisite.

The course details should show:

"Prerequisite: Basic Caregiving must be completed before taking Advanced Caregiving."

#### Another Example

For the Business English course, Maria sets two prerequisites:

- Basic English
- Intermediate English

This means students should complete both Basic English and Intermediate English before taking Business English.

#### Future Validation Example

In a future phase, Rico tries to register for Advanced Caregiving Batch 2026-B. The system checks Rico's learning history and finds that he has not completed Basic Caregiving.

The system should prevent registration and display a message such as:

"You must complete Basic Caregiving before registering for Advanced Caregiving."

#### Expected Result

The course prerequisite rule is stored and associated with the course.

For Phase 1, the system should allow prerequisites to be defined and displayed in the course details where applicable.

In future phases, the system should validate prerequisites during class registration, admission, or enrollment.

### 4.8 Basic Class Scheduling Process

The Basic Class Scheduling Process allows authorized users to create scheduled classes based on active courses.

A course defines what will be taught. A scheduled class defines when the course will run, who will teach it, where it will happen, and how many students can join.

For Phase 1, scheduled classes may be visible to Registered Users / Potential Students based on class status and visibility rules.

#### Recommended Flow

Open Class Scheduling -> Create New Class -> Select Program and Course -> Assign Instructor -> Enter Schedule Details -> Set Capacity and Location -> Save as Draft, Scheduled, Open, Ongoing, Completed, or Cancelled

#### Process Description

1. The authorized user opens the Class Scheduling & Class Management module.
2. The user creates a new class or batch.
3. The user selects the related program.
4. The user selects the related active course.
5. The user enters the class name or batch name.
6. The user assigns an Instructor, if available.
7. The user defines the class start date and end date.
8. The user defines the class schedule.
9. The user defines class capacity.
10. The user defines whether the class is onsite, online, or hybrid.
11. The user enters the class location or online meeting link, if applicable.
12. The user sets the class status.
13. The user saves the class.

#### Class Statuses

Possible class statuses include:

- Draft
- Scheduled
- Open for Registration
- Ongoing
- Completed
- Cancelled

For Phase 1, the system should support class statuses needed for student-facing browsing:

- Draft: class is still being prepared and should not be visible to potential students
- Scheduled: class has been scheduled but may not yet be open for registration
- Open for Registration: class is available for users to register for, if registration is enabled
- Ongoing: class is already running and no longer open for registration
- Completed: class has already finished and is shown as historical activity
- Cancelled: class has been cancelled and may be hidden or shown depending on academy preference

#### Example

Maria schedules a class with the following details:

- Class Name: Basic Caregiving Batch 2026-A
- Program: Healthcare Program
- Course: Basic Caregiving
- Instructor: Liza Santos
- Start Date: August 1, 2026
- End Date: September 26, 2026
- Schedule: Every Saturday, 9:00 AM to 12:00 PM
- Capacity: 25 students
- Delivery Mode: Onsite
- Location: Dubai Campus Room 101
- Status: Open for Registration

Potential students can see this class because the status is Open for Registration.

#### Another Example

Maria schedules Basic English Batch 2026-B and sets the status as Ongoing because the class has already started.

Potential students can see the class, but the system should not allow registration because the class is already ongoing.

#### Expected Result

A scheduled class is created and becomes available for viewing by authorized users.

If the class status allows student-facing visibility, Registered Users / Potential Students can view the class in the class list.

In future phases, scheduled classes may be connected to student registration, admission, enrollment, attendance, exams, and certification.

### 4.9 Program, Course, and Class Browsing Process

The Program, Course, and Class Browsing Process allows Registered Users / Potential Students to explore the academy's offerings.

This process helps users understand what programs and courses are available, which classes are open for registration, which classes are currently running, and which classes have been completed in the past.

#### Recommended Flow

Potential Student Logs In -> Opens Programs or Classes -> Views Programs -> Views Courses -> Views Class List by Status -> Opens Class Details

#### Process Description

1. The Registered User / Potential Student logs in.
2. The user opens the program, course, or class browsing area.
3. The system displays active and visible programs.
4. The user selects a program to view related courses.
5. The system displays active and visible courses under the selected program.
6. The user selects a course to view course details.
7. The system displays course information, including prerequisites if applicable.
8. The user views classes related to the course.
9. The system displays classes based on status and visibility rules.
10. The user opens class details to view schedule, instructor, location, delivery mode, and registration availability.

#### Class Browsing Categories

Classes may be grouped into:

- Open for Registration
- Ongoing Classes
- Completed Classes

#### Example

Ana logs in and opens the Healthcare Program.

She sees the following courses:

- Basic Caregiving
- Advanced Caregiving
- First Aid Training

She opens Advanced Caregiving and sees:

- Duration: 10 weeks
- Level: Advanced
- Prerequisite: Basic Caregiving
- Available Classes:
  - Advanced Caregiving Batch 2026-B - Scheduled
  - Advanced Caregiving Batch 2025-C - Completed

#### Another Example

Rico opens the Computer Skills Program and sees:

- Computer Literacy
- Microsoft Excel for Beginners
- Microsoft Excel Intermediate

He opens Microsoft Excel for Beginners and sees:

- Excel Batch 2026-A - Open for Registration
- Excel Batch 2026-B - Ongoing
- Excel Batch 2025-C - Completed

This helps Rico understand what he can register for and what classes the academy has already delivered.

#### Expected Result

Registered Users / Potential Students can browse available programs, courses, and class activity.

The system should clearly indicate whether a class is open for registration, already ongoing, or completed.

### 4.10 Dashboard Data Display Process

The Dashboard Data Display Process defines how users see summary information after login.

For Phase 1, the dashboard should only display real data from available Phase 1 modules.

The dashboard must be dynamic. This means the dashboard content should change based on whether the user is a Registered User / Potential Student or has been assigned a specific operational role.

#### Recommended Flow

User Logs In -> System Identifies Role and Permissions -> System Loads Allowed Data -> Dashboard Displays Default or Role-Based Content

#### Process Description

1. The user logs in successfully.
2. The system checks the user's email verification status and account status.
3. The system identifies whether the user has an assigned operational role.
4. If the user has no assigned operational role, the system displays the Registered User / Potential Student dashboard.
5. If the user has an assigned role, the system displays the dashboard related to that role.
6. The system checks the user's permissions and data access scope.
7. The system retrieves real data from available Phase 1 modules.
8. The dashboard displays relevant information and quick links.
9. The dashboard hides information from modules that are not yet implemented or not allowed for the user.

#### Phase 1 Dashboard Data for Registered Users / Potential Students

The default student-facing dashboard may display:

- Available programs
- Available courses
- Courses with prerequisites
- Classes open for registration
- Ongoing classes
- Completed classes
- Registration status, if class registration is enabled
- Profile information
- Account status

#### Phase 1 Dashboard Data for Admin and Super Admin Users

The Admin and Super Admin dashboards may display:

- Total registered users
- Users by role
- Users without assigned operational roles
- Active and inactive users
- Total programs
- Active programs
- Draft programs
- Total courses
- Active courses
- Draft courses
- Courses with prerequisites
- Total scheduled classes
- Upcoming scheduled classes
- Draft classes
- Classes open for registration
- Ongoing classes
- Completed classes
- Quick links to user, role, program, course, and class scheduling modules

#### Phase 1 Dashboard Data for Instructor Users

The Instructor dashboard may display:

- Assigned programs
- Assigned courses
- Assigned subjects, if applicable
- Assigned scheduled classes
- Upcoming scheduled classes
- Ongoing assigned classes
- Profile information
- Account status

#### Example

Ana logs in as a Registered User / Potential Student. Her dashboard shows:

- Healthcare Program
- Language Program
- Basic Caregiving
- Basic English
- Classes open for registration
- Ongoing classes
- Completed classes

#### Another Example

Maria logs in as Admin. Her dashboard shows:

- 320 registered users
- 12 instructors
- 5 active programs
- 22 active courses
- 6 classes open for registration
- 9 ongoing classes
- 18 completed classes

#### Another Example

Juan logs in as Instructor. His dashboard shows:

- Assigned Course: Microsoft Excel for Beginners
- Assigned Class: Excel Batch 2026-A
- Schedule: Sunday, 2:00 PM to 5:00 PM
- Delivery Mode: Onsite
- Location: Dubai Campus Room 204

#### Expected Result

Users see a dashboard that is accurate, role-based, and based only on real available system data.

The dashboard should not show dummy, placeholder, or misleading information.

### 4.11 Future Business Processes

The following business processes are planned for future phases.

#### 4.11.1 Admissions and Enrollment Process

This process will manage how students apply for classes, submit required information, receive admission approval, and become enrolled students.

Future flow:

Registered User -> Class Application -> Admission Review -> Approval -> Enrollment -> Active Student

Example:

Ana applies for Basic Caregiving Batch 2026-A. Admission Staff reviews her application, confirms her information, approves the application, and marks Ana as enrolled.

#### 4.11.2 Learning Materials Process

This process will allow authorized users to upload and manage learning materials such as PDFs, videos, links, slides, documents, and assignments.

Future flow:

Create Material -> Link to Program, Course, Subject, Class, or Session -> Publish -> Student Access

Example:

A Content Manager uploads Basic Caregiving Module 1.pdf and links it to the Basic Caregiving course. Enrolled students can access the PDF from their Student dashboard.

#### 4.11.3 Attendance Process

This process will allow Instructors or authorized users to record attendance for each class session.

Future flow:

Open Class Session -> Mark Attendance -> Submit Attendance -> Attendance Summary Updated

Example:

For Basic English Batch 2026-A, the Instructor marks Ana as Present, Rico as Late, and Juan as Absent for the session on August 8, 2026.

#### 4.11.4 Exam and Assessment Process

This process will allow authorized users to create exams, quizzes, assignments, practical assessments, enter scores, and determine pass or fail status.

Future flow:

Create Assessment -> Assign to Class -> Student Completes Assessment -> Score Recorded -> Result Published

Example:

For Microsoft Excel for Beginners, students complete a practical assessment where they must create a spreadsheet with formulas and charts. A score of 75% or higher is required to pass.

#### 4.11.5 Certification Process

This process will allow certificates to be generated and issued after students meet completion requirements.

Future flow:

Check Eligibility -> Generate Certificate -> Approve Certificate -> Issue Certificate -> Student Downloads Certificate

Example:

Ana completes Basic Caregiving Batch 2026-A, meets the 80% attendance requirement, and passes the final assessment. The Certificate Officer approves her certificate, and Ana can download it from her dashboard.

#### 4.11.6 Notification and Announcement Process

The Notification and Announcement Process will manage how announcements, alerts, reminders, and system notifications are created, targeted, sent, and viewed by users.

This process is not included in Phase 1, but it should be planned for a future phase.

Future flow:

Create Announcement or Notification -> Select Target Audience -> Send Notification -> User Receives Notification -> User Views Notification

This process may support different types of communication, such as academy-wide announcements, class-specific announcements, schedule changes, payment reminders, certificate availability alerts, and general system notifications.

Examples:

- An Admin creates an academy-wide announcement: "Early bird discount available for Basic Caregiving Batch 2026-A until July 31."
- The schedule for Basic English Batch 2026-B changes from Saturday to Sunday. The system sends a notification to enrolled students and the assigned Instructor.
- A student has an upcoming installment payment due. The system sends a payment reminder before the due date.
- A student's certificate is ready for download. The system sends a notification to the student.
- The academy sends a general announcement to all registered users about a new Computer Skills Program.

The notification process should support targeted communication. For example, notifications may be sent to:

- All registered users
- Registered Users / Potential Students
- Students enrolled in a specific class
- Instructors assigned to a specific class
- Users with pending payments
- Users under a specific program or course
- Admin or staff users

The system should also maintain notification history so users can view previous announcements and alerts.

In future implementation, notifications may be delivered through in-app notifications, email notifications, mobile push notifications, or SMS notifications if supported later.

#### 4.11.7 Online Payment and Finance Process

The Online Payment and Finance Process will manage how users make payments online and how Finance Staff tracks, verifies, reverses, and reconciles payment transactions.

This process is not included in Phase 1, but it should be planned for a future phase.

Future flow:

Student Selects Payment -> Payment Gateway Processes Transaction -> Payment Status Updated -> Receipt Generated -> Finance Staff Reviews Transaction if Needed

This process may support course fees, class fees, registration fees, installment payments, certification fees, payment reminders, receipts, refunds, reversals, transaction checking, and finance reconciliation.

Examples:

- A student registers for Basic Caregiving Batch 2026-A with a course fee of AED 1,200. The student pays online using the available payment gateway.
- The academy allows the course fee to be paid in three installments: AED 400 upon registration, AED 400 before the second month, and AED 400 before course completion.
- A student misses the second installment due date. The system sends a payment reminder through the Notification and Announcement process.
- A student accidentally pays twice for the same installment. Finance Staff reviews the executed transactions and performs a payment reversal.
- Finance Staff searches all transactions for Basic English Batch 2026-B to reconcile payment records with the payment gateway or bank statement.
- A payment fails during online checkout. The system records the failed transaction and allows the student to try again.

The Finance Staff configuration panel should allow authorized finance users to manage finance-related settings and activities, such as:

- Viewing payment transactions
- Checking executed transactions
- Reviewing failed transactions
- Reversing payments
- Managing refunds
- Configuring installment rules
- Configuring payment due dates
- Reviewing payment status
- Reconciling transactions
- Accessing finance reports

The payment process should include proper permission control, audit logs, and transaction history because payment actions are financially sensitive.

Only authorized finance users should be allowed to perform finance-sensitive actions such as payment reversal, refund handling, transaction reconciliation, and payment configuration changes.

### 4.12 Phase 1 Business Process Summary

For Phase 1, Academiya should prioritize the following business processes:

1. User Registration
   - All users register through the same process.
   - Email verification through a "Verify this email" link should be supported.
   - Mobile verification, SMS OTP, and email OTP are not included in Phase 1.
   - Example: Ana registers using her email address, verifies the email, and becomes a Registered User / Potential Student.
2. Login and Account Access
   - Users log in using their registered email address and password.
   - Access depends on email verification status, account status, and assigned role.
   - Example: Ana sees the potential student dashboard, while Maria sees the Admin dashboard.
3. Default Registered User / Potential Student Access
   - Every newly registered and verified user is treated as a Registered User / Potential Student by default.
   - The user can browse programs, courses, classes open for registration, ongoing classes, and completed classes.
   - Example: Rico can view open, ongoing, and completed Microsoft Excel classes.
4. Role Assignment
   - Authorized users search registered users and assign operational roles.
   - When a role is assigned, the user's dashboard and available features change based on the assigned role.
   - Example: Maria assigns Juan as an Instructor for Microsoft Excel for Beginners.
5. Program Management
   - Authorized users create and manage programs.
   - Active and visible programs can be viewed by Registered Users / Potential Students.
   - Example: Maria creates Healthcare Program and makes it visible to registered users.
6. Course Management
   - Authorized users create and manage courses under programs.
   - Active and visible courses can be viewed by Registered Users / Potential Students.
   - Example: Maria creates Basic Caregiving under Healthcare Program.
7. Course Prerequisite Setup
   - Authorized users define prerequisite courses where required.
   - Prerequisite information can be shown in course details.
   - Example: Advanced Caregiving requires Basic Caregiving.
8. Basic Class Scheduling
   - Authorized users schedule new classes based on active courses.
   - Classes can be categorized as open for registration, ongoing, completed, or other statuses.
   - Example: Maria schedules Basic Caregiving Batch 2026-A every Saturday from 9:00 AM to 12:00 PM.
9. Program, Course, and Class Browsing
   - Registered Users / Potential Students can browse academy offerings and class activity.
   - Ongoing and completed classes may be displayed to show academy activity and history.
   - Example: Ana sees that Basic English has ongoing and completed batches, showing that the academy actively runs the course.
10. Dashboard Display
   - The dashboard displays only real data from Phase 1 modules.
   - Dashboard content changes based on the user's assigned role and permissions.
   - Example: A user assigned as Instructor sees assigned courses and classes instead of the default potential student dashboard.

These processes establish the operational foundation of Academiya and prepare the platform for future modules such as admissions, enrollment, learning materials, attendance, exams, assessments, certifications, payments, and advanced analytics.

Notification and Announcement Management and Online Payment Management are not included in Phase 1.

However, the Phase 1 system design should prepare for these future processes. For example, class schedule data should be structured so future schedule changes can trigger notifications. Course and class fee information should be designed carefully so future online payment, installment payment, and payment reminder features can connect to it later.

## 5. Module-Level Requirements

This chapter defines the detailed requirements for each module in Academiya.

The purpose of this chapter is to describe what each module should allow users to do, what data should be captured, what rules should be applied, and how the module should behave.

For Phase 1, the module-level requirements will focus on the following areas:

1. Authentication & Account Access
2. User & Role Management
3. Program & Course Management
4. Course Prerequisite Setup
5. Class Scheduling & Class Management
6. Program, Course, and Class Browsing
7. Dashboard
8. Basic Reports
9. Settings & Configuration

The following modules are not included in Phase 1 but should be considered in the future product roadmap:

1. Notification & Announcement Management
2. Payment Management
3. Admissions & Enrollment
4. Learning Materials
5. Attendance Management
6. Exam & Assessment Management
7. Certification Management

### 5.1 Authentication & Account Access

The Authentication & Account Access module manages user registration, email verification, login, logout, password management, and account access.

For Phase 1, authentication will use email and password only. Account verification will be completed through a "Verify this email" link sent to the user's registered email address.

Mobile number login, SMS OTP, email OTP, social login, and multi-factor authentication are not included in Phase 1.

#### 5.1.1 User Registration

The system should allow any public user to register an account through the web application or mobile application.

Recommended registration fields include:

- First name
- Middle name, optional
- Last name
- Email address
- Password
- Confirm password
- Country, optional
- Mobile number, optional for Phase 1
- Agreement to terms and conditions
- Agreement to privacy policy

The email address must be unique in the system. The system should not allow multiple accounts to use the same email address.

After successful registration, the system should generate a unique User ID.

Example:

Ana registers using the email address `ana@example.com`. Since this email address does not exist in the system, Academiya accepts the registration and generates a User ID such as USR-000125.

Another example:

Juan tries to register using `ana@example.com`, but that email address is already used by Ana. The system should prevent the registration and display a message such as:

"This email address is already registered. Please log in or use another email address."

#### 5.1.2 Email Verification

After registration, the system should send a verification email to the user's registered email address.

The verification email should contain a clear "Verify this email" link.

When the user clicks the verification link, the system should validate the link and mark the email address as verified.

Recommended email verification statuses include:

- Pending Verification
- Verified
- Verification Expired

Example:

Ana registers successfully. Academiya sends her an email with the button "Verify this email." Ana clicks the button, and her email verification status becomes Verified.

Another example:

Rico registers but does not click the verification link within the allowed time. The link expires. When Rico clicks the expired link, the system should display a message such as:

"Your verification link has expired. Please request a new verification email."

#### 5.1.3 Account Status

The system should maintain an account status for each user.

Recommended account statuses include:

- Pending Verification
- Active
- Inactive
- Suspended
- Deactivated

A user with Pending Verification status should not be allowed to access the platform until the email address is verified.

A user with Active status should be allowed to log in and access features based on role and permissions.

A user with Inactive, Suspended, or Deactivated status should not be allowed to access the platform.

Example:

Ana verifies her email address successfully. Her account status changes from Pending Verification to Active.

Another example:

An Admin deactivates a user account because the user should no longer access the academy. When that user tries to log in, the system should prevent access.

#### 5.1.4 Default User Access

After successful registration and email verification, every new user should be treated as a Registered User / Potential Student by default.

This default access allows the user to log in and browse student-facing information such as:

- Available programs
- Available courses
- Course prerequisite information
- Classes open for registration
- Ongoing classes
- Completed classes

Example:

Ana registers and verifies her email. She has not been assigned as Admin or Instructor. Therefore, she sees the Registered User / Potential Student dashboard and can browse programs and classes.

#### 5.1.5 Login

For Phase 1, users should log in using their registered email address and password.

The login process should check:

- Whether the email and password are valid
- Whether the email address has been verified
- Whether the account is active
- Whether the user has an assigned operational role
- What permissions the user has

Example:

Ana logs in using her email and password. She has no operational role. The system displays the Registered User / Potential Student dashboard.

Another example:

Maria logs in using her email and password. She has been assigned as Admin for Filipino Skills Academy Dubai. The system displays the Admin dashboard.

#### 5.1.6 Logout

The system should allow users to securely log out from the web application and mobile application.

After logout, the user should not be able to access protected pages without logging in again.

Example:

Juan logs out from the Academiya mobile app. If he reopens a protected page, the system should ask him to log in again.

#### 5.1.7 Password Management

The system should allow users to create and manage passwords securely.

Password requirements may include:

- Minimum password length
- Combination of letters and numbers
- Special character requirement, if needed
- Password confirmation during registration
- Password reset through registered email address

The system should provide a Forgot Password feature.

Example:

Ana forgets her password. She selects Forgot Password, enters her registered email address, and receives a password reset link.

#### 5.1.8 Authentication Rules

The system should follow these rules:

- Email address must be unique.
- User ID must be unique.
- User must verify email before accessing the platform.
- User must use email and password to log in for Phase 1.
- Mobile OTP and email OTP are not included in Phase 1.
- New verified users are treated as Registered Users / Potential Students by default.
- Assigned roles change the user's dashboard and available features.
- Users can only access features allowed by their role and permissions.

### 5.2 User & Role Management

The User & Role Management module allows authorized users to search users, view user profiles, manage account status, assign roles, and control access.

This module is mainly used by Super Admin and Admin users.

#### 5.2.1 User Search

The system should allow authorized users to search registered users.

Search criteria may include:

- User ID
- Email address
- First name
- Last name
- Full name
- Role
- Account status
- Email verification status

Search results should display key information such as:

- User ID
- Full name
- Email address
- Current role or access type
- Account status
- Email verification status
- Created date

Example:

Maria searches for `juan@example.com`. The system displays Juan's user profile showing:

- User ID: USR-000145
- Name: Juan Santos
- Email: juan@example.com
- Access Type: Registered User / Potential Student
- Account Status: Active
- Email Verification Status: Verified

#### 5.2.2 User Profile View

Authorized users should be able to view a registered user's profile.

User profile information may include:

- User ID
- Full name
- Email address
- Mobile number, if provided
- Country, if provided
- Email verification status
- Account status
- Assigned role
- Assigned academy, if applicable
- Created date
- Last updated date
- Last login date, if available

Example:

Maria opens Juan's profile and sees that Juan is active, verified, and not yet assigned to any operational role. She decides to assign him as Instructor.

#### 5.2.3 Role Assignment

The system should allow authorized users to assign roles to registered users.

For Phase 1, the active access types and roles are:

- Registered User / Potential Student
- Super Admin
- Admin
- Instructor

Future roles should be prepared in the system design, including:

- Academy Manager
- Admission Staff
- Finance Staff
- Content Manager
- Certificate Officer

Example:

Raymond, the Super Admin, assigns Maria as Admin for Filipino Skills Academy Dubai.

Another example:

Maria, the Admin, assigns Juan as Instructor for Microsoft Excel for Beginners.

#### 5.2.4 Role Scope

Role assignment should support scope where needed.

Scope defines where the role applies.

Possible role scopes include:

- Platform level
- Academy level
- Program level
- Course level
- Subject level
- Class level

Example:

Raymond has Super Admin access at the platform level.

Maria has Admin access only for Filipino Skills Academy Dubai.

Juan has Instructor access only for Microsoft Excel for Beginners and Excel Batch 2026-A.

#### 5.2.5 Account Activation and Deactivation

Authorized users should be able to activate or deactivate user accounts.

If a user account is deactivated, the user should not be able to log in or access the platform.

The system should record who changed the account status and when the change was made.

Example:

Maria deactivates a duplicate account created by mistake. The system records that Maria deactivated the account on a specific date and time.

#### 5.2.6 Permission Control

The system should support role-based access control.

Permissions may include:

- View
- Create
- Update
- Delete
- Assign
- Approve
- Activate
- Deactivate
- Upload
- Download
- Generate
- Export

For Phase 1, permissions should be applied to:

- User management
- Role assignment
- Program management
- Course management
- Course prerequisite setup
- Class scheduling
- Dashboard access
- Basic reports
- Settings

Example:

Maria can create courses and schedule classes because she is an Admin.

Juan can view assigned classes because he is an Instructor, but he should not be able to create new programs unless that permission is given.

#### 5.2.7 User & Role Management Rules

The system should follow these rules:

- Only authorized users can assign roles.
- A user can exist without an assigned operational role.
- A user without an operational role is treated as a Registered User / Potential Student.
- Role assignment should immediately affect dashboard and access permissions.
- Users should not be able to access features outside their assigned role and scope.
- Role and account status changes should be recorded for audit purposes.

### 5.3 Program & Course Management

The Program & Course Management module allows authorized users to create and manage programs, courses, and related academic structures.

This module defines what the academy offers before classes are scheduled.

The recommended structure is:

Program -> Course -> Subject

Examples:

- Healthcare Program -> Basic Caregiving Course -> Elderly Care, First Aid, Basic Nursing Skills
- Computer Skills Program -> Microsoft Excel for Beginners -> Spreadsheet Basics, Formulas and Functions, Charts

#### 5.3.1 Program Creation

Authorized users should be able to create a program.

Program fields may include:

- Program name
- Program code
- Program category
- Program description
- Program image or thumbnail, optional
- Program visibility
- Program status
- Created by
- Created date
- Updated by
- Updated date

Recommended program statuses include:

- Draft
- Active
- Inactive
- Archived

Example:

Maria creates a program with the following details:

- Program Name: Healthcare Program
- Program Code: HLTH
- Category: Healthcare
- Description: Courses related to caregiving, elderly care, and first aid
- Status: Active
- Visibility: Visible to Registered Users

#### 5.3.2 Program Visibility

The system should allow active programs to be visible to Registered Users / Potential Students.

Recommended visibility options include:

- Hidden
- Visible to registered users
- Publicly visible, optional for future

For Phase 1, visibility may be limited to registered users only.

Example:

Healthcare Program is marked as Active and Visible to Registered Users. Ana can see it after logging in.

Another example:

Hospitality Program is still in Draft status. Ana should not see it yet.

#### 5.3.3 Program Management Actions

Authorized users should be able to:

- Create program
- View program
- Update program
- Change program status
- Archive program
- View courses under a program

Example:

Maria updates the Healthcare Program description to include new caregiving course offerings.

#### 5.3.4 Course Creation

Authorized users should be able to create courses under a program.

Course fields may include:

- Course name
- Course code
- Related program
- Course category
- Course description
- Course level
- Course duration
- Course requirements
- Course fee, if applicable
- Course image or thumbnail, optional
- Course visibility
- Course status
- Prerequisite requirement
- Created by
- Created date
- Updated by
- Updated date

Recommended course statuses include:

- Draft
- Active
- Inactive
- Archived

Example:

Maria creates a course under Healthcare Program:

- Course Name: Basic Caregiving
- Course Code: CARE-BASIC
- Level: Beginner
- Duration: 8 weeks
- Requirement: No previous caregiving experience required
- Fee: AED 1,200
- Status: Active
- Visibility: Visible to Registered Users

#### 5.3.5 Course Visibility

The system should allow active courses to be visible to Registered Users / Potential Students.

Course visibility should depend on:

- Course status
- Program status
- Course visibility setting

A course should not be visible to potential students if the related program is inactive, archived, or hidden.

Example:

Basic Caregiving is Active and belongs to an Active program. Ana can see the course.

Another example:

Advanced Caregiving is Active, but the Healthcare Program is Inactive. Ana should not see Advanced Caregiving until the program becomes active again.

#### 5.3.6 Course Management Actions

Authorized users should be able to:

- Create course
- View course
- Update course
- Change course status
- Archive course
- Assign course to program
- Define prerequisites
- View scheduled classes under the course

Example:

Maria opens Basic Caregiving and views all related scheduled classes, including Basic Caregiving Batch 2026-A and Basic Caregiving Batch 2026-B.

#### 5.3.7 Subject Setup

A Subject represents a specific topic, lesson area, or learning component within a course.

Subject setup may be included in Phase 1 if the academy needs to assign instructors to particular subjects.

Subject fields may include:

- Subject name
- Subject code
- Related course
- Subject description
- Subject duration
- Subject status
- Assigned instructor, if applicable

Example:

Basic Caregiving may include the following subjects:

- Elderly Care
- First Aid
- Basic Nursing Skills

Another example:

Microsoft Excel for Beginners may include:

- Spreadsheet Basics
- Formatting
- Formulas and Functions
- Charts
- Data Filtering

If subject setup is not included in Phase 1, the system should still be designed to support subjects in future phases.

### 5.4 Course Prerequisite Setup

The Course Prerequisite Setup requirement allows authorized users to define whether a course requires completion of one or more previous courses.

This requirement belongs to Program & Course Management but is described separately because it affects future class registration and enrollment rules.

#### 5.4.1 Prerequisite Configuration

When creating or updating a course, authorized users should be able to define prerequisite rules.

The system should support:

- No prerequisite required
- One prerequisite course required
- Multiple prerequisite courses required

Prerequisite fields may include:

- Course requiring prerequisite
- Required prerequisite course
- Prerequisite rule type
- Required completion status
- Required passing status, future phase
- Notes or explanation

Example:

Advanced Caregiving requires Basic Caregiving.

Another example:

Business English requires both Basic English and Intermediate English.

#### 5.4.2 Prerequisite Display

If a course has prerequisites, the prerequisite information should be visible in the course details.

Registered Users / Potential Students should be able to see which course or courses must be completed before taking the selected course.

Example:

Ana views Advanced Caregiving and sees:

"Prerequisite: Basic Caregiving must be completed before taking this course."

#### 5.4.3 Prerequisite Validation

For Phase 1, the system should allow prerequisites to be defined and displayed.

Automatic prerequisite validation during class registration or enrollment is planned for future phases.

Example for future phase:

Rico tries to register for Advanced Caregiving, but he has not completed Basic Caregiving. The system prevents registration and shows:

"You must complete Basic Caregiving before registering for Advanced Caregiving."

#### 5.4.4 Prerequisite Rules

The system should follow these rules:

- A course may have no prerequisites.
- A course may have one or multiple prerequisites.
- A course should not be allowed to be its own prerequisite.
- The system should prevent circular prerequisite relationships where possible.
- Prerequisite information should be clearly displayed to users.
- Future enrollment validation should use prerequisite rules.

Example of invalid setup:

Basic Caregiving cannot be set as a prerequisite of itself.

Another invalid setup:

Basic Caregiving requires Advanced Caregiving, while Advanced Caregiving requires Basic Caregiving. The system should prevent this circular prerequisite relationship.

### 5.5 Class Scheduling & Class Management

The Class Scheduling & Class Management module allows authorized users to schedule classes based on active courses.

A course defines what will be taught. A class defines when it will happen, who will teach it, where it will happen, how it will be delivered, and how many students may join.

For Phase 1, this module focuses on basic class scheduling and class visibility.

#### 5.5.1 Class Creation

Authorized users should be able to create a class or batch.

Class fields may include:

- Class name or batch name
- Class code
- Related program
- Related course
- Assigned instructor
- Class start date
- Class end date
- Class schedule
- Class capacity
- Delivery mode
- Location
- Online meeting link, if applicable
- Class visibility
- Class status
- Created by
- Created date
- Updated by
- Updated date

Example:

Maria creates a class with the following details:

- Class Name: Basic Caregiving Batch 2026-A
- Class Code: CARE-2026-A
- Program: Healthcare Program
- Course: Basic Caregiving
- Instructor: Liza Santos
- Start Date: August 1, 2026
- End Date: September 26, 2026
- Schedule: Every Saturday, 9:00 AM to 12:00 PM
- Capacity: 25 students
- Delivery Mode: Onsite
- Location: Dubai Campus Room 101
- Status: Open for Registration

#### 5.5.2 Delivery Mode

The system should support different delivery modes.

Recommended delivery modes include:

- Onsite
- Online
- Hybrid

If the class is onsite, the system should allow location details.

If the class is online or hybrid, the system should allow an online meeting link or online access information.

Example:

Basic Caregiving Batch 2026-A is Onsite at Dubai Campus Room 101.

Another example:

Basic English Batch 2026-B is Online and uses a Zoom meeting link.

Another example:

Microsoft Excel Batch 2026-C is Hybrid, where students may attend onsite or online.

#### 5.5.3 Class Status

The system should support class statuses.

Recommended class statuses include:

- Draft
- Scheduled
- Open for Registration
- Ongoing
- Completed
- Cancelled

Status behavior:

- Draft classes are still being prepared and should not be visible to potential students.
- Scheduled classes are planned but may not yet be open for registration.
- Open for Registration classes are available for potential students to view and register for if registration is enabled.
- Ongoing classes are already running and are no longer open for registration.
- Completed classes are finished and shown as historical activity.
- Cancelled classes may be hidden or shown depending on academy preference.

Example:

Basic English Batch 2026-A is marked as Open for Registration, so potential students can see it and register if registration is enabled.

Another example:

Basic English Batch 2026-B is marked as Ongoing, so potential students can see it but cannot register.

#### 5.5.4 Class Visibility

The system should allow classes to be visible to Registered Users / Potential Students based on status and visibility rules.

For Phase 1, potential students should be able to view:

- Classes open for registration
- Ongoing classes
- Completed classes

Example:

Ana logs in and sees:

- Basic Caregiving Batch 2026-A - Open for Registration
- Basic English Batch 2026-B - Ongoing
- Microsoft Excel Batch 2025-C - Completed

#### 5.5.5 Class Management Actions

Authorized users should be able to:

- Create class
- View class
- Update class
- Change class status
- Assign instructor
- Set delivery mode
- Set schedule
- Set capacity
- Cancel class
- View class list by status

Example:

Maria changes Basic English Batch 2026-A from Scheduled to Open for Registration after the schedule and instructor are confirmed.

#### 5.5.6 Class Scheduling Rules

The system should follow these rules:

- A class must be linked to an active course.
- A class should be linked to a program through its course.
- Draft classes should not be visible to potential students.
- Ongoing classes should be visible but not open for registration.
- Completed classes should be visible as historical activity.
- Cancelled classes should follow the academy's visibility preference.
- Instructor assignment should only use users assigned as Instructor.
- Class scheduling should prepare the system for future admissions, enrollment, attendance, exams, payments, notifications, and certifications.

Example:

Maria cannot assign Ana as an Instructor unless Ana has first been assigned the Instructor role.

### 5.6 Program, Course, and Class Browsing

The Program, Course, and Class Browsing capability allows Registered Users / Potential Students to explore academy offerings.

This is part of the student-facing experience in Phase 1.

#### 5.6.1 Program Browsing

Registered Users / Potential Students should be able to view active and visible programs.

Program browsing may display:

- Program name
- Program description
- Program category
- Program image or thumbnail, if available
- Related courses
- Program status, if useful

Example:

Ana opens the program list and sees:

- Healthcare Program
- Language Program
- Computer Skills Program

#### 5.6.2 Course Browsing

Registered Users / Potential Students should be able to view active and visible courses.

Course browsing may display:

- Course name
- Course description
- Course level
- Course duration
- Course requirements
- Course fee, if applicable
- Prerequisite information
- Related classes
- Course status, if useful

Example:

Ana opens Healthcare Program and sees:

- Basic Caregiving
- Advanced Caregiving
- First Aid Training

She opens Advanced Caregiving and sees that Basic Caregiving is required first.

#### 5.6.3 Class Browsing

Registered Users / Potential Students should be able to view class lists grouped by class status.

Class browsing categories may include:

- Open for Registration
- Ongoing Classes
- Completed Classes

Class details may display:

- Class name or batch name
- Related course
- Instructor name, if assigned
- Start date
- End date
- Schedule
- Delivery mode
- Location or online information
- Capacity, if visible
- Registration status
- Class status

Example:

Rico opens Microsoft Excel for Beginners and sees:

- Excel Batch 2026-A - Open for Registration
- Excel Batch 2026-B - Ongoing
- Excel Batch 2025-C - Completed

#### 5.6.4 Browsing Rules

The system should follow these rules:

- Only active and visible programs should be shown.
- Only active and visible courses should be shown.
- Draft classes should not be visible to potential students.
- Ongoing classes should be visible but not available for registration.
- Completed classes should be visible as historical academy activity.
- Prerequisites should be displayed clearly in course details.
- The system should avoid showing misleading registration options for classes that are not open.

### 5.7 Dashboard

The Dashboard module provides users with a role-based landing page after login.

For Phase 1, the dashboard should only display real data from available Phase 1 modules.

#### 5.7.1 Registered User / Potential Student Dashboard

The default dashboard for Registered Users / Potential Students may include:

- Available programs
- Available courses
- Courses with prerequisites
- Classes open for registration
- Ongoing classes
- Completed classes
- Profile information
- Account status

Example:

Ana's dashboard shows Healthcare Program, Basic Caregiving, Basic English, and classes open for registration.

#### 5.7.2 Super Admin Dashboard

The Super Admin dashboard may include:

- Total registered users
- Users by role
- Users without assigned operational roles
- Active users
- Inactive users
- Total programs
- Total courses
- Courses with prerequisites
- Total scheduled classes
- Classes by status
- Quick links to user management
- Quick links to role assignment
- Quick links to program management
- Quick links to course management
- Quick links to class scheduling

Example:

Raymond logs in and sees that the platform has 1,250 registered users, 42 instructors, 8 active programs, and 12 scheduled classes.

#### 5.7.3 Admin Dashboard

The Admin dashboard may include:

- Total users within the academy
- Users by assigned role
- Users without assigned operational roles
- Total programs
- Active programs
- Draft programs
- Total courses
- Active courses
- Draft courses
- Courses with prerequisites
- Total scheduled classes
- Classes by status
- Quick links to role assignment
- Quick links to program management
- Quick links to course management
- Quick links to class scheduling

Example:

Maria logs in and sees that Filipino Skills Academy Dubai has 320 users, 12 instructors, 5 active programs, and 6 classes open for registration.

#### 5.7.4 Instructor Dashboard

The Instructor dashboard may include:

- Assigned courses
- Assigned subjects, if applicable
- Assigned scheduled classes
- Upcoming scheduled classes
- Ongoing assigned classes
- Profile information
- Account status

Example:

Juan logs in and sees that he is assigned to Microsoft Excel for Beginners and Excel Batch 2026-A.

#### 5.7.5 Dashboard Rules

The system should follow these rules:

- Dashboard content must be based on user role and permissions.
- Dashboard content must use real data only.
- Dashboard should not show dummy or placeholder data.
- A user without an assigned operational role should see the Registered User / Potential Student dashboard.
- A user assigned to a specific role should see the dashboard for that role.
- If a user's role changes, the dashboard should change accordingly.

Example:

Juan starts as a Registered User / Potential Student. After Maria assigns him as Instructor, his dashboard changes to show instructor-related information.

### 5.8 Basic Reports

The Basic Reports module allows authorized users to view simple reports based on available Phase 1 data.

For Phase 1, reports should be limited to modules already implemented.

Basic reports may include:

- Registered user report
- User role assignment report
- User status report
- Program report
- Course report
- Course prerequisite report
- Scheduled class report
- Class status report

Reports may support filtering by:

- Date range
- Status
- Role
- Program
- Course
- Class status

Example:

Maria opens the Scheduled Class Report and filters by Open for Registration. The system displays all classes currently open for registration.

Another example:

Raymond opens the User Role Assignment Report and sees users grouped by role, such as Admin, Instructor, and Registered User / Potential Student.

Reports may support export in future phases. For Phase 1, export may be optional.

### 5.9 Settings & Configuration

The Settings & Configuration module allows authorized users to manage basic setup values used by the platform.

For Phase 1, settings may include:

- Account settings
- Role and permission settings
- Program categories
- Course categories
- Course levels
- Class delivery modes
- Class statuses
- Visibility settings
- Email verification settings
- Password policy settings

Example Phase 1 settings:

- Course Levels: Beginner, Intermediate, Advanced
- Delivery Modes: Onsite, Online, Hybrid
- Class Statuses: Draft, Scheduled, Open for Registration, Ongoing, Completed, Cancelled
- Program Visibility: Hidden, Visible to Registered Users
- Password Policy: Minimum 8 characters

Future settings may include:

- Attendance rules
- Grading rules
- Certificate templates
- Notification preferences
- Payment settings
- Payment gateway settings
- Integration settings

Example future settings:

- Attendance Requirement: Minimum 80%
- Passing Score: Minimum 75%
- Certificate Template: Filipino Skills Academy Standard Certificate
- Payment Methods: Card, Bank Transfer, Online Payment Gateway
- Payment Installment Options: Full Payment, 2 Installments, 3 Installments

### 5.10 Notification & Announcement Management

The Notification & Announcement Management module will be used to send important messages, announcements, alerts, and reminders to users.

This module is not included in Phase 1, but it should be planned as part of the future product roadmap.

The system design should allow future notifications and announcements to connect with users, classes, schedules, payments, certificates, and other modules.

Notifications and announcements may be used for:

- Academy-wide announcements
- Class-specific announcements
- Schedule change notifications
- Course update notifications
- Payment reminders
- Certificate availability notifications
- System alerts
- General user notifications

#### 5.10.1 Announcement Creation

Authorized users should be able to create announcements for selected users or groups.

Announcement fields may include:

- Announcement title
- Announcement message
- Target audience
- Related academy
- Related program, optional
- Related course, optional
- Related class, optional
- Publish date
- Expiry date, optional
- Created by
- Created date

Example:

An Admin creates an announcement:

Title: Early Bird Discount
Message: Early bird discount available for Basic Caregiving Batch 2026-A until July 31.
Target Audience: Registered Users / Potential Students
Related Course: Basic Caregiving

#### 5.10.2 Notification Targeting

The module should support targeted communication.

Notifications may be sent to:

- All registered users
- Registered Users / Potential Students
- Students in a specific class
- Instructors assigned to a specific class
- Users with pending payments
- Users under a specific program or course
- Admin or staff users

Example:

The schedule for Basic English Batch 2026-B changes from Saturday to Sunday. The system sends a notification only to enrolled students and the assigned Instructor.

#### 5.10.3 Notification Channels

Future implementation may support:

- In-app notifications
- Email notifications
- Mobile push notifications
- SMS notifications, if supported later

Example:

A student has an upcoming installment payment due. The system sends an in-app notification and an email reminder.

#### 5.10.4 Notification History

The system should maintain notification history so users can view previous announcements and alerts.

Example:

Ana opens her notification history and sees:

- Basic Caregiving discount announcement
- Upcoming payment reminder
- Schedule change notification
- Certificate ready for download notification

#### 5.10.5 Notification Rules

The system should follow these rules:

- Only authorized users can create announcements.
- Notifications should be sent only to the intended target audience.
- Users should not receive notifications unrelated to their academy, class, or payment status.
- Notification history should be available for user reference.
- Payment reminders should connect to the Payment Management module when implemented.
- Schedule change notifications should connect to Class Scheduling when implemented.

### 5.11 Payment Management

The Payment Management module will be used to manage course fees, online payments, installment payments, payment transactions, refunds, reversals, and finance-related controls.

This module is not included in Phase 1, but it should be planned as part of the future product roadmap.

The system design should allow future payment features to connect with class registration, admission, enrollment, invoices, receipts, payment reminders, and finance reports.

Payment Management may include:

- Course fee setup
- Class fee setup
- Online payment
- Multiple payment or installment support
- Payment due dates
- Payment reminders
- Payment transaction history
- Payment status tracking
- Invoice generation
- Receipt generation
- Refund handling
- Payment reversal
- Finance approval controls
- Payment gateway integration
- Finance Staff configuration panel
- Transaction search and reconciliation
- Failed transaction handling

#### 5.11.1 Fee Setup

Authorized users should be able to define course or class fees.

Fee setup fields may include:

- Related course
- Related class
- Fee amount
- Currency
- Payment type
- Installment option
- Due date rules
- Status

Example:

Basic Caregiving Batch 2026-A has a class fee of AED 1,200.

Another example:

Microsoft Excel for Beginners has a course fee of AED 800, but the academy may override the fee for a specific class.

#### 5.11.2 Online Payment

Users should be able to pay online using an available payment gateway.

Example:

Ana registers for Basic Caregiving Batch 2026-A and pays AED 1,200 online. The payment gateway confirms the transaction, and Academiya updates the payment status as Paid.

#### 5.11.3 Installment Payments

The system should support multiple payments or installment payments in future phases.

Example:

The academy allows Basic Caregiving to be paid in three installments:

- AED 400 upon registration
- AED 400 before the second month
- AED 400 before course completion

The system should track each installment separately.

#### 5.11.4 Payment Reminders

Payment reminders should connect with Notification & Announcement Management.

Example:

Ana has a second installment due on September 1, 2026. The system sends a reminder before the due date.

#### 5.11.5 Transaction History

The system should keep transaction history for payment tracking and reconciliation.

Transaction information may include:

- Transaction ID
- User
- Related class
- Amount
- Currency
- Payment method
- Payment gateway reference
- Payment status
- Transaction date
- Receipt number
- Processed by
- Reversed by, if applicable
- Reversal reason, if applicable

Example:

Finance Staff searches transactions for Basic English Batch 2026-B and compares Academiya records with the payment gateway report.

#### 5.11.6 Payment Reversal and Refund Handling

Authorized Finance Staff should be able to reverse or manage payment corrections when needed.

Example:

Ana accidentally pays the same installment twice. Finance Staff reviews the executed transactions and performs a payment reversal for the duplicate transaction.

Another example:

A class is cancelled, and the academy approves a refund. Finance Staff processes the refund according to academy policy.

#### 5.11.7 Finance Staff Configuration Panel

The Finance Staff configuration panel should allow authorized finance users to manage finance-related settings and activities.

This may include:

- Viewing payment transactions
- Checking executed transactions
- Reviewing failed transactions
- Reversing payments
- Managing refunds
- Configuring installment rules
- Configuring payment due dates
- Reviewing payment status
- Reconciling transactions
- Accessing finance reports

Example:

Finance Staff opens the transaction panel and filters by:

- Class: Basic Caregiving Batch 2026-A
- Status: Paid
- Payment Method: Online Payment
- Date Range: August 1 to August 31, 2026

#### 5.11.8 Payment Rules

The system should follow these rules:

- Only authorized users can access finance-sensitive features.
- Only authorized finance users can reverse payments or process refunds.
- All payment transactions should have audit history.
- Failed transactions should be recorded.
- Reversal and refund actions should require a reason.
- Payment status should be clear and traceable.
- Payment reminders should be triggered based on due dates when the Notification module is implemented.

### 5.12 Future Module Notes

The following modules are planned for future phases and should be supported by the overall system design.

#### 5.12.1 Admissions & Enrollment

This module will manage class applications, admission review, enrollment approval, student class assignment, and prerequisite validation.

Example:

Ana applies for Basic Caregiving Batch 2026-A. Admission Staff reviews her application and approves her enrollment.

#### 5.12.2 Learning Materials

This module will manage PDFs, videos, documents, lesson notes, links, and assignments.

Example:

A Content Manager uploads Basic Caregiving Module 1.pdf and links it to the Basic Caregiving course.

#### 5.12.3 Attendance Management

This module will manage attendance records for class sessions.

Example:

An Instructor marks Ana as Present, Rico as Late, and Juan as Absent for a class session.

#### 5.12.4 Exam & Assessment Management

This module will manage exams, quizzes, assignments, practical assessments, scores, and pass or fail results.

Example:

Students in Microsoft Excel for Beginners complete a practical test requiring formulas and charts. A score of 75% or higher is required to pass.

#### 5.12.5 Certification Management

This module will manage certificate eligibility, generation, approval, issuance, download, and verification.

Example:

Ana completes Basic Caregiving, meets the attendance requirement, passes the assessment, and receives a downloadable certificate.

### 5.13 Phase 1 Module-Level Requirement Summary

For Phase 1, Academiya should deliver the following module-level capabilities:

1. Authentication & Account Access
   - Email-based registration
   - Email verification using a "Verify this email" link
   - Email and password login
   - Password reset
   - Account status control
   - Example: Ana registers, verifies her email, and logs in as a Registered User / Potential Student.
2. User & Role Management
   - User search
   - User profile view
   - Role assignment
   - Role scope
   - Account activation and deactivation
   - Permission control
   - Example: Maria searches for Juan and assigns him as Instructor for Microsoft Excel for Beginners.
3. Program & Course Management
   - Program creation and management
   - Course creation and management
   - Program and course visibility
   - Optional subject setup
   - Example: Maria creates Healthcare Program, Basic Caregiving, and Advanced Caregiving.
4. Course Prerequisite Setup
   - Define prerequisite courses
   - Display prerequisite information
   - Prepare for future prerequisite validation
   - Example: Advanced Caregiving requires Basic Caregiving.
5. Class Scheduling & Class Management
   - Create scheduled classes
   - Assign instructor
   - Define schedule, capacity, location, and delivery mode
   - Manage class status and visibility
   - Example: Maria schedules Basic Caregiving Batch 2026-A every Saturday from 9:00 AM to 12:00 PM.
6. Program, Course, and Class Browsing
   - Allow Registered Users / Potential Students to browse programs, courses, and classes
   - Show open, ongoing, and completed classes
   - Example: Ana views Basic Caregiving Batch 2026-A as open for registration and Basic English Batch 2026-B as ongoing.
7. Dashboard
   - Display role-based dashboard content
   - Use real data from Phase 1 modules only
   - Change dashboard based on assigned role
   - Example: Ana sees the potential student dashboard, while Maria sees the Admin dashboard.
8. Basic Reports
   - Provide simple reports using Phase 1 data
   - Example: Maria views all courses with prerequisites and all classes open for registration.
9. Settings & Configuration
   - Provide basic configuration for Phase 1 modules
   - Example: Admin configures course levels, delivery modes, class statuses, and visibility options.

Notification & Announcement Management and Payment Management are not included in Phase 1. However, the Phase 1 architecture should be prepared so these modules can be added later without major redevelopment.

For example, class schedules should be designed so future schedule changes can trigger notifications. Course and class fee fields should be designed carefully so future online payment, installment payment, and payment reminder features can connect to them.


## 6. Data Structure / Main Entities

This chapter describes the main data entities required for Academiya. The purpose is to help developers and Systems Analysts understand the key objects, relationships, and data fields that should be considered during system design.

This chapter is not intended to be the final database design, but it provides the logical data structure that can later be converted into database tables, API models, forms, and screen designs.

For **Phase 1**, the main entities are:

1. User
2. Role
3. Permission
4. User Role Assignment
5. Academy
6. Program
7. Course
8. Subject
9. Course Prerequisite
10. Class / Batch
11. Class Schedule
12. Dashboard Data
13. Basic Report Data

Future entities may include:

1. Student Application
2. Enrollment
3. Learning Material
4. Attendance
5. Exam / Assessment
6. Certificate
7. Notification / Announcement
8. Payment
9. Invoice
10. Receipt
11. Payment Transaction

---

### 6.1 User

The **User** entity represents any person who registers in Academiya.

All users start from the same registration process. After email verification, every user is treated as a **Registered User / Potential Student** by default. A user may later be assigned a specific role such as Super Admin, Admin, or Instructor.

#### Example

Ana registers in Academiya using her email address. After clicking the **"Verify this email"** link, Ana becomes a verified user. She is treated as a Registered User / Potential Student until an authorized user assigns another role.

#### Possible User Fields

* User ID
* First name
* Middle name, optional
* Last name
* Full name
* Email address
* Password
* Country, optional
* Mobile number, optional for Phase 1
* Email verification status
* Account status
* Created date
* Updated date
* Last login date

#### Example User Record

| Field                     | Example                                   |
| ------------------------- | ----------------------------------------- |
| User ID                   | USR-000125                                |
| First Name                | Ana                                       |
| Last Name                 | Santos                                    |
| Email Address             | ana@example.com |
| Email Verification Status | Verified                                  |
| Account Status            | Active                                    |
| Default Access            | Registered User / Potential Student       |

---

### 6.2 Role

The **Role** entity defines a type of access or responsibility in Academiya.

Roles control what a user can see and do in the system.

For Phase 1, the main roles are:

* Super Admin
* Admin
* Instructor

The default access type is:

* Registered User / Potential Student

Future roles may include:

* Academy Manager
* Admission Staff
* Finance Staff
* Content Manager
* Certificate Officer

#### Example

Maria is assigned the **Admin** role for Filipino Skills Academy Dubai. This allows her to manage users, programs, courses, and classes for that academy.

#### Possible Role Fields

* Role ID
* Role name
* Role description
* Role status
* Created date
* Updated date

#### Example Role Records

| Role ID  | Role Name     | Description                                    |
| -------- | ------------- | ---------------------------------------------- |
| ROLE-001 | Super Admin   | Manages the overall Academiya platform         |
| ROLE-002 | Admin         | Manages academy-level operations               |
| ROLE-003 | Instructor    | Manages assigned teaching activities           |
| ROLE-004 | Finance Staff | Future role for finance and payment activities |

---

### 6.3 Permission

The **Permission** entity defines what actions a role can perform.

Permissions should be flexible because the system will need to support more roles in future phases.

#### Example

An Admin may have permission to create programs and courses, while an Instructor may only view assigned courses and classes.

#### Possible Permission Actions

* View
* Create
* Update
* Delete
* Assign
* Approve
* Activate
* Deactivate
* Upload
* Download
* Generate
* Export

#### Example Permission Records

| Permission      | Example Usage                                   |
| --------------- | ----------------------------------------------- |
| View Course     | Allows user to view course details              |
| Create Course   | Allows user to create a new course              |
| Assign Role     | Allows user to assign roles to registered users |
| Create Class    | Allows user to schedule a new class             |
| Reverse Payment | Future permission for Finance Staff             |

---

### 6.4 User Role Assignment

The **User Role Assignment** entity connects a user to a role.

This entity is important because users do not register directly as Admin or Instructor. They register as normal users first, then an authorized user assigns a role.

The assignment may also include a scope, such as academy, program, course, subject, or class.

#### Example

Juan registers as a normal user. Maria, the Admin, searches for Juan and assigns him as an Instructor for **Microsoft Excel for Beginners**.

#### Possible User Role Assignment Fields

* Assignment ID
* User ID
* Role ID
* Academy ID, if applicable
* Program ID, if applicable
* Course ID, if applicable
* Subject ID, if applicable
* Class ID, if applicable
* Assignment status
* Assigned by
* Assigned date
* Updated by
* Updated date

#### Example User Role Assignment Record

| Field       | Example                       |
| ----------- | ----------------------------- |
| User        | Juan Santos                   |
| Role        | Instructor                    |
| Academy     | Filipino Skills Academy Dubai |
| Course      | Microsoft Excel for Beginners |
| Class       | Excel Batch 2026-A            |
| Assigned By | Maria Cruz                    |
| Status      | Active                        |

---

### 6.5 Academy

The **Academy** entity represents the education center or training institution using Academiya.

Depending on the Phase 1 scope, Academiya may support one academy or multiple academies. Even if multiple academies are not fully implemented in Phase 1, the system should be designed in a way that can support them later.

#### Example

Filipino Skills Academy Dubai is one academy using Academiya.

In the future, another academy such as Filipino Skills Academy Abu Dhabi may also use the platform.

#### Possible Academy Fields

* Academy ID
* Academy name
* Academy code
* Description
* Country
* City
* Address
* Contact email
* Contact number
* Academy status
* Created date
* Updated date

#### Example Academy Record

| Field        | Example                       |
| ------------ | ----------------------------- |
| Academy ID   | ACAD-001                      |
| Academy Name | Filipino Skills Academy Dubai |
| Country      | United Arab Emirates          |
| City         | Dubai                         |
| Status       | Active                        |

---

### 6.6 Program

The **Program** entity represents a broad area of learning offered by an academy.

A program contains one or more courses.

#### Examples of Programs

* Healthcare Program
* Language Program
* Computer Skills Program
* Business Program
* Hospitality Program

#### Example

The **Healthcare Program** may contain courses such as Basic Caregiving, Advanced Caregiving, and First Aid Training.

#### Possible Program Fields

* Program ID
* Academy ID
* Program name
* Program code
* Program category
* Program description
* Program image or thumbnail, optional
* Visibility
* Program status
* Created by
* Created date
* Updated by
* Updated date

#### Example Program Record

| Field        | Example                     |
| ------------ | --------------------------- |
| Program ID   | PRG-001                     |
| Program Name | Healthcare Program          |
| Program Code | HLTH                        |
| Category     | Healthcare                  |
| Status       | Active                      |
| Visibility   | Visible to Registered Users |

---

### 6.7 Course

The **Course** entity represents a specific learning offering under a program.

A course defines what students will learn. Classes or batches are later scheduled based on the course.

#### Examples of Courses

| Program                 | Course                        |
| ----------------------- | ----------------------------- |
| Healthcare Program      | Basic Caregiving              |
| Healthcare Program      | Advanced Caregiving           |
| Language Program        | Basic English                 |
| Computer Skills Program | Microsoft Excel for Beginners |

#### Possible Course Fields

* Course ID
* Program ID
* Course name
* Course code
* Course category
* Course description
* Course level
* Course duration
* Course requirements
* Course fee, if applicable
* Course image or thumbnail, optional
* Visibility
* Course status
* Has prerequisite flag
* Created by
* Created date
* Updated by
* Updated date

#### Example Course Record

| Field       | Example                     |
| ----------- | --------------------------- |
| Course ID   | CRS-001                     |
| Program     | Healthcare Program          |
| Course Name | Basic Caregiving            |
| Course Code | CARE-BASIC                  |
| Level       | Beginner                    |
| Duration    | 8 weeks                     |
| Fee         | AED 1,200                   |
| Status      | Active                      |
| Visibility  | Visible to Registered Users |

---

### 6.8 Subject

The **Subject** entity represents a specific topic, lesson area, or learning component inside a course.

Subjects may be included in Phase 1 if the academy needs to assign instructors to specific topics. If subject management is not included in Phase 1, the system should still be designed to support it later.

#### Examples of Subjects

| Course                        | Subject                |
| ----------------------------- | ---------------------- |
| Basic Caregiving              | Elderly Care           |
| Basic Caregiving              | First Aid              |
| Basic Caregiving              | Basic Nursing Skills   |
| Basic English                 | Grammar                |
| Microsoft Excel for Beginners | Formulas and Functions |

#### Possible Subject Fields

* Subject ID
* Course ID
* Subject name
* Subject code
* Subject description
* Subject duration
* Subject status
* Assigned instructor, optional
* Created by
* Created date
* Updated by
* Updated date

#### Example Subject Record

| Field        | Example          |
| ------------ | ---------------- |
| Subject ID   | SUB-001          |
| Course       | Basic Caregiving |
| Subject Name | Elderly Care     |
| Subject Code | ELDER-CARE       |
| Status       | Active           |

---

### 6.9 Course Prerequisite

The **Course Prerequisite** entity defines prerequisite rules between courses.

This entity is used when one course requires completion of another course before registration or enrollment.

#### Example

**Advanced Caregiving** requires **Basic Caregiving**.

This means Basic Caregiving is the prerequisite course, and Advanced Caregiving is the course that requires it.

#### Possible Course Prerequisite Fields

* Prerequisite ID
* Course ID
* Required prerequisite course ID
* Required completion status
* Required passing status, future phase
* Notes
* Status
* Created by
* Created date
* Updated by
* Updated date

#### Example Course Prerequisite Record

| Field                         | Example                                                                  |
| ----------------------------- | ------------------------------------------------------------------------ |
| Course Requiring Prerequisite | Advanced Caregiving                                                      |
| Required Prerequisite Course  | Basic Caregiving                                                         |
| Required Status               | Completed                                                                |
| Notes                         | Student must complete Basic Caregiving before taking Advanced Caregiving |

#### Rules

* A course may have no prerequisites.
* A course may have one or more prerequisites.
* A course cannot be its own prerequisite.
* The system should prevent circular prerequisite relationships.

#### Invalid Example

Basic Caregiving should not require Basic Caregiving as its own prerequisite.

Another invalid example:

Basic Caregiving requires Advanced Caregiving, while Advanced Caregiving requires Basic Caregiving. This creates a circular dependency and should not be allowed.

---

### 6.10 Class / Batch

The **Class** or **Batch** entity represents a scheduled instance of a course.

A course defines what will be taught. A class defines when it will happen, who will teach it, how it will be delivered, and how many students can join.

#### Example

**Basic Caregiving** is the course.
**Basic Caregiving Batch 2026-A** is the scheduled class.

#### Possible Class Fields

* Class ID
* Class name
* Class code
* Program ID
* Course ID
* Assigned instructor ID
* Start date
* End date
* Capacity
* Delivery mode
* Location
* Online meeting link, if applicable
* Visibility
* Class status
* Created by
* Created date
* Updated by
* Updated date

#### Example Class Record

| Field         | Example                       |
| ------------- | ----------------------------- |
| Class ID      | CLS-001                       |
| Class Name    | Basic Caregiving Batch 2026-A |
| Program       | Healthcare Program            |
| Course        | Basic Caregiving              |
| Instructor    | Liza Santos                   |
| Start Date    | August 1, 2026                |
| End Date      | September 26, 2026            |
| Capacity      | 25 students                   |
| Delivery Mode | Onsite                        |
| Location      | Dubai Campus Room 101         |
| Status        | Open for Registration         |

#### Recommended Class Statuses

* Draft
* Scheduled
* Open for Registration
* Ongoing
* Completed
* Cancelled

#### Status Example

* **Draft** - Excel Batch 2026-A is still being prepared.
* **Open for Registration** - Basic Caregiving Batch 2026-A is accepting registrations.
* **Ongoing** - Basic English Batch 2026-B has already started.
* **Completed** - Microsoft Excel Batch 2025-C has finished.

---

### 6.11 Class Schedule

The **Class Schedule** entity represents the specific schedule pattern or session timing for a class.

A class may have one or more schedule entries.

#### Example

Basic Caregiving Batch 2026-A runs every Saturday from 9:00 AM to 12:00 PM.

Another class may run every Monday and Wednesday from 7:00 PM to 9:00 PM.

#### Possible Class Schedule Fields

* Schedule ID
* Class ID
* Day of week
* Start time
* End time
* Start date
* End date
* Time zone
* Location, if different from class location
* Online meeting link, if different from class link
* Schedule status

#### Example Class Schedule Record

| Field      | Example                       |
| ---------- | ----------------------------- |
| Class      | Basic Caregiving Batch 2026-A |
| Day        | Saturday                      |
| Start Time | 9:00 AM                       |
| End Time   | 12:00 PM                      |
| Start Date | August 1, 2026                |
| End Date   | September 26, 2026            |
| Time Zone  | Asia/Dubai                    |

#### Another Example

| Field         | Example                    |
| ------------- | -------------------------- |
| Class         | Basic English Batch 2026-B |
| Day           | Monday and Wednesday       |
| Start Time    | 7:00 PM                    |
| End Time      | 9:00 PM                    |
| Delivery Mode | Online                     |

---

### 6.12 Dashboard Data

The **Dashboard Data** entity may not need to be stored as a separate database table. In many cases, dashboard data can be calculated from other entities such as users, roles, programs, courses, and classes.

However, the system should clearly define what data each dashboard needs to display.

#### Example: Registered User / Potential Student Dashboard

Data may come from:

* Program
* Course
* Course Prerequisite
* Class / Batch
* Class Schedule

Example dashboard content:

* Available programs
* Available courses
* Classes open for registration
* Ongoing classes
* Completed classes

#### Example: Admin Dashboard

Data may come from:

* User
* User Role Assignment
* Program
* Course
* Class / Batch

Example dashboard content:

* Total registered users
* Users by role
* Active programs
* Active courses
* Classes open for registration
* Ongoing classes
* Completed classes

#### Rule

Dashboard should display only real data from available modules. It should not show dummy or placeholder data.

---

### 6.13 Basic Report Data

The **Basic Report Data** entity also may not need to be stored separately. Reports can be generated from existing entities.

For Phase 1, reports should be based on available data only.

#### Example Reports and Source Entities

| Report                      | Source Entities                  |
| --------------------------- | -------------------------------- |
| Registered User Report      | User                             |
| User Role Assignment Report | User, Role, User Role Assignment |
| Program Report              | Program                          |
| Course Report               | Course, Program                  |
| Course Prerequisite Report  | Course, Course Prerequisite      |
| Scheduled Class Report      | Class / Batch, Class Schedule    |
| Class Status Report         | Class / Batch                    |

#### Example

Maria opens the **Course Prerequisite Report** and sees:

| Course              | Prerequisite                        |
| ------------------- | ----------------------------------- |
| Advanced Caregiving | Basic Caregiving                    |
| Business English    | Basic English, Intermediate English |

---

### 6.14 Future Entity: Student Application

The **Student Application** entity will be used in future phases when class registration and admissions are implemented.

It represents a potential student's application to join a class.

#### Example

Ana applies for Basic Caregiving Batch 2026-A.

#### Possible Fields

* Application ID
* User ID
* Class ID
* Application status
* Submitted date
* Reviewed by
* Reviewed date
* Remarks

#### Possible Statuses

* Submitted
* Under Review
* Approved
* Rejected
* Cancelled

---

### 6.15 Future Entity: Enrollment

The **Enrollment** entity will represent the confirmed connection between a student and a class.

A user becomes an enrolled student for a specific class only after admission and enrollment are completed.

#### Example

Ana is approved and enrolled in Basic Caregiving Batch 2026-A.

#### Possible Fields

* Enrollment ID
* User ID
* Class ID
* Enrollment status
* Enrollment date
* Approved by
* Completion status

#### Possible Statuses

* Enrolled
* Active
* Completed
* Withdrawn
* Cancelled

---

### 6.16 Future Entity: Learning Material

The **Learning Material** entity will represent files, links, videos, documents, and other learning resources.

#### Example

Basic Caregiving Module 1.pdf is uploaded and linked to the Basic Caregiving course.

#### Possible Fields

* Material ID
* Title
* Description
* Material type
* File URL or link
* Related program
* Related course
* Related subject
* Related class
* Visibility
* Uploaded by
* Uploaded date

#### Example Material Types

* PDF
* Video link
* Document
* Presentation
* External link
* Assignment file

---

### 6.17 Future Entity: Attendance

The **Attendance** entity will track student attendance for class sessions.

#### Example

For Basic English Batch 2026-A, Ana is marked Present, Rico is Late, and Juan is Absent.

#### Possible Fields

* Attendance ID
* Class ID
* Session date
* User ID
* Attendance status
* Recorded by
* Recorded date
* Remarks

#### Possible Attendance Statuses

* Present
* Absent
* Late
* Excused

---

### 6.18 Future Entity: Exam / Assessment

The **Exam / Assessment** entity will manage quizzes, exams, assignments, practical assessments, scores, and results.

#### Example

Microsoft Excel for Beginners has a final practical assessment requiring students to create a spreadsheet with formulas and charts.

#### Possible Fields

* Assessment ID
* Class ID
* Course ID
* Assessment title
* Assessment type
* Assessment date
* Maximum score
* Passing score
* Status
* Created by
* Created date

#### Possible Assessment Types

* Quiz
* Written exam
* Practical assessment
* Assignment
* Final assessment

---

### 6.19 Future Entity: Certificate

The **Certificate** entity will manage certificate generation, approval, issuance, download, and verification.

#### Example

Ana completes Basic Caregiving, meets the attendance requirement, passes the assessment, and receives certificate number CERT-2026-0001.

#### Possible Fields

* Certificate ID
* Certificate number
* User ID
* Class ID
* Course ID
* Issue date
* Certificate status
* Approved by
* Download URL
* Verification code

#### Possible Certificate Statuses

* Pending Review
* Approved
* Issued
* Revoked

---

### 6.20 Future Entity: Notification / Announcement

The **Notification / Announcement** entity will manage messages, announcements, reminders, and alerts.

This is not included in Phase 1, but the system design should prepare for it.

#### Example

The academy sends an announcement:

"Early bird discount available for Basic Caregiving Batch 2026-A until July 31."

#### Possible Fields

* Notification ID
* Title
* Message
* Notification type
* Target audience
* Related academy
* Related program
* Related course
* Related class
* Publish date
* Expiry date
* Created by
* Created date

#### Possible Notification Types

* General announcement
* Class announcement
* Schedule change
* Payment reminder
* Certificate notification
* System alert

---

### 6.21 Future Entity: Payment

The **Payment** entity will manage payment obligations, payment status, and payment records.

This is not included in Phase 1, but the system design should prepare for it.

#### Example

Ana needs to pay AED 1,200 for Basic Caregiving Batch 2026-A.

#### Possible Fields

* Payment ID
* User ID
* Class ID
* Course ID
* Total amount
* Currency
* Payment status
* Due date
* Payment type
* Created date
* Updated date

#### Possible Payment Statuses

* Pending
* Partially Paid
* Paid
* Overdue
* Failed
* Refunded
* Reversed

---

### 6.22 Future Entity: Invoice

The **Invoice** entity will represent a payment request issued to a student or user.

#### Example

Ana receives an invoice for AED 1,200 for Basic Caregiving Batch 2026-A.

#### Possible Fields

* Invoice ID
* Invoice number
* User ID
* Class ID
* Amount
* Currency
* Invoice status
* Issue date
* Due date

#### Possible Invoice Statuses

* Draft
* Issued
* Paid
* Overdue
* Cancelled

---

### 6.23 Future Entity: Receipt

The **Receipt** entity will represent proof of payment.

#### Example

Ana pays AED 1,200 online and receives receipt number RCP-2026-0001.

#### Possible Fields

* Receipt ID
* Receipt number
* Payment ID
* User ID
* Amount paid
* Currency
* Payment method
* Receipt date
* Generated by

---

### 6.24 Future Entity: Payment Transaction

The **Payment Transaction** entity will track executed, failed, reversed, or refunded payment gateway transactions.

#### Example

Ana pays online using a payment gateway. The gateway returns a transaction reference, and Academiya stores it for reconciliation.

#### Possible Fields

* Transaction ID
* Payment ID
* User ID
* Gateway reference
* Amount
* Currency
* Payment method
* Transaction status
* Transaction date
* Failure reason, if applicable
* Reversal reason, if applicable
* Processed by
* Reversed by

#### Possible Transaction Statuses

* Successful
* Failed
* Pending
* Reversed
* Refunded

---

### 6.25 Main Entity Relationships

The following relationships should be considered in the system design.

#### Phase 1 Relationships

| Relationship                   | Description                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------- |
| Academy -> Program              | One academy can have many programs                                           |
| Program -> Course               | One program can have many courses                                            |
| Course -> Subject               | One course can have many subjects                                            |
| Course -> Course Prerequisite   | One course can require one or more prerequisite courses                      |
| Course -> Class / Batch         | One course can have many scheduled classes                                   |
| Class / Batch -> Class Schedule | One class can have one or more schedule entries                              |
| User -> User Role Assignment    | One user can have one or more role assignments                               |
| Role -> Permission              | One role can have many permissions                                           |
| User Role Assignment -> Scope   | Role assignment can be scoped to academy, program, course, subject, or class |

#### Example Relationship

Filipino Skills Academy Dubai
-> Healthcare Program
-> Basic Caregiving
-> Basic Caregiving Batch 2026-A
-> Every Saturday, 9:00 AM to 12:00 PM

Another example:

User Juan Santos
-> Role Assignment: Instructor
-> Course Scope: Microsoft Excel for Beginners
-> Class Scope: Excel Batch 2026-A

---

### 6.26 Future Entity Relationships

The following relationships should be prepared for future phases.

| Relationship                     | Description                                    |
| -------------------------------- | ---------------------------------------------- |
| User -> Student Application       | One user can apply for many classes            |
| Student Application -> Enrollment | Approved application may become enrollment     |
| Enrollment -> Attendance          | Enrolled students will have attendance records |
| Enrollment -> Assessment Result   | Enrolled students may have assessment results  |
| Enrollment -> Certificate         | Completed enrollment may generate certificate  |
| User -> Payment                   | One user can have many payment obligations     |
| Payment -> Invoice                | A payment obligation may generate an invoice   |
| Payment -> Receipt                | A successful payment may generate a receipt    |
| Payment -> Payment Transaction    | A payment may have one or more transactions    |
| Class Schedule -> Notification    | Schedule changes may trigger notifications     |
| Payment Due Date -> Notification  | Payment due dates may trigger reminders        |

#### Example Future Relationship

Ana applies for Basic Caregiving Batch 2026-A
-> Application Approved
-> Enrollment Created
-> Attendance Recorded
-> Assessment Completed
-> Certificate Issued

Another future example:

Ana has AED 1,200 payment obligation
-> Invoice Issued
-> Online Payment Completed
-> Receipt Generated
-> Payment Reminder not needed because payment is complete

---

### 6.27 Phase 1 Data Structure Summary

For Phase 1, the most important entities are:

1. **User**

   * Stores registered user information.

2. **Role**

   * Defines user roles such as Super Admin, Admin, and Instructor.

3. **Permission**

   * Defines allowed actions for each role.

4. **User Role Assignment**

   * Connects users to assigned roles and scopes.

5. **Academy**

   * Represents the academy using the platform.

6. **Program**

   * Represents a broad learning area.

7. **Course**

   * Represents a specific learning offering under a program.

8. **Subject**

   * Represents topics or learning components under a course, if included.

9. **Course Prerequisite**

   * Defines prerequisite course relationships.

10. **Class / Batch**

   * Represents a scheduled course offering.

11. **Class Schedule**

   * Defines the schedule timing for a class.

Dashboard and reports may be generated from the above entities and do not necessarily need separate database tables in Phase 1.

Future modules such as admissions, enrollment, learning materials, attendance, assessments, certifications, notifications, and payments should be considered during architecture design so that the Phase 1 data model can grow without major redevelopment.



## 7. Screen / Page Requirements

This chapter describes the main screens and pages required for Academiya.

The purpose of this chapter is to help developers, Systems Analysts, UI/UX designers, and testers understand what pages are needed, what users can do on each page, what information should be displayed, and how screens should behave.

This chapter is not the final UI design. The actual layout, colors, components, and user experience may be refined during UI/UX design. However, the screens described here should be considered as the functional screen requirements for Phase 1.

For **Phase 1**, the main screens should support:

1. User registration
2. Email verification
3. Login and password reset
4. Registered User / Potential Student dashboard
5. Super Admin dashboard
6. Admin dashboard
7. Instructor dashboard
8. User search and user profile view
9. Role assignment
10. Program management
11. Course management
12. Course prerequisite setup
13. Class scheduling
14. Program, course, and class browsing
15. Basic reports
16. Basic settings

Future screens may include admissions, enrollment, learning materials, attendance, exams, certifications, notifications, announcements, payments, invoices, receipts, and finance controls.

---

### 7.1 Public Landing Page

The **Public Landing Page** is the first page users may see before logging in or registering.

This page introduces Academiya and allows users to access registration and login.

For Phase 1, this page may be simple. The main purpose is to guide users to create an account or log in.

#### Main Actions

Users should be able to:

* View basic information about Academiya
* Register a new account
* Log in to an existing account
* Access basic help or contact information, if available

#### Example

Ana opens the Academiya website. She sees a short description of the platform and two main buttons:

* **Register**
* **Login**

Ana selects **Register** to create her account.

---

### 7.2 Registration Page

The **Registration Page** allows any user to create an Academiya account.

All users use the same registration page. Users do not register separately as Admin, Instructor, or Student. After registration and email verification, the user becomes a **Registered User / Potential Student** by default.

#### Main Fields

The registration page may include:

* First name
* Middle name, optional
* Last name
* Email address
* Password
* Confirm password
* Country, optional
* Mobile number, optional for Phase 1
* Terms and conditions agreement
* Privacy policy agreement

#### Main Actions

Users should be able to:

* Enter registration details
* Submit registration
* View validation errors
* Go to login page if already registered

#### Validation Examples

* If the email address is already registered, show:
  **"This email address is already registered. Please log in or use another email address."**

* If the password and confirm password do not match, show:
  **"Password and confirm password do not match."**

* If required fields are missing, show:
  **"Please complete all required fields."**

#### Example

Ana enters:

* First Name: Ana
* Last Name: Santos
* Email: ana@example.com
* Password: ********
* Confirm Password: ********

After submitting the form, Academiya creates her account and sends a verification email.

---

### 7.3 Email Verification Screen

The **Email Verification Screen** supports the email verification process.

For Phase 1, Academiya will verify accounts using a **"Verify this email"** link sent to the user's registered email address.

#### Main Scenarios

The screen should support:

* Successful email verification
* Expired verification link
* Invalid verification link
* Resend verification email

#### Main Actions

Users should be able to:

* Confirm that their email has been verified
* Request a new verification email if the link expired
* Go to login after successful verification

#### Example: Successful Verification

Ana clicks the **"Verify this email"** link from her email. Academiya opens a screen that says:

**"Your email has been verified successfully. You can now log in to Academiya."**

The page shows a **Login** button.

#### Example: Expired Link

Rico clicks an old verification link. Academiya shows:

**"This verification link has expired. Please request a new verification email."**

The page shows a **Resend Verification Email** button.

---

### 7.4 Login Page

The **Login Page** allows registered and verified users to access Academiya.

For Phase 1, users log in using their registered email address and password.

#### Main Fields

The login page should include:

* Email address
* Password

#### Main Actions

Users should be able to:

* Log in
* Go to registration page
* Use forgot password
* View login errors

#### Validation Examples

* If the email or password is incorrect, show:
  **"Invalid email address or password."**

* If the email is not verified, show:
  **"Please verify your email address before logging in."**

* If the account is deactivated, show:
  **"Your account is not active. Please contact the administrator."**

#### Example

Ana logs in using `ana@example.com` and her password. Since she is verified and active but has no assigned operational role, the system displays the **Registered User / Potential Student Dashboard**.

Another example:

Maria logs in using her email and password. Since she is assigned as Admin, the system displays the **Admin Dashboard**.

---

### 7.5 Forgot Password Page

The **Forgot Password Page** allows users to request a password reset.

#### Main Fields

The page should include:

* Registered email address

#### Main Actions

Users should be able to:

* Submit password reset request
* Receive password reset email
* Return to login page

#### Example

Juan forgets his password. He selects **Forgot Password**, enters `juan@example.com`, and receives a password reset email.

---

### 7.6 Reset Password Page

The **Reset Password Page** allows users to create a new password after clicking a password reset link.

#### Main Fields

The page should include:

* New password
* Confirm new password

#### Main Actions

Users should be able to:

* Enter a new password
* Confirm the new password
* Submit the password reset
* Return to login after successful reset

#### Example

Juan opens the password reset link, enters a new password, confirms it, and submits the form. The system updates his password and displays:

**"Your password has been reset successfully. You can now log in."**

---

### 7.7 Registered User / Potential Student Dashboard

The **Registered User / Potential Student Dashboard** is the default dashboard for every newly registered and verified user who has not been assigned an operational role.

This dashboard should help potential students explore academy offerings.

#### Information Displayed

The dashboard may include:

* Available programs
* Available courses
* Courses with prerequisites
* Classes open for registration
* Ongoing classes
* Completed classes
* Profile completion status
* Account status

#### Main Actions

Users should be able to:

* View programs
* View courses
* View course details
* View class details
* View class status
* View prerequisites
* Update basic profile information, if enabled

#### Example

Ana logs in and sees:

* **Healthcare Program**
* **Language Program**
* **Computer Skills Program**
* **Basic Caregiving Batch 2026-A - Open for Registration**
* **Basic English Batch 2026-B - Ongoing**
* **Microsoft Excel Batch 2025-C - Completed**

Ana opens **Advanced Caregiving** and sees that **Basic Caregiving** is required as a prerequisite.

---

### 7.8 Super Admin Dashboard

The **Super Admin Dashboard** provides platform-level visibility.

This screen is used by users assigned as Super Admin.

#### Information Displayed

The Super Admin Dashboard may include:

* Total registered users
* Users by role
* Users without assigned operational roles
* Active users
* Inactive users
* Total academies, if academy setup is included
* Total programs
* Total courses
* Courses with prerequisites
* Total scheduled classes
* Classes by status

#### Main Actions

Super Admin should be able to quickly access:

* User management
* Role assignment
* Academy management, if included
* Program management
* Course management
* Class scheduling
* Reports
* Settings

#### Example

Raymond logs in as Super Admin and sees:

* 1,250 registered users
* 42 instructors
* 8 active programs
* 35 active courses
* 12 scheduled classes
* 6 classes open for registration

Raymond selects **User Management** to assign an Admin to an academy.

---

### 7.9 Admin Dashboard

The **Admin Dashboard** provides academy-level visibility.

This screen is used by users assigned as Admin.

#### Information Displayed

The Admin Dashboard may include:

* Total users within the academy
* Users by assigned role
* Users without assigned operational roles
* Active programs
* Draft programs
* Active courses
* Draft courses
* Courses with prerequisites
* Total scheduled classes
* Classes open for registration
* Ongoing classes
* Completed classes

#### Main Actions

Admin should be able to quickly access:

* User search
* Role assignment
* Program management
* Course management
* Course prerequisite setup
* Class scheduling
* Basic reports
* Settings

#### Example

Maria logs in as Admin for **Filipino Skills Academy Dubai**. Her dashboard shows:

* 320 registered users
* 12 instructors
* 5 active programs
* 22 active courses
* 6 classes open for registration
* 9 ongoing classes
* 18 completed classes

Maria selects **Create Class** to schedule **Basic Caregiving Batch 2026-A**.

---

### 7.10 Instructor Dashboard

The **Instructor Dashboard** provides teaching-related information for users assigned as Instructor.

For Phase 1, this dashboard may be limited to assigned programs, courses, subjects, and scheduled classes.

#### Information Displayed

The Instructor Dashboard may include:

* Assigned programs
* Assigned courses
* Assigned subjects, if applicable
* Assigned classes
* Upcoming scheduled classes
* Ongoing assigned classes
* Delivery mode
* Location or online link
* Account status

#### Main Actions

Instructor should be able to:

* View assigned courses
* View assigned classes
* View class schedule
* View location or online details
* View assigned subjects, if applicable

#### Example

Juan logs in as Instructor and sees:

* Program: Computer Skills Program
* Course: Microsoft Excel for Beginners
* Class: Excel Batch 2026-A
* Schedule: Sunday, 2:00 PM to 5:00 PM
* Delivery Mode: Onsite
* Location: Dubai Campus Room 204

In future phases, Juan may also mark attendance, upload materials, create assessments, and view student progress.

---

### 7.11 User Management Page

The **User Management Page** allows authorized users to search and manage registered users.

This page is mainly used by Super Admin and Admin.

#### Information Displayed

The user list may display:

* User ID
* Full name
* Email address
* Current role or access type
* Account status
* Email verification status
* Created date

#### Search and Filter Options

Users may search or filter by:

* User ID
* Email address
* Name
* Role
* Account status
* Email verification status

#### Main Actions

Authorized users should be able to:

* Search user
* View user profile
* Assign role
* Update role assignment
* Activate account
* Deactivate account

#### Example

Maria searches for `juan@example.com`. The system shows Juan's record:

* User ID: USR-000145
* Name: Juan Santos
* Email: juan@example.com
* Access Type: Registered User / Potential Student
* Account Status: Active
* Email Status: Verified

Maria opens Juan's profile and assigns him as Instructor.

---

### 7.12 User Profile Page

The **User Profile Page** displays detailed information about a selected user.

#### Information Displayed

The page may include:

* User ID
* Full name
* Email address
* Mobile number, if provided
* Country, if provided
* Email verification status
* Account status
* Current role or access type
* Assigned academy, if applicable
* Assigned course, subject, or class, if applicable
* Created date
* Last login date, if available

#### Main Actions

Authorized users should be able to:

* View user details
* Assign role
* Change role assignment
* Activate or deactivate user
* View role assignment history, if available

#### Example

Maria opens Juan's profile and sees that he has no assigned operational role. She selects **Assign Role**, chooses **Instructor**, and assigns him to **Microsoft Excel for Beginners**.

---

### 7.13 Role Assignment Page

The **Role Assignment Page** allows authorized users to assign a role and scope to a registered user.

#### Main Fields

The page may include:

* Selected user
* Role
* Academy scope
* Program scope, optional
* Course scope, optional
* Subject scope, optional
* Class scope, optional
* Assignment status
* Effective date, optional

#### Main Actions

Authorized users should be able to:

* Select role
* Select scope
* Save role assignment
* Update role assignment
* Remove or deactivate role assignment, if allowed

#### Example

Raymond assigns Maria as:

* User: Maria Cruz
* Role: Admin
* Scope: Filipino Skills Academy Dubai

Another example:

Maria assigns Juan as:

* User: Juan Santos
* Role: Instructor
* Course Scope: Microsoft Excel for Beginners
* Class Scope: Excel Batch 2026-A

After saving, Juan's dashboard changes to the Instructor Dashboard.

---

### 7.14 Program List Page

The **Program List Page** displays programs created in the academy.

Authorized users use this page to manage programs. Registered Users / Potential Students may use a student-facing version to browse visible programs.

#### Information Displayed

The program list may display:

* Program name
* Program code
* Category
* Status
* Visibility
* Number of related courses
* Created date

#### Main Actions for Admin / Super Admin

Authorized users should be able to:

* Create program
* View program
* Edit program
* Change program status
* Archive program
* View related courses

#### Main Actions for Registered User / Potential Student

Potential students should be able to:

* View active and visible programs
* Open program details
* View related visible courses

#### Example

Maria sees the following program list:

* Healthcare Program - Active
* Language Program - Active
* Computer Skills Program - Active
* Hospitality Program - Draft

Ana, as a potential student, only sees active and visible programs, so she does not see Hospitality Program if it is still in Draft status.

---

### 7.15 Program Create / Edit Page

The **Program Create / Edit Page** allows authorized users to create or update program information.

#### Main Fields

The page may include:

* Program name
* Program code
* Program category
* Program description
* Program image or thumbnail, optional
* Visibility
* Status

#### Main Actions

Authorized users should be able to:

* Save as Draft
* Save as Active
* Update program
* Cancel editing

#### Example

Maria creates:

* Program Name: Healthcare Program
* Program Code: HLTH
* Category: Healthcare
* Description: Courses related to caregiving, elderly care, first aid, and health support skills
* Visibility: Visible to Registered Users
* Status: Active

After saving, the program becomes available for course creation and student-facing browsing.

---

### 7.16 Course List Page

The **Course List Page** displays courses under programs.

Authorized users use this page to manage courses. Registered Users / Potential Students may use a student-facing version to browse visible courses.

#### Information Displayed

The course list may display:

* Course name
* Course code
* Related program
* Course level
* Duration
* Status
* Visibility
* Prerequisite indicator
* Created date

#### Main Actions for Admin / Super Admin

Authorized users should be able to:

* Create course
* View course
* Edit course
* Change course status
* Archive course
* Configure prerequisites
* View related classes

#### Main Actions for Registered User / Potential Student

Potential students should be able to:

* View active and visible courses
* Open course details
* View prerequisites
* View related classes

#### Example

Ana opens **Healthcare Program** and sees:

* Basic Caregiving - Beginner - No prerequisite
* Advanced Caregiving - Advanced - Requires Basic Caregiving
* First Aid Training - Beginner - No prerequisite

---

### 7.17 Course Create / Edit Page

The **Course Create / Edit Page** allows authorized users to create or update course information.

#### Main Fields

The page may include:

* Related program
* Course name
* Course code
* Course category
* Course description
* Course level
* Course duration
* Course requirements
* Course fee, if applicable
* Course image or thumbnail, optional
* Visibility
* Status
* Has prerequisite

#### Main Actions

Authorized users should be able to:

* Save course as Draft
* Save course as Active
* Update course
* Configure prerequisites
* Cancel editing

#### Example

Maria creates:

* Program: Healthcare Program
* Course Name: Basic Caregiving
* Course Code: CARE-BASIC
* Level: Beginner
* Duration: 8 weeks
* Requirement: No previous caregiving experience required
* Fee: AED 1,200
* Visibility: Visible to Registered Users
* Status: Active

---

### 7.18 Course Detail Page

The **Course Detail Page** displays full information about a course.

This page may have different views depending on the user role.

#### Information Displayed

The course detail page may show:

* Course name
* Course code
* Related program
* Description
* Level
* Duration
* Requirements
* Fee, if applicable
* Prerequisites
* Related subjects, if applicable
* Related classes
* Status
* Visibility

#### Example for Potential Student

Ana opens **Advanced Caregiving** and sees:

* Course Level: Advanced
* Duration: 10 weeks
* Prerequisite: Basic Caregiving
* Available Classes:

  * Advanced Caregiving Batch 2026-B - Scheduled
  * Advanced Caregiving Batch 2025-C - Completed

#### Example for Admin

Maria opens the same course and also sees admin actions:

* Edit Course
* Configure Prerequisites
* Create Class
* Change Status

---

### 7.19 Course Prerequisite Setup Page

The **Course Prerequisite Setup Page** allows authorized users to define prerequisite courses.

#### Main Fields

The page may include:

* Selected course
* Has prerequisite toggle
* Required prerequisite course or courses
* Required completion status
* Required passing status, future phase
* Notes

#### Main Actions

Authorized users should be able to:

* Add prerequisite
* Remove prerequisite
* Save prerequisite rule
* Cancel editing

#### Validation Rules

The page should prevent:

* Selecting the same course as its own prerequisite
* Creating circular prerequisite relationships where possible

#### Example

Maria opens **Advanced Caregiving** and enables prerequisites. She selects **Basic Caregiving** as the required prerequisite.

The system saves:

**Advanced Caregiving requires Basic Caregiving.**

#### Invalid Example

Maria tries to set **Basic Caregiving** as a prerequisite of **Basic Caregiving**. The system should prevent this and display:

**"A course cannot be its own prerequisite."**

---

### 7.20 Subject List / Setup Page

The **Subject List / Setup Page** allows authorized users to manage subjects under a course.

This page may be included in Phase 1 if subject setup is required for instructor assignment. If not, it can be planned for a future phase.

#### Information Displayed

The page may display:

* Subject name
* Subject code
* Related course
* Subject duration
* Assigned instructor
* Subject status

#### Main Actions

Authorized users may be able to:

* Create subject
* Edit subject
* Assign instructor
* Change subject status

#### Example

For **Basic Caregiving**, Maria creates:

* Elderly Care
* First Aid
* Basic Nursing Skills

For **Microsoft Excel for Beginners**, Maria creates:

* Spreadsheet Basics
* Formulas and Functions
* Charts
* Data Filtering

---

### 7.21 Class List Page

The **Class List Page** displays scheduled classes or batches.

Authorized users use this page to manage classes. Registered Users / Potential Students may use a student-facing version to browse visible classes.

#### Information Displayed

The class list may show:

* Class name or batch name
* Related program
* Related course
* Assigned instructor
* Start date
* End date
* Schedule summary
* Delivery mode
* Capacity
* Status
* Visibility

#### Filters

The page may support filters by:

* Program
* Course
* Instructor
* Class status
* Delivery mode
* Date range

#### Main Actions for Admin / Super Admin

Authorized users should be able to:

* Create class
* View class
* Edit class
* Change class status
* Cancel class
* Assign instructor

#### Main Actions for Registered User / Potential Student

Potential students should be able to:

* View classes open for registration
* View ongoing classes
* View completed classes
* Open class details

#### Example

Ana opens the class list and sees:

* Basic Caregiving Batch 2026-A - Open for Registration
* Basic English Batch 2026-B - Ongoing
* Microsoft Excel Batch 2025-C - Completed

Maria opens the same module as Admin and also sees Draft and Scheduled classes.

---

### 7.22 Class Create / Edit Page

The **Class Create / Edit Page** allows authorized users to schedule or update a class.

#### Main Fields

The page may include:

* Class name or batch name
* Class code
* Related program
* Related course
* Assigned instructor
* Start date
* End date
* Schedule
* Capacity
* Delivery mode
* Location
* Online meeting link, if applicable
* Visibility
* Class status

#### Main Actions

Authorized users should be able to:

* Save as Draft
* Save as Scheduled
* Mark as Open for Registration
* Mark as Ongoing
* Mark as Completed
* Cancel class
* Update class details

#### Example

Maria creates:

* Class Name: Basic Caregiving Batch 2026-A
* Program: Healthcare Program
* Course: Basic Caregiving
* Instructor: Liza Santos
* Start Date: August 1, 2026
* End Date: September 26, 2026
* Schedule: Every Saturday, 9:00 AM to 12:00 PM
* Capacity: 25 students
* Delivery Mode: Onsite
* Location: Dubai Campus Room 101
* Status: Open for Registration

---

### 7.23 Class Detail Page

The **Class Detail Page** displays full information about a scheduled class.

#### Information Displayed

The page may show:

* Class name
* Class code
* Related program
* Related course
* Instructor
* Start date
* End date
* Schedule
* Delivery mode
* Location or online link
* Capacity
* Status
* Visibility
* Prerequisite information from related course

#### Example for Potential Student

Ana opens **Basic Caregiving Batch 2026-A** and sees:

* Course: Basic Caregiving
* Schedule: Every Saturday, 9:00 AM to 12:00 PM
* Start Date: August 1, 2026
* Delivery Mode: Onsite
* Location: Dubai Campus Room 101
* Status: Open for Registration
* Prerequisite: None

#### Example for Admin

Maria opens the same class and also sees:

* Edit Class
* Change Status
* Assign Instructor
* Cancel Class

---

### 7.24 Class Schedule Setup Page

The **Class Schedule Setup Page** allows authorized users to define the timing of a class.

This can be part of the Class Create / Edit Page or a separate screen, depending on the UI design.

#### Main Fields

The page may include:

* Class
* Day of week
* Start time
* End time
* Start date
* End date
* Time zone
* Location override, optional
* Online link override, optional

#### Example

Maria sets the schedule for **Basic Caregiving Batch 2026-A**:

* Day: Saturday
* Time: 9:00 AM to 12:00 PM
* Start Date: August 1, 2026
* End Date: September 26, 2026
* Time Zone: Asia/Dubai

Another example:

Maria sets **Basic English Batch 2026-B**:

* Days: Monday and Wednesday
* Time: 7:00 PM to 9:00 PM
* Delivery Mode: Online

---

### 7.25 Program, Course, and Class Browsing Pages

The **Browsing Pages** allow Registered Users / Potential Students to explore academy offerings.

These may be separate pages or combined into a student-facing catalog.

#### Browsing Categories

The browsing experience should allow users to view:

* Programs
* Courses
* Classes open for registration
* Ongoing classes
* Completed classes

#### Example

Rico opens the **Computer Skills Program** and sees:

* Computer Literacy
* Microsoft Excel for Beginners
* Microsoft Excel Intermediate

He opens **Microsoft Excel for Beginners** and sees:

* Excel Batch 2026-A - Open for Registration
* Excel Batch 2026-B - Ongoing
* Excel Batch 2025-C - Completed

---

### 7.26 Basic Reports Page

The **Basic Reports Page** allows authorized users to view simple reports from Phase 1 data.

#### Available Phase 1 Reports

Reports may include:

* Registered user report
* User role assignment report
* User status report
* Program report
* Course report
* Course prerequisite report
* Scheduled class report
* Class status report

#### Filters

Reports may support filtering by:

* Date range
* Status
* Role
* Program
* Course
* Class status

#### Example

Maria opens the **Scheduled Class Report** and filters by **Open for Registration**. The system displays all classes currently accepting registration.

Another example:

Raymond opens the **User Role Assignment Report** and sees users grouped by:

* Super Admin
* Admin
* Instructor
* Registered User / Potential Student

---

### 7.27 Settings Page

The **Settings Page** allows authorized users to configure basic system and academy setup values.

For Phase 1, settings may be limited to values needed by the available modules.

#### Phase 1 Settings May Include

* Account settings
* Role and permission settings
* Program categories
* Course categories
* Course levels
* Class delivery modes
* Class statuses
* Visibility settings
* Email verification settings
* Password policy settings

#### Example

Admin configures:

* Course Levels: Beginner, Intermediate, Advanced
* Delivery Modes: Onsite, Online, Hybrid
* Class Statuses: Draft, Scheduled, Open for Registration, Ongoing, Completed, Cancelled
* Program Visibility: Hidden, Visible to Registered Users
* Password Policy: Minimum 8 characters

---

### 7.28 Future Screen: Notification & Announcement Management

The **Notification & Announcement Management Screen** is not included in Phase 1, but should be planned for a future phase.

#### Future Actions

Authorized users may be able to:

* Create announcement
* Select target audience
* Send notification
* View notification history
* View read and unread status

#### Example

Admin creates an announcement:

**"Early bird discount available for Basic Caregiving Batch 2026-A until July 31."**

Target audience:

* Registered Users / Potential Students

Another example:

The class schedule changes for **Basic English Batch 2026-B**. The system sends a notification to enrolled students and the assigned Instructor.

---

### 7.29 Future Screen: Payment Management

The **Payment Management Screen** is not included in Phase 1, but should be planned for a future phase.

#### Future Actions

Authorized Finance Staff may be able to:

* View payment transactions
* Check executed transactions
* Review failed transactions
* Reverse payments
* Manage refunds
* Configure installment rules
* Configure payment due dates
* Reconcile transactions
* Access finance reports

#### Example

Ana pays **AED 1,200** online for **Basic Caregiving Batch 2026-A**.

Finance Staff opens the transaction panel and sees:

* Student: Ana Santos
* Class: Basic Caregiving Batch 2026-A
* Amount: AED 1,200
* Status: Paid
* Gateway Reference: PGW-2026-000123

Another example:

Ana accidentally pays twice. Finance Staff reviews both transactions and reverses the duplicate payment with a recorded reason.

---

### 7.30 Screen Access Rules

Screens should be displayed based on user role and permission.

#### General Rules

* Public users can access landing, registration, login, forgot password, and email verification screens.
* Registered Users / Potential Students can access the student-facing dashboard and browsing screens.
* Super Admin can access platform-level management screens.
* Admin can access academy-level management screens.
* Instructor can access assigned teaching-related screens.
* Users should not see screens or actions they are not authorized to access.

#### Example

Ana is a Registered User / Potential Student. She should not see the **Create Program** button.

Maria is an Admin. She can see **Create Program**, **Create Course**, and **Create Class**.

Juan is an Instructor. He can view assigned classes but should not be able to assign roles unless the permission is granted.

---

### 7.31 Web and Mobile Screen Considerations

Academiya will be available as both a web application and a mobile application.

The same business functions may appear differently depending on the device, but the business rules should remain consistent.

#### Web Application

The web application may be more suitable for:

* Admin operations
* Program and course management
* Class scheduling
* Role assignment
* Reports
* Settings

#### Mobile Application

The mobile application may be more suitable for:

* User registration
* Login
* Browsing programs and courses
* Viewing class details
* Viewing dashboard
* Future notifications
* Future payments
* Future student learning activities

#### Example

Maria may prefer using the web application to create courses and schedule classes because the forms are more detailed.

Ana may prefer using the mobile application to browse classes and receive future notifications.

---

### 7.32 Phase 1 Screen Summary

For Phase 1, Academiya should prioritize the following screens:

1. Public Landing Page
2. Registration Page
3. Email Verification Screen
4. Login Page
5. Forgot Password Page
6. Reset Password Page
7. Registered User / Potential Student Dashboard
8. Super Admin Dashboard
9. Admin Dashboard
10. Instructor Dashboard
11. User Management Page
12. User Profile Page
13. Role Assignment Page
14. Program List Page
15. Program Create / Edit Page
16. Course List Page
17. Course Create / Edit Page
18. Course Detail Page
19. Course Prerequisite Setup Page
20. Subject List / Setup Page, optional for Phase 1
21. Class List Page
22. Class Create / Edit Page
23. Class Detail Page
24. Class Schedule Setup Page
25. Program, Course, and Class Browsing Pages
26. Basic Reports Page
27. Settings Page

Future screens should include:

* Admissions and Enrollment
* Learning Materials
* Attendance
* Exam and Assessment
* Certification
* Notification and Announcement Management
* Payment Management
* Invoice and Receipt Management
* Finance Staff Configuration Panel


---

## 8. Role-Based Access Matrix

This chapter defines the recommended role-based access matrix for Academiya.

The purpose of this chapter is to help developers, Systems Analysts, testers, and administrators understand what each role is allowed to access or perform in the system.

Academiya should use **Role-Based Access Control (RBAC)**. This means a user's access is controlled by their assigned role, permissions, and scope.

For Phase 1, the main access types and roles are:

1. **Public Visitor**
2. **Registered User / Potential Student**
3. **Super Admin**
4. **Admin**
5. **Instructor**

Future roles may include:

1. **Academy Manager**
2. **Admission Staff**
3. **Finance Staff**
4. **Content Manager**
5. **Certificate Officer**

---

### 8.1 Access Control Concept

Each user should only be able to access screens, data, and actions allowed by their role and permission scope.

Permission scope defines where the access applies.

Examples of scope:

* **Platform level** - access applies across the entire Academiya platform
* **Academy level** - access applies only to a specific academy
* **Program level** - access applies only to a specific program
* **Course level** - access applies only to a specific course
* **Subject level** - access applies only to a specific subject
* **Class level** - access applies only to a specific class or batch

#### Example

Raymond is a **Super Admin**. He may access platform-level data across all academies.

Maria is an **Admin** for **Filipino Skills Academy Dubai**. She can manage users, programs, courses, and classes for that academy only.

Juan is an **Instructor** for **Microsoft Excel for Beginners**. He can view his assigned course and scheduled classes, but he should not manage unrelated courses such as Basic Caregiving.

Ana is a **Registered User / Potential Student**. She can browse visible programs, courses, and classes, but she cannot create programs or assign roles.

---

### 8.2 Permission Action Types

Academiya should support different permission action types.

Recommended permission actions include:

| Permission Action | Meaning                                       | Example                                             |
| ----------------- | --------------------------------------------- | --------------------------------------------------- |
| View              | User can see data or page                     | Instructor can view assigned class                  |
| Create            | User can create a new record                  | Admin can create a course                           |
| Update            | User can edit an existing record              | Admin can update class schedule                     |
| Delete            | User can delete a record, if allowed          | Super Admin may delete test data, if permitted      |
| Archive           | User can archive a record instead of deleting | Admin can archive an old course                     |
| Assign            | User can assign users or roles                | Admin can assign Instructor role                    |
| Activate          | User can activate records or accounts         | Super Admin can activate an academy                 |
| Deactivate        | User can deactivate records or accounts       | Admin can deactivate a user account                 |
| Approve           | User can approve a request                    | Future Admission Staff can approve application      |
| Upload            | User can upload files                         | Future Content Manager can upload PDF materials     |
| Download          | User can download files or documents          | Student can download certificate in future phase    |
| Generate          | User can generate system output               | Future Certificate Officer can generate certificate |
| Export            | User can export reports                       | Admin can export class report, if enabled           |
| Reverse           | User can reverse a transaction                | Future Finance Staff can reverse payment            |

---

### 8.3 Phase 1 Role Summary

The Phase 1 role access should be summarized as follows:

| Role / Access Type                  | Main Purpose                                                       |
| ----------------------------------- | ------------------------------------------------------------------ |
| Public Visitor                      | Can access public pages such as landing, login, and registration   |
| Registered User / Potential Student | Can browse visible programs, courses, and classes                  |
| Super Admin                         | Manages platform-level setup and access                            |
| Admin                               | Manages academy-level users, roles, programs, courses, and classes |
| Instructor                          | Views assigned courses, subjects, and scheduled classes            |

#### Example

Ana is a new user. After email verification, she becomes a Registered User / Potential Student. She can view programs and classes.

Later, Maria assigns Ana as Instructor for Basic English. Ana's access changes, and she can now see the Instructor dashboard.

---

### 8.4 Phase 1 Module Access Matrix

The following table provides the recommended access for Phase 1 modules.

| Module / Feature          |       Public Visitor | Registered User / Potential Student |                   Super Admin |                        Admin |              Instructor |
| ------------------------- | -------------------: | ----------------------------------: | ----------------------------: | ---------------------------: | ----------------------: |
| Public Landing Page       |                 View |                                View |                          View |                         View |                    View |
| Registration              |       Create Account |                        Not Required |                  Not Required |                 Not Required |            Not Required |
| Email Verification        |     Verify Own Email |                    Verify Own Email |              Verify Own Email |             Verify Own Email |        Verify Own Email |
| Login                     |                Login |                               Login |                         Login |                        Login |                   Login |
| Forgot / Reset Password   |          Own Account |                         Own Account |                   Own Account |                  Own Account |             Own Account |
| Student-Facing Dashboard  |                   No |                                View |                      Optional |                     Optional |                Optional |
| Super Admin Dashboard     |                   No |                                  No |                          View |                           No |                      No |
| Admin Dashboard           |                   No |                                  No |                  No / Limited |                         View |                      No |
| Instructor Dashboard      |                   No |                                  No |                            No |                           No |                    View |
| User Search               |                   No |                                  No |                 View / Manage | View / Manage within academy |                      No |
| User Profile View         |                   No |                         Own Profile |                 View / Manage | View / Manage within academy |             Own Profile |
| Role Assignment           |                   No |                                  No | Assign Admin / Platform Roles |         Assign academy roles |                      No |
| Program Management        |                   No |                   View visible only |                 View / Manage | View / Manage within academy |      View assigned only |
| Course Management         |                   No |                   View visible only |                 View / Manage | View / Manage within academy |      View assigned only |
| Course Prerequisite Setup |                   No |                   View visible only |                 View / Manage |                View / Manage |  View only, if assigned |
| Subject Setup             |                   No |                   View visible only |                 View / Manage |                View / Manage |      View assigned only |
| Class Scheduling          |                   No |                   View visible only |                 View / Manage |                View / Manage |      View assigned only |
| Class Browsing            | No / Public optional |                                View |                          View |                         View | View assigned / visible |
| Basic Reports             |                   No |                                  No |         View platform reports |         View academy reports | Limited / assigned only |
| Settings                  |                   No |                Own preferences only |             Platform settings |             Academy settings |    Own preferences only |

---

### 8.5 Public Visitor Access

A **Public Visitor** is a person who has not logged in.

For Phase 1, Public Visitor access should be limited.

#### Allowed Access

Public Visitors may access:

* Public landing page
* Registration page
* Login page
* Forgot password page
* Email verification page through verification link

#### Not Allowed

Public Visitors should not access:

* Dashboards
* Program browsing, unless public browsing is enabled
* Course browsing, unless public browsing is enabled
* Class browsing, unless public browsing is enabled
* User management
* Role assignment
* Reports
* Settings

#### Example

Ana opens the Academiya website before registering. She can see the landing page and select **Register**. She cannot access the dashboard until she creates and verifies an account.

---

### 8.6 Registered User / Potential Student Access

A **Registered User / Potential Student** is a verified user who has not been assigned an operational role.

This is the default access type for every newly registered and verified user.

#### Allowed Access

Registered Users / Potential Students may access:

* Own dashboard
* Own profile
* Visible programs
* Visible courses
* Course details
* Course prerequisites
* Classes open for registration
* Ongoing classes
* Completed classes
* Class details

#### Not Allowed

Registered Users / Potential Students should not access:

* User management
* Role assignment
* Program creation
* Course creation
* Course prerequisite setup
* Class scheduling setup
* Admin dashboard
* Instructor dashboard
* Reports
* System settings

#### Example

Ana logs in after verifying her email. She can view:

* Healthcare Program
* Basic Caregiving
* Advanced Caregiving
* Basic Caregiving Batch 2026-A - Open for Registration
* Basic English Batch 2026-B - Ongoing
* Microsoft Excel Batch 2025-C - Completed

Ana cannot create a new course or assign herself as Instructor.

---

### 8.7 Super Admin Access

The **Super Admin** manages Academiya at the platform level.

This role has the highest level of access and should be carefully controlled.

#### Allowed Access

Super Admin may access:

* Platform dashboard
* User management
* Role assignment
* Academy management, if included
* Program management
* Course management
* Class scheduling
* Basic reports
* Platform settings

#### Typical Actions

Super Admin may be able to:

* View all users
* Assign Admin users
* Manage academies, if multi-academy support is included
* View platform-level reports
* Manage platform-level settings
* Activate or deactivate academies, if included
* Support troubleshooting

#### Example

Raymond is the Super Admin. He creates or activates **Filipino Skills Academy Dubai** and assigns Maria as the Admin for that academy.

Another example:

Raymond views the platform dashboard and sees total users, active courses, and scheduled classes across academies.

---

### 8.8 Admin Access

The **Admin** manages academy-level operations.

Admin access should be limited to the academy assigned to the Admin.

#### Allowed Access

Admin may access:

* Admin dashboard
* User management within assigned academy
* Role assignment within assigned academy
* Program management
* Course management
* Course prerequisite setup
* Subject setup, if included
* Class scheduling
* Basic reports
* Academy-level settings

#### Typical Actions

Admin may be able to:

* Search registered users
* Assign Instructor role
* Assign users to academy roles
* Create programs
* Create courses
* Set course prerequisites
* Create subjects, if included
* Schedule classes
* Assign instructors to courses or classes
* Change class status
* View academy-level reports

#### Example

Maria is the Admin for **Filipino Skills Academy Dubai**. She creates the **Healthcare Program**, then creates **Basic Caregiving** and **Advanced Caregiving** under that program.

She sets **Basic Caregiving** as a prerequisite for **Advanced Caregiving**.

Another example:

Maria schedules **Basic Caregiving Batch 2026-A** and assigns Liza Santos as the Instructor.

---

### 8.9 Instructor Access

The **Instructor** manages assigned teaching-related activities.

For Phase 1, Instructor access is mostly view-based because attendance, learning materials, exams, and assessments are planned for future phases.

#### Allowed Access

Instructor may access:

* Instructor dashboard
* Own profile
* Assigned programs
* Assigned courses
* Assigned subjects, if applicable
* Assigned scheduled classes
* Class schedule details
* Class delivery mode and location

#### Not Allowed in Phase 1

Instructor should not access:

* User role assignment
* Program creation
* Course creation
* Course prerequisite setup
* Class creation, unless specifically permitted
* Reports unrelated to assigned classes
* Finance data
* Platform settings

#### Example

Juan is assigned as Instructor for **Microsoft Excel for Beginners** and **Excel Batch 2026-A**.

Juan can view:

* Course details
* Class schedule
* Delivery mode
* Location
* Assigned class status

Juan cannot create a new program or assign another user as Instructor.

---

### 8.10 Access Matrix by Permission Action

The following table summarizes recommended Phase 1 permissions by action.

| Feature / Action            | Registered User / Potential Student | Super Admin |        Admin |   Instructor |
| --------------------------- | ----------------------------------: | ----------: | -----------: | -----------: |
| View own profile            |                                 Yes |         Yes |          Yes |          Yes |
| Update own basic profile    |                                 Yes |         Yes |          Yes |          Yes |
| View visible programs       |                                 Yes |         Yes |          Yes |          Yes |
| View visible courses        |                                 Yes |         Yes |          Yes |          Yes |
| View visible classes        |                                 Yes |         Yes |          Yes |          Yes |
| Create program              |                                  No |         Yes |          Yes |           No |
| Update program              |                                  No |         Yes |          Yes |           No |
| Archive program             |                                  No |         Yes |          Yes |           No |
| Create course               |                                  No |         Yes |          Yes |           No |
| Update course               |                                  No |         Yes |          Yes |           No |
| Archive course              |                                  No |         Yes |          Yes |           No |
| Configure prerequisites     |                                  No |         Yes |          Yes |           No |
| Create subject              |                                  No |         Yes |          Yes | No / Limited |
| Assign instructor           |                                  No |         Yes |          Yes |           No |
| Create class                |                                  No |         Yes |          Yes | No / Limited |
| Update class                |                                  No |         Yes |          Yes | No / Limited |
| Cancel class                |                                  No |         Yes |          Yes |           No |
| View assigned class         |                                  No |         Yes |          Yes |          Yes |
| Search users                |                                  No |         Yes |          Yes |           No |
| Assign roles                |                                  No |         Yes | Yes, limited |           No |
| Activate / deactivate users |                                  No |         Yes | Yes, limited |           No |
| View reports                |                                  No |         Yes |          Yes |      Limited |
| Manage settings             |                                  No |         Yes | Yes, limited |           No |

---

### 8.11 Future Role Access Overview

Future roles are not part of the main Phase 1 scope, but the system should be prepared to support them later.

| Future Role         | Main Future Access                                        |
| ------------------- | --------------------------------------------------------- |
| Academy Manager     | Dashboards, reports, operational monitoring               |
| Admission Staff     | Applications, admission review, enrollment processing     |
| Finance Staff       | Payments, transactions, invoices, receipts, reversals     |
| Content Manager     | Learning materials, PDFs, videos, links, course resources |
| Certificate Officer | Certificate eligibility, generation, approval, issuance   |

#### Example

In a future phase, Admission Staff may review Ana's application for **Basic Caregiving Batch 2026-A** and approve her enrollment.

Finance Staff may later check Ana's online payment and issue a receipt.

Content Manager may upload **Basic Caregiving Module 1.pdf**.

Certificate Officer may issue Ana's certificate after she completes the course.

---

### 8.12 Future Module Access Matrix

The following table summarizes planned future module access.

| Future Module           | Registered User / Potential Student |                                   Admin |                          Instructor |               Admission Staff |             Finance Staff |      Content Manager |          Certificate Officer |
| ----------------------- | ----------------------------------: | --------------------------------------: | ----------------------------------: | ----------------------------: | ------------------------: | -------------------: | ---------------------------: |
| Admissions & Enrollment |             Apply / View own status |                           Manage / View |              View assigned students |                        Manage | View payment-related only |                   No | View completion-related only |
| Learning Materials      |    View assigned/enrolled materials |                                  Manage |              Upload / View assigned |                            No |                        No |               Manage |                           No |
| Attendance              |                 View own attendance |                           View / Manage |    Record assigned class attendance |                            No |                        No |                   No |         View for eligibility |
| Exams & Assessments     |             Take / View own results |                           View / Manage | Create / Score assigned assessments |                            No |                        No |                   No |         View for eligibility |
| Certifications          |     View / Download own certificate |                           View / Manage |    View assigned student completion |                            No |                        No |                   No |   Generate / Approve / Issue |
| Notifications           |                             Receive |                         Create / Manage |        Send class-level, if allowed |        Send admission-related |      Send payment-related | Send content-related |     Send certificate-related |
| Payments                |             Pay / View own payments | View limited / Manage config if allowed |                                  No | View admission payment status |                    Manage |                   No |                           No |
| Finance Transactions    |                                  No |                            View limited |                                  No |                            No |                    Manage |                   No |                           No |

---

### 8.13 Data Scope Rules

Role access should not only depend on the role name. It should also depend on data scope.

#### Scope Examples

| User    | Role                                | Scope                         | Allowed Example                       |
| ------- | ----------------------------------- | ----------------------------- | ------------------------------------- |
| Raymond | Super Admin                         | Platform                      | Can manage all academies              |
| Maria   | Admin                               | Filipino Skills Academy Dubai | Can manage only that academy          |
| Juan    | Instructor                          | Microsoft Excel for Beginners | Can view only assigned course/class   |
| Ana     | Registered User / Potential Student | Own account                   | Can view visible programs and classes |

#### Example

Maria is Admin for **Filipino Skills Academy Dubai**. She should not be able to update programs for **Filipino Skills Academy Abu Dhabi** unless she is also assigned to that academy.

Juan is Instructor for **Excel Batch 2026-A**. He should not be able to view internal management details for **Basic Caregiving Batch 2026-A** unless assigned.

---

### 8.14 Dashboard Access Rules

Dashboards should change based on the user's current role and permissions.

| User Type                           | Dashboard                          |
| ----------------------------------- | ---------------------------------- |
| Registered User / Potential Student | Student-facing discovery dashboard |
| Super Admin                         | Platform dashboard                 |
| Admin                               | Academy dashboard                  |
| Instructor                          | Instructor dashboard               |
| Future Finance Staff                | Finance dashboard                  |
| Future Admission Staff              | Admissions dashboard               |
| Future Certificate Officer          | Certification dashboard            |

#### Example

Ana starts as a Registered User / Potential Student and sees programs, courses, and visible classes.

Maria assigns Ana as Instructor for Basic English. The next time Ana logs in, she sees the Instructor Dashboard instead of the default potential student dashboard.

---

### 8.15 Access Denied Behavior

If a user tries to access a page or action they are not allowed to use, the system should prevent access.

The system should display a clear message.

Recommended message:

**"You do not have permission to access this page or perform this action."**

#### Example

Ana tries to open the Program Create page. Since she is only a Registered User / Potential Student, the system blocks access and displays an access denied message.

Another example:

Juan tries to assign another user as Instructor. Since Juan does not have role assignment permission, the system prevents the action.

---

### 8.16 Audit Requirement for Access Changes

The system should record important access-related changes for audit purposes.

Audit records may include:

* Role assignment
* Role removal
* Permission change
* Account activation
* Account deactivation
* User status change
* Failed login attempts, if implemented

#### Example

Maria assigns Juan as Instructor for Microsoft Excel for Beginners. The system records:

* User affected: Juan Santos
* Role assigned: Instructor
* Scope: Microsoft Excel for Beginners
* Assigned by: Maria Cruz
* Assigned date and time

Another example:

Maria deactivates a duplicate user account. The system records who deactivated the account and when.

---

### 8.17 Phase 1 Access Control Summary

For Phase 1, Academiya should implement the following access control behavior:

1. **Public Visitors**

   * Can access landing, registration, login, forgot password, and verification screens only.

2. **Registered Users / Potential Students**

   * Can browse visible programs, courses, prerequisites, open classes, ongoing classes, and completed classes.

3. **Super Admin**

   * Can manage platform-level users, roles, academies if included, programs, courses, classes, reports, and settings.

4. **Admin**

   * Can manage users, roles, programs, courses, prerequisites, classes, reports, and settings within the assigned academy.

5. **Instructor**

   * Can view assigned courses, subjects, and scheduled classes.

6. **Future Roles**

   * Should be supported by the permission design even if not fully activated in Phase 1.

7. **Scope Control**

   * Access should be limited by platform, academy, program, course, subject, or class scope.

8. **Dashboard Behavior**

   * The dashboard should change automatically based on the user's assigned role and permissions.

9. **Access Denied**

   * The system should prevent unauthorized access and show a clear message.

10. **Audit Trail**

   * Important access changes should be recorded for security and traceability.


---

## 9. Business Rules & Validation Rules

This chapter defines the business rules and validation rules for Academiya.

The purpose of this chapter is to help developers, Systems Analysts, testers, and product owners understand how the system should behave under specific conditions. These rules should be used when designing forms, APIs, workflows, database constraints, automated validations, and test cases.

For **Phase 1**, the rules focus on:

1. User registration and email verification
2. Login and account access
3. Default Registered User / Potential Student access
4. Role assignment and permission control
5. Program management
6. Course management
7. Course prerequisite setup
8. Class scheduling and class visibility
9. Dashboard behavior
10. Reports and settings

Future rules are also included for notifications, announcements, online payments, admissions, attendance, assessments, and certifications, but those future rules are not part of Phase 1 implementation.

---

### 9.1 User Registration Rules

User registration is the first step for all users in Academiya.

All users must register through the same registration process. Users do not register directly as Admin, Instructor, Finance Staff, or other operational roles.

#### Rules

1. The system must allow public users to register using a valid email address and password.
2. The email address must be unique in the system.
3. The system must not allow two users to register with the same email address.
4. The system must generate a unique User ID after successful registration.
5. The user must agree to the terms and conditions and privacy policy before registration can be completed, if these agreements are included.
6. The user must verify their email address before accessing the platform.
7. A newly verified user must be treated as a **Registered User / Potential Student** by default.
8. A registered user does not automatically become an enrolled student.
9. A registered user does not automatically become an Instructor, Admin, or staff member.
10. Mobile verification, SMS OTP, email OTP, social login, and multi-factor authentication are not included in Phase 1.

#### Validation Examples

If Ana registers using `ana@example.com`, the system should accept the registration if that email does not already exist.

If Juan tries to register using `ana@example.com`, the system should reject the registration and display:

**"This email address is already registered. Please log in or use another email address."**

If Ana submits the registration form without agreeing to the terms and conditions, the system should prevent submission and display:

**"Please agree to the terms and conditions before continuing."**

---

### 9.2 Email Verification Rules

For Phase 1, email verification will be done using a **"Verify this email"** link.

#### Rules

1. After registration, the system must send a verification email to the registered email address.
2. The verification email must contain a clear **"Verify this email"** link.
3. The user must click the verification link to verify the email address.
4. The verification link should be secure and should not be reusable after successful verification.
5. The verification link may expire after a configured period.
6. If the verification link is expired, the system should allow the user to request a new verification email.
7. If the verification link is invalid, the system should display a clear error message.
8. A user with unverified email should not be allowed to access the platform.
9. A verified email status should be stored in the user record.

#### Validation Examples

Ana clicks a valid verification link. The system marks her email status as **Verified** and allows her to log in.

Rico clicks an expired verification link. The system should display:

**"This verification link has expired. Please request a new verification email."**

Liza tries to log in before verifying her email. The system should prevent login and display:

**"Please verify your email address before logging in."**

---

### 9.3 Login and Account Access Rules

Users must log in before accessing protected pages and features.

For Phase 1, login will use email and password only.

#### Rules

1. Users must log in using their registered email address and password.
2. The system must validate the email and password.
3. The system must check whether the email is verified.
4. The system must check whether the account is active.
5. The system must check the user's assigned role and permission.
6. If the user has no assigned operational role, the system must display the Registered User / Potential Student dashboard.
7. If the user has an assigned role, the system must display the appropriate role-based dashboard.
8. Users with inactive, suspended, or deactivated accounts must not be allowed to access the platform.
9. The system should display a generic error message for invalid login credentials.
10. The system may temporarily lock an account after repeated failed login attempts, if configured.

#### Validation Examples

Ana logs in successfully and has no assigned operational role. The system displays the Registered User / Potential Student dashboard.

Maria logs in successfully and has the Admin role. The system displays the Admin dashboard.

Juan enters the wrong password. The system should display:

**"Invalid email address or password."**

A deactivated user tries to log in. The system should display:

**"Your account is not active. Please contact the administrator."**

---

### 9.4 Default Registered User / Potential Student Rules

Every newly verified user should be treated as a Registered User / Potential Student by default.

This allows the user to browse academy offerings without waiting for Admin role assignment.

#### Rules

1. A verified user without an assigned operational role must receive Registered User / Potential Student access.
2. A Registered User / Potential Student may browse visible programs.
3. A Registered User / Potential Student may browse visible courses.
4. A Registered User / Potential Student may view course prerequisite information.
5. A Registered User / Potential Student may view classes that are open for registration.
6. A Registered User / Potential Student may view ongoing classes.
7. A Registered User / Potential Student may view completed classes.
8. A Registered User / Potential Student must not access admin screens.
9. A Registered User / Potential Student must not create, update, or delete programs, courses, prerequisites, or classes.
10. A Registered User / Potential Student must not assign roles to users.

#### Validation Examples

Ana logs in and sees **Healthcare Program**, **Basic Caregiving**, and **Basic Caregiving Batch 2026-A** because they are active and visible.

Ana should not see the **Create Program** button.

Ana should not be able to open the Role Assignment page.

If Ana tries to access an admin URL directly, the system should display:

**"You do not have permission to access this page or perform this action."**

---

### 9.5 Role Assignment Rules

Role assignment controls what a user can access and do in Academiya.

All users start from the same registration process. Operational roles are assigned later by authorized users.

#### Rules

1. Only authorized users can assign roles.
2. A Super Admin may assign Admin roles, depending on platform configuration.
3. An Admin may assign academy-level roles such as Instructor, if permitted.
4. A user may have no assigned operational role and remain a Registered User / Potential Student.
5. A user may have one or more role assignments if the system supports multiple roles.
6. Role assignment should include scope where needed.
7. Scope may include platform, academy, program, course, subject, or class.
8. Role assignment should immediately affect the user's dashboard and access permissions.
9. Deactivated role assignments should no longer grant access.
10. Role assignment changes should be recorded for audit purposes.

#### Validation Examples

Raymond assigns Maria as Admin for **Filipino Skills Academy Dubai**. Maria can now access the Admin dashboard for that academy.

Maria assigns Juan as Instructor for **Microsoft Excel for Beginners**. Juan can now access the Instructor dashboard and view his assigned course.

Maria should not be able to assign Raymond as Super Admin unless she has that permission.

Juan should not be able to assign roles because Instructor does not have role assignment permission in Phase 1.

---

### 9.6 Permission and Scope Rules

Permission defines what action a user can perform. Scope defines where the permission applies.

#### Rules

1. The system must check both permission and scope before allowing access.
2. A user with permission in one academy must not automatically access another academy.
3. A user assigned to one course must not automatically access unrelated courses.
4. A user assigned to one class must not automatically manage unrelated classes.
5. If a user has multiple roles, the system must determine access based on allowed role combination rules.
6. Unauthorized access attempts must be blocked.
7. Access-denied messages should be clear but should not expose sensitive system details.
8. Permission and scope changes should be recorded for audit purposes.

#### Validation Examples

Maria is Admin for **Filipino Skills Academy Dubai**. She can create courses for that academy but should not create courses for **Filipino Skills Academy Abu Dhabi** unless assigned.

Juan is Instructor for **Excel Batch 2026-A**. He can view that class but should not update **Basic Caregiving Batch 2026-A**.

Ana is a Registered User / Potential Student. She can view visible programs but cannot update program records.

---

### 9.7 User Account Status Rules

Each user account must have an account status.

#### Recommended Account Statuses

* Pending Verification
* Active
* Inactive
* Suspended
* Deactivated

#### Rules

1. A newly registered user should start with Pending Verification until email verification is completed.
2. After successful email verification, the user account should become Active.
3. Active users may log in and access features based on permission.
4. Inactive, suspended, or deactivated users must not be allowed to log in.
5. Account status changes should be recorded for audit purposes.
6. Deactivating a user should not delete the user's historical records.

#### Validation Examples

Ana registers but has not verified her email. Her account status is **Pending Verification**.

After Ana verifies her email, her account status becomes **Active**.

Maria deactivates a duplicate user account. The user can no longer log in, but the user record remains in the system.

---

### 9.8 Program Management Rules

Programs represent broad learning categories in Academiya.

#### Rules

1. Only authorized users can create programs.
2. Program name should be required.
3. Program code should be unique within the academy, if program code is used.
4. Program status must be selected.
5. Program visibility must be selected if visibility control is implemented.
6. Draft programs should not be visible to Registered Users / Potential Students.
7. Active and visible programs may be shown to Registered Users / Potential Students.
8. Inactive programs should not be available for new course creation unless allowed by configuration.
9. Archived programs should remain available for historical reporting but should not be used for new course or class creation.
10. A program should not be deleted if it already has related courses, classes, or historical records. Archive should be used instead.

#### Validation Examples

Maria creates **Healthcare Program** with status **Active** and visibility **Visible to Registered Users**. Ana can see it.

Maria creates **Hospitality Program** with status **Draft**. Ana should not see it.

Maria tries to archive **Healthcare Program** while it has active courses. The system may allow archive only after related courses are inactive or may display a warning, depending on configured business rules.

---

### 9.9 Course Management Rules

Courses represent specific learning offerings under programs.

#### Rules

1. Only authorized users can create courses.
2. A course must belong to a program.
3. Course name should be required.
4. Course code should be unique within the academy or program, depending on configuration.
5. Course status must be selected.
6. Course visibility must be selected if visibility control is implemented.
7. A course should not be active if its related program is inactive or archived.
8. Draft courses should not be visible to Registered Users / Potential Students.
9. Active and visible courses may be shown to Registered Users / Potential Students.
10. Archived courses should remain available for historical reporting but should not be used for new class scheduling.
11. Course fee may be optional in Phase 1, but if captured, it should be structured to support future Payment Management.
12. Course duration should be captured consistently, such as hours, days, weeks, or months.

#### Validation Examples

Maria creates **Basic Caregiving** under **Healthcare Program**. Since Healthcare Program is Active, Basic Caregiving can be activated.

Maria tries to activate **Advanced Caregiving** under an inactive program. The system should prevent activation or display a validation warning.

Ana can view **Basic Caregiving** if it is Active and Visible to Registered Users.

Ana should not see **Food Safety Training** if it is still Draft.

---

### 9.10 Subject Management Rules

Subjects represent specific topics or learning components inside a course.

Subject setup may be included in Phase 1 or prepared for future phases.

#### Rules

1. A subject must belong to a course.
2. Subject name should be required.
3. Subject code should be unique within the course, if subject code is used.
4. Subjects should inherit visibility from the related course unless separate visibility is implemented.
5. Instructors may be assigned to subjects only if they have the Instructor role.
6. Inactive subjects should not be assigned to new classes or sessions unless allowed.
7. Archived subjects should remain available for historical reference but not for new setup.

#### Validation Examples

Maria creates subjects under **Basic Caregiving**:

* Elderly Care
* First Aid
* Basic Nursing Skills

Maria assigns Liza Santos as Instructor for **First Aid**. The system should allow this only if Liza has been assigned the Instructor role.

Maria should not assign Ana as subject instructor unless Ana is assigned as Instructor.

---

### 9.11 Course Prerequisite Rules

Course prerequisites define required courses that must be completed before another course can be taken.

For Phase 1, prerequisites can be defined and displayed. Automatic validation during class registration or enrollment is planned for future phases.

#### Rules

1. A course may have no prerequisite.
2. A course may have one prerequisite.
3. A course may have multiple prerequisites.
4. A course must not be set as its own prerequisite.
5. The system should prevent circular prerequisite relationships where possible.
6. Prerequisite courses should be active or historically valid courses.
7. Prerequisite information should be visible in course details when the course is visible.
8. If a prerequisite course is archived, the system should preserve existing prerequisite records for historical reference.
9. Future enrollment validation should check whether the student completed or passed the required prerequisite course.
10. In Phase 1, prerequisite setup should not require student completion records because enrollment and completion modules are not yet implemented.

#### Validation Examples

Valid setup:

**Advanced Caregiving** requires **Basic Caregiving**.

Valid setup:

**Business English** requires both **Basic English** and **Intermediate English**.

Invalid setup:

**Basic Caregiving** requires **Basic Caregiving**. The system should display:

**"A course cannot be its own prerequisite."**

Invalid circular setup:

**Basic Caregiving** requires **Advanced Caregiving**, while **Advanced Caregiving** requires **Basic Caregiving**. The system should prevent this where possible.

---

### 9.12 Class Scheduling Rules

Classes or batches represent scheduled instances of courses.

#### Rules

1. Only authorized users can create classes.
2. A class must be linked to an active course.
3. A class should be linked to a program through its course.
4. Class name should be required.
5. Class start date should be required.
6. Class end date should be required.
7. Class end date must not be earlier than class start date.
8. Class schedule should be required.
9. Delivery mode should be required.
10. If delivery mode is Onsite, location should be required.
11. If delivery mode is Online, online meeting link or online access information should be provided.
12. If delivery mode is Hybrid, both location and online access information may be required.
13. Class capacity should be a positive number if capacity is used.
14. Assigned Instructor must have Instructor role.
15. Draft classes should not be visible to Registered Users / Potential Students.
16. Classes open for registration should be visible to Registered Users / Potential Students.
17. Ongoing classes should be visible but should not allow registration.
18. Completed classes should be visible as historical activity, if visibility is enabled.
19. Cancelled classes should be hidden or shown based on academy preference.
20. Class changes should be recorded for audit purposes.
21. Future schedule changes should be able to trigger notifications when Notification Management is implemented.

#### Validation Examples

Maria creates **Basic Caregiving Batch 2026-A** with:

* Start Date: August 1, 2026
* End Date: September 26, 2026
* Delivery Mode: Onsite
* Location: Dubai Campus Room 101

The system accepts the class.

Maria tries to create a class with an end date before the start date. The system should display:

**"Class end date cannot be earlier than class start date."**

Maria assigns Ana as Instructor, but Ana is only a Registered User / Potential Student. The system should prevent this and display:

**"Selected user must be assigned as Instructor before being assigned to a class."**

---

### 9.13 Class Status Rules

Class status controls how a class behaves and whether it is visible to users.

#### Recommended Class Statuses

* Draft
* Scheduled
* Open for Registration
* Ongoing
* Completed
* Cancelled

#### Rules

1. Draft classes should be visible only to authorized users.
2. Scheduled classes may be visible to authorized users and optionally visible to potential students depending on visibility settings.
3. Open for Registration classes should be visible to Registered Users / Potential Students.
4. Ongoing classes should be visible to Registered Users / Potential Students but should not allow new registration.
5. Completed classes should be visible as historical academy activity, if enabled.
6. Cancelled classes should follow academy visibility settings.
7. Only authorized users can change class status.
8. The system should prevent invalid status transitions if configured.
9. Status history should be recorded for audit purposes.

#### Example Status Transitions

Recommended normal flow:

**Draft -> Scheduled -> Open for Registration -> Ongoing -> Completed**

Alternative flow:

**Draft -> Scheduled -> Cancelled**

#### Validation Examples

Maria changes **Basic Caregiving Batch 2026-A** from Draft to Scheduled after completing the schedule setup.

Maria changes it from Scheduled to Open for Registration when the academy is ready to accept students.

After the start date, Maria changes the class to Ongoing.

When the class ends, Maria changes it to Completed.

---

### 9.14 Program, Course, and Class Visibility Rules

Visibility rules control what Registered Users / Potential Students can see.

#### Rules

1. Draft programs should not be visible to potential students.
2. Draft courses should not be visible to potential students.
3. Draft classes should not be visible to potential students.
4. Active and visible programs may be shown to potential students.
5. Active and visible courses may be shown to potential students.
6. Classes open for registration should be shown to potential students.
7. Ongoing classes should be shown to potential students but should not show registration as available.
8. Completed classes may be shown to potential students as historical academy activity.
9. Cancelled classes may be hidden or shown depending on academy preference.
10. If a program is hidden, its courses should not be visible to potential students.
11. If a course is hidden, its classes should not be visible to potential students unless explicitly configured otherwise.

#### Validation Examples

Ana can see **Healthcare Program** because it is Active and Visible.

Ana cannot see **Hospitality Program** because it is Draft.

Ana can see **Basic English Batch 2026-B** as Ongoing but should not see a registration button.

Ana can see **Microsoft Excel Batch 2025-C** as Completed to understand academy history.

---

### 9.15 Dashboard Rules

Dashboard content must be role-based and must use real data only.

#### Rules

1. Dashboard content must be based on user role and permission.
2. Dashboard content must respect data scope.
3. A Registered User / Potential Student should see the student-facing discovery dashboard.
4. A Super Admin should see the platform dashboard.
5. An Admin should see the academy dashboard.
6. An Instructor should see the instructor dashboard.
7. Dashboard should display only real data from implemented modules.
8. Dashboard should not display dummy or placeholder numbers.
9. Dashboard should not display future-module metrics until the related module is implemented.
10. If a user's role changes, the dashboard should change accordingly.
11. Unauthorized dashboard data should be hidden.

#### Validation Examples

Ana sees available programs, visible courses, open classes, ongoing classes, and completed classes.

Maria sees user counts, active programs, active courses, scheduled classes, and users without operational roles for her academy.

Juan sees assigned courses and assigned scheduled classes.

If Payment Management is not implemented, the dashboard should not show fake payment revenue.

If Attendance Management is not implemented, the dashboard should not show fake attendance percentages.

---

### 9.16 Report Rules

Reports should only use real data from available modules.

#### Rules

1. Phase 1 reports should only use Phase 1 data.
2. Reports should respect user role and scope.
3. Super Admin may view platform-level reports.
4. Admin may view academy-level reports.
5. Instructor may only view limited reports related to assigned courses or classes, if enabled.
6. Registered Users / Potential Students should not access admin reports.
7. Reports should not include dummy data.
8. Export may be optional in Phase 1.
9. Future reports should only be enabled when related modules are implemented.

#### Validation Examples

Maria opens a report showing all classes open for registration under Filipino Skills Academy Dubai.

Raymond opens a platform-level report showing all users by role.

Ana should not access the Scheduled Class Report.

If Certification Management is not implemented, the system should not show a Certificate Issuance Report.

---

### 9.17 Settings and Configuration Rules

Settings control reusable values and system behavior.

#### Rules

1. Only authorized users should access settings.
2. Super Admin may manage platform-level settings.
3. Admin may manage academy-level settings.
4. Instructor and Registered Users / Potential Students should not manage system settings.
5. Lookup values such as course levels, delivery modes, and class statuses should be controlled to avoid inconsistent data.
6. Settings changes should be recorded for audit purposes.
7. Future settings should not be shown as active unless the related module is implemented.

#### Validation Examples

Admin configures course levels:

* Beginner
* Intermediate
* Advanced

Admin configures delivery modes:

* Onsite
* Online
* Hybrid

A Registered User / Potential Student should not access the settings page.

---

### 9.18 Notification and Announcement Rules

Notification & Announcement Management is not included in Phase 1, but future rules should be considered during system design.

#### Future Rules

1. Only authorized users can create announcements.
2. Announcements should have a target audience.
3. Notifications should only be sent to intended users.
4. Schedule change notifications should be sent to affected users.
5. Payment reminders should be sent to users with pending or overdue payments.
6. Certificate notifications should be sent only to eligible students.
7. Notification history should be stored.
8. Users should be able to view previous notifications.
9. Notification delivery channels may include in-app, email, push notification, or SMS in future phases.
10. Notifications should not expose sensitive information to unauthorized users.

#### Future Examples

Admin sends an academy-wide announcement:

**"Early bird discount available for Basic Caregiving Batch 2026-A until July 31."**

The schedule for **Basic English Batch 2026-B** changes. The system sends a notification to enrolled students and the assigned Instructor.

Ana has an installment payment due. The system sends a payment reminder.

---

### 9.19 Payment Management Rules

Payment Management is not included in Phase 1, but future rules should be considered during system design.

#### Future Rules

1. Only authorized users should configure payment settings.
2. Only authorized Finance Staff should access finance-sensitive screens.
3. Students should be able to pay online when the payment module is implemented.
4. Payment transactions should be recorded with transaction references.
5. Failed payment attempts should be recorded.
6. Payment reversals should require authorization.
7. Payment reversals should require a reason.
8. Refunds should follow academy policy.
9. Installment payments should track due dates and payment status separately.
10. Payment reminders should connect to Notification Management.
11. Payment records should be auditable.
12. Finance reports should be restricted to authorized users.
13. Payment gateway integration should record gateway reference numbers.
14. Duplicate payment handling should be supported.
15. Payment status should be clear and traceable.

#### Future Examples

Ana pays **AED 1,200** online for **Basic Caregiving Batch 2026-A**. The system records the payment as Paid and stores the payment gateway reference.

Ana accidentally pays twice. Finance Staff reviews both transactions and reverses the duplicate payment with a reason.

The academy allows three installments of **AED 400** each. The system tracks each installment separately and sends reminders before due dates.

---

### 9.20 Admissions and Enrollment Rules

Admissions & Enrollment is not included in Phase 1, but future rules should be considered.

#### Future Rules

1. A Registered User / Potential Student may apply for a class open for registration.
2. A user should not apply for a class that is ongoing, completed, cancelled, or not open for registration.
3. Admission Staff or authorized users may review applications.
4. Approved applications may become enrollments.
5. Rejected applications should record a reason.
6. Prerequisite validation should occur before enrollment.
7. Enrollment should connect a user to a class.
8. A user may be enrolled in multiple classes if allowed.
9. Enrollment status should be tracked.
10. Enrolled students should become active students for the selected class.

#### Future Example

Ana applies for **Basic Caregiving Batch 2026-A**. Admission Staff approves her application and enrolls her in the class.

Rico tries to apply for **Advanced Caregiving**, but he has not completed **Basic Caregiving**. The system prevents the application or enrollment based on prerequisite rules.

---

### 9.21 Attendance Rules

Attendance Management is not included in Phase 1, but future rules should be considered.

#### Future Rules

1. Attendance should be recorded per class session.
2. Only authorized users should record attendance.
3. Instructors may record attendance for assigned classes.
4. Attendance statuses may include Present, Absent, Late, and Excused.
5. Attendance percentage should be calculated from attendance records.
6. Attendance may be used for certificate eligibility.
7. Attendance corrections should be recorded with audit history.

#### Future Example

For **Basic English Batch 2026-A**, the Instructor marks:

* Ana - Present
* Rico - Late
* Juan - Absent

If the academy requires 80% attendance for certification, the system should calculate each student's attendance percentage.

---

### 9.22 Exam and Assessment Rules

Exam & Assessment Management is not included in Phase 1, but future rules should be considered.

#### Future Rules

1. Assessments may include exams, quizzes, assignments, and practical tests.
2. Assessments should be linked to courses, classes, or subjects.
3. Only authorized users should create assessments.
4. Instructors may manage assessments for assigned classes if permitted.
5. Scores should be recorded and traceable.
6. Passing score should be configurable.
7. Assessment results may determine course completion.
8. Assessment results may determine prerequisite completion.
9. Assessment results may determine certificate eligibility.

#### Future Example

For **Microsoft Excel for Beginners**, students complete a practical test. A passing score of 75% is required.

If Ana scores 85%, she passes. If Rico scores 60%, he fails and may not be eligible for certification.

---

### 9.23 Certification Rules

Certification Management is not included in Phase 1, but future rules should be considered.

#### Future Rules

1. Certificates should be issued only to eligible students.
2. Eligibility may depend on enrollment completion, attendance, assessment results, and payment status.
3. Certificate numbers should be unique.
4. Certificate approval should be performed by authorized users.
5. Issued certificates should be downloadable by students.
6. Certificates should have verification codes or unique certificate IDs.
7. Revoked certificates should remain in history but should be marked as revoked.

#### Future Example

Ana completes **Basic Caregiving**, meets the 80% attendance requirement, passes the final assessment, and has no pending payment. The Certificate Officer approves and issues her certificate.

---

### 9.24 Audit Trail Rules

Academiya should maintain audit history for important actions.

#### Rules

1. The system should record who created important records.
2. The system should record who updated important records.
3. The system should record when important records were created or updated.
4. Role assignment changes should be audited.
5. Account activation and deactivation should be audited.
6. Program, course, prerequisite, and class changes should be audited.
7. Class status changes should be audited.
8. Future payment reversals and refunds must be audited.
9. Future certificate issuance and revocation must be audited.
10. Audit records should not be editable by normal users.

#### Examples

Maria assigns Juan as Instructor. The system records:

* Action: Role Assignment
* User affected: Juan Santos
* Role assigned: Instructor
* Assigned by: Maria Cruz
* Date and time

Maria changes Basic Caregiving Batch 2026-A from Scheduled to Open for Registration. The system records the status change.

Finance Staff reverses a duplicate payment in the future. The system records who performed the reversal, when it was performed, and the reason.

---

### 9.25 Error Message Rules

System messages should be clear, useful, and user-friendly.

#### Rules

1. Error messages should explain what went wrong.
2. Error messages should guide the user on what to do next.
3. Error messages should not expose sensitive technical information.
4. Validation messages should appear near the related field where possible.
5. Access-denied messages should be clear.

#### Example Messages

Invalid login:

**"Invalid email address or password."**

Unverified email:

**"Please verify your email address before logging in."**

Access denied:

**"You do not have permission to access this page or perform this action."**

Duplicate email:

**"This email address is already registered. Please log in or use another email address."**

Invalid class date:

**"Class end date cannot be earlier than class start date."**

Invalid prerequisite:

**"A course cannot be its own prerequisite."**

---

### 9.26 Phase 1 Business and Validation Rule Summary

For Phase 1, Academiya should enforce the following key rules:

1. **All users register using the same registration process.**

   * Example: Ana, Maria, and Juan all register the same way.

2. **Email verification is required before access.**

   * Example: Ana must click the "Verify this email" link before logging in.

3. **Every verified user becomes a Registered User / Potential Student by default.**

   * Example: Ana can browse programs, courses, and classes after verification.

4. **Operational roles are assigned by authorized users.**

   * Example: Maria assigns Juan as Instructor.

5. **Permissions must respect role and scope.**

   * Example: Maria can manage only her assigned academy.

6. **Programs and courses must have valid statuses and visibility settings.**

   * Example: Draft courses are hidden from potential students.

7. **Courses may have prerequisites.**

   * Example: Advanced Caregiving requires Basic Caregiving.

8. **Prerequisite setup must prevent invalid relationships.**

   * Example: A course cannot be its own prerequisite.

9. **Classes must be linked to active courses.**

   * Example: Basic Caregiving Batch 2026-A must be linked to Basic Caregiving.

10. **Class schedule data must be valid.**

   * Example: End date cannot be earlier than start date.

11. **Class visibility depends on class status.**

   * Example: Ongoing classes are visible but not open for registration.

12. **Dashboards and reports must use real data only.**

   * Example: Payment revenue should not appear before Payment Management is implemented.

13. **Unauthorized access must be blocked.**

   * Example: Ana cannot access Program Create page.

14. **Important changes should be audited.**

   * Example: Role assignment and class status changes should be recorded.

Future rules for admissions, notifications, payments, attendance, exams, and certifications should be considered during architecture design but are not part of Phase 1 implementation.

---

## 10. Phase 1 Scope and Future Roadmap

This chapter defines the confirmed scope for Phase 1 and the planned capabilities for future phases.

The purpose of this chapter is to make the implementation scope clear for developers, Systems Analysts, testers, project managers, and stakeholders. It should help the team understand what must be built in Phase 1, what should only be prepared for future expansion, and what should not be treated as Phase 1 deliverables.

---

### 10.1 Phase 1 Objective

The objective of Phase 1 is to build the foundation of Academiya.

Phase 1 should allow users to register, verify their email, log in, browse available academy offerings, and allow authorized users to manage the first core academic setup.

Phase 1 should focus on:

* User registration
* Email verification
* Login and account access
* Default Registered User / Potential Student access
* Role assignment
* Program management
* Course management
* Course prerequisite setup
* Basic class scheduling
* Program, course, and class browsing
* Role-based dashboard
* Basic reports
* Basic settings

Phase 1 should not attempt to deliver the full academy lifecycle yet. Features such as full student admission, enrollment, learning materials, attendance, exams, certifications, online payments, and notifications should be planned for future phases.

#### Example

In Phase 1, Ana can register, verify her email, log in, and browse **Healthcare Program**, **Basic Caregiving**, and **Basic Caregiving Batch 2026-A**.

Maria, as Admin, can create **Healthcare Program**, create **Basic Caregiving**, set **Basic Caregiving** as a prerequisite for **Advanced Caregiving**, and schedule **Basic Caregiving Batch 2026-A**.

However, Ana may not yet complete the full admission, payment, attendance, assessment, and certification process in Phase 1.

---

### 10.2 Phase 1 In-Scope Features

The following features are included in Phase 1.

---

#### 10.2.1 Authentication & Account Access

Phase 1 should include user registration, email verification, login, logout, and password reset.

Included features:

* User registration
* Email and password login
* Email verification using a **"Verify this email"** link
* Password creation
* Forgot password
* Password reset using email link
* Logout
* Account status control
* Default Registered User / Potential Student access after email verification

Not included in Phase 1:

* Mobile OTP
* SMS OTP
* Email OTP
* Social login
* Multi-factor authentication

#### Example

Ana registers using `ana@example.com`. The system sends her a verification email. Ana clicks **"Verify this email"** and her account becomes active. She can then log in using her email and password.

---

#### 10.2.2 Registered User / Potential Student Access

Every newly verified user should become a **Registered User / Potential Student** by default.

Included features:

* Student-facing dashboard
* Browse visible programs
* Browse visible courses
* View course prerequisites
* View classes open for registration
* View ongoing classes
* View completed classes
* View class details

Not included in Phase 1:

* Full class application
* Full admission process
* Full enrollment process
* Student learning record
* Attendance tracking
* Assessment results
* Certificate download

#### Example

Ana logs in after verifying her email. She can view:

* **Healthcare Program**
* **Basic Caregiving**
* **Advanced Caregiving**
* **Basic Caregiving Batch 2026-A - Open for Registration**
* **Basic English Batch 2026-B - Ongoing**
* **Microsoft Excel Batch 2025-C - Completed**

---

#### 10.2.3 User & Role Management

Phase 1 should include basic user management and role assignment.

Included features:

* User search
* User profile view
* Role assignment
* Role scope assignment
* Account activation
* Account deactivation
* Role-based access control
* Audit record for role and account changes, if implemented

Phase 1 active roles:

* Super Admin
* Admin
* Instructor

Default access type:

* Registered User / Potential Student

Future roles to prepare for:

* Academy Manager
* Admission Staff
* Finance Staff
* Content Manager
* Certificate Officer

#### Example

Maria searches for Juan using his email address. Juan is currently a Registered User / Potential Student. Maria assigns Juan as an **Instructor** for **Microsoft Excel for Beginners**.

After the assignment, Juan sees the Instructor dashboard.

---

#### 10.2.4 Program Management

Phase 1 should allow authorized users to create and manage programs.

Included features:

* Create program
* View program
* Edit program
* Change program status
* Set program visibility
* Archive program, if included
* Browse active and visible programs as Registered User / Potential Student

Recommended program statuses:

* Draft
* Active
* Inactive
* Archived

#### Example

Maria creates a program:

* Program Name: Healthcare Program
* Program Code: HLTH
* Category: Healthcare
* Status: Active
* Visibility: Visible to Registered Users

Ana can see the Healthcare Program after logging in.

---

#### 10.2.5 Course Management

Phase 1 should allow authorized users to create and manage courses under programs.

Included features:

* Create course
* View course
* Edit course
* Change course status
* Set course visibility
* Set course level
* Set course duration
* Set course requirements
* Set course fee field, if included
* Archive course, if included
* Browse active and visible courses as Registered User / Potential Student

Recommended course statuses:

* Draft
* Active
* Inactive
* Archived

#### Example

Maria creates a course:

* Program: Healthcare Program
* Course Name: Basic Caregiving
* Course Code: CARE-BASIC
* Level: Beginner
* Duration: 8 weeks
* Fee: AED 1,200
* Status: Active
* Visibility: Visible to Registered Users

Ana can see Basic Caregiving under Healthcare Program.

---

#### 10.2.6 Course Prerequisite Setup

Phase 1 should allow authorized users to define course prerequisites.

Included features:

* Enable or disable prerequisite requirement for a course
* Select one or more prerequisite courses
* Display prerequisite information in course details
* Prevent invalid prerequisite setup
* Prevent a course from being its own prerequisite
* Prevent circular prerequisite relationships where possible

Not included in Phase 1:

* Automatic prerequisite validation during class registration
* Student completion history
* Pass or fail validation
* Enrollment blocking based on prerequisite completion

#### Example

Maria creates **Advanced Caregiving** and sets **Basic Caregiving** as a prerequisite.

When Ana views Advanced Caregiving, she sees:

**"Prerequisite: Basic Caregiving must be completed before taking this course."**

---

#### 10.2.7 Subject Setup

Subject setup may be included in Phase 1 if needed for instructor assignment or academic structure.

Included if required:

* Create subject
* View subject
* Edit subject
* Assign subject to course
* Assign instructor to subject, if applicable
* Set subject status

If not included in Phase 1, the data structure should still prepare for future subject management.

#### Example

For **Basic Caregiving**, Maria may create subjects:

* Elderly Care
* First Aid
* Basic Nursing Skills

For **Microsoft Excel for Beginners**, Maria may create subjects:

* Spreadsheet Basics
* Formulas and Functions
* Charts

---

#### 10.2.8 Class Scheduling & Class Management

Phase 1 should include basic class scheduling.

Included features:

* Create class or batch
* Link class to active course
* Select related program through course
* Assign instructor
* Define class start date
* Define class end date
* Define schedule
* Define class capacity
* Define delivery mode
* Define location or online link
* Set class status
* Set class visibility
* View class list
* View class details
* Update class details
* Cancel class, if allowed

Recommended class statuses:

* Draft
* Scheduled
* Open for Registration
* Ongoing
* Completed
* Cancelled

#### Example

Maria creates:

* Class Name: Basic Caregiving Batch 2026-A
* Course: Basic Caregiving
* Instructor: Liza Santos
* Start Date: August 1, 2026
* End Date: September 26, 2026
* Schedule: Every Saturday, 9:00 AM to 12:00 PM
* Capacity: 25 students
* Delivery Mode: Onsite
* Location: Dubai Campus Room 101
* Status: Open for Registration

Ana can see this class because it is open for registration.

---

#### 10.2.9 Program, Course, and Class Browsing

Phase 1 should allow Registered Users / Potential Students to browse visible academy offerings.

Included features:

* Browse visible programs
* Browse visible courses
* View course details
* View course prerequisites
* Browse classes by status
* View classes open for registration
* View ongoing classes
* View completed classes
* View class details

Not included in Phase 1:

* Full application submission
* Admission review
* Enrollment confirmation
* Payment
* Attendance
* Certificate download

#### Example

Rico opens **Computer Skills Program** and sees:

* Computer Literacy
* Microsoft Excel for Beginners
* Microsoft Excel Intermediate

He opens **Microsoft Excel for Beginners** and sees:

* Excel Batch 2026-A - Open for Registration
* Excel Batch 2026-B - Ongoing
* Excel Batch 2025-C - Completed

---

#### 10.2.10 Dashboard

Phase 1 should include role-based dashboards.

Included dashboards:

* Registered User / Potential Student Dashboard
* Super Admin Dashboard
* Admin Dashboard
* Instructor Dashboard

Dashboard rules:

* Display real data only
* Display data based on role and permission
* Display data based on scope
* Do not show dummy or placeholder data
* Do not show future module metrics until modules are implemented

#### Example

Ana sees available programs, courses, and classes.

Maria sees users, programs, courses, and class summaries for her academy.

Juan sees assigned courses and scheduled classes.

---

#### 10.2.11 Basic Reports

Phase 1 may include basic reports based on available Phase 1 data.

Included reports may include:

* Registered user report
* User role assignment report
* User status report
* Program report
* Course report
* Course prerequisite report
* Scheduled class report
* Class status report

Export may be optional in Phase 1.

#### Example

Maria opens the **Class Status Report** and filters classes by **Open for Registration**.

Raymond opens the **User Role Assignment Report** and sees how many users are Admins, Instructors, and Registered Users / Potential Students.

---

#### 10.2.12 Settings & Configuration

Phase 1 should include basic settings needed by the available modules.

Included settings may include:

* Account settings
* Role and permission settings
* Program categories
* Course categories
* Course levels
* Class delivery modes
* Class statuses
* Visibility settings
* Email verification settings
* Password policy settings

#### Example

Admin configures:

* Course Levels: Beginner, Intermediate, Advanced
* Delivery Modes: Onsite, Online, Hybrid
* Class Statuses: Draft, Scheduled, Open for Registration, Ongoing, Completed, Cancelled

---

### 10.3 Phase 1 Out-of-Scope Features

The following features are not included in Phase 1.

They should not be developed as Phase 1 deliverables unless the project scope is officially changed.

#### Out of Scope for Phase 1

* Mobile OTP
* SMS OTP
* Email OTP
* Social login
* Multi-factor authentication
* Full admissions workflow
* Full enrollment workflow
* Learning materials management
* Attendance management
* Exam and assessment management
* Certification management
* Notification and announcement management
* Online payment
* Invoice generation
* Receipt generation
* Payment reversal
* Refund handling
* Payment gateway integration
* Finance Staff transaction panel
* Payment reminders
* Advanced analytics
* Advanced reporting
* Public program browsing without login, unless separately approved

#### Example

In Phase 1, Ana may see that **Basic Caregiving Batch 2026-A** is open for registration. However, if full class registration is not included, she may not yet submit an application or pay online.

Another example:

Maria may enter a course fee such as **AED 1,200** for Basic Caregiving. However, the system should not process online payment in Phase 1.

---

### 10.4 Future Roadmap Overview

The following roadmap describes the recommended future phases after Phase 1.

This roadmap may be adjusted based on business priorities, budget, user feedback, and implementation complexity.

---

### 10.5 Future Phase 2: Admissions & Enrollment

Phase 2 may focus on the student application and enrollment lifecycle.

Possible capabilities:

* Class registration form
* Student application submission
* Application review
* Admission approval
* Admission rejection
* Required document submission
* Enrollment confirmation
* Enrollment status tracking
* Prerequisite validation during registration or enrollment
* Student list by class

#### Example

Ana applies for **Basic Caregiving Batch 2026-A**. Admission Staff reviews the application, confirms her details, approves the application, and marks Ana as enrolled.

Another example:

Rico tries to apply for **Advanced Caregiving**, but he has not completed **Basic Caregiving**. The system blocks the application or displays a prerequisite warning.

---

### 10.6 Future Phase 3: Learning Materials

Phase 3 may focus on learning content management.

Possible capabilities:

* Upload PDF files
* Upload documents
* Add video links
* Add external learning links
* Link materials to program, course, subject, class, or session
* Material visibility control
* Student access to enrolled class materials
* Instructor access to assigned class materials

#### Example

A Content Manager uploads **Basic Caregiving Module 1.pdf** and links it to the **Basic Caregiving** course.

Another example:

An Instructor adds a video link called **Introduction to Elderly Care** under the **Elderly Care** subject.

---

### 10.7 Future Phase 4: Attendance Management

Phase 4 may focus on attendance tracking.

Possible capabilities:

* Create class sessions
* Record attendance per session
* Attendance statuses: Present, Absent, Late, Excused
* Attendance correction
* Attendance percentage calculation
* Attendance reports
* Attendance requirement for certificate eligibility

#### Example

For **Basic English Batch 2026-A**, the Instructor records attendance:

* Ana - Present
* Rico - Late
* Juan - Absent

If the academy requires 80% attendance for certification, the system calculates whether each student meets the requirement.

---

### 10.8 Future Phase 5: Exam & Assessment Management

Phase 5 may focus on student evaluation.

Possible capabilities:

* Create quizzes
* Create exams
* Create assignments
* Create practical assessments
* Assign assessments to class or subject
* Enter scores
* Calculate grades
* Determine pass or fail
* Publish results to students
* Use assessment results for course completion and certificate eligibility

#### Example

For **Microsoft Excel for Beginners**, students complete a practical exam where they create a spreadsheet with formulas and charts.

Passing score: 75%.

Ana scores 85% and passes. Rico scores 60% and fails.

---

### 10.9 Future Phase 6: Certification Management

Phase 6 may focus on certificate eligibility, generation, approval, and issuance.

Possible capabilities:

* Certificate eligibility checking
* Certificate template setup
* Certificate generation
* Certificate approval
* Certificate number generation
* Certificate issue date
* Certificate download
* Certificate verification
* Certificate revocation

#### Example

Ana completes **Basic Caregiving Batch 2026-A**, meets the attendance requirement, passes the final assessment, and has no pending payment. The Certificate Officer approves and issues her certificate.

The certificate has a unique certificate number such as **CERT-2026-0001**.

---

### 10.10 Future Phase 7: Notification & Announcement Management

Phase 7 may focus on communication and alerts.

Possible capabilities:

* Academy-wide announcements
* Class-specific announcements
* Schedule change notifications
* Course update notifications
* Payment reminders
* Certificate availability notifications
* Notification history
* Read and unread status
* In-app notifications
* Email notifications
* Mobile push notifications
* SMS notifications, if supported later

#### Example

The academy sends an announcement:

**"Early bird discount available for Basic Caregiving Batch 2026-A until July 31."**

Another example:

The schedule for **Basic English Batch 2026-B** changes from Saturday to Sunday. The system notifies enrolled students and the assigned Instructor.

Another example:

Ana has an installment payment due soon. The system sends her a payment reminder.

---

### 10.11 Future Phase 8: Payment Management

Phase 8 may focus on online payment and finance operations.

Possible capabilities:

* Course fee setup
* Class fee setup
* Online payment
* Payment gateway integration
* Installment payment support
* Payment due dates
* Payment reminders
* Payment status tracking
* Transaction history
* Invoice generation
* Receipt generation
* Refund handling
* Payment reversal
* Finance Staff configuration panel
* Transaction search
* Transaction reconciliation
* Failed transaction handling
* Finance reports

#### Example

Ana registers for **Basic Caregiving Batch 2026-A** with a fee of **AED 1,200**. She pays online using the payment gateway.

Another example:

The academy allows Ana to pay in three installments:

* AED 400 upon registration
* AED 400 before the second month
* AED 400 before course completion

Another example:

Ana accidentally pays twice. Finance Staff reviews both transactions and reverses the duplicate payment with a recorded reason.

---

### 10.12 Future Phase 9: Advanced Reports & Analytics

Phase 9 may focus on advanced reporting and decision support.

Possible capabilities:

* Enrollment analytics
* Attendance analytics
* Assessment performance reports
* Certificate issuance reports
* Payment reports
* Revenue reports
* Course demand reports
* Instructor performance reports
* Academy performance dashboard
* Export to Excel or PDF
* Scheduled reports, if needed

#### Example

Academy Manager views a report showing that **Basic Caregiving** has the highest number of registrations, while **Business English** has lower demand.

Another example:

Finance Staff views monthly revenue by course and class.

---

### 10.13 Future Phase 10: Mobile Experience Enhancements

Since Academiya will be available as a mobile app, future phases may improve mobile-specific features.

Possible capabilities:

* Mobile push notifications
* Mobile-friendly class browsing
* Mobile payment
* Mobile certificate download
* Mobile attendance check-in, if needed
* Mobile learning material access
* Offline access to selected materials, if needed

#### Example

Ana receives a push notification on her phone that her class schedule has changed.

Another example:

Ana downloads her certificate directly from the mobile app.

---

### 10.14 Architecture Preparation for Future Phases

Even though future modules are not included in Phase 1, the Phase 1 architecture should be designed to support future expansion.

The development team should avoid building Phase 1 in a way that blocks future modules.

#### Architecture Preparation Areas

1. **User and Role Design**

   * Should support future roles such as Finance Staff, Admission Staff, Content Manager, and Certificate Officer.

2. **Program and Course Design**

   * Should support future learning materials, assessments, prerequisites, payments, and certifications.

3. **Class Design**

   * Should support future admissions, enrollment, schedules, attendance, notifications, payments, and certificates.

4. **Fee Fields**

   * If course or class fee is captured in Phase 1, it should be structured to support future payment management.

5. **Status Fields**

   * Status values should be controlled and consistent so they can support future workflows.

6. **Audit Trail**

   * Important actions should be traceable, especially role assignment, account changes, course changes, class status changes, and future payment actions.

7. **Notification Readiness**

   * Class schedule changes should be structured so they can trigger notifications in future phases.

8. **Payment Readiness**

   * Course and class records should be structured so future online payment, invoice, receipt, and installment modules can connect to them.

#### Example

If **Basic Caregiving Batch 2026-A** has a schedule change, Phase 1 may only update the schedule. In a future phase, the same schedule change should trigger a notification to enrolled students and the assigned Instructor.

Another example:

If **Basic Caregiving** has a course fee of **AED 1,200**, Phase 1 may only store the fee. In a future phase, this fee should connect to invoice generation, online payment, installment setup, and receipt generation.

---

### 10.15 Phase 1 Success Criteria

Phase 1 may be considered successful when the following outcomes are achieved:

1. Users can register using email and password.
2. Users can verify email using a **"Verify this email"** link.
3. Verified users can log in.
4. Verified users without operational roles become Registered Users / Potential Students.
5. Registered Users / Potential Students can browse visible programs, courses, prerequisites, and classes.
6. Super Admin and Admin users can search users and assign roles.
7. Role assignment changes dashboard and access permissions.
8. Authorized users can create and manage programs.
9. Authorized users can create and manage courses.
10. Authorized users can define course prerequisites.
11. Authorized users can schedule classes.
12. Classes can be categorized by status.
13. Dashboards display real Phase 1 data only.
14. Basic reports are available from Phase 1 data, if included.
15. Settings support Phase 1 modules.
16. Access control prevents unauthorized users from accessing restricted screens.
17. The system architecture is prepared for future modules.

#### Example

A complete Phase 1 demonstration may show:

1. Ana registers and verifies her email.
2. Ana logs in and sees the potential student dashboard.
3. Maria logs in as Admin.
4. Maria creates Healthcare Program.
5. Maria creates Basic Caregiving.
6. Maria creates Advanced Caregiving and sets Basic Caregiving as a prerequisite.
7. Maria schedules Basic Caregiving Batch 2026-A.
8. Ana sees Basic Caregiving Batch 2026-A as open for registration.
9. Maria assigns Juan as Instructor.
10. Juan logs in and sees his assigned class.

---

### 10.16 Phase 1 Deliverables

Recommended Phase 1 deliverables include:

1. Functional web application for core admin operations
2. Functional mobile application for registration, login, browsing, and dashboard access
3. User registration and email verification flow
4. Login and password reset flow
5. Role-based access control
6. User management screens
7. Role assignment screens
8. Program management screens
9. Course management screens
10. Course prerequisite setup screens
11. Class scheduling screens
12. Browsing screens for programs, courses, and classes
13. Role-based dashboards
14. Basic reports, if included
15. Basic settings
16. Audit trail for key changes, if included
17. Basic testing and validation documentation

---

### 10.17 Future Roadmap Summary

The recommended roadmap after Phase 1 is:

| Phase    | Focus Area                    | Example Capability                                       |
| -------- | ----------------------------- | -------------------------------------------------------- |
| Phase 1  | Platform Foundation           | Registration, roles, programs, courses, class scheduling |
| Phase 2  | Admissions & Enrollment       | Student applications and enrollment approval             |
| Phase 3  | Learning Materials            | PDF uploads, video links, course materials               |
| Phase 4  | Attendance                    | Session attendance and attendance percentage             |
| Phase 5  | Exams & Assessments           | Quizzes, practical tests, scores, pass/fail              |
| Phase 6  | Certifications                | Eligibility, certificate generation, download            |
| Phase 7  | Notifications & Announcements | Announcements, reminders, schedule changes               |
| Phase 8  | Payments                      | Online payment, installments, reversals, receipts        |
| Phase 9  | Advanced Reports & Analytics  | Operational, academic, and finance analytics             |
| Phase 10 | Mobile Enhancements           | Push notifications, mobile payment, certificate download |

This roadmap allows Academiya to start with a stable foundation and then grow into a complete academy management platform over time.

---

## 11. Non-Functional Requirements

This chapter defines the non-functional requirements for Academiya.

Non-functional requirements describe how the system should perform, behave, and operate. These requirements do not describe specific business features, but they are important for system quality, security, reliability, usability, maintainability, and scalability.

For Academiya, non-functional requirements are important because the platform will be used by different types of users through both a web application and a mobile application.

---

### 11.1 Platform Availability

Academiya should be available as both a web application and a mobile application.

The web application will mainly support administrative and operational tasks, while the mobile application will support user registration, browsing, dashboard access, and future student-facing activities.

#### Requirements

1. The system should be accessible through modern web browsers.
2. The mobile application should be available for download from the Apple App Store and Google Play Store.
3. Core functions should work consistently across web and mobile where applicable.
4. If a function is not available on mobile, the system should clearly guide the user to use the web application.

#### Example

Maria may use the web application to create courses and schedule classes because those forms are more detailed.

Ana may use the mobile application to register, log in, browse classes, and receive future notifications.

---

### 11.2 Usability

Academiya should be easy to use for users with different technical backgrounds.

The app will be used by academy administrators, instructors, and potential students. Some users may not be highly technical, so the interface should be clear and simple.

#### Requirements

1. Screens should use clear labels and instructions.
2. Forms should clearly show required and optional fields.
3. Error messages should explain what the user needs to fix.
4. Navigation should be simple and role-based.
5. Users should only see menus and actions relevant to their role.
6. Important actions should have confirmation messages.
7. Long forms should be organized into sections where needed.
8. The system should avoid unnecessary technical terms in user-facing screens.

#### Example

If Ana enters an invalid email address during registration, the system should display:

**"Please enter a valid email address."**

It should not display a technical message such as:

**"Invalid regex pattern."**

Another example:

Maria should see menu items such as **Users**, **Programs**, **Courses**, and **Classes**. Ana should not see admin menus such as **Role Assignment** or **Settings**.

---

### 11.3 Accessibility

Academiya should be designed to be accessible and usable by a broad range of users.

#### Requirements

1. Text should be readable on both web and mobile screens.
2. Buttons should be large enough to tap on mobile devices.
3. Important information should not rely only on color.
4. Forms should support keyboard navigation on web where possible.
5. Error messages should be placed near the related fields where possible.
6. The system should support readable contrast between text and background.
7. Images should include alternative text where applicable.

#### Example

If a class is **Open for Registration**, the system should not only show it in green. It should also display the text **"Open for Registration"** so users can understand the status even if they cannot distinguish colors easily.

---

### 11.4 Security

Academiya should protect user accounts, personal information, role permissions, and future financial data.

Security is especially important because the system will manage user profiles, academy data, future payment records, and future certificates.

#### Requirements

1. Passwords must be stored securely using hashing.
2. Passwords must not be stored as plain text.
3. Email verification links should be secure and time-limited.
4. Users must be authenticated before accessing protected pages.
5. Users must only access data allowed by their role and scope.
6. Unauthorized access attempts must be blocked.
7. Sensitive actions should be logged.
8. The system should protect against common web security risks such as unauthorized access, injection attacks, and cross-site scripting.
9. Future payment-related features must follow payment security standards required by the selected payment gateway.
10. The system should avoid exposing sensitive technical details in error messages.

#### Example

Ana should not be able to access the Program Create page by entering the URL directly.

If she tries, the system should display:

**"You do not have permission to access this page or perform this action."**

Another example:

If Juan is assigned as Instructor for **Microsoft Excel for Beginners**, he should not be able to manage **Basic Caregiving** unless he is also assigned to that course or class.

---

### 11.5 Authentication and Session Management

Academiya should manage user login sessions securely.

For Phase 1, authentication uses email and password only.

#### Requirements

1. Users must log in before accessing protected pages.
2. Users must verify their email before accessing the platform.
3. Sessions should expire after a configured period of inactivity.
4. Users should be able to log out manually.
5. After logout, users should not access protected pages without logging in again.
6. Password reset links should be secure and time-limited.
7. Repeated failed login attempts may trigger temporary lockout, if configured.

#### Example

Ana logs out from the mobile app. If she tries to open her dashboard again, the system should ask her to log in.

Another example:

Rico clicks an expired password reset link. The system should ask him to request a new password reset link.

---

### 11.6 Role-Based Access Control

Academiya must enforce role-based access control across the application.

#### Requirements

1. Access should depend on role, permission, and scope.
2. Menu items should be shown or hidden based on permission.
3. API access should also enforce permission checks, not only the user interface.
4. A user without an operational role should be treated as Registered User / Potential Student.
5. Role changes should take effect immediately or at the next login, depending on implementation.
6. Access-denied events should be handled clearly.
7. Important access changes should be audited.

#### Example

Maria is Admin for **Filipino Skills Academy Dubai**. She can create courses for that academy.

She should not manage courses for another academy unless she is assigned permission.

Another example:

Juan is Instructor for **Excel Batch 2026-A**. He can view that class but should not assign roles to other users.

---

### 11.7 Data Privacy

Academiya should protect user personal information and ensure data is only visible to authorized users.

#### Requirements

1. User personal information should only be visible to authorized users.
2. Users should be able to view their own basic profile.
3. Admin users should only view users within their assigned academy scope.
4. Sensitive data should not be exposed in reports or screens unless needed.
5. Future payment data should be restricted to authorized finance users.
6. Data should be handled according to applicable privacy requirements in the operating region.
7. Personal information should not be shared with unauthorized parties.

#### Example

Ana can view her own profile.

Maria can view Ana's profile only if Ana belongs to Maria's academy or is within Maria's permitted scope.

Juan, as Instructor, should not view payment records or unrelated user profiles.

---

### 11.8 Performance

Academiya should respond quickly enough to support normal academy operations.

#### Requirements

1. Common pages such as login, dashboard, program list, course list, and class list should load within an acceptable time under normal usage.
2. Search results should return quickly for normal user volumes.
3. Reports should be optimized so they do not slow down the system.
4. Large future datasets such as attendance, payment transactions, and certificates should use pagination, filtering, or background processing where needed.
5. Mobile screens should avoid loading unnecessary data.

#### Example

When Maria searches for `juan@example.com`, the result should appear quickly without loading all users in the system.

Another example:

The class list should use pagination or filtering if the academy has hundreds of completed classes.

---

### 11.9 Scalability

Academiya should be designed to grow over time.

The system may start with one academy or a small number of users, but it should be prepared to support more users, academies, classes, and future modules.

#### Requirements

1. The data model should support future roles.
2. The data model should support future modules such as admissions, payments, notifications, attendance, exams, and certificates.
3. The system should support increasing numbers of users, courses, and classes.
4. The system should be designed to support multiple academies or branches if required.
5. Reports and dashboards should remain usable as data volume grows.

#### Example

Phase 1 may start with **Filipino Skills Academy Dubai** only.

In the future, Academiya may support:

* Filipino Skills Academy Dubai
* Filipino Skills Academy Abu Dhabi
* Filipino Skills Academy Sharjah

The system should not require a major redesign to support this growth.

---

### 11.10 Reliability

Academiya should behave consistently and protect users from data loss.

#### Requirements

1. Important transactions should either complete successfully or fail safely.
2. Users should receive confirmation after saving important records.
3. The system should avoid duplicate records where uniqueness is required.
4. The system should validate data before saving.
5. If an error occurs, the system should show a useful message.
6. The system should prevent accidental data loss where possible.
7. Critical actions should require confirmation.

#### Example

When Maria creates **Basic Caregiving**, the system should confirm:

**"Course saved successfully."**

Another example:

If Maria tries to leave a form with unsaved changes, the system may warn:

**"You have unsaved changes. Do you want to leave this page?"**

---

### 11.11 Auditability

Academiya should record important actions for traceability.

Audit records help investigate issues, support accountability, and protect sensitive operations.

#### Requirements

The system should record audit information for important actions, such as:

* User registration
* Email verification
* Login attempts, if implemented
* Role assignment
* Role removal
* Account activation
* Account deactivation
* Program creation and update
* Course creation and update
* Prerequisite setup
* Class creation and update
* Class status changes
* Future payment reversals
* Future refund processing
* Future certificate issuance and revocation

Audit records may include:

* Action performed
* User who performed the action
* User or record affected
* Date and time
* Previous value, where applicable
* New value, where applicable
* Reason, where applicable

#### Example

Maria changes **Basic Caregiving Batch 2026-A** from **Scheduled** to **Open for Registration**.

The system records:

* Action: Class Status Change
* Class: Basic Caregiving Batch 2026-A
* Previous Status: Scheduled
* New Status: Open for Registration
* Changed By: Maria Cruz
* Date and Time: Recorded by system

---

### 11.12 Maintainability

Academiya should be designed so future changes and modules can be added without major redevelopment.

#### Requirements

1. Code should be modular.
2. Business logic should be separated from presentation logic where possible.
3. Role and permission logic should be reusable across screens and APIs.
4. Status values should be managed consistently.
5. Future modules should be able to connect to existing entities such as User, Course, Class, and Enrollment.
6. Configuration values should not be hard-coded when they may change.
7. Documentation should be maintained as the system evolves.

#### Example

Class statuses such as **Draft**, **Scheduled**, **Open for Registration**, **Ongoing**, **Completed**, and **Cancelled** should be centrally managed. They should not be hard-coded differently across multiple screens.

Another example:

When Payment Management is added later, it should connect to existing class and user records instead of requiring duplicate user or class data.

---

### 11.13 Compatibility

Academiya should support common devices, browsers, and operating systems.

#### Requirements

1. The web application should support modern browsers such as Chrome, Safari, Edge, and Firefox.
2. The mobile application should support supported versions of iOS and Android.
3. The user experience should be responsive across desktop, tablet, and mobile screen sizes.
4. Emails such as verification and password reset should display correctly in common email clients.
5. Future payment pages should work properly on both web and mobile.

#### Example

Maria uses Google Chrome on her laptop to manage courses.

Ana uses an iPhone to register and browse classes.

Rico uses an Android phone to log in and view ongoing classes.

---

### 11.14 Mobile App Considerations

The mobile application should focus on a smooth user experience for registration, browsing, dashboard access, and future student-facing features.

#### Requirements

1. Mobile registration should be simple and easy to complete.
2. Mobile login should support email and password in Phase 1.
3. Program, course, and class browsing should be mobile-friendly.
4. Dashboard cards should be readable on small screens.
5. Long forms should be simplified or split into sections.
6. Future notifications should support mobile push notifications.
7. Future payments should support mobile-friendly payment flows.

#### Example

Ana should be able to register, verify email, log in, and browse **Basic Caregiving Batch 2026-A** from her mobile phone without needing to use the web application.

---

### 11.15 Email Delivery

Academiya must send transactional emails for registration verification and password reset.

For Phase 1, email delivery is required because email verification is part of the authentication process.

#### Requirements

1. The system must send verification emails after registration.
2. The verification email must contain a **"Verify this email"** link.
3. The system must send password reset emails when requested.
4. Email links should be secure and time-limited.
5. Emails should use clear subject lines and user-friendly content.
6. The system should handle failed email delivery where possible.
7. Users should be able to request a new verification email if needed.

#### Example

Ana registers and receives an email with the subject:

**"Verify your Academiya email address"**

The email includes a button:

**"Verify this email"**

---

### 11.16 Data Validation

Academiya should validate data before saving it.

Validation should happen on both the user interface and backend where possible.

#### Requirements

1. Required fields must be validated.
2. Email format must be validated.
3. Duplicate email registration must be prevented.
4. Password confirmation must match password.
5. Class end date must not be earlier than start date.
6. Capacity must be a positive number.
7. A course must not be its own prerequisite.
8. Circular prerequisites should be prevented where possible.
9. Instructor assignment should only allow users assigned as Instructor.
10. Draft records should not appear in student-facing browsing pages.

#### Example

Maria tries to create a class with capacity **-5**. The system should reject it and display:

**"Class capacity must be a positive number."**

Another example:

Maria tries to set **Advanced Caregiving** as its own prerequisite. The system should reject it.

---

### 11.17 Data Backup and Recovery

Academiya should protect data from loss.

#### Requirements

1. The system should support regular data backups.
2. Backup frequency should be defined by the technical team and business requirements.
3. The system should support recovery from backup when needed.
4. Backup and recovery procedures should be tested periodically.
5. Sensitive backup data should be protected.

#### Example

If a system issue causes data loss, the technical team should be able to restore user, program, course, and class data from backup.

---

### 11.18 Logging and Monitoring

Academiya should support logging and monitoring to help detect issues and maintain system health.

#### Requirements

1. System errors should be logged.
2. Authentication-related issues should be logged where appropriate.
3. Failed email delivery should be logged or tracked.
4. Critical business actions should be logged.
5. Future payment gateway errors must be logged.
6. Monitoring should alert the technical team when critical services fail.

#### Example

If the email service fails and verification emails are not sent, the issue should be logged and visible to the technical team.

Another example:

In a future phase, if a payment gateway returns a failed transaction, the system should record the failure reason.

---

### 11.19 File Storage Preparation

Learning materials are not included in Phase 1, but the system should be prepared for future file storage needs.

#### Future Requirements

1. The system should support secure file uploads in future phases.
2. File access should follow role and enrollment permissions.
3. Supported future file types may include PDF, documents, presentations, and images.
4. File size limits should be configurable.
5. Uploaded files should be scanned or validated where possible.
6. Files should be linked to programs, courses, subjects, classes, or sessions.

#### Example

In a future phase, a Content Manager uploads **Basic Caregiving Module 1.pdf** and links it to **Basic Caregiving**.

Only authorized users or enrolled students should access the file.

---

### 11.20 Payment Security Preparation

Payment Management is not included in Phase 1, but the system should be designed with future payment security in mind.

#### Future Requirements

1. Payment processing should use a trusted payment gateway.
2. Sensitive payment card data should not be stored directly by Academiya unless compliant with payment regulations.
3. Payment gateway references should be stored for reconciliation.
4. Payment reversals and refunds should require authorization.
5. Payment-related actions should be audited.
6. Finance reports should be restricted to authorized users only.

#### Example

In a future phase, Ana pays **AED 1,200** online. Academiya should store the transaction reference and payment status, but should not store Ana's full card details.

---

### 11.21 Notification Preparation

Notification & Announcement Management is not included in Phase 1, but the system should be prepared for future communication needs.

#### Future Requirements

1. Class schedule changes should be structured so notifications can be triggered later.
2. Payment due dates should support future payment reminders.
3. Certificate issuance should support future certificate notifications.
4. Users should have notification history in future phases.
5. Notification target audiences should be based on role, class, course, academy, or payment status.

#### Example

In Phase 1, Maria changes the schedule for **Basic English Batch 2026-B**.

In a future phase, this same type of schedule change should automatically notify affected students and the assigned Instructor.

---

### 11.22 Localization and Time Zone

Academiya may serve academies and users in different locations, so time zone and localization should be considered.

#### Requirements

1. Date and time should be displayed clearly.
2. Class schedules should store or reference the correct time zone.
3. The system should support the academy's local time zone.
4. Currency should be stored clearly where fees are used.
5. Future multi-country support should consider date format, currency, and language.

#### Example

A class in Dubai should use **Asia/Dubai** time zone.

Example class schedule:

**Basic Caregiving Batch 2026-A - Every Saturday, 9:00 AM to 12:00 PM, Asia/Dubai**

Another example:

Course fee should show currency clearly, such as **AED 1,200**.

---

### 11.23 API and Integration Readiness

Academiya may require integrations in future phases.

#### Future Integration Areas

* Email service
* Mobile push notification service
* Payment gateway
* SMS provider
* File storage service
* Certificate verification
* Reporting or analytics tools

#### Requirements

1. The system should use clean APIs where appropriate.
2. Integration points should be documented.
3. Future payment and notification integrations should not require major redesign.
4. API access should enforce authentication and authorization.
5. API errors should be handled consistently.

#### Example

Email verification in Phase 1 may use an email delivery service.

In the future, the same architecture may support email announcements, payment reminders, and certificate notifications.

---

### 11.24 Environment and Deployment

Academiya should support proper deployment environments.

#### Recommended Environments

* Development
* Testing / QA
* Staging
* Production

#### Requirements

1. Development should be used by developers.
2. Testing / QA should be used for functional testing.
3. Staging should closely match production before release.
4. Production should be used by real users.
5. Configuration should be environment-specific.
6. Test data should not be mixed with production data.

#### Example

Maria's test account should be created in the QA environment during testing.

Real academy users should only use the production environment.

---

### 11.25 Testing Requirements

Academiya should be tested before release.

#### Testing Areas

* Registration testing
* Email verification testing
* Login testing
* Password reset testing
* Role assignment testing
* Permission testing
* Program management testing
* Course management testing
* Prerequisite testing
* Class scheduling testing
* Dashboard testing
* Browsing testing
* Report testing
* Settings testing
* Web and mobile compatibility testing

#### Example Test Cases

1. Register with a new email address.
2. Try to register with duplicate email address.
3. Click a valid email verification link.
4. Click an expired verification link.
5. Log in as Registered User / Potential Student.
6. Log in as Admin.
7. Assign Instructor role to a user.
8. Create Healthcare Program.
9. Create Basic Caregiving course.
10. Set Basic Caregiving as prerequisite for Advanced Caregiving.
11. Schedule Basic Caregiving Batch 2026-A.
12. Confirm Ana can view the class as Open for Registration.
13. Confirm Ana cannot access Admin screens.

---

### 11.26 Non-Functional Requirement Summary

Academiya should meet the following non-functional expectations:

1. **Available on web and mobile**

   * Example: Admin uses web, student uses mobile.

2. **Easy to use**

   * Example: Clear forms and messages.

3. **Secure**

   * Example: Passwords are hashed and role access is enforced.

4. **Role-based**

   * Example: Admin sees admin screens, potential student sees browsing screens.

5. **Privacy-conscious**

   * Example: Users only see data they are allowed to see.

6. **Reliable**

   * Example: Important records are saved safely and validated.

7. **Scalable**

   * Example: The system can later support more academies, payments, notifications, and certificates.

8. **Auditable**

   * Example: Role assignment and class status changes are recorded.

9. **Maintainable**

   * Example: Future modules can be added without major redevelopment.

10. **Compatible**

   * Example: Works on modern browsers, iOS, and Android.

11. **Prepared for future modules**

   * Example: Course fees can later connect to online payment; class schedule changes can later trigger notifications.

These non-functional requirements should guide technical architecture, development standards, UI/UX design, testing, deployment, and future enhancement planning.

---

## 12. Assumptions, Dependencies, and Open Questions

This chapter lists the current assumptions, dependencies, and open questions for Academiya.

The purpose of this chapter is to help stakeholders, developers, Systems Analysts, testers, and project managers identify items that may need confirmation before or during implementation.

Some requirements in this document are already clearly defined. Other items may still need business confirmation, technical assessment, budget approval, or phase planning.

---

### 12.1 Assumptions

The following assumptions are currently used for this business requirements document.

---

#### 12.1.1 Academiya Will Be Available as Web and Mobile App

Academiya is assumed to be available as both:

* A web application
* A mobile application downloadable from the Apple App Store and Google Play Store

The web application is mainly intended for administrators, staff, and instructors. The mobile application is mainly intended for students, instructors, and users who want easier access from mobile devices.

#### Example

Maria uses the web application to create programs, courses, and class schedules.

Ana uses the mobile app to register, log in, and browse available classes.

---

#### 12.1.2 All Users Register Through the Same Registration Process

It is assumed that all users register through the same account registration process.

Users do not register directly as Admin, Instructor, Finance Staff, or other operational roles.

After email verification, a new user becomes a **Registered User / Potential Student** by default.

#### Example

Ana, Juan, Maria, and Liza all register the same way. After verification, each account becomes active. Later, an authorized user assigns Maria as Admin and Juan as Instructor.

---

#### 12.1.3 Phase 1 Uses Email Verification Link Only

It is assumed that Phase 1 will use email verification through a **"Verify this email"** link only.

Phase 1 does not include:

* Mobile OTP
* SMS OTP
* Email OTP
* Social login
* Multi-factor authentication

#### Example

Ana registers and receives an email with a **"Verify this email"** button. She clicks the button to activate her account.

---

#### 12.1.4 New Verified Users Become Registered Users / Potential Students

It is assumed that every newly verified user will automatically receive Registered User / Potential Student access.

This allows the user to browse visible programs, courses, prerequisites, open classes, ongoing classes, and completed classes.

#### Example

Ana verifies her email. She is not yet enrolled in any class, but she can browse **Healthcare Program** and view **Basic Caregiving Batch 2026-A**.

---

#### 12.1.5 Operational Roles Are Assigned by Authorized Users

It is assumed that Admin, Instructor, and other operational roles are assigned manually by authorized users.

There is no invitation flow in Phase 1 unless added later.

#### Example

Maria searches for Juan using his email address and assigns him as Instructor for **Microsoft Excel for Beginners**.

---

#### 12.1.6 Phase 1 Focuses on Foundation Features

It is assumed that Phase 1 focuses on the foundational modules of Academiya.

Phase 1 includes:

* Registration
* Email verification
* Login
* User management
* Role assignment
* Program management
* Course management
* Course prerequisite setup
* Basic class scheduling
* Browsing
* Role-based dashboards
* Basic reports
* Basic settings

Phase 1 does not include the full student lifecycle.

#### Example

Ana can view that **Basic Caregiving Batch 2026-A** is open for registration. However, the complete admissions, enrollment, payment, attendance, assessment, and certification process may be implemented in later phases.

---

#### 12.1.7 Dashboards Must Use Real Data Only

It is assumed that dashboards will display only real data from implemented Phase 1 modules.

Dashboards should not show dummy data or future-module data that does not exist yet.

#### Example

If Payment Management is not implemented, the dashboard should not show payment revenue.

If Attendance Management is not implemented, the dashboard should not show attendance percentage.

---

#### 12.1.8 Future Modules Should Be Considered in Architecture

It is assumed that the Phase 1 architecture should be designed to support future modules.

Future modules may include:

* Admissions & Enrollment
* Learning Materials
* Attendance Management
* Exam & Assessment Management
* Certification Management
* Notification & Announcement Management
* Payment Management
* Advanced Reports & Analytics

#### Example

Course fee fields may be captured in Phase 1, but online payment is future. The data structure should allow the fee to connect later to invoices, receipts, installments, and payment transactions.

Another example:

Class schedule changes may not trigger notifications in Phase 1, but the class schedule design should allow notification triggers in the future.

---

### 12.2 Dependencies

The following dependencies may affect the design, implementation, testing, or release of Academiya.

---

#### 12.2.1 Email Delivery Service

Academiya depends on an email delivery service for:

* Email verification
* Password reset
* Future announcements
* Future payment reminders
* Future certificate notifications

#### Example

If the email service is unavailable, new users may not receive the **"Verify this email"** link and may not be able to activate their accounts.

---

#### 12.2.2 Apple App Store and Google Play Store Approval

Since Academiya will have a mobile application, release depends on app store submission and approval.

#### Example

Even if the mobile app is technically ready, it must still pass Apple App Store and Google Play Store review before users can download it publicly.

---

#### 12.2.3 Hosting and Cloud Infrastructure

Academiya depends on reliable hosting or cloud infrastructure for the web application, backend services, database, file storage, and future integrations.

#### Example

If the hosting environment is unavailable, users may not be able to log in or access programs, courses, and classes.

---

#### 12.2.4 Database Design

Academiya depends on a proper database design that supports Phase 1 and future modules.

The database should support entities such as:

* User
* Role
* Permission
* Academy
* Program
* Course
* Subject
* Course Prerequisite
* Class
* Class Schedule
* Future Payment
* Future Notification
* Future Enrollment
* Future Certificate

#### Example

If the Course and Class data structures are not designed carefully, adding future online payment or class enrollment may require major redevelopment.

---

#### 12.2.5 Role and Permission Design

Academiya depends on a flexible role and permission structure.

The design should support current roles and future roles without major redevelopment.

#### Example

Finance Staff may not be active in Phase 1, but the system should be able to add Finance Staff later for payment management.

---

#### 12.2.6 Payment Gateway Provider

Payment Management is not included in Phase 1, but future payment features will depend on a selected payment gateway provider.

#### Example

Future online payment may require integration with a payment gateway that supports card payments, payment confirmation, refunds, and transaction references.

---

#### 12.2.7 SMS or Push Notification Provider

SMS and mobile push notifications are not included in Phase 1, but future notifications may depend on external service providers.

#### Example

If Academiya later supports SMS reminders for payment due dates, the system will need an SMS provider.

If Academiya later supports mobile push notifications, the system will need a push notification service.

---

#### 12.2.8 File Storage Service

Learning Materials are not included in Phase 1, but future file uploads will depend on secure file storage.

#### Example

When a Content Manager uploads **Basic Caregiving Module 1.pdf**, the file must be stored securely and accessed only by authorized users.

---

#### 12.2.9 Certificate Template and Verification Design

Certification Management is not included in Phase 1, but future certification features will depend on certificate template design and verification rules.

#### Example

When Ana completes **Basic Caregiving**, the system may generate a certificate with a unique certificate number and verification code.

---

#### 12.2.10 Business Approval for Future Phases

Future modules depend on business approval, budget, timeline, and priority.

#### Example

Payment Management may be prioritized before Certification Management if the academy wants to collect online payments earlier.

---

### 12.3 Open Questions

The following questions should be confirmed before or during implementation.

---

#### 12.3.1 Academy Structure

Will Phase 1 support only one academy, or should it support multiple academies from the beginning?

Options:

* Single academy in Phase 1
* Multiple academies in Phase 1
* Single academy now, but database prepared for multiple academies later

#### Example

If Academiya starts with **Filipino Skills Academy Dubai** only, the system may still include Academy ID in the data structure so future branches can be added.

---

#### 12.3.2 Public Browsing Before Registration

Should public visitors be able to browse programs, courses, and classes before registration?

Options:

* Public visitors can only see landing, registration, and login pages
* Public visitors can browse selected programs and courses
* Only registered and verified users can browse academy offerings

#### Current Assumption

Only registered and verified users can browse full program, course, and class information in Phase 1.

---

#### 12.3.3 Subject Setup in Phase 1

Should Subject Management be included in Phase 1, or only prepared for future phases?

Options:

* Include Subject Management in Phase 1
* Prepare data structure only, but do not build screens yet
* Exclude subjects from Phase 1 and manage only Program -> Course -> Class

#### Example

If Basic Caregiving requires subjects such as **Elderly Care**, **First Aid**, and **Basic Nursing Skills**, Subject Management may be useful in Phase 1.

---

#### 12.3.4 Course Fee Field in Phase 1

Should course or class fee fields be captured in Phase 1 even though online payment is future?

Options:

* Capture course fee only
* Capture class fee only
* Capture both course fee and class fee
* Do not capture fees until Payment Management phase

#### Example

Maria may enter **AED 1,200** as the Basic Caregiving course fee. Later, Payment Management can use this fee for invoice and online payment.

---

#### 12.3.5 Class Registration Button in Phase 1

Should Phase 1 show a **Register for Class** button, or only display class information?

Options:

* Show class information only
* Show a disabled or coming-soon registration button
* Allow simple interest registration
* Allow full class registration in Phase 1

#### Current Assumption

Phase 1 focuses on browsing only. Full class registration, admission, and enrollment are future features.

---

#### 12.3.6 Role Assignment Scope

How detailed should role assignment scope be in Phase 1?

Options:

* Academy-level role assignment only
* Academy and course-level role assignment
* Academy, program, course, subject, and class-level role assignment

#### Example

Juan may be assigned as Instructor only for **Microsoft Excel for Beginners**, or specifically for **Excel Batch 2026-A**.

---

#### 12.3.7 Multiple Roles per User

Should one user be allowed to have multiple roles?

Options:

* One role per user
* Multiple roles per user
* Multiple roles allowed only within different scopes

#### Example

Liza may be an Instructor for Basic English and also a Content Manager in a future phase.

---

#### 12.3.8 Admin Permission Limits

Can Admin assign only Instructor roles, or can Admin assign other academy-level roles in future?

Options:

* Admin can assign Instructor only
* Admin can assign Instructor and future staff roles
* Only Super Admin can assign all roles

#### Example

Maria may be allowed to assign Juan as Instructor but may not be allowed to assign Finance Staff unless Super Admin permits it.

---

#### 12.3.9 Audit Trail Scope in Phase 1

How much audit trail is required in Phase 1?

Options:

* Basic audit fields only, such as created by and updated by
* Full audit history for role changes and status changes
* Full audit trail for all important records

#### Example

For Phase 1, the system may record who created and updated courses. A fuller audit trail may be added for payment reversals and certificate issuance in future phases.

---

#### 12.3.10 Basic Reports Required in Phase 1

Which reports are mandatory for Phase 1?

Possible reports:

* Registered user report
* User role assignment report
* Program report
* Course report
* Course prerequisite report
* Scheduled class report
* Class status report

#### Example

The project may decide that Phase 1 must include only User Report, Course Report, and Class Report. Other reports may be added later.

---

#### 12.3.11 Export Function

Should reports support export in Phase 1?

Options:

* No export in Phase 1
* Export to Excel
* Export to PDF
* Export to both Excel and PDF

#### Example

Maria may want to export a list of classes open for registration to Excel.

---

#### 12.3.12 Mobile App Phase 1 Scope

Which features must be available in the mobile app in Phase 1?

Possible mobile features:

* Registration
* Email verification redirect
* Login
* Password reset
* Registered User / Potential Student dashboard
* Program browsing
* Course browsing
* Class browsing
* Instructor dashboard
* Admin dashboard, optional

#### Example

Ana should be able to register and browse classes on mobile. Maria may use the web app for admin-heavy tasks.

---

#### 12.3.13 Web App Phase 1 Scope

Which features must be available in the web app in Phase 1?

Possible web features:

* Login
* Registration
* User management
* Role assignment
* Program management
* Course management
* Prerequisite setup
* Class scheduling
* Dashboards
* Reports
* Settings

#### Example

Maria should be able to use the web app to create Healthcare Program, Basic Caregiving, and Basic Caregiving Batch 2026-A.

---

#### 12.3.14 Notification Priority

When should Notification & Announcement Management be implemented?

Options:

* Immediately after Phase 1
* After Admissions & Enrollment
* After Payment Management
* Later after core academic modules

#### Example

If the academy frequently changes schedules, notifications may need to be prioritized earlier.

---

#### 12.3.15 Payment Priority

When should Payment Management be implemented?

Options:

* Before Admissions & Enrollment
* Together with Admissions & Enrollment
* After Enrollment
* After Attendance and Certification

#### Example

If students must pay before enrollment confirmation, Payment Management may need to be implemented near the Admissions & Enrollment phase.

---

### 12.4 Risks

The following risks should be considered.

---

#### 12.4.1 Scope Creep

There is a risk that future features may be added into Phase 1 without proper planning.

#### Example

If online payment, attendance, and certification are added into Phase 1, the timeline and development complexity will increase significantly.

#### Mitigation

Keep Phase 1 focused on foundation features and move future features to later phases unless officially approved.

---

#### 12.4.2 Weak Role and Permission Design

If role and permission design is too simple, future roles may be difficult to add.

#### Example

If the system only supports Admin and Student without flexible permissions, adding Finance Staff or Certificate Officer later may require major redevelopment.

#### Mitigation

Design role-based access control with permission and scope from the beginning.

---

#### 12.4.3 Poor Data Structure for Future Modules

If Phase 1 data is not structured carefully, future modules may be difficult to connect.

#### Example

If class data does not have clear Class ID, Course ID, schedule, status, and capacity, future enrollment, attendance, payment, and certification modules may become difficult to build.

#### Mitigation

Use a clean data model with clear relationships between User, Program, Course, Class, and future entities.

---

#### 12.4.4 Email Delivery Problems

If verification emails are delayed or blocked, users may not be able to activate accounts.

#### Example

Ana registers but does not receive the verification email because it goes to spam or the email service fails.

#### Mitigation

Use a reliable email service and provide a resend verification option.

---

#### 12.4.5 App Store Approval Delays

Mobile app release may be delayed by Apple App Store or Google Play Store review.

#### Example

The development team finishes the mobile app, but public release is delayed due to app store review requirements.

#### Mitigation

Prepare app store requirements early and submit for review before the target launch date.

---

#### 12.4.6 Future Payment Complexity

Payment Management can be complex because it involves payment gateways, refunds, reversals, reconciliation, and finance controls.

#### Example

A student accidentally pays twice and requests reversal. The system must handle the correction safely and with audit history.

#### Mitigation

Plan Payment Management carefully and restrict finance-sensitive actions to authorized users.

---

### 12.5 Decisions Required Before Development

Before development begins, the project team should confirm the following decisions:

1. Will Phase 1 support one academy or multiple academies?
2. Will public visitors see programs before registration?
3. Will Subject Management be included in Phase 1?
4. Will course or class fee be captured in Phase 1?
5. Will Phase 1 include a Register for Class button?
6. What role assignment scopes are required in Phase 1?
7. Will users be allowed to have multiple roles?
8. Which reports are mandatory for Phase 1?
9. Will report export be included in Phase 1?
10. What is the exact mobile app scope for Phase 1?
11. What is the exact web app scope for Phase 1?
12. How much audit trail is required in Phase 1?
13. Which future module should be prioritized after Phase 1?
14. Which email delivery service will be used?
15. Which hosting or cloud environment will be used?
16. Which payment gateway may be used in the future?
17. Which SMS or push notification provider may be used in the future?

---

### 12.6 Final Requirement Note

This business requirements document defines the first complete direction for Academiya.

The document should be treated as a working baseline. It can be refined during:

* UI/UX design
* Technical architecture design
* Database design
* API planning
* Sprint planning
* Testing preparation
* Stakeholder review

Any changes to Phase 1 scope should be reviewed carefully because adding future modules too early may affect timeline, cost, and system complexity.

The recommended approach is to build a strong Phase 1 foundation first, then expand Academiya through future phases such as Admissions & Enrollment, Learning Materials, Attendance, Exams, Certifications, Notifications, Payments, and Advanced Reports.
