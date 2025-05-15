import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import SafeAreaLayout from '../components/SafeAreaLayout';

const userProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  joinDate: 'Member since January 2024',
  stats: {
    workouts: 48,
    hours: 32,
    streak: 5,
  },
};

export default function ProfileScreen() {
  return (
    <SafeAreaLayout>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Animated.View entering={FadeInDown.delay(200)} style={styles.header}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150' }}
              style={styles.profileImage}
            />
            <Pressable style={styles.editImageButton}>
              <Ionicons name="camera" size={20} color="#fff" />
            </Pressable>
          </View>
          <Text style={styles.name}>{userProfile.name}</Text>
          <Text style={styles.joinDate}>{userProfile.joinDate}</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300)} style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userProfile.stats.workouts}</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userProfile.stats.hours}</Text>
            <Text style={styles.statLabel}>Hours</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userProfile.stats.streak}</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(400)} style={styles.section}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <View style={styles.menuList}>
            <Pressable style={styles.menuItem}>
              <Ionicons name="person-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Edit Profile</Text>
              <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
            </Pressable>
            <Pressable style={styles.menuItem}>
              <Ionicons name="notifications-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Notifications</Text>
              <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
            </Pressable>
            <Pressable style={styles.menuItem}>
              <Ionicons name="lock-closed-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Privacy</Text>
              <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
            </Pressable>
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(500)} style={styles.section}>
          <Text style={styles.sectionTitle}>App Settings</Text>
          <View style={styles.menuList}>
            <Pressable style={styles.menuItem}>
              <Ionicons name="color-palette-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Appearance</Text>
              <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
            </Pressable>
            <Pressable style={styles.menuItem}>
              <Ionicons name="language-outline" size={24} color="#333" />
              <Text style={styles.menuText}>Language</Text>
              <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
            </Pressable>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaLayout>
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
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editImageButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#007AFF',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
    marginBottom: 4,
  },
  joinDate: {
    fontFamily: 'Rubik',
    fontSize: 14,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Rubik',
    fontSize: 14,
    color: '#666',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E5E5EA',
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  menuText: {
    flex: 1,
    marginLeft: 16,
    fontFamily: 'Rubik',
    fontSize: 16,
  },
}); 