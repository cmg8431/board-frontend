import dayjs from 'dayjs'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { deletePost } from '~/api/post'
import { AppLayout } from '~/components'
import { Button } from '~/components/Button'
import { useLogin } from '~/hook'
import { useDetailPost } from '~/hook/query/usePost'
import * as S from './styled'

export const PostPage: React.FC = () => {
  const { data: post } = useDetailPost()
  const { profile, isLoading } = useLogin()
  const navigate = useNavigate()

  const handleOnPressLogoutButton = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    try {
      deletePost(post.id)
      navigate('/')
      toast.success('게시물 삭제에 성공하셨습니다.', {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
        theme: 'light',
      })
    } catch (err) {
      toast.error('게시물 삭제에 실패하셨습니다.', {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
        theme: 'light',
      })
    }
  }

  return (
    <AppLayout padding={{ padding: '50px 0' }}>
      <S.Title>{post?.title} </S.Title>
      <S.SubTitleContainer>
        <S.SubTitle>{post?.author?.nickname}</S.SubTitle>
        <S.SubTitle>{dayjs(post?.created_at).format('YY-MM-DD')}</S.SubTitle>
      </S.SubTitleContainer>
      <S.Cotnent>
        <h3>설명</h3>
        <S.ContentPre dangerouslySetInnerHTML={{ __html: post?.content }} />
      </S.Cotnent>
      {post?.author?.id === profile?.id ? (
        <div>
          <Button variant="contained" style={{ marginBottom: '1.5rem' }}>
            수정하기
          </Button>
          <Button onClick={handleOnPressLogoutButton} variant="outlined">
            삭제하기
          </Button>
        </div>
      ) : null}
    </AppLayout>
  )
}
