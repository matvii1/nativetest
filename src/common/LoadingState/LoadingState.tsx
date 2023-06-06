import { FC } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { styles } from './LoadingStateStyles'

const LoadingState: FC = () => {
  return (
    <View style={styles.loadingWrapper}>
      <ActivityIndicator size="small" color="#" />
    </View>
  )
}

export default LoadingState
