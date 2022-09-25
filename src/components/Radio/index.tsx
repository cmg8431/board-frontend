import React, { useContext } from 'react'
import { RadioContext } from '../RatioContext'

export interface RatioProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  value: string
  name?: string
  defaultChecked?: boolean
  disabled?: boolean
}

export const Radio: React.FC<RatioProps> = ({
  children,
  value,
  name,
  defaultChecked,
  disabled,
}) => {
  const group = useContext(RadioContext)

  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled || group.disabled}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={
          group.onChange !== undefined
            ? ({ target }) => group.onChange(target.value)
            : undefined
        }
      />
      {children}
    </label>
  )
}
