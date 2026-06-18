import { Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GridLayout, { type GridItem } from "../../components/GridLayout";

const skills: GridItem[] = [
  { id: "1", label: "React Native" },
  { id: "2", label: "TypeScript" },
  { id: "3", label: "Expo" },
  { id: "4", label: "Node.js" },
  { id: "5", label: "Git" },
  { id: "6", label: "UI / UX" },
  { id: "7", label: "REST API" },
  { id: "8", label: "SQL" },
];

export default function AboutScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text style={styles.title}>À propos</Text>
        <Text style={styles.paragraph}>
          Développeur passionné avec 8 ans d'expérience en développement mobile.
        </Text>

        <Text style={styles.sectionTitle}>Compétences</Text>
        <GridLayout items={skills} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 16 },
  paragraph: { fontSize: 16, lineHeight: 26, color: "#555" },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginTop: 24, marginBottom: 16 },
});
