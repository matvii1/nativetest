import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  fansWrapper: {
    paddingVertical: 10,
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'space-between',
  },
  fansCard: {
    gap: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFC502',
  },
  fansTitle: {
    fontWeight: '600',
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
  },
  topContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resetButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    borderRadius: 4,
    textTransform: 'uppercase',
  },
})