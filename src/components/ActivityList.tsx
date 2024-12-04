import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Activity } from '../types/activity';
import { ActivityCard } from './ActivityCard';

interface ActivityListProps {
  activities: Activity[];
  onActivityPress: (activity: Activity) => void;
}

export const ActivityList: React.FC<ActivityListProps> = ({ 
  activities, 
  onActivityPress 
}) => {
  return (
    <FlatList
      data={activities}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ActivityCard 
          activity={item} 
          onPress={() => onActivityPress(item)} 
        />
      )}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 20,
  },
}); 