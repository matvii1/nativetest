import CharacterList from '@/components/CharacterList'
import Fans from '@/components/Fans'
import Pagination from '@/components/Pagination/Pagination'
import PaginationProvider from '@/context/PaginationProvider'

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
