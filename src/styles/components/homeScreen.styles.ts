import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const homeScreenStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors[theme].background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors[theme].text.primary,
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: colors[theme].text.secondary,
    marginBottom: 40,
  },
  cardContainer: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors[theme].text.primary,
    marginBottom: 16,
  },
  themeToggle: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noActivityText: {
    textAlign: 'center',
    color: colors[theme].text.secondary,
    padding: 20,
  },
}); 