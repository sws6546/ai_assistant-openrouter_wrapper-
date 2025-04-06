import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/Header'
import './globals.css'
import Background from '@/components/Background'

export const metadata: Metadata = {
  title: 'ai assistant',
  description: 'Szymon Przezdzięk',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="pl">
        <body className='text-white flex flex-col items-scretch h-[100vh] gap-4 p-4 pb-0'>
          <Background />
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}