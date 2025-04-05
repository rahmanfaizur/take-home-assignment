import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import CollectionsGrid from '@/components/collections/CollectionsGrid';
import ManageTags from '@/components/tags/ManageTags';

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState('collections');

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <Pressable 
          style={[styles.tab, activeTab === 'collections' && styles.activeTab]}
          onPress={() => setActiveTab('collections')}
        >
          <ThemedText style={[
            styles.tabText,
            activeTab === 'collections' && styles.activeTabText
          ]}>
            Collections
          </ThemedText>
        </Pressable>
        <Pressable 
          style={[styles.tab, activeTab === 'tags' && styles.activeTab]}
          onPress={() => setActiveTab('tags')}
        >
          <ThemedText style={[
            styles.tabText,
            activeTab === 'tags' && styles.activeTabText
          ]}>
            Manage Tags
          </ThemedText>
        </Pressable>
      </View>
      
      {activeTab === 'collections' ? <CollectionsGrid /> : <ManageTags />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#7B61FF',
  },
  tabText: {
    fontSize: 16,
    color: '#83838A',
    fontFamily: 'CircularBook',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#7B61FF',
    fontFamily: 'CircularBold',
  },
});