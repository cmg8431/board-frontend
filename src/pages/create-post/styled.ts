import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const CategoryCotainer = styled.div`
  display: flex;
`

export const Category = styled.div`
  margin-right: 0.5rem;
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: -0.03rem;
  cursor: pointer;
  :hover {
    scale: 1.03;
    opacity: 1.2;
  }
  :active {
    scale: 0.98;
    opacity: 0.8;
  }
`

export const ToggleBtn = styled.button<{ toggle: boolean }>`
  width: 70px;
  height: 30px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    !props.toggle ? 'none' : 'var(--color-brand-skyblue-600)'};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  margin-bottom: 2rem;
`
export const Circle = styled.div<{ toggle: boolean }>`
  background-color: white;
  width: 18px;
  height: 18px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(40px, 0);
      transition: all 0.5s ease-in-out;
    `}
`
