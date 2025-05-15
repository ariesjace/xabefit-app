import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // TODO: Implement actual authentication
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </Pressable>

      <Animated.View entering={FadeInDown.delay(200)} style={styles.header}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Sign in to continue your fitness journey</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400)} style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <Pressable onPress={handleSignIn} style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </Pressable>

        <Link href="/auth/sign-up" asChild>
          <Pressable style={styles.footer}>
            <Text style={styles.footerText}>
              Don't have an account? <Text style={styles.footerLink}>Sign Up</Text>
            </Text>
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
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  header: {
    marginTop: '15%',
    marginBottom: 48,
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 32,
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'Rubik',
    fontSize: 18,
    color: '#666',
  },
  form: {
    gap: 24,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    color: '#333',
  },
  input: {
    fontFamily: 'Rubik',
    fontSize: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F2F2F7',
  },
  signInButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  signInButtonText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    color: '#fff',
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: '#666',
  },
  footerLink: {
    color: '#007AFF',
    fontFamily: 'Rubik-Medium',
  },
}); 