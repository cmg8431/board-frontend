import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TypographyType } from '.'

export const TypographyElement = styled.p<{ type: TypographyType }>`
  letter-spacing: -0.8;
  ${(props) => {
    switch (props.type) {
      case 'bold':
        return css`
          font-weight: 600;
        `
      case 'medium':
        return css`
          font-weight: 500;
        `
      case 'regular':
        return css`
          font-weight: 400;
        `
      case 'light':
        return css`
          font-weight: 300;
        `
      case 'thin':
        return css`
          font-weight: 200;
        `
    }
  }}
`
