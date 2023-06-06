import { PaginationContextType } from '@/types/PaginationContextType'

import { FC, ReactNode, createContext, useState } from 'react'

type Props = {
  children: ReactNode
}

export const PaginationContext = createContext<PaginationContextType>(
  {} as PaginationContextType
)

const PaginationProvider: FC<Props> = ({ children }) => {
  const [pageNumber, setPageNumber] = useState<number>(1)

  const contextValue = {
    pageNumber,
    setPageNumber,
  }

  return (
    <PaginationContext.Provider value={contextValue}>
      {children}
    </PaginationContext.Provider>
  )
}

export default PaginationProvider
