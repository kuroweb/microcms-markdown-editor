// common
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// package
import { useFieldExtension } from 'microcms-field-extension-react'
import { MdEditor } from 'md-editor-rt'

// styles
import 'md-editor-rt/lib/style.css'

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
      <MdEditor modelValue={markdown || ''} onChange={handleChange} language='en-US' />
    </div>
  )
}

export default Page
