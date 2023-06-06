import { useCharacterContext } from '@/hooks/useCharacterContext'
import { getStats } from '@/utils/getStats'
import { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Fans: FC = () => {
  const { favourites, resetFavourites } = useCharacterContext()
  const { femaleCount, maleCount, othersCount } = getStats(favourites)

  function handleReset() {
    resetFavourites()
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Statistics:</Text>
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.resetButton}>Reset all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fansWrapper}>
        <View style={styles.fansCard}>
          <Text style={styles.fansTitle}>Male Fans</Text>
          <Text>{maleCount}</Text>
        </View>
        <View style={styles.fansCard}>
          <Text style={styles.fansTitle}>Female Fans</Text>
          <Text>{femaleCount}</Text>
        </View>
        <View style={styles.fansCard}>
          <Text style={styles.fansTitle}>Other Fans</Text>
          <Text>{othersCount}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default Fans
