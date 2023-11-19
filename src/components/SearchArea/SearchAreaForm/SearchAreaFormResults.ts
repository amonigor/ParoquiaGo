import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingTop: 20,
    borderTopColor: '#E8EEF0',
    borderTopWidth: 1,
  },
  resultCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    paddingBottom: 20,
    paddingLeft: 10,
  },
  scrollContainer: {
    height: '78%',
    flexGrow: 0,
  },
  waitMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center',
    paddingVertical: 50,
  },
});
