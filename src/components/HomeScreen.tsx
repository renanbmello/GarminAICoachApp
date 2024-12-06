import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { homeScreenStyles as styles } from '../styles/components/homeScreen.styles';
import { useTheme } from '../context/ThemeContext';
import Icons from 'react-native-vector-icons/Feather';
import { colors } from '../theme/colors';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { theme, toggleTheme } = useTheme();
  const handleViewActivities = () => {
    navigation.navigate('ActivityList');
  };

  return (
    <View style={styles(theme).container}>
		<TouchableOpacity 
		style={styles(theme).themeToggle}
		onPress={toggleTheme}
		>
			<Icons name={theme === 'light' ? 'moon' : 'sun'}
			 size={24}
			 color={theme === 'light' ? '#000' : '#fff'} />
		</TouchableOpacity>
      <View style={styles(theme).content}>
        <Text style={styles(theme).welcomeTitle}>Welcome to{'\n'}Activity Tracker</Text>
        <Text style={styles(theme).welcomeText}>
          Track your workouts and improve day by day
        </Text>
      </View>

      <TouchableOpacity 
        style={styles(theme).button}
        onPress={handleViewActivities}
      >
        <Text style={styles(theme).buttonText}>View My Activities</Text>
      </TouchableOpacity>
    </View>
  );
};


