import { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from './ErrorMessageStyles'

const ErrorMessage: FC = () => {
  return (
    <View style={styles.errorWrapper}>
      <Text style={styles.errorMessage}>Something went wrong...</Text>
    </View>
  )
}

export default ErrorMessage
