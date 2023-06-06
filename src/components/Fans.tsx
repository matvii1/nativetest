import { useCharacterContext } from '@/hooks/useCharacterContext'
import { getStats } from '@/utils/getStats'
import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Fans: FC = () => {
  const { favourites } = useCharacterContext()
  const { femaleCount, maleCount, othersCount } = getStats(favourites)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistics:</Text>
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
    marginTop: 15,
  },
})

export default Fans
