import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ErrorMessage: FC = () => {
  return (
    <View style={styles.errorWrapper}>
      <Text style={styles.errorMessage}>Something went wrong...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  errorWrapper: {
    marginTop: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    color: 'red',
  },
})

export default ErrorMessage
