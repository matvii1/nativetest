import PaginationProvider from '@/context/PaginationProvider'
import { CharacterList, Fans, Pagination } from '@/screens/Home/components'

const HomeScreen = () => {
  return (
    <PaginationProvider>
      <Fans />
      <CharacterList />
      <Pagination />
    </PaginationProvider>
  )
}

export default HomeScreen
