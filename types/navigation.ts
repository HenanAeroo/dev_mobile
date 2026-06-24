// export type RootStackParamList = {
//   index: undefined;
//   contacts: undefined;
//   'contact/[id]': {id: string};
//   playground: undefined;
//   converter: undefined;
// }

export type ContactParamList = {
  id: string;
}


/**Cas d'utilisation dans un fichier */
// import { useLocalSearchParams } from "expo-router";

// export default function ContactDetail() {
//   const {id} = useLocalSearchParams<{id: string}>()

//   const {id, mail} = useLocalSearchParams<{id: string}>();
// }