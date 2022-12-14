import { memo, useMemo } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

// props 타입정의
type QuillEditorProps = {
  quillRef: any
  htmlContent: string
  setHtmlContent: any
}

export const QuillEditor = memo(
  ({ quillRef, htmlContent, setHtmlContent }: QuillEditorProps) => {
    const modules = useMemo(
      () => ({
        toolbar: {
          // 툴바에 넣을 기능
          container: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
            [
              { list: 'ordered' },
              { list: 'bullet' },
              { indent: '-1' },
              { indent: '+1' },
              { align: [] },
            ],
          ],
        },
      }),
      []
    )
    return (
      <>
        <ReactQuill
          // ref={quillRef}
          ref={(element) => {
            if (element !== null) {
              quillRef.current = element
            }
          }}
          value={htmlContent}
          onChange={setHtmlContent}
          modules={modules}
          theme="snow"
          style={{ height: '85%', marginBottom: '6%' }} // style
        />
      </>
    )
  }
)
