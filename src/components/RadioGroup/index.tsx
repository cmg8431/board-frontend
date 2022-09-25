import React from 'react'
import { RadioContext } from '../RatioContext'

export interface RatioGroupProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  label?: string
}
export const RadioGroup: React.FC<RatioGroupProps> = ({
  label,
  children,
  ...rest
}) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </fieldset>
  )
}
