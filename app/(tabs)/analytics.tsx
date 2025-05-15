import { Ionicons } from '@expo/vector-icons';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import SafeAreaLayout from '../components/SafeAreaLayout';

const stats = [
  {
    id: '1',
    title: 'Workouts',
    value: '12',
    change: '+3',
    period: 'This Week',
    trend: 'up',
  },
  {
    id: '2',
    title: 'Active Minutes',
    value: '420',
    change: '+45',
    period: 'This Week',
    trend: 'up',
  },
  {
    id: '3',
    title: 'Total Weight',
    value: '24,350',
    change: '+1,250',
    period: 'This Week',
    trend: 'up',
  },
];

const achievements = [
  {
    id: '1',
    title: 'Consistency King',
    description: 'Completed all planned workouts this week',
    icon: 'trophy',
  },
  {
    id: '2',
    title: 'New PR',
    description: 'Set a new personal record in Bench Press',
    icon: 'star',
  },
];

export default function AnalyticsScreen() {
  return (
    <SafeAreaLayout>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Animated.View entering={FadeInDown.delay(200)} style={styles.header}>
          <Text style={styles.title}>Your Progress</Text>
          <Text style={styles.subtitle}>Keep pushing your limits!</Text>
        </Animated.View>

        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <Animated.View
              key={stat.id}
              entering={FadeInDown.delay(300 + index * 100)}
              style={styles.statCard}
            >
              <Text style={styles.statTitle}>{stat.title}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
              <View style={styles.statTrend}>
                <Ionicons
                  name={stat.trend === 'up' ? 'arrow-up' : 'arrow-down'}
                  size={16}
                  color={stat.trend === 'up' ? '#34C759' : '#FF3B30'}
                />
                <Text
                  style={[
                    styles.statChange,
                    { color: stat.trend === 'up' ? '#34C759' : '#FF3B30' },
                  ]}
                >
                  {stat.change}
                </Text>
              </View>
              <Text style={styles.statPeriod}>{stat.period}</Text>
            </Animated.View>
          ))}
        </View>

        <Animated.View entering={FadeInDown.delay(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Achievements</Text>
          <View style={styles.achievementsList}>
            {achievements.map((achievement, index) => (
              <View key={achievement.id} style={styles.achievementCard}>
                <View style={styles.achievementIcon}>
                  <Ionicons name={achievement.icon} size={24} color="#007AFF" />
                </View>
                <View style={styles.achievementInfo}>
                  <Text style={styles.achievementTitle}>{achievement.title}</Text>
                  <Text style={styles.achievementDescription}>
                    {achievement.description}
                  </Text>
                </View>
              </View>
            ))}
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
    marginBottom: 32,
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: '#666',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 32,
  },
  statCard: {
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 16,
    width: (Dimensions.get('window').width - 64) / 2,
  },
  statTitle: {
    fontFamily: 'Rubik',
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  statValue: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
    marginBottom: 8,
  },
  statTrend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  statChange: {
    fontFamily: 'Rubik-Medium',
    fontSize: 14,
  },
  statPeriod: {
    fontFamily: 'Rubik',
    fontSize: 12,
    color: '#666',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
    marginBottom: 16,
  },
  achievementsList: {
    gap: 16,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5E5EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    marginBottom: 4,
  },
  achievementDescription: {
    fontFamily: 'Rubik',
    fontSize: 14,
    color: '#666',
  },
});