import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import { Props } from './Props'
import './index.scss'

export const WidthLimiter: FC<PropsWithChildren<Props>> = ({ children, className = '', maxWidth = 900 }) => {
  return (
    <div className={cn('width-limiter', [className])} style={{ maxWidth: `${maxWidth}px` }}>
      {children}
    </div>
  )
}
