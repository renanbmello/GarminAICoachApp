import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Activity } from '../types/activity';
import { ActivityCard } from './ActivityCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useActivities } from '../hooks/useActivities';

type ActivityListNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ActivityList'>;

export const ActivityList: React.FC = () => {
  const navigation = useNavigation<ActivityListNavigationProp>();
  const { activities } = useActivities();

  const handleActivityPress = (activity: Activity) => {
    navigation.navigate('ActivityDetail', { id: activity.id });
  };

  return (
    <FlatList
      data={activities}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ActivityCard 
          activity={item} 
          onPress={() => handleActivityPress(item)} 
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