import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [units, setUnits] = useState('imperial');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(200)} style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.menuList}>
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="notifications-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Push Notifications</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#C7C7CC', true: '#007AFF' }}
            />
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="moon-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Dark Mode</Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#C7C7CC', true: '#007AFF' }}
            />
          </View>
          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="scale-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Units</Text>
            </View>
            <View style={styles.menuItemRight}>
              <Text style={styles.menuItemValue}>
                {units === 'imperial' ? 'Imperial (lbs)' : 'Metric (kg)'}
              </Text>
              <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
            </View>
          </Pressable>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(300)} style={styles.section}>
        <Text style={styles.sectionTitle}>Data & Privacy</Text>
        <View style={styles.menuList}>
          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="cloud-download-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Export Data</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
          </Pressable>
          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="trash-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Clear Data</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
          </Pressable>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400)} style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.menuList}>
          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="help-circle-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Help Center</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
          </Pressable>
          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="mail-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Contact Us</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
          </Pressable>
          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="document-text-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Terms & Privacy Policy</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
          </Pressable>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(500)}>
        <Pressable style={styles.signOutButton}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
    marginBottom: 16,
  },
  menuList: {
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  menuText: {
    fontFamily: 'Rubik',
    fontSize: 16,
  },
  menuItemValue: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: '#666',
  },
  signOutButton: {
    backgroundColor: '#FF3B30',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  signOutButtonText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    color: '#fff',
  },
}); 