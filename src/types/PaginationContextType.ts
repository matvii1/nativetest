import { Dispatch, SetStateAction } from 'react'

export type PaginationContextType = {
  pageNumber: number
  setPageNumber: Dispatch<SetStateAction<number>>
}
