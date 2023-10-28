import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
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
