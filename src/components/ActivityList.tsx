import React from 'react';
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import { Activity } from '../types/activity';
import { ActivityCard } from './ActivityCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useActivities } from '../hooks/useActivities';
import { useTheme } from '../context/ThemeContext';
import { colors } from '../theme/colors';
import { activityListStyles as styles } from '../styles/components/activityList.styles';

type ActivityListNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ActivityList'>;

export const ActivityList: React.FC = () => {
  const navigation = useNavigation<ActivityListNavigationProp>();
  const { activities } = useActivities();
  const { theme } = useTheme();

  const handleActivityPress = (activity: Activity) => {
    navigation.navigate('ActivityDetail', { id: activity.id });
  };

  return (
    <SafeAreaView style={styles(theme).container}>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles(theme).cardWrapper}>
            <ActivityCard 
              activity={item} 
              onPress={() => handleActivityPress(item)} 
            />
          </View>
        )}
        contentContainerStyle={styles(theme).listContent}
      />
    </SafeAreaView>
  );
};
