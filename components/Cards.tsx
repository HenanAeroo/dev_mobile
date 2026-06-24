import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';

type CardProps = {
    title: string;
    subtitle: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    variant?: 'default' | 'outlined';
    children?: React.ReactNode;
};