import { CharacterType } from '@/types/CharacterType'

export function getFilteredCharacters(
  characters: CharacterType[],
  monster: CharacterType
) {
  return characters.filter((char) => char.created !== monster.created)
}
