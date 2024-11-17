import { FC } from 'react'
import './index.scss'

export const Loading: FC = () => {
  return (
    <div className="loading">
      <div className="loading__lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
