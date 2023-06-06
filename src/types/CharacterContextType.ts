import { CharacterType } from '@/types/CharacterType'
import { Dispatch, SetStateAction } from 'react'

export type CharacterContextType = {
  characters: CharacterType[]
  favourites: CharacterType[]
  setFavourites: Dispatch<SetStateAction<CharacterType[]>>
  setCharacters: Dispatch<SetStateAction<CharacterType[]>>
  selectedCharacter: CharacterType | null
  setSelectedCharacter: Dispatch<SetStateAction<CharacterType | null>>
}
