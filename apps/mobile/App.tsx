import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { discoveryCourses } from "@academiya/domain";
import academiyaLogo from "../../assets/brand/academiya-logo.png";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Image source={academiyaLogo} style={styles.logo} resizeMode="contain" />
            <View style={styles.profileBadge}>
              <Text style={styles.profileInitial}>A</Text>
            </View>
          </View>
          <Text style={styles.kicker}>Hello, Ana</Text>
          <Text style={styles.title}>Ready to grow your skills today?</Text>
          <Text style={styles.subtitle}>Learn Today. Grow Everyday. Succeed Tomorrow.</Text>
        </View>

        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Search programs, courses, or classes</Text>
        </View>

        <View style={styles.metrics}>
          <View style={styles.metric}>
            <Text style={styles.metricValue}>{discoveryCourses.length}</Text>
            <Text style={styles.metricLabel}>Available Programs</Text>
          </View>
          <View style={styles.metric}>
            <Text style={styles.metricValue}>1</Text>
            <Text style={styles.metricLabel}>Open Classes</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Featured programs</Text>
        {discoveryCourses.map((item) => (
          <View style={styles.card} key={item.id}>
            <Text style={styles.program}>{item.program}</Text>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.meta}>{item.level} - {item.duration} - {item.fee}</Text>
            {item.classes.map((classItem) => (
              <View style={styles.classRow} key={classItem.batch}>
                <View style={styles.classHeader}>
                  <Text style={styles.className}>{classItem.batch}</Text>
                  <Text style={[styles.statusBadge, statusStyle(classItem.status)]}>{classItem.status}</Text>
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
  safeArea: {
    flex: 1,
    backgroundColor: "#f6f8fc"
  },
  container: {
    padding: 20,
    paddingBottom: 92,
    gap: 16
  },
  header: {
    backgroundColor: "#073f8f",
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
    backgroundColor: "#f7b718",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    width: 40
  },
  profileInitial: {
    color: "#073f8f",
    fontSize: 18,
    fontWeight: "800"
  },
  kicker: {
    color: "#f7d46b",
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
    color: "#dceaff",
    fontSize: 15,
    lineHeight: 22
  },
  searchBar: {
    backgroundColor: "#ffffff",
    borderColor: "#d9e1ef",
    borderRadius: 8,
    borderWidth: 1,
    padding: 14
  },
  searchText: {
    color: "#667387",
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
    borderColor: "#d9e1ef",
    borderRadius: 8,
    borderWidth: 1,
    padding: 16
  },
  metricValue: {
    color: "#073f8f",
    fontSize: 30,
    fontWeight: "800"
  },
  metricLabel: {
    color: "#667387",
    fontWeight: "700"
  },
  sectionTitle: {
    color: "#172433",
    fontSize: 18,
    fontWeight: "800"
  },
  card: {
    backgroundColor: "#ffffff",
    borderColor: "#d9e1ef",
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    padding: 16
  },
  program: {
    color: "#b77900",
    fontSize: 13,
    fontWeight: "800"
  },
  course: {
    color: "#172433",
    fontSize: 20,
    fontWeight: "800"
  },
  meta: {
    color: "#667387",
    fontSize: 14
  },
  classRow: {
    backgroundColor: "#f7f9fd",
    borderRadius: 8,
    gap: 4,
    marginTop: 8,
    padding: 12
  },
  className: {
    color: "#172433",
    fontSize: 15,
    fontWeight: "800"
  },
  classMeta: {
    color: "#667387",
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
    backgroundColor: "#fff0c2",
    color: "#7a4c00"
  },
  statusOngoing: {
    backgroundColor: "#dceaff",
    color: "#073f8f"
  },
  statusCompleted: {
    backgroundColor: "#e6ecf4",
    color: "#4d5a6d"
  },
  cardAction: {
    color: "#073f8f",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 4
  },
  bottomNav: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#d9e1ef",
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
  navItem: {
    color: "#667387",
    fontSize: 13,
    fontWeight: "700"
  },
  navItemActive: {
    color: "#073f8f"
  }
});
