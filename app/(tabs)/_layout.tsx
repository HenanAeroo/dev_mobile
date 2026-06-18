import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: 60,
          backgroundColor: "#F54927",
          justifyContent: "center",
        }}
      >
      </View> 
       <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16, backgroundColor: '#F5F5F5'}}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>42</Text>
          <Text style={{ color: '#999', fontSize: 12  }}>Publications</Text>
        </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16, backgroundColor: '#F5F5F5'}}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>42</Text>
          <Text style={{ color: '#999', fontSize: 12  }}>Abonnés</Text>
        </View>
        <Text style={{ color: "white", textAlign: "center" }}>Test</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
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
