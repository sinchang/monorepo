import '../styles/global.css'
// include styles from the ui package
import 'ui/styles.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trace URL',
  description:
    'Trace URL helps you expand shortened URL into original URL or trace any URL with redirections towards the destination.',
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: 'ga0-ewVBlgVSftZ1FAi9FcIlMFzjfdtIPw8JhV-uLac'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
