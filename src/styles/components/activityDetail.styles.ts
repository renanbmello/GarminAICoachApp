import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const activityDetailStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors[theme].background,
    padding: 16,
  },
  card: {
    backgroundColor: colors[theme].background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
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
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors[theme].text.primary,
    flex: 1,
  },
  date: {
    fontSize: 16,
    color: colors[theme].text.secondary,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  stat: {
    width: '50%',
    paddingVertical: 8,
  },
  statLabel: {
    fontSize: 14,
    color: colors[theme].text.secondary,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '500',
    color: colors[theme].text.primary,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors[theme].text.primary,
    marginBottom: 12,
  },
});