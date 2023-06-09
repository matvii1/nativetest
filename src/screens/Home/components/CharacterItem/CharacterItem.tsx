import { useCharacterContext } from '@/hooks/useCharacterContext'
import { CharacterType } from '@/types/CharacterType'
import { getFilteredCharacters } from '@/utils/getFilteredCharacters'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { styles } from './CharacterItemStyles'

type Props = {
  character: CharacterType
  index: number
}

const CharacterItem: FC<Props> = ({ character, index }) => {
  const { name, gender, birth_year } = character
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const { favourites, setFavourites, setSelectedCharacter } = useCharacterContext()
  const isCurrentFavourite = favourites.find(
    (char) => character.created === char.created
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

  function handleOpenDetails(selectedChar: CharacterType) {
    return () => {
      setSelectedCharacter(selectedChar)
      navigation.navigate('Character Details')
    }
  }

  const marginStyles = { marginTop: index === 0 ? 0 : 10 }

  return (
    <View style={[styles.characterCard, marginStyles]}>
      <View style={styles.firstCol}>
        <TouchableOpacity onPress={handleSetFavourites(character)}>
          {isCurrentFavourite ? (
            <Icon name="heart" size={18} color="#FF4941" />
          ) : (
            <Icon name="hearto" size={18} color="#FF4941" />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={handleOpenDetails(character)}>
          <Text style={styles.nameText}>{name}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.genderCol}>{gender}</Text>
      <Text style={styles.yearCol}>{birth_year}</Text>
    </View>
  )
}

export default CharacterItem
