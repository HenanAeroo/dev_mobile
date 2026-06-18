import { Tabs } from "expo-router";
import { Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  const { width, height } = useWindowDimensions();
  const cardWidth = width * 0.9;
  const numColumns = width > 600 ? 4 : 25;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#F54927",
          justifyContent: "center",
          width: cardWidth,
          height: numColumns,
        }}
      >
        <Text style={{ textAlign: "center" }}>Test1</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 16,
          backgroundColor: "#F5F5F5",
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>42</Text>
          <Text style={{ color: "#999", fontSize: 12 }}>Publications</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 16,
          backgroundColor: "#F5F5F5",
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>42</Text>
          <Text style={{ color: "#999", fontSize: 12 }}>Abonnés</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>Test2</Text>
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
