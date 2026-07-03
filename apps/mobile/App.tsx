import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { discoveryCourses, phaseOneRoles } from "@academiya/domain";
import academiyaLogo from "../../assets/brand/academiya-logo.png";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image source={academiyaLogo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.kicker}>Academiya</Text>
          <Text style={styles.title}>Student-facing discovery dashboard</Text>
          <Text style={styles.subtitle}>Browse visible programs, courses, and classes after email verification.</Text>
        </View>

        <View style={styles.metrics}>
          <View style={styles.metric}>
            <Text style={styles.metricValue}>{discoveryCourses.length}</Text>
            <Text style={styles.metricLabel}>Programs</Text>
          </View>
          <View style={styles.metric}>
            <Text style={styles.metricValue}>{phaseOneRoles.length}</Text>
            <Text style={styles.metricLabel}>Phase 1 roles</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Visible offerings</Text>
        {discoveryCourses.map((item) => (
          <View style={styles.card} key={item.id}>
            <Text style={styles.program}>{item.program}</Text>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.meta}>{item.level} · {item.duration} · {item.fee}</Text>
            {item.classes.map((classItem) => (
              <View style={styles.classRow} key={classItem.batch}>
                <Text style={styles.className}>{classItem.batch}</Text>
                <Text style={styles.classMeta}>{classItem.status} · {classItem.deliveryMode}</Text>
                <Text style={styles.classMeta}>{classItem.schedule}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f7f4"
  },
  container: {
    padding: 20,
    gap: 16
  },
  header: {
    gap: 8,
    paddingTop: 18
  },
  logo: {
    width: 86,
    height: 86,
    backgroundColor: "#ffffff",
    borderRadius: 8
  },
  kicker: {
    color: "#6c5a2d",
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase"
  },
  title: {
    color: "#172026",
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 34
  },
  subtitle: {
    color: "#64716b",
    fontSize: 15,
    lineHeight: 22
  },
  metrics: {
    flexDirection: "row",
    gap: 12
  },
  metric: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderColor: "#dfe5dc",
    borderRadius: 8,
    borderWidth: 1,
    padding: 16
  },
  metricValue: {
    color: "#10231f",
    fontSize: 30,
    fontWeight: "800"
  },
  metricLabel: {
    color: "#64716b",
    fontWeight: "700"
  },
  sectionTitle: {
    color: "#172026",
    fontSize: 18,
    fontWeight: "800"
  },
  card: {
    backgroundColor: "#ffffff",
    borderColor: "#dfe5dc",
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    padding: 16
  },
  program: {
    color: "#6c5a2d",
    fontSize: 13,
    fontWeight: "800"
  },
  course: {
    color: "#172026",
    fontSize: 20,
    fontWeight: "800"
  },
  meta: {
    color: "#64716b",
    fontSize: 14
  },
  classRow: {
    backgroundColor: "#f7f8f6",
    borderRadius: 8,
    gap: 4,
    marginTop: 8,
    padding: 12
  },
  className: {
    color: "#172026",
    fontSize: 15,
    fontWeight: "800"
  },
  classMeta: {
    color: "#64716b",
    fontSize: 13
  }
});
