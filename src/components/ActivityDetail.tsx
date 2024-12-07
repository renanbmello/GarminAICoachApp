import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { ActivityDetails } from '../types/activity';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { useActivities } from '../hooks/useActivities';
import { activityDetailStyles } from '../styles/components/activityDetail.styles';
import { useTheme } from '../context/ThemeContext';

type ActivityDetailRouteProp = RouteProp<RootStackParamList, 'ActivityDetail'>;

interface ActivityDetailProps {
  route: ActivityDetailRouteProp;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({ route }) => {
  const { id } = route.params;
  const { activities } = useActivities();
  const { theme } = useTheme();
  const styles = activityDetailStyles(theme);
  const activityDetails = activities.find(activity => activity.id === id) as ActivityDetails;

  if (!activityDetails) {
    return (
      <View style={styles.container}>
        <Text>No details available</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{activityDetails.activity_name}</Text>
          <Text style={styles.date}>
            {format(new Date(activityDetails.start_time), 'dd/MM/yyyy')}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Stats</Text>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Distance</Text>
              <Text style={styles.statValue}>
                {(activityDetails.distance / 1000).toFixed(2)} km
              </Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Duration</Text>
              <Text style={styles.statValue}>
                {Math.floor(activityDetails.duration / 60)}:
                {(activityDetails.duration % 60).toFixed(0).padStart(2, '0')}
              </Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Calories</Text>
              <Text style={styles.statValue}>{activityDetails.calories}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Pace</Text>
              <Text style={styles.statValue}>{activityDetails.pace_formatted}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Heart Rate</Text>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Average HR</Text>
              <Text style={styles.statValue}>{activityDetails.heart_rate_avg} bpm</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Max HR</Text>
              <Text style={styles.statValue}>{activityDetails.heart_rate_max} bpm</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Performance</Text>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>VO2 Max</Text>
              <Text style={styles.statValue}>{activityDetails.vo2_max}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Training Effect</Text>
              <Text style={styles.statValue}>{activityDetails.training_effect_label}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Avg Cadence</Text>
              <Text style={styles.statValue}>
                {(activityDetails.cadence_avg).toFixed(0)} spm
              </Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Stride Length</Text>
              <Text style={styles.statValue}>
                {(activityDetails.stride_length).toFixed(2)} m
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ActivityDetail; 