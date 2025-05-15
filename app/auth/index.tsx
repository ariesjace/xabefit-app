import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SafeAreaLayout from '../components/SafeAreaLayout';

export default function LandingScreen() {
  return (
    <SafeAreaLayout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>XabeFit</Text>
          <Text style={styles.subtitle}>Your Personal Fitness Journey</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.primaryButton]}>
            <Link href="/auth/sign-up" style={styles.primaryButtonText}>Get Started</Link>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
            <Link href="/auth/sign-in" style={styles.secondaryButtonText}>I already have an account</Link>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 48,
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: 'Rubik',
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: '#F2F2F7',
  },
  primaryButtonText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    color: '#fff',
  },
  secondaryButtonText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    color: '#007AFF',
  },
}); 