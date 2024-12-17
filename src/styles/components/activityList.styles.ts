import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const activityListStyles = (theme: 'light' | 'dark') => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors[theme].background,
    },
    listContent: {
      padding: 16,
    },
    cardWrapper: {
      marginBottom: 12, 
    }
  }); 