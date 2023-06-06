import { Dispatch, FC, SetStateAction } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './ButtonStyles'

type Props = {
  pageNumber: number
  setPageNumber: Dispatch<SetStateAction<number>>
}

const PrevButton: FC<Props> = ({ setPageNumber, pageNumber }) => {
  const FIRST_PAGE_NUMBER = 1
  const isPrevDisabled = pageNumber === FIRST_PAGE_NUMBER
  const disabledStyles = {
    backgroundColor: isPrevDisabled ? '#F1EEEB' : '#FFF',
  }

  const disabledTextStyles = {
    color: isPrevDisabled ? '#7C7C7C' : '#000',
  }

  function handleChangePage() {
    if (isPrevDisabled) {
      return
    }

    setPageNumber((prev) => prev - 1)
  }

  return (
    <TouchableOpacity
      style={[styles.button, disabledStyles]}
      onPress={handleChangePage}
    >
      <Text style={disabledTextStyles}>Prev</Text>
    </TouchableOpacity>
  )
}

export default PrevButton
