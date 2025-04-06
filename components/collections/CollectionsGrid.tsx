import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

const { width } = Dimensions.get('window');
const COLUMN_GAP = 12;
const ITEM_WIDTH = (width - 32 - COLUMN_GAP) / 2;

const collections = [
  { id: 1, image: require('@/assets/images/f1.png')},
  { id: 2, image: require('@/assets/images/f2.png')},
  { id: 3, image: require('@/assets/images/f3.png')},
];

const CollectionsGrid = () => {
  const [activeTab, setActiveTab] = useState('collections');

  const renderTabs = () => (
    <View style={styles.tabContainer}>
      <Pressable 
        style={[styles.tab, activeTab === 'collections' && styles.activeTab]}
        onPress={() => setActiveTab('collections')}
      >
        <View style={styles.tabContent}>
          <Image 
            source={require('@/assets/images/coll.png')}
            style={[
              styles.tabIcon,
              activeTab === 'collections' && styles.activeTabIcon
            ]}
          />
          <ThemedText style={[styles.tabText, activeTab === 'collections' && styles.activeTabText]}>
            COLLECTIONS
          </ThemedText>
        </View>
      </Pressable>
      <Pressable 
        style={[styles.tab, activeTab === 'tags' && styles.activeTab]}
        onPress={() => setActiveTab('tags')}
      >
        <View style={styles.tabContent}>
          <Image 
            source={require('@/assets/images/manage.png')}
            style={[
              styles.tabIcon,
              activeTab === 'tags' && styles.activeTabIcon
            ]}
          />
          <ThemedText style={[styles.tabText, activeTab === 'tags' && styles.activeTabText]}>
            MANAGE TAGS
          </ThemedText>
        </View>
      </Pressable>
    </View>
  );

  const renderContent = () => {
    if (activeTab === 'collections') {
      return (
        <View style={styles.grid}>
          {collections.map((collection) => (
            <Pressable key={collection.id} style={styles.item}>
              <Image 
                source={collection.image}
                style={styles.image}
                resizeMode="cover"
              />
            </Pressable>
          ))}
        </View>
      );
    }
    return (
      <View style={styles.tagsContainer}>
        <ThemedText style={styles.tagsTitle}>
          our recommendations work best when you {'\n'}
           let us know these things:
        </ThemedText>
        
        <View style={styles.tagItems}>
          <Pressable style={styles.tagItem}>
            <View>
              <ThemedText style={styles.tagText}>YOUR DIFFICULTY ✨</ThemedText>
              <ThemedText style={styles.tagDescription}>
                you decide the level of challenge you want!
              </ThemedText>
            </View>
            <Image 
              source={require('@/assets/images/arrow.png')}
              style={styles.arrowIcon}
            />
          </Pressable>

          <Pressable style={styles.tagItem}>
            <View>
              <ThemedText style={styles.tagText}>INTERESTS YOU LIKE ✨</ThemedText>
              <ThemedText style={styles.tagDescription}>
                we'll use these to show you cool builds
              </ThemedText>
            </View>
            <Image 
              source={require('@/assets/images/arrow.png')}
              style={styles.arrowIcon}
            />
          </Pressable>

          <Pressable style={styles.tagItem}>
            <View>
              <ThemedText style={styles.tagText}>TOOLS USED 🛠️</ThemedText>
              <ThemedText style={styles.tagDescription}>
                we'll suggest better using these picks
              </ThemedText>
            </View>
            <Image 
              source={require('@/assets/images/arrow.png')}
              style={styles.arrowIcon}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderTabs()}
      {renderContent()}
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
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#07E79D',
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tabIcon: {
    width: 20,
    height: 20,
    tintColor: 'rgba(255,255,255,0.6)',
  },
  activeTabIcon: {
    tintColor: '#07E79D',
  },
  tabText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'CircularBook',
    letterSpacing: 0.5
  },
  activeTabText: {
    color: '#07E79D',
    fontFamily: 'CircularBold',
  },
  tagsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  tagsTitle: {
    fontSize: 14,
    color: 'rgb(255, 255, 255)',
    fontFamily: 'CircularBook',
    marginBottom: 24,
    lineHeight: 20,
  },
  tagItems: {
    gap: 16,
  },
  tagItem: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Changed from 'center' to align with top text
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  tagText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: "400",
    marginBottom: 4, // Added margin for description
    letterSpacing: 0.1,
    fontFamily: 'sans-serif'
  },
  tagDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'CircularBook',
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: 'rgba(255,255,255,0.6)',
  },
});

export default CollectionsGrid;