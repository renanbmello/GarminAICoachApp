import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const navigationBarStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme === 'light' ? '#fff' : '#000',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: theme === 'light' ? '#e0e0e0' : '#333',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  navText: {
    color: theme === 'light' ? '#000' : '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  activeText: {
    color: colors[theme].primary,
  },
});