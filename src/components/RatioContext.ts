import { createContext } from 'react'

export const RadioContext = createContext({
  disabled: true || undefined,
  value: '' || undefined,
  onChange: (e: any) => {
    return e
  },
})
