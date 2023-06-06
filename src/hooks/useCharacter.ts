import { useCharacterContext } from '@/hooks/useCharacterContext'
import starwarsService from '@/services/starwarsService'
import { useEffect, useState } from 'react'

export function useCharacter(pageNumber: number) {
  const { setCharacters } = useCharacterContext()

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async function () {
      try {
        setLoading(true)
        const response = await starwarsService.getOnPage(pageNumber)

        setError(false)
        setLoading(false)

        if (response) {
          setCharacters(response)
        }
      } catch (err) {
        setError(true)
        setLoading(false)
      } finally {
        setError(false)
        setLoading(false)
      }
    })()
  }, [pageNumber])

  return {
    isError: error,
    isLoading: loading,
  }
}
