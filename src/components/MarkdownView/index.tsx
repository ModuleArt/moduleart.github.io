import { FC } from 'react'
import { EmailMarkdown } from 'md-to-react-email'
import { Props } from './Props'
import './index.scss'

export const MarkdownView: FC<Props> = ({ markdown }) => {
  return (
    <div className="markdown-view">
      <EmailMarkdown markdown={markdown} />
    </div>
  )
}
