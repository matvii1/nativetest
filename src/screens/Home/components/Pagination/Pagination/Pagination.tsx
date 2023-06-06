import { usePaginationContext } from '@/hooks/usePaginationContext'
import { NextButton, PrevButton } from '@/screens/Home/components'
import { FC } from 'react'
import { View } from 'react-native'
import { styles } from './PaginationStyles'

const Pagination: FC = () => {
  const { pageNumber, setPageNumber } = usePaginationContext()

  return (
    <View style={styles.paginationWrapper}>
      <PrevButton pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <NextButton pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </View>
  )
}

export default Pagination
