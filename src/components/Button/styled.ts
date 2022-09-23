import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { ButtonVariantType } from '.'

export const ButtonElement = styled.button<{
  variant: ButtonVariantType
}>`
  border: none;
  outline: none;
  width: 100%;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.01rem;
  padding: 1rem;
  transition: all 200ms;
  cursor: pointer;
  ${(props) => {
    switch (props.variant) {
      case 'contained':
        return css`
          color: white;
          background-color: var(--color-brand-skyblue-600);
          cursor: pointer;
          &:hover {
            background-color: #00a4d8;
          }
          &:disabled {
            background-color: #c0dde5;
            cursor: not-allowed;
          }
        `
      case 'outlined':
        return css`
          color: var(--color-brand-skyblue-600);
          background-color: transparent;
          border: 1px solid var(--color-brand-skyblue-600);
          &:hover {
            color: #00a4d8;
            border-color: #00a4d8;
          }
        `
    }
  }}
`
