import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
  // Carte fixe 280x170
  card: {
    position: "absolute",
    width: 280,
    height: 170,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    // Ombre iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    // Ombre Android
    elevation: 8,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
