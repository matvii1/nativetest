import { useCharacterContext } from '@/hooks/useCharacterContext'
import { CharacterType } from '@/types/CharacterType'
import { getFilteredCharacters } from '@/utils/getFilteredCharacters'
import { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import DetailRow from './DetailRow'

type Props = {
  characterDetails: CharacterType
}

const DetailsCard: FC<Props> = ({ characterDetails }) => {
  const { favourites, setFavourites, selectedCharacter } = useCharacterContext()

  const isCurrentFavourite = favourites.find(
    (char) => selectedCharacter?.created === char.created
  )

  function handleSetFavourites(monster: CharacterType) {
    return () => {
      const isFavourite = favourites.find((char) => monster.created === char.created)

      if (!isFavourite) {
        setFavourites((prev) => [...prev, monster])
      } else {
        setFavourites((prev) => {
          return getFilteredCharacters(prev, monster)
        })
      }
    }
  }

  const { name, gender, birth_year, skin_color, height, homeworld } =
    characterDetails!

  const planetArray = homeworld.split('/')
  const planetNumber = planetArray[planetArray.length - 2]

  return (
    <View style={styles.characterCard}>
      <View style={styles.titleWrapper}>
        <Text style={styles.nameText}>{name}</Text>
        <TouchableOpacity onPress={handleSetFavourites(selectedCharacter!)}>
          {isCurrentFavourite ? (
            <Icon name="heart" size={18} color="#FF4941" />
          ) : (
            <Icon name="hearto" size={18} color="#FF4941" />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.descriptionWrapper}>
        <DetailRow name="Date of birth" value={birth_year || 'unknown'} />
        <DetailRow name="Gender" value={gender || 'unknown'} />
        <DetailRow name="Skin color" value={skin_color || 'unknown'} />
        <DetailRow name="Height" value={height || 'unknown'} />
        <DetailRow name="Planet number" value={planetNumber || 'unknown'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  characterCard: {
    marginTop: 0,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#F7F5F2',
    flexGrow: 1,
  },
  descriptionWrapper: {
    marginTop: 25,
    gap: 8,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    width: '100%',
  },
  nameText: {
    maxWidth: '100%',
    fontSize: 25,
    fontWeight: '600',
  },
})

export default DetailsCard
