import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from './ListHeaderStyles'

type Props = {
  handleSort: () => void
}

const ListHeader: FC<Props> = ({ handleSort }) => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity style={styles.nameWrapper} onPress={handleSort}>
        <Text style={[styles.listTitle]}>Name</Text>
        <Icon name="sort" size={15} />
      </TouchableOpacity>

      <Text style={styles.listTitle}>Gender</Text>
      <Text style={styles.listTitle}>Birth date</Text>
    </View>
  )
}

export default ListHeader
