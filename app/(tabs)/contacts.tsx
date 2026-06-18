import { useMemo, useState } from "react";
import {
  FlatList,
  SectionList,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CONTACTS, ROLES, type Contact } from "../../data/contacts";

// 3.1 FlatList · 3.2 recherche · 3.3 SectionList (bascule Liste / Sections).
function ContactRow({ item }: { item: Contact }) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.role}>{item.role}</Text>
      </View>
    </View>
  );
}

const Separator = () => <View style={styles.separator} />;

export default function ContactsScreen() {
  const [search, setSearch] = useState("");
  const [grouped, setGrouped] = useState(false);

  // 3.2 — filtrage temps réel mémoïsé
  const filtered = useMemo(
    () =>
      CONTACTS.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  // 3.3 — regroupement par rôle (basé sur la liste filtrée)
  const sections = useMemo(
    () =>
      ROLES.map((role) => ({
        title: role,
        data: filtered.filter((c) => c.role === role),
      })).filter((section) => section.data.length > 0),
    [filtered],
  );

  return (
    <SafeAreaView style={styles.safe} edges={["bottom"]}>
      <TextInput
        style={styles.search}
        placeholder="Rechercher un contact..."
        value={search}
        onChangeText={setSearch}
        returnKeyType="search"
        clearButtonMode="while-editing"
      />

      <View style={styles.toggleRow}>
        <TouchableOpacity
          style={[styles.toggle, !grouped && styles.toggleActive]}
          onPress={() => setGrouped(false)}
        >
          <Text
            style={[styles.toggleText, !grouped && styles.toggleTextActive]}
          >
            Liste
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggle, grouped && styles.toggleActive]}
          onPress={() => setGrouped(true)}
        >
          <Text style={[styles.toggleText, grouped && styles.toggleTextActive]}>
            Sections
          </Text>
        </TouchableOpacity>
      </View>

      {grouped ? (
        <SectionList
          stickySectionHeadersEnabled={true}
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ContactRow item={item} />}
          ItemSeparatorComponent={Separator}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {section.title} ({section.data.length})
              </Text>
            </View>
          )}
        />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ContactRow item={item} />}
          ItemSeparatorComponent={Separator}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  search: {
    margin: 16,
    padding: 12,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    fontSize: 16,
  },
  toggleRow: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  toggle: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#F0F0F0",
  },
  toggleActive: { backgroundColor: "#1B4FBF" },
  toggleText: { color: "#555555", fontWeight: "600" },
  toggleTextActive: { color: "#FFFFFF" },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 12,
  },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: "#EEE" },
  name: { fontSize: 16, fontWeight: "600", color: "#1A1A1A" },
  role: { fontSize: 13, color: "#888888" },
  separator: { height: 1, backgroundColor: "#EEEEEE", marginLeft: 76 },
  sectionHeader: {
    backgroundColor: "#F0F0F0",
    padding: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: { fontWeight: "bold", color: "#1B4FBF" },
});
