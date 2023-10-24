import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    gap: 10,
  },
  searchArea: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  button: {
    backgroundColor: '#06C1EA',
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  withShadows: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rightItems: {
    alignSelf: 'flex-end',
    padding: 10,
  },
});
