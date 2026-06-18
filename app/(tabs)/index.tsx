import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

// Hub de navigation vers les écrans d'exercices (Parties 1 à 3).
const LINKS = [
  { href: "/layouts", label: "Partie 1 — Layout & barre de stats" },
  { href: "/flexbox", label: "Partie 2 — Flexbox avancés" },
  { href: "/contacts", label: "Partie 3 — Liste, recherche, sections" },
  { href: "/playground", label: "Partie 3 — Composants interactifs" },
  { href: "/about", label: "À propos" },
] as const;

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={{ uri: "https://www.hnoel.fr/assets/Photo_Henan_NOEL.webp" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>NOËL Hénan</Text>
        <Text style={styles.role}>Software Engineer</Text>

        <View style={styles.menu}>
          {LINKS.map((link) => (
            <TouchableOpacity
              key={link.href}
              style={styles.link}
              activeOpacity={0.8}
              onPress={() => router.push(link.href)}
            >
              <Text style={styles.linkText}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  content: { alignItems: "center", padding: 24 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
  name: { fontSize: 24, fontWeight: "bold", color: "#1A1A1A", marginBottom: 4 },
  role: { fontSize: 15, color: "#666666", marginBottom: 24 },
  menu: { width: "100%", gap: 12 },
  link: {
    backgroundColor: "#F0F0F0",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  linkText: { fontSize: 15, fontWeight: "600", color: "#1B4FBF" },
});
