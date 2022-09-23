import React, { InputHTMLAttributes } from 'react'

import * as S from './styled'

type TextFieldType = InputHTMLAttributes<HTMLInputElement>

interface TextFieldProps extends TextFieldType {
  label?: string
  error?: string
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, ...options }, ref) => (
    <>
      <S.Label>{label}</S.Label>
      <S.InputElement ref={ref} {...options} />
      <S.ErrorMessage>{error}</S.ErrorMessage>
    </>
  )
)
