// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Calculator App',
  description: 'Created with v0',
  icons: {
    // simplest: one favicon (ICO or PNG) at the app/ root or public/
    icon: '/favicon.ico',              // or '/icon.png'
    // optional variants:
    shortcut: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
