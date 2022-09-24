import styled from '@emotion/styled'
import { Typography } from '~/components'

export const PostHeadInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`
export const Line = styled.div`
  height: 1px;
  background-color: #eee;
  margin: 2rem 0;
`
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

export const PostHeadTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  color: #3a4b51;
  margin-right: 1rem;
`
export const PostHeadDescription = styled(Typography)`
  font-size: 1.35rem;
  margin: 0rem;
  color: #3a4b51;
  letter-spacing: -0.03rem;
`

export const PostBoxContainer = styled.div`
  display: flex;
  background-color: #f6f6f6;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 3rem;
  border-radius: 1rem;
  margin-bottom: 1.3rem;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    scale: 1.03;
    opacity: 1.2;
  }
  :active {
    scale: 0.98;
    opacity: 0.8;
  }
`

export const PostHeadContainer = styled.div`
  display: flex;
`

export const FooterPostCreateWrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  width: 100%;
  max-width: 42.5rem;
`
