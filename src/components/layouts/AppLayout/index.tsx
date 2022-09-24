import React from 'react'

import * as S from './styled'

export interface AppLayoutProps {
  children: React.ReactNode
  padding?: {
    padding: string
  }
}

export const AppLayout: React.FC<AppLayoutProps> = ({ padding, children }) => {
  return (
    <S.AppLayoutContainer style={{ ...padding }}>
      {children}
    </S.AppLayoutContainer>
  )
}
