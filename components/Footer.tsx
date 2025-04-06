import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function Footer() {
  return (
    <ImageBackground
      source={require('@/assets/images/bgfoot.jpeg')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.contentContainer}>
        <Image
          source={require('@/assets/images/footer.png')}
          style={styles.footerImage}
          resizeMode="contain"
        />
        <ThemedText style={styles.joinedText}>
          JOINED 2242 DAYS AGO
        </ThemedText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60, 
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    alignItems: 'center',
  },
  footerImage: {
    width: 110,
    height: 35,
    marginBottom: 0,
  },
  joinedText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 10,
    fontFamily: 'CircularBook',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    lineHeight: 10, 
  },
});
