import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { homeScreenStyles as styles } from '../styles/components/homeScreen.styles';
import { colors } from '../theme/colors';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleViewActivities = () => {
    navigation.navigate('ActivityList');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeTitle}>Welcome to{'\n'}Activity Tracker</Text>
        <Text style={styles.welcomeText}>
          Track your workouts and improve day by day
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={handleViewActivities}
      >
        <Text style={styles.buttonText}>View My Activities</Text>
      </TouchableOpacity>
    </View>
  );
};


