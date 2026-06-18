import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, TouchableOpacity,  } from "react-native";
import { useRouter } from "expo-router";
import { Platform } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar as RNStatusBar } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: Platform.select({ ios: 0, android: RNStatusBar.currentHeight }),
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
