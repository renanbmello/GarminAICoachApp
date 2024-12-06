import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';
import { Activity } from '../types/activity';
import  { activityCardStyles as styles } from '../styles/components/activityCard.styles';

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
            {Math.floor(activity.duration / 60)}:{((activity.duration % 60).toFixed(0)).toString().padStart(2, '0')} min
          </Text>
        </View>
        
        {activity.heart_rate_avg && (
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Avg HR (bpm)</Text>
            <Text style={styles.statValue}>{Math.round(activity.heart_rate_avg)}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

