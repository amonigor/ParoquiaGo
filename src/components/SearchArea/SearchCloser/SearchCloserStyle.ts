import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#06C1EA',
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
