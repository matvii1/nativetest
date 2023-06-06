import NextButton from '@/components/Pagination/PaginationButtons/NextButton'
import PrevButton from '@/components/Pagination/PaginationButtons/PrevButton'
import { usePaginationContext } from '@/hooks/usePaginationContext'
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

const Pagination: FC = () => {
  const { pageNumber, setPageNumber } = usePaginationContext()

  return (
    <View style={styles.paginationWrapper}>
      <PrevButton pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <NextButton pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </View>
  )
}

const styles = StyleSheet.create({
  paginationWrapper: {
    position: 'absolute',
    paddingHorizontal: 20,
    alignItems: 'center',
    zIndex: 2,
    gap: 5,
    right: 0,
    left: 0,
    bottom: 7,
    flexDirection: 'row',
  },
})

export default Pagination
