import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
const CARDS = [
  { id: "c1", color: "#4B7BE5", title: "Carte 1" },
  { id: "c2", color: "#2EB67D", title: "Carte 2" },
  { id: "c3", color: "#E87A7A", title: "Carte 3" },
];

export default function ProfileCard() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {CARDS.map((card, i) => (
          <View
            key={card.id}
            style={[
              styles.card,
              {
                backgroundColor: card.color,
                left: i * 30,
                top: i * 15,
                zIndex: i,
              },
            ]}
          >
            <Text style={styles.cardTitle}>{card.title}</Text>
          </View>
        ))}
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
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  // Conteneur fixe demandé: hauteur 220
  container: {
    height: 220,
    width: 340, // 280 card width + 2 * 30 offset
    position: "relative",
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
