import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>NOËL Hénan</Text>
      <Text style={styles.role}>Software Engineer</Text>
      <Image
        source={{ uri: "https://www.hnoel.fr/assets/Photo_Henan_NOEL.webp" }}
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.btn} onPress={() => router.push("/about")}>
        <Text style={styles.btnText}>Me contacter</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
  name: { fontSize: 24, fontWeight: "bold", color: "#1A1A1A", marginBottom: 4 },
  role: { fontSize: 15, color: "#666666", marginBottom: 24 },
  btn: {
    backgroundColor: "#E8871A",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  btnText: { color: "#FFFFFF", fontWeight: "600", fontSize: 16 },
});
