import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

const ManageTags = () => {
  return (
    <View style={styles.container}>
      {['Nature', 'Urban', 'Architecture', 'People'].map((tag, index) => (
        <View key={tag} style={styles.tagRow}>
          <ThemedText style={styles.tagName}>{tag}</ThemedText>
          <ThemedText style={styles.tagCount}>12</ThemedText>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  tagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  tagName: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'CircularBook',
  },
  tagCount: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'CircularBook',
  },
});

export default ManageTags;