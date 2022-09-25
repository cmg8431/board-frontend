import React, { ReactNode, useState } from 'react'
import { AppLayout, TextField } from '~/components'
import * as S from './styled'
import dayjs from 'dayjs'

import { useLogin } from '~/hook'
import { Button } from '~/components/Button'
import { useNavigate } from 'react-router-dom'
import { useAllPost } from '~/hook/query/usePost'

export const BoardPage: React.FC = () => {
  const { profile, isLoading } = useLogin()
  const navigate = useNavigate()
  const [input, setInput] = useState<string>('')

  const { data: post } = useAllPost()

  const filtered = post?.filter((v: { title: string }) => {
    return v.title.toUpperCase().includes(input.toUpperCase())
  })

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
      <S.PostMainContainer>
        {filtered?.map(
          (post: {
            id: string
            category: ReactNode
            title:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined
            author: {
              nickname:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined
            }
            created_at: Date
          }) => {
            return (
              <S.PostBoxContainer
                onClick={() => navigate('/post', { state: post.id })}
              >
                <S.PostHeadContainer>
                  <div>
                    <img />
                  </div>
                  <S.PostHeadInfoContainer>
                    <S.PostHeadTitle>{post.title}</S.PostHeadTitle>
                  </S.PostHeadInfoContainer>
                </S.PostHeadContainer>
                <S.PostHeadDescription type="regular">
                  <div>{post.author.nickname}</div>
                  <div>
                    {post.category}, {dayjs(post.created_at).format('YY-MM-DD')}
                  </div>
                </S.PostHeadDescription>
              </S.PostBoxContainer>
            )
          }
        )}
      </S.PostMainContainer>
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
