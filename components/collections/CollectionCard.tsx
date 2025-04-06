import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';

export default function CollectionCard({ collection } : any) {
  return (
    <Pressable style={styles.item}>
      <View style={styles.cardContainer}>
        <View style={styles.imageGrid}>
          {collection.id === 1 && (
            collection.images.map((image : number, index : number) => (
              <Image 
                key={index}
                source={image}
                style={[
                  styles.gridImage,
                  styles.fourGridImage,
                  index === 0 && styles.topLeft,
                  index === 1 && styles.topRight,
                  index === 2 && styles.bottomLeft,
                  index === 3 && styles.bottomRight
                ]}
                resizeMode="cover"
              />
            ))
          )}
          
          {collection.id === 2 && (
            collection.images.map((image : number, index : number) => (
              <Image 
                key={index}
                source={image}
                style={[
                  styles.gridImage,
                  styles.twoGridImage,
                  index === 0 && styles.leftImage,
                  index === 1 && styles.rightImage
                ]}
                resizeMode="cover"
              />
            ))
          )}
          
          {collection.id === 3 && (
            <>
              <View style={styles.filesRightContainer}>
                <Image 
                  source={collection.images[1]}
                  style={[styles.gridImage, styles.filesTopRightImage]}
                  resizeMode="cover"
                />
                <Image 
                  source={collection.images[2]}
                  style={[styles.gridImage, styles.filesBottomRightImage]}
                  resizeMode="cover"
                />
              </View>
              <Image 
                source={collection.images[0]}
                style={[styles.gridImage, styles.filesLeftImage]}
                resizeMode="cover"
              />
            </>
          )}
        </View>
        
        <LinearGradient
          colors={['#333333', '#1A1A1A']}
          style={styles.titleGradient}
        >
          <View style={styles.titleBar}>
            <Image 
              source={collection.icon}
              style={styles.titleIcon}
            />
            <ThemedText style={styles.title}>{collection.title}</ThemedText>
          </View>
        </LinearGradient>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '46%', 
    marginBottom: 12,
  },
  cardContainer: {
    overflow: 'hidden',
    backgroundColor: '#1A1A1A',
  },
  imageGrid: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1.2, 
    padding: 2, 
  },
  gridImage: {
    position: 'absolute',
  },
  fourGridImage: {
    width: '49%', 
    height: '49%',
  },
  topLeft: {
    top: 2,
    left: 2,
  },
  topRight: {
    top: 2,
    right: 2,
  },
  bottomLeft: {
    bottom: 2,
    left: 2,
  },
  bottomRight: {
    bottom: 2,
    right: 2,
  },
  twoGridImage: {
    width: '49%', 
    height: '98%',
  },
  leftImage: {
    left: 2,
  },
  rightImage: {
    right: 2,
  },
  filesLeftImage: {
    width: '49%',
    height: '98%',
    right: 2, 
  },
  filesRightContainer: {
    position: 'absolute',
    left: 2, 
    width: '49%',
    height: '98%',
  },
  filesTopRightImage: {
    width: '100%',
    height: '49%',
    top: 0,
    marginBottom: 4,
  },
  filesBottomRightImage: {
    width: '100%',
    height: '49%',
    bottom: 0,
  },
  titleGradient: {
    width: '100%',
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12, 
    paddingVertical: 16, 
    backgroundColor: '#26251e',
  },
  titleIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'CircularBold',
    letterSpacing: 0.5,
  },
});