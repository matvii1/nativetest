import { useState } from 'react'

export function useToggleSort(initialState: 'asc' | 'desc') {
  const [sortOrder, setSortOrder] = useState(initialState)

  function toggle() {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
  }

  return {
    sortOrder,
    toggle,
  }
}
