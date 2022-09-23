import { css } from '@emotion/react'

export const globalStyles = css`
  :root {
    --color-text-primary: black;

    // 스카이 블루 색상
    --color-brand-skyblue-100: #e3f8ff;
    --color-brand-skyblue-200: #cef3ff;
    --color-brand-skyblue-300: #b4edff;
    --color-brand-skyblue-400: #79dfff;
    --color-brand-skyblue-500: #55d6ff;
    --color-brand-skyblue-600: #1bc8ff;

    // 그레이 블루 색상
    --color-garyblue-100: #e1ebee;
    --color-grayblue-200: #c0d4db;
    --color-grayblue-300: #a1bac3;
    --color-grayblue-400: #7d99a4;
    --color-graublue-500: #576c74;
    --color-grayblue-600: #3a4b51;
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
