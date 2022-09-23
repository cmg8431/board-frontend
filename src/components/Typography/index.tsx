import React from 'react'

import * as S from './styled'

export type TypographyType = 'bold' | 'medium' | 'regular' | 'light' | 'thin'

interface TypographyProps {
  type: TypographyType
  children: React.ReactNode
}

export const Typography: React.FC<TypographyProps> = ({ type, children }) => {
  return <S.TypographyElement type={type}>{children}</S.TypographyElement>
}
