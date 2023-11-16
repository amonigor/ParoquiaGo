import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  churchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingBottom: 15,
    marginBottom: 15,
    width: '100%',
    borderBottomColor: '#E8EEF0',
    borderBottomWidth: 1,
  },
  coverImg: {
    width: 100,
    height: 100,
    objectFit: 'cover',
    borderRadius: 10,
  },
  info: {
    flex: 1,
    gap: 10,
  },
  name: {
    fontSize: 16,
    color: '#000000',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 5,
  },
  icon: {
    width: 20,
    height: 20,
    objectFit: 'contain',
  },
  address: {
    fontSize: 12,
    color: '#79878D',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#DAE3E5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    gap: 10,
  },
  searchButton: {
    backgroundColor: '#06C1EA',
  },
  buttonText: {
    fontSize: 14,
    color: '#000000',
  },
  searchButtonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
