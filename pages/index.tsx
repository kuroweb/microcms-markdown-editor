// common
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// package
import { useFieldExtension } from 'microcms-field-extension-react'

// styles
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'

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
    <div data-color-mode='light' style={{ border: '1px solid #cdcde0', borderRadius: '4px' }}>
      <MDEditor value={markdown} onChange={(value) => handleChange(value)} height={540} />
    </div>
  )
}

export default Page
