import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function Landing() {
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInDown.delay(200)} style={styles.header}>
        <Text style={styles.title}>Welcome to XabeFit</Text>
        <Text style={styles.subtitle}>Your personal fitness journey starts here</Text>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(400)} style={styles.buttonContainer}>
        <Link href="/auth/sign-in" asChild>
          <Pressable style={[styles.button, styles.primaryButton]}>
            <Text style={[styles.buttonText, styles.primaryButtonText]}>Sign In</Text>
          </Pressable>
        </Link>
        
        <Link href="/auth/sign-up" asChild>
          <Pressable style={[styles.button, styles.secondaryButton]}>
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>Create Account</Text>
          </Pressable>
        </Link>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  header: {
    marginTop: '40%',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 32,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Rubik',
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 16,
    marginBottom: 48,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: '#F2F2F7',
  },
  buttonText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
  },
  primaryButtonText: {
    color: '#fff',
  },
  secondaryButtonText: {
    color: '#007AFF',
  },
}); 