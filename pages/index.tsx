// common
import { useEffect, useState } from 'react'

// package
import { useFieldExtension } from 'microcms-field-extension-react'
import { MdEditor } from 'md-editor-rt'

// styles
import 'md-editor-rt/lib/style.css'

const Page = () => {
  const [markdown, setMarkdown] = useState<string>('')

  const { data, sendMessage } = useFieldExtension('', {
    origin: process.env.NEXT_PUBLIC_MICROCMS_ORIGIN,
    height: 600,
  })

  useEffect(() => {
    if (data) {
      setMarkdown(data)
    }
  }, [data])

  useEffect(() => {
    sendMessage({ data: markdown })
  }, [markdown, sendMessage])

  return (
    <div data-color-mode='light'>
      <MdEditor
        modelValue={markdown}
        onChange={(value) => setMarkdown(value)}
        language='en-US'
        style={{ height: 600 }}
      />
    </div>
  )
}

export default Page
