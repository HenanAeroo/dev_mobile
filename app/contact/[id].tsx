import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { CONTACTS} from "../../data/contacts";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, alignItems: "center", gap: 12, backgroundColor: "#FFFFFF" },
  name: { fontSize: 22, fontWeight: "600", color: "#1A1A1A" },
  bigAvatar: { width: 120, height: 120, borderRadius: 60, backgroundColor: "#EEE" },
  role: { fontSize: 16, color: "#888888" },
  debug: { marginTop: 8, fontSize: 14, color: "#FF0000" }
});

export default function ContactDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const contact = CONTACTS.find(c => c.id === id);
  if (!contact) return <Text style={{ padding: 24 }}>Contact introuvable</Text>;
    return (
      <View style={styles.container}>
        <Image source={{ uri: contact.avatar }} style={styles.bigAvatar} />
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.role}>{contact.role}</Text>
        <Text style={styles.debug}>TEST · écran détail · id={id}</Text>
      </View>
    );
}