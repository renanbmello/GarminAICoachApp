import { colors, } from "../../theme/colors";
import { StyleSheet } from "react-native";

 export const loginScreenStyles = (theme: 'light' | 'dark') => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors[theme].background,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: colors[theme].text.primary,
      textAlign: 'center',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: colors[theme].text.secondary,
      textAlign: 'center',
      marginBottom: 40,
    },
    form: {
      width: '100%',
      gap: 16,
    },
    input: {
      backgroundColor: colors[theme].card,
      borderRadius: 8,
      padding: 15,
      color: colors[theme].text.primary,
      borderWidth: 1,
      borderColor: colors[theme].border,
    },
    button: {
      backgroundColor: colors[theme].primary,
      borderRadius: 8,
      padding: 15,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
    errorText: {
      color: '#FF3B30',
      textAlign: 'center',
    },
  });