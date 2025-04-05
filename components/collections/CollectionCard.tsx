import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function CollectionCard({ title, count, image }) {
  return (
    <Pressable style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.overlay}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.count}>{count} items</ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'CircularBold',
  },
  count: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginTop: 4,
  },
});