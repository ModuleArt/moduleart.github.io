import { FC, useEffect, useMemo, useState } from 'react'
import { Props } from './Props'
import './index.scss'
import { parse } from 'marked'
import DOMPurify from 'dompurify'

export const MarkdownView: FC<Props> = ({ markdown }) => {
  const [parsed, setParsed] = useState('')

  const sanitized = useMemo(() => DOMPurify.sanitize(markdown), [markdown])

  useEffect(() => {
    const parsed = parse(sanitized)

    if (typeof parsed === 'string') {
      setParsed(parsed)
    } else {
      parsed.then((parsed) => setParsed(parsed))
    }
  }, [sanitized])

  return <div className="markdown-view" dangerouslySetInnerHTML={{ __html: parsed }} />
}
