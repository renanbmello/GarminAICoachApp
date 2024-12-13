import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const aiAnalysisStyles = (theme: 'light' | 'dark') => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors[theme].background,
      padding: 20,
      paddingBottom: 0,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors[theme].text.primary,
      marginTop: 40,
      marginBottom: 20,
    },
    centerContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 80,
    },
    description: {
      fontSize: 16,
      color: colors[theme].text.secondary,
      textAlign: 'center',
      marginBottom: 30,
      paddingHorizontal: 20,
    },
    button: {
      backgroundColor: colors[theme].primary,
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 25,
      minWidth: 200,
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
    loadingText: {
      marginTop: 20,
      fontSize: 16,
      color: colors[theme].text.secondary,
    },
    errorText: {
      color: '#FF3B30',
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
    },
    analysisContainer: {
      flex: 1,
      marginBottom: 60,
    },
    analysisCard: {
      backgroundColor: colors[theme].card,
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: colors[theme].border,
    },
    analysisText: {
      fontSize: 14,
      color: colors[theme].text.primary,
      lineHeight: 20,
    },
  });

  return {
    ...styles,
    loadingColor: colors[theme].primary,
  };
}; 