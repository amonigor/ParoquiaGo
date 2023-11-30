import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15,
    gap: 20,
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 24,
  },
  navigation: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  goback: {
    height: 30,
    width: 30,
  },
  logo: {
    marginLeft: -30,
  },
});
