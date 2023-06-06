import DetailsCard from '@/components/DetailsCard'
import ErrorMessage from '@/components/ErrorMessage'
import LoadingMessage from '@/components/LoadingMessage'
import { useCharacterDetails } from '@/hooks/useCharacterDetails'
import { StyleSheet, View } from 'react-native'

const DetailsScreen = () => {
  const { characterDetails, isLoading, isError } = useCharacterDetails()

  if (isLoading) {
    return <LoadingMessage />
  }

  if (isError || !characterDetails) {
    return <ErrorMessage />
  }

  return (
    <View style={styles.detailsCardWrapper}>
      <DetailsCard characterDetails={characterDetails} />
    </View>
  )
}

const styles = StyleSheet.create({
  detailsCardWrapper: {
    flex: 1,
  },
})

export default DetailsScreen
