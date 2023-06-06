import { ErrorMessage, LoadingState } from '@/common'
import { useCharacterDetails } from '@/hooks/useCharacterDetails'
import { DetailsCard } from '@/screens/Details/components'
import { View } from 'react-native'
import { styles } from './DetailsScreenStyles'

const DetailsScreen = () => {
  const { characterDetails, isLoading, isError } = useCharacterDetails()

  if (isError) {
    return <ErrorMessage />
  }

  return (
    <View style={styles.detailsCardWrapper}>
      {isLoading ? (
        <LoadingState />
      ) : (
        characterDetails && <DetailsCard characterDetails={characterDetails} />
      )}
    </View>
  )
}

export default DetailsScreen
