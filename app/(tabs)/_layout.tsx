import { Tabs } from "expo-router";
import { Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  const { width, height } = useWindowDimensions();
  const cardWidth = width * 0.9;
  const numColumns = width > 600 ? 50 : 25;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: 56,
          backgroundColor: "black",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>
          <Text style={{ color: "white" }}>Header</Text>
        </Text>
      </View>

      <View style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}>
        <View style={{ width: 60, backgroundColor: "grey" }}>
          <Text>Sidebar gauche</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Text>Main content</Text>
        </View>
        <View style={{ width: 60, backgroundColor: "grey" }}>
          <Text>Sidebar droite</Text>
        </View>
      </View>

      <View style={{ width: 48, backgroundColor: "black" }}>
        <Text style={{ color: "white" }}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}
