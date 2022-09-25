import React, { useRef, useState } from 'react'
import { post } from '~/api/post'
import { AppLayout, TextField, Typography } from '~/components'
import { QuillEditor } from '~/components'
import { Button } from '~/components/Button'
import { Radio } from '~/components/Radio'
import { RadioGroup } from '~/components/RadioGroup'
import * as S from './styled'

export const CreatePostPage: React.FC = () => {
  const quillRef = useRef()
  const [htmlContent, setHtmlContent] = useState<string>('')
  const form = new FormData()

  const [title, setTitle] = useState<string>('')
  const [toggle, setToggle] = useState<boolean>(false)
  const [category, setCategory] = useState<any>('EMAIL')

  const clickedToggle = () => {
    setToggle((prev) => !prev)
  }

  const onSubmit = () => {
    post({
      title: title,
      content: htmlContent,
      category: category,
      photo: form,
      status: toggle,
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
                <Radio value="EMAIL">이메일</Radio>
                <Radio value="PHONE">전화</Radio>
                <Radio value="FAX">팩스</Radio>
                <Radio value="MAIL" disabled>
                  우편
                </Radio>
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
