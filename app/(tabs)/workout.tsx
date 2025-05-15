import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const workoutPlans = [
  {
    id: '1',
    name: 'Full Body Workout',
    duration: '45 min',
    difficulty: 'Intermediate',
    exercises: 8,
  },
  {
    id: '2',
    name: 'Upper Body Focus',
    duration: '30 min',
    difficulty: 'Beginner',
    exercises: 6,
  },
  {
    id: '3',
    name: 'Lower Body Power',
    duration: '40 min',
    difficulty: 'Advanced',
    exercises: 7,
  },
];

export default function WorkoutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(200)} style={styles.header}>
        <Text style={styles.greeting}>Hello, Fitness Warrior!</Text>
        <Text style={styles.subtitle}>Choose your workout for today</Text>
      </Animated.View>

      <View style={styles.workoutList}>
        {workoutPlans.map((workout, index) => (
          <Animated.View
            key={workout.id}
            entering={FadeInDown.delay(200 + index * 100)}
          >
            <Pressable style={styles.workoutCard}>
              <View style={styles.workoutInfo}>
                <Text style={styles.workoutName}>{workout.name}</Text>
                <View style={styles.workoutDetails}>
                  <View style={styles.detailItem}>
                    <Ionicons name="time-outline" size={16} color="#666" />
                    <Text style={styles.detailText}>{workout.duration}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Ionicons name="barbell-outline" size={16} color="#666" />
                    <Text style={styles.detailText}>{workout.exercises} exercises</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Ionicons name="fitness-outline" size={16} color="#666" />
                    <Text style={styles.detailText}>{workout.difficulty}</Text>
                  </View>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#007AFF" />
            </Pressable>
          </Animated.View>
        ))}
      </View>
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
  header: {
    marginBottom: 32,
  },
  greeting: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: '#666',
  },
  workoutList: {
    gap: 16,
  },
  workoutCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    gap: 16,
  },
  workoutInfo: {
    flex: 1,
  },
  workoutName: {
    fontFamily: 'Rubik-Medium',
    fontSize: 18,
    marginBottom: 8,
  },
  workoutDetails: {
    flexDirection: 'row',
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontFamily: 'Rubik',
    fontSize: 14,
    color: '#666',
  },
}); 