import { Dispatch, FC, SetStateAction } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './ButtonStyles'

type Props = {
  pageNumber: number
  setPageNumber: Dispatch<SetStateAction<number>>
}

const NextButton: FC<Props> = ({ pageNumber, setPageNumber }) => {
  const LAST_PAGE_NUMBER = 9
  const isNextDisabled = pageNumber === LAST_PAGE_NUMBER
  
  const disabledStyles = {
    backgroundColor: isNextDisabled ? '#F1EEEB' : '#FFF',
  }

  const disabledTextStyles = {
    color: isNextDisabled ? '#7C7C7C' : '#000',
  }

  function handleChangePage() {
    if (isNextDisabled) {
      return
    }

    setPageNumber((prev) => prev + 1)
  }

  return (
    <TouchableOpacity
      style={[styles.button, disabledStyles]}
      onPress={handleChangePage}
    >
      <Text style={disabledTextStyles}>Next</Text>
    </TouchableOpacity>
  )
}

export default NextButton
