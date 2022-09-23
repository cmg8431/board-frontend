import { css } from '@emotion/react'

export const globalStyles = css`
  :root {
    --color-text-primary: black;
  }
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
  html {
    font-size: 10px !important;
  }
  html,
  body,
  #app {
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    letter-spacing: -0.05rem;
    color: var(--color-text-primary);
  }
`
