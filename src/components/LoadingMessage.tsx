import { FC } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const LoadingMessage: FC = () => {
  return (
    <View style={styles.loadingWrapper}>
      <ActivityIndicator size="small" color="#" />
    </View>
  )
}

const styles = StyleSheet.create({
  loadingWrapper: {
    marginTop: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default LoadingMessage
