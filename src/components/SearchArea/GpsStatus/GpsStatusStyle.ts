import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pill: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
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
  img: {
    height: 10,
    width: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#000000',
  },
});
