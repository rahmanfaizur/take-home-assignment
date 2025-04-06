import { View, StyleSheet } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import ProfileHeader from '@/components/profile/ProfileHeader';
import CollectionsGrid from '@/components/collections/CollectionsGrid';

const HEADER_MAX_HEIGHT = 310; // Height of the ProfileHeader

export default function HomeScreen() {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.container}>
      {/* ProfileHeader remains fixed at the top */}
      <ProfileHeader scrollY={scrollY} />

      {/* Scrollable content */}
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: HEADER_MAX_HEIGHT, // Add padding equal to the header height
        }}
      >
        {/* Scrollable content starts below the header */}
        <CollectionsGrid />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
  },
});
