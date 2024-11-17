import { FC } from 'react'
import { Head } from 'vite-react-ssg'
import { Props } from './Props'
import { mainConfig } from '@/config/Main'

export const PageMeta: FC<Props> = ({ title, description = mainConfig.description, image = '/android-chrome-512x512.png' }) => {
  return (
    <Head>
      {/* description */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />

      {/* title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      {/* image */}
      <meta name="og:image" content={image} />
      <meta name="twitter:image" content={image} />

      {/* url */}
      {/* <meta property="og:url" content={url} />
      <link rel="canonical" href={url} /> */}

      {/* other */}
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
    </Head>
  )
}
