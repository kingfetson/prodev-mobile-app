// components/Collapsible.tsx
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Collapsible({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme();
  const color = Colors[theme]?.background || Colors.light.background; // Safe access

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text>{title}</Text>
      {isOpen && <View>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
});
