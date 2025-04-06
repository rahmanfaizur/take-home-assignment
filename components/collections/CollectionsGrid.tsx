import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Pressable, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import CollectionCard from './CollectionCard';
import { LinearGradient } from 'expo-linear-gradient';

const COLUMN_GAP = 12;


const collections = [
  { 
    id: 1, 
    images: [
      require('@/assets/images/c2.png'),
      require('@/assets/images/c1.png'),
      require('@/assets/images/c4.png'),
      require('@/assets/images/c3.png')
    ],
    title: 'LIKED (32)',
    items: 12,
    isLiked: true,
    isBookmarked: false,
    inFolder: true,
    icon: require('@/assets/images/heart.png')
  },
  { 
    id: 2, 
    images: [
      require('@/assets/images/c6.png'),
      require('@/assets/images/c5.png')
    ],
    title: 'SAVED (23)',
    items: 8,
    isLiked: false,
    isBookmarked: true,
    inFolder: false,
    icon: require('@/assets/images/bookmark.png')
  },
  { 
    id: 3, 
    images: [
      require('@/assets/images/c7.png'),
      require('@/assets/images/c8.png'),
      require('@/assets/images/c9.png')
    ],
    title: 'FILES (3)',
    items: 15,
    isLiked: true,
    isBookmarked: true,
    inFolder: true,
    icon: require('@/assets/images/folder.png')
  },
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
        <LinearGradient
          colors={['#1A1A1A', '#101010']}
          style={styles.gradientContainer}
        >
          <View style={styles.grid}>
            {collections.map((collection) => (
              <CollectionCard 
                key={collection.id}
                collection={collection}
              />
            ))}
          </View>
        </LinearGradient>
      );
    }
    return (
      <LinearGradient
        colors={['#1A1A1A', '#101010']} 
        style={styles.tagsContainer}
      >
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
      </LinearGradient>
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
    backgroundColor: 'transparent',
  },
  gradientContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
    borderRadius: 0,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: COLUMN_GAP,
    padding: 16,
    paddingTop: 0,
    borderRadius: 0, 
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    borderRadius: 0, 
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 0, 
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  tagText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: "400",
    marginBottom: 4,
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