import './globals.css'
import type { Metadata } from 'next'
import { Source_Sans_3 as SourceSans3 } from 'next/font/google'
import { Header } from './components/header'
import { Footer } from './components/footer'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { VideosContextProvider } from '../contexts/VideosContextProvider'

const sourceSans3 = SourceSans3({
  subsets: ['latin'],
  weight: ['600', '500', '400', '300'],
})

export const metadata: Metadata = {
  title: 'AluraFlix',
  description:
    'Plataforma de streaming de conteúdo educacional e entretenimento.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={sourceSans3.className}>
        <Header />
        <VideosContextProvider>{children}</VideosContextProvider>
        <Footer />
      </body>
    </html>
  )
}
