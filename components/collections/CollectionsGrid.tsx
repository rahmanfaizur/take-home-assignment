import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CollectionCard from './CollectionCard';

const DUMMY_DATA = [
  {
    id: '1',
    title: 'Nature Collection',
    count: 124,
    image: require('@/assets/images/icon.png'),
  },
  {
    id: '2',
    title: 'Urban Views',
    count: 89,
    image: require('@/assets/images/icon.png'),
  },
  // Add more dummy data as needed
];

export default function CollectionsGrid() {
  const renderItem = ({ item }) => (
    <CollectionCard 
      title={item.title}
      count={item.count}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_DATA}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  grid: {
    paddingTop: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});