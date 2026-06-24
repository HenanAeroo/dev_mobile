import { Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';

type CardProps = {
    title: string;
    subtitle: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    variant?: 'default' | 'outlined';
    children?: React.ReactNode;
};

export function Card({title, subtitle, onPress, style, variant, children}: CardProps) {
  return <TouchableOpacity
  style={[styles.card, variant === "outlined" && styles.outlined, style]}>
    <Text style={styles.title}>{title}</Text>
    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    {children}
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  card: {},
  title: {},
  subtitle: {},
  outlined: {}
})