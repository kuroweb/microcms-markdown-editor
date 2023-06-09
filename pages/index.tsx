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
    if (!markdown) {
      setMarkdown(data)
    }
  }, [data, markdown])

  const handleChange = (value: string) => {
    setMarkdown(value)
    sendMessage({ data: value })
  }

  return (
    <div data-color-mode='light'>
      <MdEditor
        modelValue={markdown}
        onChange={handleChange}
        language='en-US'
        style={{ height: 600 }}
      />
    </div>
  )
}

export default Page
