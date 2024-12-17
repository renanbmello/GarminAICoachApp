import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { homeScreenStyles as styles } from '../styles/components/homeScreen.styles';
import { useTheme } from '../context/ThemeContext';
import Icons from 'react-native-vector-icons/Feather';
import { colors } from '../theme/colors';
import { NavigationBar } from './NavigationBar';
import { ActivityCard } from './ActivityCard';
import { activityCardStyles as activityCardStyles } from '../styles/components/activityCard.styles';
import { Activity } from '../types/activity';
import { ActivityService } from '../services/api';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activity, setActivity] = useState<Activity | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLastActivity = async () => {
      try {
        const lastActivity = await ActivityService.getLastActivity();
        setActivity(lastActivity);
      } catch (error) {
        console.error('Error loading last activity:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadLastActivity();
  }, []);

  return (
    <View style={styles(theme).container}>
      <TouchableOpacity 
        style={styles(theme).themeToggle}
        onPress={toggleTheme}
      >
        <Icons 
          name={theme === 'light' ? 'moon' : 'sun'}
          size={24}
          color={theme === 'light' ? '#000' : '#fff'} 
        />
      </TouchableOpacity>
      
      <ScrollView style={styles(theme).scrollView}>
        <View style={styles(theme).content}>
          <Text style={styles(theme).welcomeTitle}>Activity Tracker</Text>
          <Text style={styles(theme).welcomeText}>
            Track your workouts and improve day by day
          </Text>
          
          <View style={activityCardStyles(theme).container}>
            <Text style={activityCardStyles(theme).title}>Last Activity:</Text>
            {isLoading ? (
              <View style={styles(theme).loadingContainer}>
                <ActivityIndicator 
                  size="large" 
                  color={theme === 'light' ? colors.light.primary : colors.dark.primary} 
                />
              </View>
            ) : activity ? (
              <ActivityCard activity={activity} onPress={() => {}} />
            ) : (
              <Text style={[activityCardStyles(theme).noActivityText]}>
                Nenhuma atividade registrada
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
      
      <NavigationBar />
    </View>
  );
};


