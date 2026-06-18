import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen name="about" options={{ title: "À propos" }} />
    </Tabs>
  );
}
