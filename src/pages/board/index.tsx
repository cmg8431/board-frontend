import React, { useEffect, useState } from 'react'
import { AppLayout, TextField } from '~/components'
import * as S from './styled'

import { useLogin } from '~/hook'
import { Button } from '~/components/Button'
import { useNavigate } from 'react-router-dom'

export const BoardPage: React.FC = () => {
  const { profile, isLoading } = useLogin()
  const navigate = useNavigate()
  const [input, setInput] = useState<string>('')

  //   const filtered =
  //     !isFetching && product !== undefined && product?.result.length > 0
  //       ? product?.result.filter((itemList) => {
  //           return itemList.product_name
  //             .toUpperCase()
  //             .includes(input.toUpperCase())
  //         })
  //       : null

  useEffect(() => {
    if (profile && !isLoading) {
      console.log('하이')
    }
  }, [profile, isLoading])

  return (
    <AppLayout padding={{ padding: '20px 0' }}>
      {profile && !isLoading ? (
        <h1>{profile?.name}님 환영합니다!</h1>
      ) : (
        <h1>대시판</h1>
      )}
      <S.CategoryCotainer>
        <S.Category>전체</S.Category>
        <S.Category>ETC</S.Category>
        <S.Category>GAME</S.Category>
        <S.Category>DEVELOP</S.Category>
        <S.Category>STUDENT</S.Category>
        <S.Category>STUDY</S.Category>
      </S.CategoryCotainer>
      <S.Line />
      <div>
        <TextField
          label="게시물 검색"
          placeholder="예) 로그인은 어떻게 하나요?"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {Array.from(Array(15).keys()).map(() => {
        return (
          <S.PostBoxContainer>
            <S.PostHeadContainer>
              <div>
                <img />
              </div>
              <S.PostHeadInfoContainer>
                <S.PostHeadTitle>제목입니다</S.PostHeadTitle>
              </S.PostHeadInfoContainer>
            </S.PostHeadContainer>
            <S.PostHeadDescription type="regular">
              이것은 대욱게시판입니다
            </S.PostHeadDescription>
          </S.PostBoxContainer>
        )
      })}
      <S.FooterPostCreateWrapper>
        <Button
          style={{ height: '5.3rem', borderRadius: '100rem' }}
          variant="contained"
          onClick={() => navigate('create-post')}
        >
          게시물 생성하기
        </Button>
      </S.FooterPostCreateWrapper>
    </AppLayout>
  )
}
