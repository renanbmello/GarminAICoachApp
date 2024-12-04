import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityDetails } from '../types/activity';
import { ActivityService } from '../services/api';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { useActivities } from '../hooks/useActivities';

type ActivityDetailRouteProp = RouteProp<RootStackParamList, 'ActivityDetail'>;

interface ActivityDetailProps {
  route: ActivityDetailRouteProp;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({ route }) => {
  const { id } = route.params;
  const { activities } = useActivities();
  const activityDetails = activities.find(activity => activity.id === id);

  if (!activityDetails) {
    return (
      <View style={styles.container}>
        <Text>No details available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{activityDetails.activity_name}</Text>
      <Text>Distance: {(activityDetails.distance / 1000).toFixed(2)} km</Text>
      <Text>Duration: {Math.floor(activityDetails.duration / 60)}:{((activityDetails.duration % 60).toFixed(0)).toString().padStart(2, '0')}</Text>
      <Text>Calories: {activityDetails.calories}</Text>
      <Text>Avg HR: {activityDetails.heart_rate_avg}</Text>
      <Text>Max HR: {activityDetails.heart_rate_max}</Text>
      <Text>VO2 Max: {activityDetails.vo2_max}</Text>
      <Text>Cadence Avg: {activityDetails.cadence_avg}</Text>
      <Text>Cadence Max: {activityDetails.cadence_max}</Text>
      <Text>Stride Length Avg: {activityDetails.stride_length}</Text>
      <Text>Pace Avg: {activityDetails.pace_formatted}</Text>
      <Text>Training Effect: {activityDetails.training_effect_label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ActivityDetail; 