import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

const TAGS_DATA = [
  { id: '1', name: 'Nature', count: 45 },
  { id: '2', name: 'Urban', count: 32 },
  { id: '3', name: 'Architecture', count: 28 },
  { id: '4', name: 'Travel', count: 24 },
  { id: '5', name: 'People', count: 18 },
  { id: '6', name: 'Animals', count: 15 },
];

const TagItem = ({ name, count }) => (
  <View style={styles.tagItem}>
    <ThemedText style={styles.tagName}>{name}</ThemedText>
    <ThemedText style={styles.tagCount}>{count}</ThemedText>
  </View>
);

export default function ManageTags() {
  const renderItem = ({ item }) => (
    <TagItem name={item.name} count={item.count} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={TAGS_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
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
  listContent: {
    paddingVertical: 16,
  },
  tagItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  tagName: {
    fontSize: 16,
    color: '#1A1A1A',
    fontFamily: 'CircularBook',
  },
  tagCount: {
    fontSize: 14,
    color: '#83838A',
    fontFamily: 'CircularBook',
  },
});