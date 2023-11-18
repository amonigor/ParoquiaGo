import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  churchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingBottom: 15,
    paddingHorizontal: 5,
    marginBottom: 15,
    borderBottomColor: '#E8EEF0',
    borderBottomWidth: 1,
  },
  churchContainerSm: {
    alignItems: 'flex-start',
    borderBottomColor: undefined,
    borderBottomWidth: undefined,
    paddingBottom: 0,
  },
  coverImg: {
    width: 100,
    height: 100,
    objectFit: 'cover',
    borderRadius: 10,
  },
  coverImgSm: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  leftItems: {
    gap: 10,
    flex: 1,
    alignItems: 'center',
  },
  leftItemsSm: {
    flex: 0.25,
  },
  rightItems: {
    gap: 10,
    paddingRight: 10,
    flex: 2,
  },
  rightItemsSm: {
    paddingTop: 5,
    flex: 0.75,
  },
  name: {
    fontSize: 16,
    color: '#000000',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 5,
  },
  address: {
    fontSize: 12,
    color: '#79878D',
    flexShrink: 1,
  },
  addressSm: {
    fontSize: 10,
  },
  icon: {
    width: 20,
    height: 20,
    objectFit: 'contain',
  },
  iconSm: {
    width: 10,
    height: 10,
    objectFit: 'contain',
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
  buttonSm: {
    paddingVertical: 5,
    paddingHorizontal: 10,
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
  buttonTextSm: {
    fontSize: 12,
    color: '#000000',
  },
  searchButtonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
