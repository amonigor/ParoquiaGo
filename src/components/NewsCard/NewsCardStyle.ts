import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    color: '#000000',
    fontSize: 16,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  block: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  icon: {
    height: 20,
    width: 20,
  },
  text: {
    color: '#79878D',
    fontSize: 12,
  },
});
