import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  characterCard: {
    marginTop: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F7F5F2',
  },
  firstCol: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    width: '30%',
  },
  genderCol: {
    textAlign: 'center',
  },
  nameText: {
    maxWidth: '100%',
    color: '#21007F',
  },
  yearCol: {
    justifyContent: 'flex-end',
  },
})
