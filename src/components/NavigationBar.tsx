import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { navigationBarStyles as styles } from '../styles/components/navigationBar.styles';
import { useTheme } from '../context/ThemeContext';
import Icons from 'react-native-vector-icons/Feather';
import { colors } from '../theme/colors';

export const NavigationBar: React.FC = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = React.useState('Home');

  const tabs = [
    { name: 'Home', icon: 'home' },
    // { name: 'Maps', icon: 'map' },
    // { name: 'Record', icon: 'circle' },
    // { name: 'Groups', icon: 'users' },
    { name: 'Runs', icon: 'clipboard' },
  ];

  const handlePress = (tabName: string) => {
    setActiveTab(tabName);
    if (tabName === 'Home') {
      navigation.navigate('Home');
    } else if (tabName === 'Runs') {
      navigation.navigate('ActivityList');
    }
  };

  return (
    <View style={styles(theme).navigationBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles(theme).navItem}
          onPress={() => handlePress(tab.name)}
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