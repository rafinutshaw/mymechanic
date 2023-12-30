import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AppHeader from '@/components/header/app-header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Mechanic',
  description: 'Car service made easier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <AppHeader />
        <div className='pt-12'>{children}</div>
      </body>
    </html>
  )
}
