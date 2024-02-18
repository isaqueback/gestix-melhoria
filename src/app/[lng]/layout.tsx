import './globals.css'
import '@radix-ui/themes/styles.css'

import { dir } from 'i18next'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { languages } from '@/i18n/config'

import { LanguageProvider } from '../contexts/LanguageContext'

interface RootLayoutProps {
  readonly children: ReactNode
  params: { lng: string }
}

const montSerrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gestix',
  description: 'Generated by create next app',
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body className={montSerrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="gestix-theme"
        >
          <LanguageProvider lng={lng}>
            {children}
            <Toaster richColors expand />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}