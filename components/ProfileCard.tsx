import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://www.hnoel.fr/assets/Photo_Henan_NOEL.webp" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>NOËL Hénan</Text>
        <Text style={styles.title}>Software Engineer</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Me contacter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    gap: 12,
    // Ombre iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    // Ombre Android
    elevation: 6,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  title: {
    fontSize: 14,
    color: "#888888",
  },
  button: {
    backgroundColor: "#E8871A",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
