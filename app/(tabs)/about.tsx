import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GridLayout from "../../composants/GridLayout";

export default function AboutScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 16 }}>
          À propos
        </Text>
        <Text style={{ fontSize: 16, lineHeight: 26, color: "#555" }}>
          Développeur passionné avec 8 ans d'expérience en développement mobile.
        </Text>
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
            Compétences
          </Text>
          <GridLayout />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
