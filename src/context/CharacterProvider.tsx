import { CharacterContextType } from '@/types/CharacterContextType'
import { CharacterType } from '@/types/CharacterType'

import { FC, ReactNode, createContext, useState } from 'react'

type Props = {
  children: ReactNode
}

export const CharacterContext = createContext<CharacterContextType>(
  {} as CharacterContextType
)

const CharacterProvider: FC<Props> = ({ children }) => {
  const [favourites, setFavourites] = useState<CharacterType[]>([])
  const [characters, setCharacters] = useState<CharacterType[]>([])
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType | null>(
    null
  )

  const contextValue = {
    characters,
    setCharacters,
    favourites,
    setFavourites,
    selectedCharacter,
    setSelectedCharacter,
  }

  return (
    <CharacterContext.Provider value={contextValue}>
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterProvider
