import React from 'react';
import { View, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

const { width } = Dimensions.get('window');
const COLUMN_GAP = 12;
const ITEM_WIDTH = (width - 32 - COLUMN_GAP) / 2;

const collections = [
  { id: 1, image: require('@/assets/images/f1.png'), title: 'Portraits', count: 12 },
  { id: 2, image: require('@/assets/images/f2.png'), title: 'Landscapes', count: 8 },
  { id: 3, image: require('@/assets/images/f3.png'), title: 'Urban', count: 15 },
];

const CollectionsGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {collections.map((collection) => (
          <Pressable key={collection.id} style={styles.item}>
            <Image 
              source={collection.image}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.overlay}>
              <ThemedText style={styles.title}>{collection.title}</ThemedText>
              <ThemedText style={styles.count}>{collection.count} items</ThemedText>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: COLUMN_GAP,
    padding: 16,
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    borderRadius: 12,
    overflow: 'hidden',
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'CircularBold',
  },
  count: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'CircularBook',
  },
});

export default CollectionsGrid;