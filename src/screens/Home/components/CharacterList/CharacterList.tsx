import ErrorMessage from '@/common/ErrorMessage/ErrorMessage'
import LoadingMessage from '@/common/LoadingState/LoadingState'
import {
  useCharacter,
  useCharacterContext,
  usePaginationContext,
  useToggleSort,
} from '@/hooks'
import { CharacterItem, ListHeader } from '@/screens/Home/components'
import { FC, useMemo } from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './CharacterListStyles'

const CharacterList: FC = () => {
  const { pageNumber } = usePaginationContext()
  const { characters } = useCharacterContext()
  const { isError, isLoading } = useCharacter(pageNumber)
  const { toggle, sortOrder } = useToggleSort('asc')

  function handleSort() {
    toggle()
  }

  const visibleCharacters = useMemo(() => {
    return [...characters].sort((a, b) => {
      return sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    })
  }, [pageNumber, characters, toggle])

  if (isError) {
    return <ErrorMessage />
  }

  return (
    <View style={styles.characterWrapper}>
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <View style={styles.listWrapper}>
          <FlatList
            data={visibleCharacters}
            ListHeaderComponent={<ListHeader handleSort={handleSort} />}
            contentContainerStyle={{ flexGrow: 1 }}
            renderItem={({ item, index }) => (
              <CharacterItem character={item} index={index} />
            )}
          />
        </View>
      )}
    </View>
  )
}

export default CharacterList
