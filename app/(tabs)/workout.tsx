import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import SafeAreaLayout from '../components/SafeAreaLayout';

const workoutPlans = [
  {
    id: '1',
    name: 'Full Body Workout',
    duration: '45 min',
    difficulty: 'Intermediate',
    exercises: 8,
    image: require('../../assets/images/workouts/full-body.webp'),
    description: 'A complete workout targeting all major muscle groups',
    calories: '400-500',
    equipment: ['Dumbbells', 'Resistance Bands'],
  },
  {
    id: '2',
    name: 'Upper Body Focus',
    duration: '30 min',
    difficulty: 'Beginner',
    exercises: 6,
    image: require('../../assets/images/workouts/upper-body.jpg'),
    description: 'Build strength in your arms, chest, and back',
    calories: '300-400',
    equipment: ['Dumbbells', 'Pull-up Bar'],
  },
  {
    id: '3',
    name: 'Lower Body Power',
    duration: '40 min',
    difficulty: 'Advanced',
    exercises: 7,
    image: require('../../assets/images/workouts/lower-body.webp'),
    description: 'Focus on legs and glutes with intense exercises',
    calories: '450-550',
    equipment: ['Barbell', 'Squat Rack'],
  },
];

export default function WorkoutScreen() {
  return (
    <SafeAreaLayout>
      <ScrollView contentContainerStyle={styles.content}>
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
                <Image source={workout.image} style={styles.workoutImage} />
                <View style={styles.workoutContent}>
                  <View style={styles.workoutHeader}>
                    <Text style={styles.workoutName}>{workout.name}</Text>
                    <View style={[
                      styles.difficultyBadge,
                      workout.difficulty === 'Beginner' && styles.beginnerBadge,
                      workout.difficulty === 'Advanced' && styles.advancedBadge,
                    ]}>
                      <Text style={styles.difficultyText}>{workout.difficulty}</Text>
                    </View>
                  </View>
                  
                  <Text style={styles.description}>{workout.description}</Text>

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
                      <Ionicons name="flame-outline" size={16} color="#666" />
                      <Text style={styles.detailText}>{workout.calories} cal</Text>
                    </View>
                  </View>

                  <View style={styles.equipmentContainer}>
                    <Text style={styles.equipmentTitle}>Equipment needed:</Text>
                    <View style={styles.equipmentList}>
                      {workout.equipment.map((item, i) => (
                        <View key={i} style={styles.equipmentBadge}>
                          <Text style={styles.equipmentText}>{item}</Text>
                        </View>
                      ))}
                    </View>
                  </View>

                  <Pressable style={styles.startButton}>
                    <Text style={styles.startButtonText}>Start Workout</Text>
                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                  </Pressable>
                </View>
              </Pressable>
            </Animated.View>
          ))}
        </View>
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
    gap: 24,
  },
  workoutCard: {
    backgroundColor: '#F2F2F7',
    borderRadius: 16,
    overflow: 'hidden',
  },
  workoutImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  workoutContent: {
    padding: 16,
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  workoutName: {
    fontFamily: 'Rubik-Medium',
    fontSize: 20,
    flex: 1,
    marginRight: 8,
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#007AFF',
  },
  beginnerBadge: {
    backgroundColor: '#34C759',
  },
  advancedBadge: {
    backgroundColor: '#FF3B30',
  },
  difficultyText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 12,
    color: '#fff',
  },
  description: {
    fontFamily: 'Rubik',
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  workoutDetails: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
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
  equipmentContainer: {
    marginBottom: 16,
  },
  equipmentTitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: 14,
    marginBottom: 8,
  },
  equipmentList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  equipmentBadge: {
    backgroundColor: '#E5E5EA',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  equipmentText: {
    fontFamily: 'Rubik',
    fontSize: 12,
    color: '#666',
  },
  startButton: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  startButtonText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    color: '#fff',
  },
}); 