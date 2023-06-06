// common
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// package
import { useFieldExtension } from 'microcms-field-extension-react'

// styles
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'

import { MdEditor } from 'md-editor-rt'
import 'md-editor-rt/lib/style.css'

// react-md-editorがSSR非対応のためdynamicインポートで対応
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
  loading: () => <div>loading...</div>,
})

const Page = () => {
  const [markdown, setMarkdown] = useState<string | undefined>()

  const { data, sendMessage } = useFieldExtension('', {
    origin: process.env.NEXT_PUBLIC_MICROCMS_ORIGIN,
    height: 542,
  })

  useEffect(() => {
    if (!markdown) {
      setMarkdown(data)
    }
  }, [data, markdown])

  const handleChange = (value: string | undefined) => {
    setMarkdown(value)
    sendMessage({ data: value })
  }

  return (
    <div data-color-mode='light'>
      <MdEditor modelValue={markdown || ''} onChange={handleChange} />
    </div>
  )
}

export default Page
