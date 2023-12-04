import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingTop: 20,
    borderTopColor: '#E8EEF0',
    borderTopWidth: 1,
  },
  scrollContainer: {
    height: '100%',
    flexGrow: 0,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center',
    textAlign: 'center',
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    paddingLeft: 10,
  },
});
