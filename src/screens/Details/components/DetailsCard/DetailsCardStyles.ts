import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  characterCard: {
    marginTop: 0,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#F7F5F2',
    flexGrow: 1,
  },
  descriptionWrapper: {
    marginTop: 25,
    gap: 8,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    width: '100%',
  },
  nameText: {
    maxWidth: '100%',
    fontSize: 25,
    fontWeight: '600',
  },
})