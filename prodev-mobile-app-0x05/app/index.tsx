import { useRouter } from 'expo-router';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from '@/styles';

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={require('@/assets/images/background-image.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
          accessibilityRole="image"
          accessibilityLabel="App background image"
        >
          <View style={styles.mainContainer}>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
              <Image 
                source={require('@/assets/images/Logo.png')}
                style={styles.logoImage}
                accessibilityRole="image"
                accessibilityLabel="Company logo"
              />
            </View>

            {/* Text Content Section */}
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>
                Find your favorite place here
              </Text>
              <Text style={styles.subheadingText}>
                The best prices for over 2 million properties worldwide
              </Text>
            </View>

            {/* Button Group Section */}
            <View style={styles.buttonGroupContainer}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity 
                  style={styles.primaryButton}
                  onPress={() => router.push('/join')}
                  accessibilityRole="button"
                  accessibilityLabel="Join here"
                >
                  <Text style={styles.primaryButtonText}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.secondaryButton}
                  onPress={() => router.push('/signin')}
                  accessibilityRole="button"
                  accessibilityLabel="Sign in"
                >
                  <Text style={styles.secondaryButtonText}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity 
                style={styles.skipLink}
                onPress={() => router.push('/')}
              >
                <Text style={styles.skipLinkText}>Continue to home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}