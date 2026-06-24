import { useLocalSearchParams } from "expo-router";
import { LINKS } from "../app/(tabs)";

export type ContactDetailParams = {
  id: string;
};

export type RootStackParamList = {
  index: undefined;
  contacts: undefined;
  "contact-details": { id: string };
  playground: undefined;
  about: undefined;
  flexbox: undefined;
  layout: undefined;
};

export function contactDetailRoute(id: string) {
  return {
    pathname: LINKS.contactDetails,
    params: { id } satisfies ContactDetailParams,
  } as const;
}

export default function ContactDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
}
