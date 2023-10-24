import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedro Portfolio',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <div><Header/></div>
        {children}
        </body>
    </html>
  )
}
