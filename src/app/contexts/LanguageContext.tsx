'use client'

import { createContext, ReactNode, useContext } from 'react'

interface LanguageContext {
  lng: string
}

interface LanguageProviderProps {
  children: ReactNode
  lng: string
}

const LanguageContext = createContext({} as LanguageContext)

export function LanguageProvider({ children, lng }: LanguageProviderProps) {
  return (
    <LanguageContext.Provider value={{ lng }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const { lng } = useContext(LanguageContext)
  return { lng }
}
