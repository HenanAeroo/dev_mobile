import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

type CardProps = {
  title: string;
  subtitle?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: "default" | "outlined";
  children?: React.ReactNode;
};

export function Card({
  title,
  subtitle,
  onPress,
  style,
  variant = "default",
  children,
}: CardProps) {
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}></TouchableOpacity>;
}
