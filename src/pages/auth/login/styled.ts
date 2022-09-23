import styled from '@emotion/styled'
import { Typography } from '~/components'

export const Title = styled(Typography)`
  font-size: 2rem;
  letter-spacing: -0.05rem;
  margin-bottom: 1rem;
`

export const Description = styled(Typography)`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  letter-spacing: -0.05rem;
`
export const BodySection = styled.section`
  margin-top: 3rem;
`

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`

export const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`

export const Typography1 = styled(Typography)`
  font-size: 1.5rem;
  margin-left: 1rem;
  letter-spacing: -0.12rem;
  color: var(--color-graublue-500);
`

export const ButtonWrapper = styled.div`
  flex-shrink: 0;
  margin-left: 10px;
  display: flex;
  & > button {
    font-size: 1.2rem;
  }
`

export const FooterInfoWrapper = styled(Typography)`
  font-size: 1.4rem;
`
