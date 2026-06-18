import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { CONTACTS} from "../../data/contacts";

const styles = StyleSheet.create({
  container: {},
  name: {},
  bigAvatar: {},
  role: {}
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
      </View>
    );
}