import { Stack } from "expo-router";

// Routing minimal pour rendre les écrans d'exercices accessibles.
// NB : la configuration Tabs avec icônes (Partie 4.1), les routes dynamiques
// et les deep links sont volontairement laissés de côté (hors périmètre).
export default function TabsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1B4FBF" },
        headerTintColor: "#FFFFFF",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Accueil" }} />
      <Stack.Screen name="layouts" options={{ title: "Layouts · P1" }} />
      <Stack.Screen name="flexbox" options={{ title: "Flexbox · P2" }} />
      <Stack.Screen name="contacts" options={{ title: "Contacts · P3" }} />
      <Stack.Screen name="playground" options={{ title: "Composants · P3" }} />
      <Stack.Screen name="about" options={{ title: "À propos" }} />
    </Stack>
  );
}
