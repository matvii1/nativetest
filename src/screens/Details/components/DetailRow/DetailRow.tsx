import { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from './DetailRowStyles'

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

export default DetailRow
