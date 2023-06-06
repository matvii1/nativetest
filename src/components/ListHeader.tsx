import { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

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

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 7,
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  listTitle: {
    fontWeight: '600',
  },
})

export default ListHeader
