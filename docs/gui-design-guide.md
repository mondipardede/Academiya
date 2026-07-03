# Academiya GUI Design Guide

This guide defines the recommended GUI direction for the Academiya mobile app, web application, and shared product experience.

## Recommended Mobile GUI Direction

Academiya should use a clean, friendly, Filipino-community-inspired design that feels educational, trustworthy, and optimistic.

The design theme is:

**Modern learning app with Filipino warmth**

The design should feel:

* Professional but not too corporate
* Friendly for students and community users
* Clean and easy for non-technical users
* Inspired by learning, growth, success, and Filipino community values

Use the selected logo direction: **Open Book "A" + Star**.

## Visual Reference

The current visual reference is stored at:

[assets/design/academiya-look-and-feel-reference.png](../assets/design/academiya-look-and-feel-reference.png)

The login page reference is stored at:

[assets/design/academiya-login-reference.png](../assets/design/academiya-login-reference.png)

The post-login new-user landing page reference is stored at:

[assets/design/academiya-post-login-home-reference.png](../assets/design/academiya-post-login-home-reference.png)

The post-login registered-student landing page reference is stored at:

[assets/design/academiya-registered-student-home-reference.png](../assets/design/academiya-registered-student-home-reference.png)

The post-login instructor landing page reference is stored at:

[assets/design/academiya-instructor-home-reference.png](../assets/design/academiya-instructor-home-reference.png)

The post-login admin landing page reference is stored at:

[assets/design/academiya-admin-home-reference.png](../assets/design/academiya-admin-home-reference.png)

The reference shows the preferred app personality:

* White and light-gray mobile surfaces
* Deep blue splash/header areas
* Gold highlights for optimism and success
* Simple bottom navigation
* Rounded cards with subtle borders and shadows
* Friendly learner-focused copy
* Icon themes for Community, Learning, Growth, and Success

## 1. Color Palette

Use colors inspired by the Academiya logo and Filipino identity.

Recommended palette from the look-and-feel reference:

| Color | Hex | Usage |
| --- | --- | --- |
| Deep Blue | `#0047A1` | Headers, splash screen, primary buttons, active navigation, important titles |
| Blue | `#1976D2` | Secondary accents, links, selected states, informational icons |
| Gold | `#F4B400` | Highlights, stars, progress accents, success emphasis, call-to-action accents |
| Green | `#2EA745` | Growth, completed status, verification, success messages |
| Light Gray | `#F5F6F8` | App background, subtle surfaces, page background |
| White | `#FFFFFF` | Cards, forms, reading areas |
| Text Navy | `#071B45` | Main text and headings |

**Deep Blue** is the primary color. Use it for headers, main buttons, active navigation, and important titles. It represents trust, knowledge, and professionalism.

**Gold / Yellow** is the accent color. Use it for highlights, progress indicators, stars, important badges, and call-to-action accents. It represents hope, success, and a bright future.

**White / Light Background** should be used for the main app background, cards, forms, and reading areas. It keeps the app clean and easy to read.

**Soft Green** may be used lightly for completed statuses, growth/progress visuals, and success messages.

## 2. Overall App Style

Use a card-based layout. This works well for mobile because programs, courses, and classes can be shown as simple cards.

Example card:

**Basic Caregiving**  
Healthcare Program  
Beginner - 8 weeks  
Prerequisite: None  
Button: **View Details**

Cards should have rounded corners, light shadow, clear title, small status badge, simple icon or image, and one clear action button.

## 3. Suggested Bottom Navigation

For Phase 1 mobile app, use a bottom navigation bar with 4 main tabs:

1. **Home**
2. **Programs**
3. **Classes**
4. **Profile**

For users assigned as Instructor, the bottom navigation can change to:

1. **Home**
2. **My Classes**
3. **Schedule**
4. **Profile**

For Admin users, mobile can be simplified because heavy admin work is better on web:

1. **Dashboard**
2. **Users**
3. **Classes**
4. **Profile**

## 4. Splash Screen

The splash screen should show the Academiya logo, white background, and a small tagline:

**Learn Today. Grow Everyday. Succeed Tomorrow.**

Visual idea: logo centered, small gold star accent above or beside the logo, and a simple blue and gold loading animation.

## 5. Welcome / Landing Screen

This screen appears before login.

Suggested layout:

* Academiya logo at the top
* Main heading: **Your learning journey starts here**
* Short text: **Discover programs, courses, and classes designed to help you grow your skills and build a better future.**
* Buttons: **Create Account** and **Login**
* Secondary text: **For learners, instructors, and academy communities.**

## 6. Registration Screen

Keep registration simple.

Fields:

* First Name
* Last Name
* Email Address
* Password
* Confirm Password
* Country, optional
* Mobile Number, optional

Button:

**Create Account**

After successful registration, show:

**Check your email**  
We sent you a verification link. Please click **"Verify this email"** to activate your account.

Button:

**Resend Verification Email**

## 7. Login Screen

The login screen should feel clean, welcoming, and strongly branded.

Reference layout:

* White or very light background
* Pale Filipino sun / skyline-inspired background accents
* Academiya logo centered near the top
* Tagline below the logo: **Learn Today. Grow Everyday. Succeed Tomorrow.**
* Main heading: **Welcome Back!**
* Supporting text: **Please log in to your account to continue.**

Fields:

* User ID
* Password

Buttons:

* **Log In**
* **Create New Account**

Additional controls:

* Remember me checkbox
* **Forgot Password?** link
* Divider with **OR**
* New-user information card
* Bottom blue and gold wave accent

Important message for unverified users:

**Please verify your email address before logging in.**

## 8. Registered User / Potential Student Home Screen

This is the most important mobile screen for Phase 1.

Use the post-login new-user landing page reference as the target look and feel.

Suggested sections:

* Deep blue branded hero with logo, notification icon, and profile image/avatar
* Header text: **Hello, Ana!** and **Ready to grow your skills today?**
* Large search bar with a separate filter button
* Quick cards: Programs, Courses, Open Classes, Ongoing Classes
* Featured Programs: Healthcare Program, Language Program, Computer Skills Program
* Classes Open for Registration
* Ongoing Classes
* Completed Classes
* Bottom navigation with **Home**, **Programs**, **Classes**, **My Calendar**, and **Profile**

Example class card:

**Basic Caregiving Batch 2026-A**  
Every Saturday - 9:00 AM - 12:00 PM  
Onsite - Dubai Campus  
Status: **Open for Registration**  
Button: **View Class**

## 8.1 Registered Student Home Screen

After a user becomes an enrolled/registered student, the landing page should shift from discovery-first to progress-first.

Use the registered-student home reference as the target look and feel.

Suggested sections:

* Deep blue branded hero with logo, notification icon, profile image/avatar, and Filipino sun/star accents
* Header text: **Hello, Ana!** and **Welcome back - continue your learning journey.**
* Large search bar with a separate filter button
* Quick cards: **My Programs**, **My Classes**, **Upcoming**, **Completed**
* **My Enrolled Classes** with progress bars and instructor/class metadata
* **Upcoming Sessions** with date, time, topic, delivery mode, and status badge
* **Recommended Programs for You**
* **Learning Progress** summary with overall progress, classes enrolled, classes completed, and certificates earned
* Bottom navigation with **Home**, **Programs**, **Classes**, **Calendar**, and **Profile**

The registered-student screen should not show payment, attendance, assessment, or certificate actions until those modules are implemented.

## 9. Program List Screen

Title:

**Programs**

Search/filter:

* Search program
* Category filter

Program cards:

**Healthcare Program**  
Courses related to caregiving, first aid, and health support skills.  
Button: **View Courses**

**Language Program**  
Basic English, communication, and language skills.  
Button: **View Courses**

**Computer Skills Program**  
Digital literacy, Excel, and productivity skills.  
Button: **View Courses**

## 10. Course Detail Screen

This should be very clear for students.

Example:

**Basic Caregiving**

Healthcare Program  
Beginner - 8 weeks  
Fee: AED 1,200

Description:

Learn basic caregiving skills including elderly care, first aid, and basic nursing support.

Prerequisite:

**None**

Available Classes:

**Basic Caregiving Batch 2026-A**  
Saturday - 9:00 AM - 12:00 PM  
Status: Open for Registration  
Button: **View Class**

For Advanced Caregiving:

**Prerequisite Required**  
You must complete **Basic Caregiving** before taking this course.

## 11. Class Detail Screen

This screen should help users understand the class quickly.

Example:

**Basic Caregiving Batch 2026-A**

Status badge:

**Open for Registration**

Details:

* Course: Basic Caregiving
* Program: Healthcare Program
* Instructor: Liza Santos
* Start Date: August 1, 2026
* End Date: September 26, 2026
* Schedule: Every Saturday, 9:00 AM - 12:00 PM
* Delivery Mode: Onsite
* Location: Dubai Campus Room 101
* Capacity: 25 students

Button for Phase 1:

**Registration Coming Soon** or **View Details**

Since full enrollment is not included in Phase 1, avoid showing a working payment or enrollment button unless simple interest registration is officially included.

## 12. Instructor Dashboard

For Instructor users, the app should focus on assigned teaching activities.

Use the instructor home reference as the target look and feel.

Header:

**Hello, Juan**  
**Welcome back - here are your assigned classes and schedule.**

Suggested sections:

* Deep blue branded hero with logo, notification icon, profile image/avatar, and Filipino sun/star accents
* Search bar for **classes or schedules** with filter button
* Quick cards: **Assigned Courses**, **My Classes**, **Today's Sessions**, **Ongoing**
* **My Assigned Classes** with course category, date range, online/location metadata, and progress
* **Today's Schedule** with session time, class, topic, mode, and **Today** badge
* **Teaching Summary** with courses assigned, active classes, students, and sessions this month
* **Upcoming Classes (Next 7 Days)** with date, topic, time, and **Upcoming** badge
* Bottom navigation with **Home**, **My Classes**, **Schedule**, **Programs**, and **Profile**

Example assigned class card:

**Microsoft Excel for Beginners**  
Excel Batch 2026-A  
Sunday - 2:00 PM - 5:00 PM  
Onsite - Room 204

Buttons:

* **View Class**
* **View Schedule**

Future buttons can be added later:

* Mark Attendance
* Upload Materials
* Create Assessment
* View Students

These future buttons should not appear in Phase 1 unless implemented.

## 12.1 Admin Dashboard

For Admin users, the app should provide a compact academy operations overview. Heavy management work is still better on the web application, but mobile should allow Admin users to quickly monitor the academy.

Use the admin home reference as the target look and feel.

Suggested sections:

* Deep purple/blue branded hero with logo, notification icon, profile image/avatar, and greeting
* Header text: **Hello, Admin!** and **Here's an overview of your academy.**
* **Overview** card with time filter such as **This Month**
* KPI cards for **Total Users**, **Instructors**, **Active Classes**, and **Programs**
* **Recent Activities** list with timestamp and activity type
* **Quick Access** grid for User Management, Program Management, Course Management, Class Management, Schedule Management, and Reports
* **Reports Snapshot** with compact progress bars
* **System Announcements** card
* Bottom navigation with **Dashboard**, **Users**, **Classes**, **Reports**, and **More**

Admin mobile should prioritize monitoring and shortcuts. Detailed create/edit workflows can open simplified forms or be directed to the web application if too complex for mobile.

## 13. Profile Screen

The profile screen should show:

* User name
* Email
* Email verification status
* Account status
* Current role or access type
* Assigned academy, if applicable
* Logout button

Example:

**Ana Santos**  
ana@example.com  
Status: Active  
Access Type: Registered User / Potential Student

Buttons:

* Edit Profile
* Change Password
* Logout

## 14. Status Badge Design

Use simple colored badges.

Suggested badges:

* **Open for Registration** - blue or gold
* **Ongoing** - green or blue
* **Completed** - gray or green
* **Draft** - gray, admin only
* **Cancelled** - red or muted red

Do not rely on color only. Always show the text label.

## 15. Suggested App Personality

The app should feel encouraging.

Use friendly phrases:

* **Start your learning journey**
* **Explore new skills**
* **Grow your future**
* **Continue learning**
* **Find your next class**
* **Build skills for success**

Avoid cold system language where possible.

Instead of:

**No data found**

Use:

**No classes available yet. Please check again soon.**

## 16. Suggested Visual Elements

Use simple icons related to open books, stars, sun rays, growth leaves, pathways, people/community, graduation caps, calendars, class schedules, and instructors.

For Filipino community inspiration, keep it subtle:

* Blue, red, gold accent lines
* Star symbol
* Warm community imagery
* Sun-inspired highlight shapes

Avoid making the design look like a government seal or too formal. Academiya should feel modern and app-friendly.

## Recommended Main App Look

The best GUI direction is:

**White background + deep blue headers + gold highlights + rounded cards + simple community/learning icons.**

This matches the Academiya logo and the intended meaning:

* Filipino community
* Learning
* Growth
* Source of knowledge
* Great future
* Success

Suggested mobile app tagline:

**Learn Today. Grow Everyday. Succeed Tomorrow.**
