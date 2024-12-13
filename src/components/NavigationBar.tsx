import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { navigationBarStyles as styles } from '../styles/components/navigationBar.styles';
import { useTheme } from '../context/ThemeContext';
import Icons from 'react-native-vector-icons/Feather';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type TabConfig = {
  name: string;
  icon: string;
  route: keyof RootStackParamList;
};

export const NavigationBar: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = React.useState('Home');

  const TABS: TabConfig[] = [
    { name: 'Home', icon: 'home', route: 'Home' },
    // { name: 'Maps', icon: 'map' },
    // { name: 'Record', icon: 'circle' },
    { name: 'AI Analysis', icon: 'bar-chart-2', route: 'AIAnalysisScreen' },
    { name: 'Runs', icon: 'clipboard', route: 'ActivityList' },
  ];

  const handlePress = (tab: TabConfig) => {
    setActiveTab(tab.name);
    switch (tab.route) {
      case 'ActivityDetail':
        break;
      default:
        navigation.navigate(tab.route);
    }
  };

  return (
    <View style={styles(theme).navigationBar}>
      {TABS.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles(theme).navItem}
          onPress={() => handlePress(tab)}
        >
          <Icons
            name={tab.icon}
            size={24}
            color={activeTab === tab.name ? colors[theme].primary : theme === 'light' ? '#000' : '#fff'}
          />
          <Text
            style={[
              styles(theme).navText,
              activeTab === tab.name && styles(theme).activeText,
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}; 