import React, { useEffect, useRef, useState } from 'react'
import { updatePost } from '~/api/post'
import { AppLayout, TextField, Typography } from '~/components'
import { QuillEditor } from '~/components'
import { Button } from '~/components/Button'
import { Radio } from '~/components/Radio'
import { RadioGroup } from '~/components/RadioGroup'
import { useCreatePost, useDetailPost } from '~/hook/query/usePost'
import * as S from './styled'

export type CategoryType = {
  [key: string]: string | undefined
}

export const CATEGORY_PART: CategoryType = {
  true: 'public',
  false: 'private',
} as const

export const EditPostPage: React.FC = () => {
  const quillRef = useRef()
  const form = new FormData()
  const { data: post } = useDetailPost()

  const [htmlContent, setHtmlContent] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [toggle, setToggle] = useState<boolean>(false)
  const [category, setCategory] = useState<any>(null)

  const clickedToggle = () => {
    setToggle((prev) => !prev)
  }

  const onSubmit = () => {
    updatePost({
      pk: post.id,
      title: title,
      content: htmlContent,
      category: category,
      photo: null,
      status: CATEGORY_PART[toggle.toString()],
    })
  }

  const addFile = (event: any): void => {
    event.preventDefault()
    for (let key of Object.keys(event.target.files)) {
      if (key !== 'length') {
        form.append('file', event.target.files[key])
      }
    }
  }

  useEffect(() => {
    setTitle(post.title)
    setHtmlContent(post.content)
  }, [])

  return (
    <AppLayout padding={{ padding: '20px 0' }}>
      <table className="tb_data tb_write">
        <tbody>
          <tr>
            <td colSpan={3}>
              <TextField
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="제목을 입력하세요."
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <RadioGroup
                label="연락 방법"
                value={category}
                onChange={setCategory}
              >
                <Radio value="etc">기타</Radio>
                <Radio value="game">게임</Radio>
                <Radio value="study">공부</Radio>
                <Radio value="develop">개발</Radio>
              </RadioGroup>
            </td>
          </tr>
          <tr>
            <td colSpan={3} style={{ height: '500px' }}>
              <QuillEditor
                quillRef={quillRef}
                htmlContent={htmlContent}
                setHtmlContent={setHtmlContent}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <TextField
                style={{ marginTop: '3rem' }}
                type="file"
                id="fileUpload"
                onChange={addFile}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <Typography type="medium">공개/비공개</Typography>
              <S.ToggleBtn onClick={clickedToggle} toggle={toggle}>
                <S.Circle toggle={toggle} />
              </S.ToggleBtn>
              <Button
                onClick={onSubmit}
                variant="contained"
                style={{ marginTop: '0rem' }}
              >
                생성하기
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </AppLayout>
  )
}
