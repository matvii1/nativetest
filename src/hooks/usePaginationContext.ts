import { PaginationContext } from '@/context/PaginationProvider'
import { useContext } from 'react'

export const usePaginationContext = () => useContext(PaginationContext)
