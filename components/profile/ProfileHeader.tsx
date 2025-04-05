import React from 'react';
import { View, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { 
  useAnimatedStyle, 
  interpolate,
  Extrapolate 
} from 'react-native-reanimated';
import { ThemedText } from '@/components/ThemedText';
import ProfileAvatar from './ProfileAvatar';

const HEADER_MAX_HEIGHT = 350; // Increased from 300
const HEADER_MIN_HEIGHT = 250; // Increased from 200
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function ProfileHeader({ scrollY } : any) {
  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <Animated.View style={[styles.container, headerStyle]}>
      <BlurView intensity={20} style={styles.headerContent}>
        <View style={styles.topButtons}>
          <Pressable style={styles.iconButton}>
            <Image 
              source={require('@/assets/images/share.png')}
              style={styles.iconImage}
            />
          </Pressable>
          <Pressable style={styles.iconButton}>
            <Image 
              source={require('@/assets/images/settings.png')}
              style={styles.iconImage}
            />
          </Pressable>
        </View>
        <View style={styles.profileContainer}>
          <ProfileAvatar />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.headerRow}>
            <View style={styles.nameContainer}>
              <ThemedText style={styles.name}>@theo_from_hsr</ThemedText>
              <Image 
                source={require('@/assets/images/tick.png')}
                style={styles.verifiedIcon}
              />
            </View>
            <Pressable style={styles.editButton}>
              <ThemedText style={styles.editText}>EDIT PROFILE</ThemedText>
              <Image 
                source={require('@/assets/images/pencil.png')}
                style={styles.pencilIcon}
              />
            </Pressable>
          </View>

          <ThemedText style={styles.location}>🇮🇳 INDIA</ThemedText>
          
          <ThemedText style={styles.bio}>
            18 yo with high ambitions. want to build cool {'\n'}
            stuff!
          </ThemedText>

          <View style={styles.followingSection}>
            <View style={styles.followingCountContainer}>
              <Image 
                source={require('@/assets/images/UserCheck.png')}
                style={styles.userCheckIcon}
              />
              <ThemedText style={styles.followingCount}>2</ThemedText>
            </View>
            <ThemedText style={styles.followingLabel}>FOLLOWING</ThemedText>
          </View>
        </View>
      </BlurView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: HEADER_MAX_HEIGHT,
    overflow: 'hidden',
    backgroundColor: '#000000',
  },
  headerContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 44,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    marginBottom: 20,
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  profileContainer: {
    paddingHorizontal: 16,
    alignItems: 'flex-start',
  },
  infoContainer: {
    paddingHorizontal: 16,
    alignItems: 'flex-start',
    marginTop: 16,
    marginLeft: -8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 3,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: 'CircularBold',
    color: '#fff',
    marginRight: 4,
    fontWeight: '900',
  },
  verifiedIcon: {
    width: 16,
    height: 16,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  editText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'CircularBook',
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
  },
  pencilIcon: {
    width: 12,
    height: 16,
    tintColor: 'rgba(255,255,255,0.6)',
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
  },
  location: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'CircularBook',
    marginBottom: 5,
    fontWeight: '100',
  },
  bio: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'CircularBook',
    lineHeight: 20,
    marginBottom: 10,
    fontWeight: '100',
  },
  followingSection: {
    marginTop: 4,
  },
  followingCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  userCheckIcon: {
    width: 16,
    height: 16,
    tintColor: '#fff',
  },
  followingCount: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'CircularBold',
  },
  followingLabel: {
    fontSize: 12,
    marginTop: -4,
    fontWeight: '100',
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'CircularBook',
  },
});