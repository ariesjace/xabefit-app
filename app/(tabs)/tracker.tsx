import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const exerciseHistory = [
  {
    id: '1',
    name: 'Bench Press',
    date: 'Today',
    sets: [
      { weight: '135', reps: 12 },
      { weight: '155', reps: 10 },
      { weight: '175', reps: 8 },
    ],
  },
  {
    id: '2',
    name: 'Squats',
    date: 'Yesterday',
    sets: [
      { weight: '185', reps: 10 },
      { weight: '205', reps: 8 },
      { weight: '225', reps: 6 },
    ],
  },
  {
    id: '3',
    name: 'Deadlift',
    date: '2 days ago',
    sets: [
      { weight: '225', reps: 8 },
      { weight: '245', reps: 6 },
      { weight: '265', reps: 4 },
    ],
  },
];

export default function TrackerScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(200)} style={styles.header}>
        <Text style={styles.title}>Exercise History</Text>
        <Pressable style={styles.addButton}>
          <Ionicons name="add" size={24} color="#fff" />
          <Text style={styles.addButtonText}>Log Exercise</Text>
        </Pressable>
      </Animated.View>

      <View style={styles.exerciseList}>
        {exerciseHistory.map((exercise, index) => (
          <Animated.View
            key={exercise.id}
            entering={FadeInDown.delay(200 + index * 100)}
            style={styles.exerciseCard}
          >
            <View style={styles.exerciseHeader}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseDate}>{exercise.date}</Text>
            </View>

            <View style={styles.setsList}>
              {exercise.sets.map((set, setIndex) => (
                <View key={setIndex} style={styles.setItem}>
                  <Text style={styles.setText}>Set {setIndex + 1}</Text>
                  <Text style={styles.setText}>{set.weight} lbs</Text>
                  <Text style={styles.setText}>{set.reps} reps</Text>
                </View>
              ))}
            </View>

            <Pressable style={styles.viewDetailsButton}>
              <Text style={styles.viewDetailsText}>View Details</Text>
              <Ionicons name="chevron-forward" size={16} color="#007AFF" />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 8,
  },
  addButtonText: {
    fontFamily: 'Rubik-Medium',
    color: '#fff',
    fontSize: 16,
  },
  exerciseList: {
    gap: 16,
  },
  exerciseCard: {
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 16,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  exerciseName: {
    fontFamily: 'Rubik-Medium',
    fontSize: 18,
  },
  exerciseDate: {
    fontFamily: 'Rubik',
    fontSize: 14,
    color: '#666',
  },
  setsList: {
    gap: 8,
  },
  setItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  setText: {
    fontFamily: 'Rubik',
    fontSize: 14,
    color: '#333',
  },
  viewDetailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    gap: 4,
  },
  viewDetailsText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 14,
    color: '#007AFF',
  },
}); 