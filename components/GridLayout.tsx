import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import type { DimensionValue } from "react-native";

export type GridItem = {
  id: string;
  label: string;
};

type GridLayoutProps = {
  items: GridItem[];
};

export default function GridLayout({ items }: GridLayoutProps) {
  const { width } = useWindowDimensions();

  // Nombre de colonnes adapté à la largeur de l'écran :
  // < 400 -> 2 colonnes, 400-700 -> 3 colonnes, > 700 (tablette) -> 4 colonnes
  const numCols = width > 700 ? 4 : width > 400 ? 3 : 2;
  const itemWidth = `${Math.floor(100 / numCols) - 2}%` as DimensionValue;

  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <View key={item.id} style={[styles.card, { width: itemWidth }]}>
          <Text style={styles.cardText}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 12,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1A1A1A",
    textAlign: "center",
  },
});
