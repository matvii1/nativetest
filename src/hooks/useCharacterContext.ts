import { CharacterContext } from '@/context/CharacterProvider'
import { useContext } from 'react'

export const useCharacterContext = () => useContext(CharacterContext)
