import { useCharacterContext } from '@/hooks/useCharacterContext'
import { getStats } from '@/utils/getStats'
import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './FansStyles'

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

export default Fans
