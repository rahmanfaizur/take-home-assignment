import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ProfileAvatar() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/image.png')}
          style={styles.avatar}
        />
        <View style={styles.whiteBorder} />
        <View style={styles.yellowBorderRight} />
        <View style={styles.yellowBorderBottom} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    marginTop: -60,
    marginLeft: -10,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    position: 'relative',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  whiteBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 3,
  },
  yellowBorderRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 4,
    backgroundColor: '#FFD600',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  yellowBorderBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 3,
    backgroundColor: '#FFD600',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
});
