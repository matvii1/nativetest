import starwarsService from '@/services/starwarsService'
import { CharacterType } from '@/types/CharacterType'
import { useEffect, useState } from 'react'
import { useCharacterContext } from './useCharacterContext'

export function useCharacterDetails() {
  const [characterDetails, setCharacterDetails] = useState<CharacterType | null>(
    null
  )
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { selectedCharacter } = useCharacterContext()

  useEffect(() => {
    setIsLoading(true)
    try {
      async function fetch() {
        if (!selectedCharacter) return

        const CHARACTER_URL = selectedCharacter.url
        const characterDetails = await starwarsService.getByUrl(CHARACTER_URL)
        
        if (characterDetails) {
          setCharacterDetails(characterDetails)

          setIsLoading(false)
          setIsError(false)
        }

      }
      
      fetch()
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
    } finally {
      setIsError(false)
      setIsLoading(false)
    }
  }, [selectedCharacter])

  return {
    characterDetails,
    isLoading,
    isError,
  }
}
