import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { discoveryCourses } from "@academiya/domain";
import academiyaLogo from "../../assets/brand/academiya-logo.png";

export default function App() {
  return <AdminHomeScreen />;
}

function LoginScreen() {
  return (
    <SafeAreaView style={styles.loginSafeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.loginContainer}>
        <View style={styles.sunAccent} />
        <View style={styles.starAccent}>
          <Text style={styles.starText}>*</Text>
        </View>

        <View style={styles.loginBrand}>
          <Image source={academiyaLogo} style={styles.loginLogo} resizeMode="contain" />
          <Text style={styles.loginBrandName}>Academiya</Text>
          <Text style={styles.loginTagline}>
            <Text style={styles.taglineBlue}>Learn Today. </Text>
            <Text style={styles.taglineGreen}>Grow Everyday. </Text>
            <Text style={styles.taglineGold}>Succeed Tomorrow.</Text>
          </Text>
        </View>

        <View style={styles.loginIntro}>
          <Text style={styles.loginTitle}>Welcome Back!</Text>
          <Text style={styles.loginSubtitle}>Please log in to your account to continue.</Text>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.fieldLabel}>User ID</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputIcon}>ID</Text>
            <Text style={styles.inputPlaceholder}>Enter your User ID</Text>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.fieldLabel}>Password</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputIcon}>Lock</Text>
            <Text style={styles.inputPlaceholder}>Enter your password</Text>
            <Text style={styles.inputAction}>Show</Text>
          </View>
        </View>

        <View style={styles.loginOptions}>
          <View style={styles.rememberRow}>
            <View style={styles.checkbox} />
            <Text style={styles.rememberText}>Remember me</Text>
          </View>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </View>

        <View style={styles.primaryLoginButton}>
          <Text style={styles.primaryLoginText}>Log In</Text>
        </View>

        <View style={styles.orRow}>
          <View style={styles.divider} />
          <View style={styles.orBubble}>
            <Text style={styles.orText}>OR</Text>
          </View>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButton}>
          <Text style={styles.secondaryIcon}>+</Text>
          <Text style={styles.secondaryText}>Create New Account</Text>
        </View>

        <View style={styles.newHereCard}>
          <View style={styles.newHereIcon}>
            <Text style={styles.newHereIconText}>Mail</Text>
          </View>
          <View style={styles.newHereCopy}>
            <Text style={styles.newHereTitle}>New here?</Text>
            <Text style={styles.newHereText}>
              Create an account to explore programs, courses, and classes designed for your growth.
            </Text>
          </View>
        </View>

        <Text style={styles.communityText}>For learners, instructors, and academy communities.</Text>
      </ScrollView>
      <View style={styles.waveBase}>
        <View style={styles.waveGold} />
      </View>
    </SafeAreaView>
  );
}

function HomeScreen() {
  const openClass = discoveryCourses[0];
  const ongoingClass = discoveryCourses[1];
  const completedClass = discoveryCourses[2];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.homeHero}>
          <View style={styles.homeLogoRow}>
            <View style={styles.homeBrand}>
              <Image source={academiyaLogo} style={styles.homeLogo} resizeMode="contain" />
              <Text style={styles.homeBrandName}>Academiya</Text>
            </View>
            <View style={styles.headerActions}>
              <View style={styles.bellBox}>
                <Text style={styles.bellIcon}>Bell</Text>
                <View style={styles.bellBadge}>
                  <Text style={styles.bellBadgeText}>3</Text>
                </View>
              </View>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarInitial}>A</Text>
              </View>
            </View>
          </View>

          <View style={styles.homeGreeting}>
            <Text style={styles.homeTitle}>Hello, Ana!</Text>
            <Text style={styles.homeSubtitle}>Ready to grow your skills today?</Text>
          </View>

          <View style={styles.heroSun}>
            <Text style={styles.heroSunText}>*</Text>
          </View>
        </View>

        <View style={styles.homeBody}>
          <View style={styles.searchRow}>
            <View style={styles.homeSearch}>
              <Text style={styles.searchGlyph}>Search</Text>
              <Text style={styles.searchText}>Search programs, courses, or classes</Text>
            </View>
            <View style={styles.filterButton}>
              <Text style={styles.filterText}>Filter</Text>
            </View>
          </View>

          <View style={styles.quickGrid}>
            {[
              ["Programs", "12 Programs", "Grad"],
              ["Courses", "45 Courses", "Book"],
              ["Open Classes", "18 Classes", "Cal"],
              ["Ongoing Classes", "7 Classes", "Play"]
            ].map(([label, value, icon]) => (
              <View style={styles.quickCard} key={label}>
                <View style={styles.quickIcon}>
                  <Text style={styles.quickIconText}>{icon}</Text>
                </View>
                <Text style={styles.quickLabel}>{label}</Text>
                <Text style={styles.quickValue}>{value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Programs</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          <View style={styles.featuredRow}>
            {discoveryCourses.map((item) => (
              <View style={styles.programCard} key={item.id}>
                <View style={styles.programImage}>
                  <Text style={styles.programImageText}>{item.program.slice(0, 2)}</Text>
                </View>
                <Text style={styles.programCardTitle}>{item.program}</Text>
                <Text style={styles.programCardText}>{programDescription(item.program)}</Text>
                <Text style={styles.programAction}>View Courses -></Text>
              </View>
            ))}
          </View>

          <ClassSection title="Classes Open for Registration" course={openClass} actionLabel="View Class" />
          <ClassSection title="Ongoing Classes" course={ongoingClass} />
          <ClassSection title="Completed Classes" course={completedClass} />
        </View>
      </ScrollView>
      <View style={styles.homeBottomNav}>
        {["Home", "Programs", "Classes", "My Calendar", "Profile"].map((item) => (
          <Text key={item} style={[styles.navItem, item === "Home" && styles.navItemActive]}>{item}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

function RegisteredStudentHomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.homeHero}>
          <View style={styles.homeLogoRow}>
            <View style={styles.homeBrand}>
              <Image source={academiyaLogo} style={styles.homeLogo} resizeMode="contain" />
              <Text style={styles.homeBrandName}>Academiya</Text>
            </View>
            <View style={styles.headerActions}>
              <View style={styles.bellBox}>
                <Text style={styles.bellIcon}>Bell</Text>
                <View style={styles.bellBadge}>
                  <Text style={styles.bellBadgeText}>3</Text>
                </View>
              </View>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarInitial}>A</Text>
              </View>
            </View>
          </View>

          <View style={styles.homeGreeting}>
            <Text style={styles.homeTitle}>Hello, Ana!</Text>
            <Text style={styles.homeSubtitle}>Welcome back - continue your learning journey.</Text>
          </View>

          <View style={styles.heroSun}>
            <Text style={styles.heroSunText}>*</Text>
          </View>
        </View>

        <View style={styles.homeBody}>
          <View style={styles.searchRow}>
            <View style={styles.homeSearch}>
              <Text style={styles.searchGlyph}>Search</Text>
              <Text style={styles.searchText}>Search programs, courses, or classes</Text>
            </View>
            <View style={styles.filterButton}>
              <Text style={styles.filterText}>Filter</Text>
            </View>
          </View>

          <View style={styles.quickGrid}>
            {[
              ["My Programs", "3 Enrolled", "Grad"],
              ["My Classes", "5 Classes", "Cal"],
              ["Upcoming", "2 Sessions", "Soon"],
              ["Completed", "4 Classes", "Done"]
            ].map(([label, value, icon]) => (
              <View style={styles.quickCard} key={label}>
                <View style={styles.quickIcon}>
                  <Text style={styles.quickIconText}>{icon}</Text>
                </View>
                <Text style={styles.quickLabel}>{label}</Text>
                <Text style={styles.quickValue}>{value}</Text>
              </View>
            ))}
          </View>

          <StudentSectionHeader title="My Enrolled Classes" />
          <EnrolledClassCard title="Microsoft Excel Batch 2025-C" instructor="Juan Dela Cruz" meta="Jan 12 - Mar 30, 2025 - Online - Room 204" progress={65} />
          <EnrolledClassCard title="Basic English Batch 2026-B" instructor="Liza Santos" meta="May 10 - Jun 26, 2026 - Online - Google Meet" progress={40} />

          <StudentSectionHeader title="Upcoming Sessions" />
          <View style={styles.sessionCard}>
            <View style={styles.dateBox}>
              <Text style={styles.dateMonth}>MAY</Text>
              <Text style={styles.dateDay}>19</Text>
              <Text style={styles.dateWeekday}>MON</Text>
            </View>
            <View style={styles.sessionTime}>
              <Text style={styles.sessionTimeText}>2:00 PM</Text>
              <Text style={styles.sessionTimeText}>- 4:00 PM</Text>
            </View>
            <View style={styles.sessionCopy}>
              <Text style={styles.sessionTitle}>Basic English Batch 2026-B</Text>
              <Text style={styles.sessionTopic}>Grammar in Context</Text>
              <Text style={styles.homeClassMeta}>Online - Google Meet</Text>
            </View>
            <Text style={styles.upcomingBadge}>UPCOMING</Text>
          </View>

          <StudentSectionHeader title="Recommended Programs for You" />
          <View style={styles.recommendationRow}>
            <RecommendationCard title="Advanced Excel for Professionals" text="Level up your data analysis and reporting skills." icon="XL" />
            <RecommendationCard title="Effective Communication Skills" text="Speak with confidence and influence." icon="CM" />
          </View>

          <Text style={styles.sectionTitle}>Learning Progress</Text>
          <View style={styles.progressSummary}>
            <View style={styles.progressCircle}>
              <Text style={styles.progressPercent}>68%</Text>
              <Text style={styles.progressLabel}>Overall Progress</Text>
            </View>
            <View style={styles.progressStats}>
              <Text style={styles.progressStat}>5 Classes Enrolled</Text>
              <Text style={styles.progressStat}>4 Classes Completed</Text>
              <Text style={styles.progressStat}>18 Certificates Earned</Text>
              <Text style={styles.progressMessage}>Great job, Ana! Keep learning and achieving your goals.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.homeBottomNav}>
        {["Home", "Programs", "Classes", "Calendar", "Profile"].map((item) => (
          <Text key={item} style={[styles.navItem, item === "Home" && styles.navItemActive]}>{item}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

function InstructorHomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.homeHero}>
          <View style={styles.homeLogoRow}>
            <View style={styles.homeBrand}>
              <Image source={academiyaLogo} style={styles.homeLogo} resizeMode="contain" />
              <Text style={styles.homeBrandName}>Academiya</Text>
            </View>
            <View style={styles.headerActions}>
              <View style={styles.bellBox}>
                <Text style={styles.bellIcon}>Bell</Text>
                <View style={styles.bellBadge}>
                  <Text style={styles.bellBadgeText}>3</Text>
                </View>
              </View>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarInitial}>J</Text>
              </View>
            </View>
          </View>

          <View style={styles.homeGreeting}>
            <Text style={styles.homeTitle}>Hello, Juan!</Text>
            <Text style={styles.homeSubtitle}>Welcome back - here are your assigned classes and schedule.</Text>
          </View>

          <View style={styles.heroSun}>
            <Text style={styles.heroSunText}>*</Text>
          </View>
        </View>

        <View style={styles.homeBody}>
          <View style={styles.searchRow}>
            <View style={styles.homeSearch}>
              <Text style={styles.searchGlyph}>Search</Text>
              <Text style={styles.searchText}>Search classes or schedules</Text>
            </View>
            <View style={styles.filterButton}>
              <Text style={styles.filterText}>Filter</Text>
            </View>
          </View>

          <View style={styles.quickGrid}>
            {[
              ["Assigned Courses", "3 Courses", "Grad"],
              ["My Classes", "5 Classes", "Class"],
              ["Today's Sessions", "2 Sessions", "Today"],
              ["Ongoing", "3 Classes", "Run"]
            ].map(([label, value, icon]) => (
              <View style={styles.quickCard} key={label}>
                <View style={styles.quickIcon}>
                  <Text style={styles.quickIconText}>{icon}</Text>
                </View>
                <Text style={styles.quickLabel}>{label}</Text>
                <Text style={styles.quickValue}>{value}</Text>
              </View>
            ))}
          </View>

          <StudentSectionHeader title="My Assigned Classes" />
          <InstructorClassCard title="Microsoft Excel Batch 2026-A" category="Data & Productivity" meta="Jan 12 - Mar 30, 2026 - Online - Zoom" progress={65} />
          <InstructorClassCard title="Basic English Batch 2026-B" category="Language" meta="May 10 - Jun 26, 2026 - Online - Google Meet" progress={40} />

          <StudentSectionHeader title="Today's Schedule" />
          <ScheduleCard time="9:00 AM" endTime="10:30 AM" title="Microsoft Excel Batch 2026-A" topic="Data Visualization with Charts" location="Online - Zoom" />
          <ScheduleCard time="2:00 PM" endTime="3:30 PM" title="Basic English Batch 2026-B" topic="Grammar in Context" location="Online - Google Meet" />

          <Text style={styles.sectionTitle}>Teaching Summary</Text>
          <View style={styles.teachingSummary}>
            {[
              ["3", "Courses Assigned", "Book"],
              ["5", "Active Classes", "Team"],
              ["48", "Students", "User"],
              ["12", "Sessions This Month", "Cal"]
            ].map(([value, label, icon]) => (
              <View style={styles.summaryItem} key={label}>
                <View style={styles.summaryIcon}>
                  <Text style={styles.quickIconText}>{icon}</Text>
                </View>
                <Text style={styles.summaryValue}>{value}</Text>
                <Text style={styles.summaryLabel}>{label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Classes <Text style={styles.sectionNote}>(Next 7 Days)</Text></Text>
            <Text style={styles.viewAll}>View Calendar</Text>
          </View>
          <View style={styles.sessionCard}>
            <View style={styles.dateBox}>
              <Text style={styles.dateMonth}>MAY</Text>
              <Text style={styles.dateDay}>21</Text>
              <Text style={styles.dateWeekday}>WED</Text>
            </View>
            <View style={styles.sessionCopy}>
              <Text style={styles.sessionTitle}>Microsoft Excel Batch 2026-A</Text>
              <Text style={styles.sessionTopic}>Pivot Tables and Data Analysis</Text>
            </View>
            <View style={styles.sessionTime}>
              <Text style={styles.sessionTimeText}>9:00 AM</Text>
              <Text style={styles.sessionTimeText}>- 10:30 AM</Text>
            </View>
            <Text style={styles.upcomingBadge}>UPCOMING</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.homeBottomNav}>
        {["Home", "My Classes", "Schedule", "Programs", "Profile"].map((item) => (
          <Text key={item} style={[styles.navItem, item === "Home" && styles.navItemActive]}>{item}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

function AdminHomeScreen() {
  return (
    <SafeAreaView style={styles.adminSafeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.adminContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.adminHero}>
          <View style={styles.homeLogoRow}>
            <View style={styles.homeBrand}>
              <Image source={academiyaLogo} style={styles.homeLogo} resizeMode="contain" />
              <Text style={styles.homeBrandName}>Academiya</Text>
            </View>
            <View style={styles.headerActions}>
              <View style={styles.bellBox}>
                <Text style={styles.bellIcon}>Bell</Text>
                <View style={styles.adminBellBadge}>
                  <Text style={styles.bellBadgeText}>5</Text>
                </View>
              </View>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarInitial}>A</Text>
              </View>
            </View>
          </View>
          <View style={styles.homeGreeting}>
            <Text style={styles.homeTitle}>Hello, Admin!</Text>
            <Text style={styles.homeSubtitle}>Here's an overview of your academy.</Text>
          </View>
        </View>

        <View style={styles.adminPanel}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <View style={styles.monthFilter}>
              <Text style={styles.monthFilterText}>This Month</Text>
            </View>
          </View>

          <View style={styles.adminKpiGrid}>
            <AdminKpiCard label="Total Users" value="256" change="12%" icon="Users" />
            <AdminKpiCard label="Instructors" value="32" change="8%" icon="User" />
            <AdminKpiCard label="Active Classes" value="48" change="15%" icon="Cal" />
            <AdminKpiCard label="Programs" value="12" change="5%" icon="Book" />
          </View>

          <View style={styles.adminCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Activities</Text>
              <Text style={styles.adminLink}>View All</Text>
            </View>
            {[
              ["New user registered", "Maria Santos", "May 10, 2026 - 10:30 AM"],
              ["New class created", "Basic Caregiving Batch 2026-A", "May 10, 2026 - 09:15 AM"],
              ["Program updated", "Healthcare Program", "May 10, 2026 - 02:20 PM"],
              ["Instructor added", "Lisa Santos", "May 10, 2026 - 12:10 PM"]
            ].map(([title, detail, time]) => (
              <View style={styles.activityRow} key={title}>
                <View style={styles.activityIcon}>
                  <Text style={styles.quickIconText}>Act</Text>
                </View>
                <View style={styles.activityCopy}>
                  <Text style={styles.activityTitle}>{title}</Text>
                  <Text style={styles.activityDetail}>{detail}</Text>
                </View>
                <Text style={styles.activityTime}>{time}</Text>
              </View>
            ))}
          </View>

          <View style={styles.adminCard}>
            <Text style={styles.sectionTitle}>Quick Access</Text>
            <View style={styles.quickAccessGrid}>
              {["User Management", "Program Management", "Course Management", "Class Management", "Schedule Management", "Reports"].map((item) => (
                <View style={styles.quickAccessButton} key={item}>
                  <Text style={styles.quickIconText}>Go</Text>
                  <Text style={styles.quickAccessText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.adminTwoColumn}>
            <View style={styles.adminMiniCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.adminMiniTitle}>Reports Snapshot</Text>
                <Text style={styles.monthFilterText}>This Month</Text>
              </View>
              <ReportLine label="New Users" value="45" color="#2F80ED" percent={78} />
              <ReportLine label="New Classes" value="12" color="#2EA745" percent={52} />
              <ReportLine label="Active Classes" value="48" color="#6D3EDB" percent={76} />
              <ReportLine label="Completed Classes" value="15" color="#F4B400" percent={68} />
            </View>

            <View style={styles.adminMiniCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.adminMiniTitle}>System Announcements</Text>
                <Text style={styles.adminLink}>View All</Text>
              </View>
              <View style={styles.announcementRow}>
                <View style={styles.activityIcon}>
                  <Text style={styles.quickIconText}>Meg</Text>
                </View>
                <View style={styles.activityCopy}>
                  <Text style={styles.activityTitle}>System Maintenance</Text>
                  <Text style={styles.activityDetail}>The system will be under maintenance on May 25, 2026 from 12:00 AM to 2:00 AM.</Text>
                  <Text style={styles.activityTime}>May 10, 2026</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.adminBottomNav}>
        {["Dashboard", "Users", "Classes", "Reports", "More"].map((item) => (
          <Text key={item} style={[styles.navItem, item === "Dashboard" && styles.adminNavItemActive]}>{item}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

function AdminKpiCard({ label, value, change, icon }: { label: string; value: string; change: string; icon: string }) {
  return (
    <View style={styles.adminKpiCard}>
      <View style={styles.adminKpiIcon}>
        <Text style={styles.quickIconText}>{icon}</Text>
      </View>
      <View>
        <Text style={styles.adminKpiLabel}>{label}</Text>
        <Text style={styles.adminKpiValue}>{value}</Text>
        <Text style={styles.adminKpiChange}>Up {change}</Text>
      </View>
    </View>
  );
}

function ReportLine({ label, value, color, percent }: { label: string; value: string; color: string; percent: number }) {
  return (
    <View style={styles.reportLine}>
      <Text style={styles.reportLabel}>{label}</Text>
      <View style={styles.reportTrack}>
        <View style={[styles.reportFill, { backgroundColor: color, width: `${percent}%` }]} />
      </View>
      <Text style={styles.reportValue}>{value}</Text>
    </View>
  );
}

function InstructorClassCard({ title, category, meta, progress }: { title: string; category: string; meta: string; progress: number }) {
  return (
    <View style={styles.enrolledCard}>
      <View style={styles.enrolledThumb}>
        <Text style={styles.classThumbText}>{title.slice(0, 2)}</Text>
      </View>
      <View style={styles.enrolledCopy}>
        <Text style={styles.homeClassTitle}>{title}</Text>
        <Text style={styles.homeClassMeta}>Instructor - {category}</Text>
        <Text style={styles.homeClassMeta}>{meta}</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.homeClassMeta}>Progress {progress}%</Text>
      </View>
      <Text style={styles.chevron}>{">"}</Text>
    </View>
  );
}

function ScheduleCard({ time, endTime, title, topic, location }: { time: string; endTime: string; title: string; topic: string; location: string }) {
  return (
    <View style={styles.scheduleCard}>
      <View style={styles.scheduleTimeBlock}>
        <Text style={styles.scheduleTime}>{time}</Text>
        <Text style={styles.scheduleEnd}>- {endTime}</Text>
      </View>
      <View style={styles.sessionCopy}>
        <Text style={styles.sessionTitle}>{title}</Text>
        <Text style={styles.sessionTopic}>{topic}</Text>
        <Text style={styles.homeClassMeta}>{location}</Text>
      </View>
      <Text style={styles.upcomingBadge}>TODAY</Text>
    </View>
  );
}

function StudentSectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.viewAll}>View All</Text>
    </View>
  );
}

function EnrolledClassCard({ title, instructor, meta, progress }: { title: string; instructor: string; meta: string; progress: number }) {
  return (
    <View style={styles.enrolledCard}>
      <View style={styles.enrolledThumb}>
        <Text style={styles.classThumbText}>{title.slice(0, 2)}</Text>
      </View>
      <View style={styles.enrolledCopy}>
        <Text style={styles.homeClassTitle}>{title}</Text>
        <Text style={styles.homeClassMeta}>Instructor: {instructor}</Text>
        <Text style={styles.homeClassMeta}>{meta}</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.homeClassMeta}>Progress {progress}%</Text>
      </View>
      <Text style={styles.chevron}>{">"}</Text>
    </View>
  );
}

function RecommendationCard({ title, text, icon }: { title: string; text: string; icon: string }) {
  return (
    <View style={styles.recommendationCard}>
      <View style={styles.recommendationImage}>
        <Text style={styles.programImageText}>{icon}</Text>
      </View>
      <Text style={styles.programCardTitle}>{title}</Text>
      <Text style={styles.programCardText}>{text}</Text>
      <Text style={styles.programAction}>View Program -></Text>
    </View>
  );
}

function ClassSection({ title, course, actionLabel }: { title: string; course: (typeof discoveryCourses)[number]; actionLabel?: string }) {
  const classItem = course.classes[0];

  return (
    <View style={styles.classSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={styles.homeClassCard}>
        <View style={styles.classThumb}>
          <Text style={styles.classThumbText}>{course.course.slice(0, 2)}</Text>
          <Text style={[styles.classStatusPill, statusStyle(classItem.status)]}>{classItem.status}</Text>
        </View>
        <View style={styles.classSummary}>
          <Text style={styles.homeClassTitle}>{classItem.batch}</Text>
          <Text style={styles.homeClassMeta}>{dateRangeForStatus(classItem.status)} - {classItem.schedule}</Text>
          <Text style={styles.homeClassMeta}>{classItem.deliveryMode} - {locationForStatus(classItem.status)}</Text>
          <Text style={styles.homeClassMeta}>{classItem.status === "Open for Registration" ? "25 / 25 slots available" : instructorForStatus(classItem.status)}</Text>
        </View>
        <View style={styles.classActionColumn}>
          {actionLabel ? (
            <View style={styles.viewClassButton}>
              <Text style={styles.viewClassText}>{actionLabel}</Text>
            </View>
          ) : (
            <Text style={styles.chevron}>{">"}</Text>
          )}
        </View>
      </View>
    </View>
  );
}

function programDescription(program: string) {
  if (program === "Healthcare Program") {
    return "Courses related to caregiving, first aid, and health support.";
  }

  if (program === "Language Program") {
    return "Improve your communication and language skills.";
  }

  return "Digital literacy, MS Office, and productivity skills.";
}

function dateRangeForStatus(status: string) {
  if (status === "Open for Registration") {
    return "Aug 1 - Sep 26, 2026";
  }

  if (status === "Ongoing") {
    return "May 10 - Jul 26, 2026";
  }

  return "Jan 12 - Mar 30, 2025";
}

function locationForStatus(status: string) {
  if (status === "Open for Registration") {
    return "Dubai Campus - Room 101";
  }

  if (status === "Ongoing") {
    return "Google Meet";
  }

  return "Room 204";
}

function instructorForStatus(status: string) {
  if (status === "Completed") {
    return "Instructor: Juan Dela Cruz";
  }

  return "Instructor: Liza Santos";
}
                </View>
                <Text style={styles.classMeta}>{classItem.deliveryMode}</Text>
                <Text style={styles.classMeta}>{classItem.schedule}</Text>
                <Text style={styles.cardAction}>View Class</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        {["Home", "Programs", "Classes", "Profile"].map((item) => (
          <Text key={item} style={[styles.navItem, item === "Home" && styles.navItemActive]}>{item}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

function statusStyle(status: string) {
  if (status === "Open for Registration") {
    return styles.statusOpen;
  }

  if (status === "Ongoing") {
    return styles.statusOngoing;
  }

  return styles.statusCompleted;
}

const styles = StyleSheet.create({
  loginSafeArea: {
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  loginContainer: {
    gap: 18,
    padding: 32,
    paddingBottom: 118
  },
  sunAccent: {
    backgroundColor: "#FFF5D6",
    borderRadius: 120,
    height: 180,
    left: -84,
    opacity: 0.65,
    position: "absolute",
    top: -72,
    width: 180
  },
  starAccent: {
    alignItems: "center",
    backgroundColor: "#FFF2C7",
    borderRadius: 28,
    height: 56,
    justifyContent: "center",
    opacity: 0.7,
    position: "absolute",
    right: -8,
    top: 142,
    width: 56
  },
  starText: {
    color: "#F4B400",
    fontSize: 24,
    fontWeight: "800"
  },
  loginBrand: {
    alignItems: "center",
    marginTop: 34
  },
  loginLogo: {
    height: 152,
    width: 152
  },
  loginBrandName: {
    color: "#071B45",
    fontSize: 44,
    fontWeight: "900",
    marginTop: -10
  },
  loginTagline: {
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center"
  },
  taglineBlue: {
    color: "#0047A1"
  },
  taglineGreen: {
    color: "#2EA745"
  },
  taglineGold: {
    color: "#F4B400"
  },
  loginIntro: {
    alignItems: "center",
    gap: 8,
    marginTop: 18
  },
  loginTitle: {
    color: "#0047A1",
    fontSize: 34,
    fontWeight: "900"
  },
  loginSubtitle: {
    color: "#3E4552",
    fontSize: 19,
    lineHeight: 27,
    textAlign: "center"
  },
  formGroup: {
    gap: 8
  },
  fieldLabel: {
    color: "#071B45",
    fontSize: 18,
    fontWeight: "900"
  },
  inputBox: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#D7DEE9",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 14,
    minHeight: 70,
    paddingHorizontal: 18
  },
  inputIcon: {
    color: "#0047A1",
    fontSize: 13,
    fontWeight: "900",
    width: 34
  },
  inputPlaceholder: {
    color: "#8B94A3",
    flex: 1,
    fontSize: 18,
    fontWeight: "600"
  },
  inputAction: {
    color: "#68758A",
    fontSize: 13,
    fontWeight: "900"
  },
  loginOptions: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rememberRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  },
  checkbox: {
    borderColor: "#C5CEDA",
    borderRadius: 5,
    borderWidth: 1,
    height: 22,
    width: 22
  },
  rememberText: {
    color: "#3E4552",
    fontSize: 16,
    fontWeight: "800"
  },
  forgotText: {
    color: "#0047A1",
    fontSize: 16,
    fontWeight: "900"
  },
  primaryLoginButton: {
    alignItems: "center",
    backgroundColor: "#0047A1",
    borderRadius: 8,
    justifyContent: "center",
    minHeight: 64
  },
  primaryLoginText: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900"
  },
  orRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12
  },
  divider: {
    backgroundColor: "#E1E6EF",
    flex: 1,
    height: 1
  },
  orBubble: {
    alignItems: "center",
    backgroundColor: "#F0F3F8",
    borderRadius: 22,
    height: 44,
    justifyContent: "center",
    width: 44
  },
  orText: {
    color: "#5E6878",
    fontSize: 15,
    fontWeight: "900"
  },
  secondaryButton: {
    alignItems: "center",
    borderColor: "#0047A1",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 14,
    justifyContent: "center",
    minHeight: 64
  },
  secondaryIcon: {
    color: "#0047A1",
    fontSize: 30,
    fontWeight: "800"
  },
  secondaryText: {
    color: "#0047A1",
    fontSize: 20,
    fontWeight: "900"
  },
  newHereCard: {
    alignItems: "center",
    backgroundColor: "#FFFDF6",
    borderColor: "#F9D678",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 16,
    padding: 18
  },
  newHereIcon: {
    alignItems: "center",
    borderColor: "#F4B400",
    borderRadius: 8,
    borderWidth: 2,
    height: 56,
    justifyContent: "center",
    width: 56
  },
  newHereIconText: {
    color: "#F4B400",
    fontSize: 12,
    fontWeight: "900"
  },
  newHereCopy: {
    flex: 1,
    gap: 4
  },
  newHereTitle: {
    color: "#071B45",
    fontSize: 18,
    fontWeight: "900"
  },
  newHereText: {
    color: "#172433",
    fontSize: 15,
    lineHeight: 22
  },
  communityText: {
    color: "#071B45",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 24,
    marginTop: 10,
    textAlign: "center"
  },
  waveBase: {
    backgroundColor: "#0047A1",
    bottom: 0,
    height: 58,
    left: 0,
    position: "absolute",
    right: 0
  },
  waveGold: {
    backgroundColor: "#F4B400",
    borderRadius: 80,
    height: 30,
    left: 120,
    position: "absolute",
    right: -30,
    top: -8
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F6F8"
  },
  container: {
    paddingBottom: 104
  },
  homeHero: {
    backgroundColor: "#0047A1",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    minHeight: 250,
    overflow: "hidden",
    padding: 24,
    paddingTop: 34
  },
  homeLogoRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  homeBrand: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  },
  homeLogo: {
    height: 58,
    width: 58
  },
  homeBrandName: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "900"
  },
  headerActions: {
    alignItems: "center",
    flexDirection: "row",
    gap: 14
  },
  bellBox: {
    alignItems: "center",
    borderColor: "#DCEAFF",
    borderRadius: 18,
    borderWidth: 1,
    height: 36,
    justifyContent: "center",
    width: 36
  },
  bellIcon: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900"
  },
  bellBadge: {
    alignItems: "center",
    backgroundColor: "#FF5A1F",
    borderRadius: 11,
    height: 22,
    justifyContent: "center",
    position: "absolute",
    right: -8,
    top: -10,
    width: 22
  },
  bellBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900"
  },
  avatarCircle: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    width: 60
  },
  avatarInitial: {
    color: "#0047A1",
    fontSize: 24,
    fontWeight: "900"
  },
  homeGreeting: {
    gap: 4,
    marginTop: 28
  },
  homeTitle: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900"
  },
  homeSubtitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700"
  },
  heroSun: {
    alignItems: "center",
    backgroundColor: "#F4B400",
    borderRadius: 50,
    bottom: -16,
    height: 100,
    justifyContent: "center",
    opacity: 0.95,
    position: "absolute",
    right: 48,
    width: 100
  },
  heroSunText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "900"
  },
  homeBody: {
    gap: 22,
    padding: 18,
    paddingTop: 0
  },
  searchRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: -42
  },
  homeSearch: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#DDE4EF",
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    gap: 12,
    minHeight: 70,
    paddingHorizontal: 16
  },
  searchGlyph: {
    color: "#0047A1",
    fontSize: 11,
    fontWeight: "900"
  },
  filterButton: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    height: 70,
    justifyContent: "center",
    width: 70
  },
  filterText: {
    color: "#0047A1",
    fontSize: 12,
    fontWeight: "900"
  },
  quickGrid: {
    flexDirection: "row",
    gap: 8
  },
  quickCard: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E8EDF5",
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    gap: 6,
    minHeight: 112,
    padding: 10
  },
  quickIcon: {
    alignItems: "center",
    backgroundColor: "#EAF5FF",
    borderRadius: 8,
    height: 44,
    justifyContent: "center",
    width: 44
  },
  quickIconText: {
    color: "#0047A1",
    fontSize: 10,
    fontWeight: "900"
  },
  quickLabel: {
    color: "#071B45",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center"
  },
  quickValue: {
    color: "#68758A",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center"
  },
  sectionHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewAll: {
    color: "#0047A1",
    fontSize: 15,
    fontWeight: "900"
  },
  featuredRow: {
    flexDirection: "row",
    gap: 10
  },
  programCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    flex: 1,
    gap: 8,
    padding: 10
  },
  programImage: {
    alignItems: "center",
    backgroundColor: "#DCEAFF",
    borderRadius: 8,
    height: 74,
    justifyContent: "center"
  },
  programImageText: {
    color: "#0047A1",
    fontSize: 16,
    fontWeight: "900"
  },
  programCardTitle: {
    color: "#0047A1",
    fontSize: 14,
    fontWeight: "900"
  },
  programCardText: {
    color: "#3E4552",
    fontSize: 12,
    lineHeight: 17
  },
  programAction: {
    color: "#0047A1",
    fontSize: 12,
    fontWeight: "900"
  },
  classSection: {
    gap: 10
  },
  homeClassCard: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    flexDirection: "row",
    gap: 12,
    padding: 10
  },
  classThumb: {
    alignItems: "center",
    backgroundColor: "#EAF5FF",
    borderRadius: 8,
    height: 100,
    justifyContent: "center",
    width: 98
  },
  classThumbText: {
    color: "#0047A1",
    fontSize: 20,
    fontWeight: "900"
  },
  classStatusPill: {
    borderRadius: 8,
    fontSize: 11,
    fontWeight: "900",
    marginTop: 10,
    overflow: "hidden",
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  classSummary: {
    flex: 1,
    gap: 5
  },
  homeClassTitle: {
    color: "#0047A1",
    fontSize: 16,
    fontWeight: "900"
  },
  homeClassMeta: {
    color: "#3E4552",
    fontSize: 12,
    lineHeight: 17
  },
  classActionColumn: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 46
  },
  viewClassButton: {
    alignItems: "center",
    backgroundColor: "#0047A1",
    borderRadius: 8,
    justifyContent: "center",
    minHeight: 44,
    paddingHorizontal: 12
  },
  viewClassText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900"
  },
  chevron: {
    color: "#0047A1",
    fontSize: 28,
    fontWeight: "900"
  },
  homeBottomNav: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E1E6EF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    bottom: 0,
    flexDirection: "row",
    gap: 6,
    justifyContent: "space-around",
    left: 0,
    minHeight: 84,
    paddingBottom: 16,
    paddingTop: 10,
    position: "absolute",
    right: 0
  },
  header: {
    backgroundColor: "#0047A1",
    borderRadius: 8,
    gap: 8,
    padding: 18
  },
  headerTop: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  logo: {
    width: 74,
    height: 74,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 6
  },
  profileBadge: {
    alignItems: "center",
    backgroundColor: "#F4B400",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    width: 40
  },
  profileInitial: {
    color: "#0047A1",
    fontSize: 18,
    fontWeight: "800"
  },
  kicker: {
    color: "#F4B400",
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase"
  },
  title: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 34
  },
  subtitle: {
    color: "#DCEAFF",
    fontSize: 15,
    lineHeight: 22
  },
  searchBar: {
    backgroundColor: "#ffffff",
    borderColor: "#DDE4EF",
    borderRadius: 8,
    borderWidth: 1,
    padding: 14
  },
  searchText: {
    color: "#68758A",
    fontSize: 15,
    fontWeight: "600"
  },
  metrics: {
    flexDirection: "row",
    gap: 12
  },
  metric: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderColor: "#DDE4EF",
    borderRadius: 8,
    borderWidth: 1,
    padding: 16
  },
  metricValue: {
    color: "#0047A1",
    fontSize: 30,
    fontWeight: "800"
  },
  metricLabel: {
    color: "#68758A",
    fontWeight: "700"
  },
  sectionTitle: {
    color: "#071B45",
    fontSize: 18,
    fontWeight: "800"
  },
  card: {
    backgroundColor: "#ffffff",
    borderColor: "#DDE4EF",
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    padding: 16
  },
  program: {
    color: "#A86F00",
    fontSize: 13,
    fontWeight: "800"
  },
  course: {
    color: "#071B45",
    fontSize: 20,
    fontWeight: "800"
  },
  meta: {
    color: "#68758A",
    fontSize: 14
  },
  classRow: {
    backgroundColor: "#F7F9FD",
    borderRadius: 8,
    gap: 4,
    marginTop: 8,
    padding: 12
  },
  className: {
    color: "#071B45",
    fontSize: 15,
    fontWeight: "800"
  },
  classMeta: {
    color: "#68758A",
    fontSize: 13
  },
  classHeader: {
    alignItems: "flex-start",
    gap: 8
  },
  statusBadge: {
    alignSelf: "flex-start",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: "800",
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  statusOpen: {
    backgroundColor: "#FFF2C7",
    color: "#7a4c00"
  },
  statusOngoing: {
    backgroundColor: "#DCEAFF",
    color: "#0047A1"
  },
  statusCompleted: {
    backgroundColor: "#DEF4E4",
    color: "#1F7A32"
  },
  cardAction: {
    color: "#0047A1",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 4
  },
  bottomNav: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#DDE4EF",
    borderTopWidth: 1,
    bottom: 0,
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-around",
    left: 0,
    paddingBottom: 18,
    paddingTop: 12,
    position: "absolute",
    right: 0
  },
  enrolledCard: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    flexDirection: "row",
    gap: 12,
    padding: 10
  },
  enrolledThumb: {
    alignItems: "center",
    backgroundColor: "#EAF5FF",
    borderRadius: 8,
    height: 104,
    justifyContent: "center",
    width: 112
  },
  enrolledCopy: {
    flex: 1,
    gap: 5
  },
  progressTrack: {
    backgroundColor: "#E5EBF4",
    borderRadius: 999,
    height: 7,
    overflow: "hidden"
  },
  progressFill: {
    backgroundColor: "#2F6DF6",
    borderRadius: 999,
    height: 7
  },
  sessionCard: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    flexDirection: "row",
    gap: 12,
    padding: 12
  },
  dateBox: {
    alignItems: "center",
    borderColor: "#E1E6EF",
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 58,
    padding: 8
  },
  dateMonth: {
    color: "#0047A1",
    fontSize: 12,
    fontWeight: "900"
  },
  dateDay: {
    color: "#0047A1",
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 30
  },
  dateWeekday: {
    color: "#3E4552",
    fontSize: 11,
    fontWeight: "800"
  },
  sessionTime: {
    borderRightColor: "#DDE4EF",
    borderRightWidth: 1,
    paddingRight: 12
  },
  sessionTimeText: {
    color: "#071B45",
    fontSize: 15,
    fontWeight: "800"
  },
  sessionCopy: {
    flex: 1,
    gap: 4
  },
  sessionTitle: {
    color: "#0047A1",
    fontSize: 15,
    fontWeight: "900"
  },
  sessionTopic: {
    color: "#3E4552",
    fontSize: 13,
    fontWeight: "700"
  },
  upcomingBadge: {
    backgroundColor: "#DCE4FF",
    borderRadius: 999,
    color: "#0047A1",
    fontSize: 11,
    fontWeight: "900",
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  recommendationRow: {
    flexDirection: "row",
    gap: 10
  },
  recommendationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    flex: 1,
    gap: 7,
    padding: 10
  },
  recommendationImage: {
    alignItems: "center",
    backgroundColor: "#FFF2C7",
    borderRadius: 8,
    height: 74,
    justifyContent: "center"
  },
  progressSummary: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    flexDirection: "row",
    gap: 18,
    padding: 16
  },
  progressCircle: {
    alignItems: "center",
    borderColor: "#2F6DF6",
    borderRadius: 52,
    borderWidth: 10,
    height: 104,
    justifyContent: "center",
    width: 104
  },
  progressPercent: {
    color: "#0047A1",
    fontSize: 25,
    fontWeight: "900"
  },
  progressLabel: {
    color: "#3E4552",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center"
  },
  progressStats: {
    flex: 1,
    gap: 8
  },
  progressStat: {
    color: "#071B45",
    fontSize: 14,
    fontWeight: "800"
  },
  progressMessage: {
    color: "#3E4552",
    fontSize: 13,
    lineHeight: 18
  },
  scheduleCard: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    flexDirection: "row",
    gap: 16,
    padding: 14
  },
  scheduleTimeBlock: {
    borderRightColor: "#DDE4EF",
    borderRightWidth: 1,
    minWidth: 96,
    paddingRight: 14
  },
  scheduleTime: {
    color: "#0047A1",
    fontSize: 26,
    fontWeight: "900"
  },
  scheduleEnd: {
    color: "#3E4552",
    fontSize: 15,
    fontWeight: "800"
  },
  teachingSummary: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14
  },
  summaryItem: {
    alignItems: "center",
    flex: 1,
    gap: 5
  },
  summaryIcon: {
    alignItems: "center",
    backgroundColor: "#EAF5FF",
    borderRadius: 8,
    height: 42,
    justifyContent: "center",
    width: 42
  },
  summaryValue: {
    color: "#0047A1",
    fontSize: 24,
    fontWeight: "900"
  },
  summaryLabel: {
    color: "#071B45",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center"
  },
  sectionNote: {
    color: "#3E4552",
    fontSize: 15,
    fontWeight: "500"
  },
  adminSafeArea: {
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  adminContainer: {
    paddingBottom: 104
  },
  adminHero: {
    backgroundColor: "#4B168D",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    minHeight: 220,
    padding: 24,
    paddingTop: 34
  },
  adminBellBadge: {
    alignItems: "center",
    backgroundColor: "#FF3B2F",
    borderRadius: 11,
    height: 22,
    justifyContent: "center",
    position: "absolute",
    right: -8,
    top: -10,
    width: 22
  },
  adminPanel: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    gap: 16,
    marginTop: -28,
    padding: 18
  },
  monthFilter: {
    borderColor: "#DDE4EF",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8
  },
  monthFilterText: {
    color: "#071B45",
    fontSize: 13,
    fontWeight: "800"
  },
  adminKpiGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  adminKpiCard: {
    alignItems: "center",
    borderColor: "#E4E6EF",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 12,
    minHeight: 112,
    padding: 14,
    width: "48%"
  },
  adminKpiIcon: {
    alignItems: "center",
    backgroundColor: "#F1ECFF",
    borderRadius: 8,
    height: 56,
    justifyContent: "center",
    width: 56
  },
  adminKpiLabel: {
    color: "#071B45",
    fontSize: 14,
    fontWeight: "800"
  },
  adminKpiValue: {
    color: "#071B45",
    fontSize: 25,
    fontWeight: "900"
  },
  adminKpiChange: {
    color: "#009A44",
    fontSize: 14,
    fontWeight: "800"
  },
  adminCard: {
    borderColor: "#E4E6EF",
    borderRadius: 8,
    borderWidth: 1,
    gap: 12,
    padding: 14
  },
  adminLink: {
    color: "#5B21B6",
    fontSize: 14,
    fontWeight: "900"
  },
  activityRow: {
    alignItems: "center",
    borderBottomColor: "#EEF1F6",
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: 12,
    paddingBottom: 10
  },
  activityIcon: {
    alignItems: "center",
    backgroundColor: "#F1ECFF",
    borderRadius: 8,
    height: 42,
    justifyContent: "center",
    width: 42
  },
  activityCopy: {
    flex: 1,
    gap: 3
  },
  activityTitle: {
    color: "#071B45",
    fontSize: 14,
    fontWeight: "900"
  },
  activityDetail: {
    color: "#071B45",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 18
  },
  activityTime: {
    color: "#4B5A78",
    fontSize: 12,
    fontWeight: "600",
    maxWidth: 112,
    textAlign: "right"
  },
  quickAccessGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  quickAccessButton: {
    alignItems: "center",
    backgroundColor: "#F8F5FF",
    borderColor: "#E4DDF8",
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    minHeight: 74,
    justifyContent: "center",
    width: "31%"
  },
  quickAccessText: {
    color: "#071B45",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center"
  },
  adminTwoColumn: {
    flexDirection: "row",
    gap: 10
  },
  adminMiniCard: {
    borderColor: "#E4E6EF",
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    gap: 12,
    padding: 12
  },
  adminMiniTitle: {
    color: "#071B45",
    fontSize: 15,
    fontWeight: "900"
  },
  reportLine: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8
  },
  reportLabel: {
    color: "#071B45",
    flex: 1,
    fontSize: 12,
    fontWeight: "700"
  },
  reportTrack: {
    backgroundColor: "#DDE4EF",
    borderRadius: 999,
    flex: 1,
    height: 5,
    overflow: "hidden"
  },
  reportFill: {
    borderRadius: 999,
    height: 5
  },
  reportValue: {
    color: "#071B45",
    fontSize: 13,
    fontWeight: "900",
    minWidth: 24,
    textAlign: "right"
  },
  announcementRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12
  },
  adminBottomNav: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#E1E6EF",
    borderTopWidth: 1,
    bottom: 0,
    flexDirection: "row",
    gap: 6,
    justifyContent: "space-around",
    left: 0,
    minHeight: 84,
    paddingBottom: 16,
    paddingTop: 10,
    position: "absolute",
    right: 0
  },
  adminNavItemActive: {
    color: "#5B21B6"
  },
  navItem: {
    color: "#68758A",
    fontSize: 13,
    fontWeight: "700"
  },
  navItemActive: {
    color: "#0047A1"
  }
});
