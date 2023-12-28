import NextHead from 'next/head'

import { WEBSITE_URL } from 'utils/config/constants'

const SITE = 'https://bonbon.eco'
const AUTHOR = 'BonBon Net-Zero'
const THUMBNAIL_ALT = 'thumbnail_alt'

export default function Head({
  title = 'BonBon',
  description = 'The social network for neutral-carbon lifestyle',
  thumbnail = `${WEBSITE_URL}/cover.png`,
  path = '',
}: {
  title?: string
  description?: string
  thumbnail?: string
  path?: string
}) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={`${description}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE} />
      <meta name="twitter:creator" content={`${AUTHOR}`} />
      <meta name="twitter:title" content={`${title}`} />
      <meta name="twitter:description" content={`${description}`} />
      <meta name="twitter:image" content={`${thumbnail}`} />
      <meta name="twitter:image:alt" content={`${THUMBNAIL_ALT}`} />

      <meta property="og:title" content={`${title}`} />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:image" content={`${thumbnail}`} />
      <meta property="og:image:alt" content={`${THUMBNAIL_ALT}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE} />
    </NextHead>
  )
}
