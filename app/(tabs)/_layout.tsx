import { Tabs } from "expo-router";
import { Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  const { width, height } = useWindowDimensions();
  const cardWidth = width * 0.9;
  const numColumns = width > 600 ? 3 : 2;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: 60,
          backgroundColor: "#F54927",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Test</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{ textAlign: "center", width: cardWidth, height: numColumns }}
        >
          Test2
        </Text>
      </View>
      <View
        style={{
          height: 50,
          backgroundColor: "grey",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>Test3</Text>
      </View>
    </SafeAreaView>
  );
}
