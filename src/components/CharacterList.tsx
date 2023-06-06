import CharacterItem from '@/components/CharacterItem'
import ErrorMessage from '@/components/ErrorMessage'
import LoadingMessage from '@/components/LoadingMessage'
import { useCharacter } from '@/hooks/useCharacter'
import { useCharacterContext } from '@/hooks/useCharacterContext'
import { usePaginationContext } from '@/hooks/usePaginationContext'
import { useToggleSort } from '@/hooks/useToggle'
import { FC, useMemo } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ListHeader from './ListHeader'

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

const styles = StyleSheet.create({
  characterWrapper: {
    marginTop: 20,
  },
  listWrapper: {
    width: '100%',
    height: '90%',
    paddingBottom: 120,
  },
})

export default CharacterList
