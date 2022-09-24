import React, { InputHTMLAttributes } from 'react'
import { Button } from '../Button'

import * as S from './styled'

type TextFieldType = InputHTMLAttributes<HTMLInputElement>

interface TextFieldProps extends TextFieldType {
  label?: string
  error?: string
  children?: React.ReactNode
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, children, ...options }, ref) => (
    <>
      <S.Label>{label}</S.Label>
      <div style={{ display: 'flex' }}>
        <S.InputElement ref={ref} {...options} />
        {children}
      </div>
      <S.ErrorMessage>{error}</S.ErrorMessage>
    </>
  )
)
