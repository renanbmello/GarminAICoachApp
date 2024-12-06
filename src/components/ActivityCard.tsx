import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';
import { Activity } from '../types/activity';
import  { activityCardStyles as styles } from '../styles/components/activityCard.styles';
import { useTheme } from '../context/ThemeContext';

interface ActivityCardProps {
  activity: Activity;
  onPress: () => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onPress }) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={styles(theme).container}>
      <View style={styles(theme).header}>
        <Text 
          style={styles(theme).title}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {activity.activity_name}
        </Text>
        <Text style={styles(theme).date}>
          {format(new Date(activity.start_time), 'dd/MM/yyyy')}
        </Text>
      </View>
      
      <View style={styles(theme).stats}>
        <View style={styles(theme).stat}>
          <Text style={styles(theme).statLabel}>Distance</Text>
          <Text style={styles(theme).statValue}>{(activity.distance / 1000).toFixed(2)} km</Text>
        </View>
        
        <View style={styles(theme).stat}>
          <Text style={styles(theme).statLabel}>Duration</Text>
          <Text style={styles(theme).statValue}>
            {Math.floor(activity.duration / 60)}:{((activity.duration % 60).toFixed(0)).toString().padStart(2, '0')} min
          </Text>
        </View>
        
        {activity.heart_rate_avg && (
          <View style={styles(theme).stat}>
            <Text style={styles(theme).statLabel}>Avg HR (bpm)</Text>
            <Text style={styles(theme).statValue}>{Math.round(activity.heart_rate_avg)}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

