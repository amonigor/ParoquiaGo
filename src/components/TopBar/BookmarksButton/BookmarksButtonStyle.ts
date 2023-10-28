import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
});
