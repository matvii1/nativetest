import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
  name: string
  value: string | number
}

const DetailRow: FC<Props> = ({ name, value }) => {
  return (
    <View style={styles.descriptionCard}>
      <Text>{name}:</Text>
      <Text style={styles.descriptionText}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  descriptionCard: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
  },
  descriptionText: {
    fontSize: 19,
    fontWeight: '400',
  },
})

export default DetailRow
