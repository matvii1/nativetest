import { CharacterType } from '@/types/CharacterType'
import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/people'

class StarwarsService {
  async getOnPage(pageNumber: number) {
    try {
      const { data } = await axios.get(`${BASE_URL}/?page=${pageNumber}`)

      return data.results as CharacterType[]
    } catch (error) {
      console.log('errror in getOnePage')
    }
  }

  async getByUrl(url: string) {
    try {
      const { data } = await axios.get<CharacterType>(url)

      return data
    } catch (error) {
      console.log('error in getByUrl')
    }
  }
}

export default new StarwarsService()
