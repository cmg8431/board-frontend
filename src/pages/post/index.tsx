import React from 'react'
import { AppLayout } from '~/components'
import { useDetailPost } from '~/hook/query/usePost'
import * as S from './styled'

export const PostPage: React.FC = () => {
  const { data: post } = useDetailPost()

  return (
    <AppLayout padding={{ padding: '50px 0' }}>
      <S.Title>{post?.title}</S.Title>
      <S.Cotnent>
        <h2>설명</h2>
        <S.ContentPre dangerouslySetInnerHTML={{ __html: post?.content }} />
      </S.Cotnent>
    </AppLayout>
  )
}
