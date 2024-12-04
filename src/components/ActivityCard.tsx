import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';
import { Activity } from '../types/activity';
import { colors } from '../theme/colors';

interface ActivityCardProps {
  activity: Activity;
  onPress: () => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.header}>
        <Text 
          style={styles.title}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {activity.activity_name}
        </Text>
        <Text style={styles.date}>
          {format(new Date(activity.start_time), 'dd/MM/yyyy')}
        </Text>
      </View>
      
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Distance</Text>
          <Text style={styles.statValue}>{(activity.distance / 1000).toFixed(2)} km</Text>
        </View>
        
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Duration</Text>
          <Text style={styles.statValue}>
            {Math.floor(activity.duration / 60)}:{((activity.duration % 60).toFixed(0)).toString().padStart(2, '0')}
          </Text>
        </View>
        
        {activity.heart_rate_avg && (
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Avg HR</Text>
            <Text style={styles.statValue}>{Math.round(activity.heart_rate_avg)} bpm</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    flex: 1,  
    marginRight: 8,  
  },
  date: {
    fontSize: 14,
    color: colors.text.secondary,
    flexShrink: 0,  
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    flex: 1,  
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: colors.text.secondary,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
  },
});