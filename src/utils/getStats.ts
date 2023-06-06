import { CharacterType } from '@/types/CharacterType'

type Stats = {
  femaleCount: number
  maleCount: number
  othersCount: number
}

export function getStats(characters: CharacterType[]): Stats {
  const stats = {
    femaleCount: 0,
    maleCount: 0,
    othersCount: 0,
  }

  if (!characters) return stats

  characters.forEach((char) => {
    switch (char.gender) {
      case 'female':
        stats.femaleCount += 1
        break

      case 'male':
        stats.maleCount += 1
        break

      case 'n/a':
        stats.othersCount += 1
        break

      default:
        break
    }
  })

  return stats
}
