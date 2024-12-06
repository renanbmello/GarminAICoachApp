import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const activityCardStyles = (theme: 'light' | 'dark') => StyleSheet.create({
    container: {
      backgroundColor: colors[theme].background,
      borderRadius: 12,
      padding: 16,
      marginHorizontal: 16,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      color: colors[theme].text.primary,
      flex: 1,  
      marginRight: 8,  
    },
    date: {
      fontSize: 14,
      color: colors[theme].text.secondary,
      flexShrink: 0,  
    },
    stats: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    stat: {
      flex: 1,  
      alignItems: 'center',
    },
    statLabel: {
      fontSize: 12,
      color: colors[theme].text.secondary,
      marginBottom: 4,
    },
    statValue: {
      fontSize: 16,
      fontWeight: '500',
      color: colors[theme].text.primary,
    },
  });

export default activityCardStyles;