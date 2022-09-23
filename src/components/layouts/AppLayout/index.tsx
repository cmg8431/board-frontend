import React from 'react'

import * as S from './styled'

export interface AppLayoutProps {
  children: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <S.AppLayoutContainer>{children}</S.AppLayoutContainer>
}
