import { View, Text, StyleSheet } from "react-native";

interface Item {
  id: string
  title: string
  color: string
}

const ITEMS: Item[] = [
 { id: '1', title: 'Design', color: '#E8871A' },
 { id: '2', title: 'Backend', color: '#2ECFC4' },
 { id: '3', title: 'Mobile', color: '#1B4FBF' },
 { id: '4', title: 'DevOps', color: '#E74C3C' },
 { id: '5', title: 'Data', color: '#8E44AD' },
 { id: '6', title: 'Sécurité', color: '#27AE60' },
];

export default function GridLayout() {
  return (
    <View style={styles.container}>
      {ITEMS.map((item) => (
        <View
          key={item.id}
          style={[styles.card, { backgroundColor: item.color }]}
        >
          <Text style={styles.cardTitle}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



// Maps typescript : https://graphite.com/guides/typescript-maps
// StyleSheet :  https://reactnative.dev/docs/stylesheet