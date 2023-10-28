import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  openPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  closePanel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
  },
  openPanelText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#79878D',
  },
  panelImage: {
    height: 20,
    width: 20,
  },
});
