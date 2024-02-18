'use client'

import Link from 'next/link'

import { useLanguage } from '@/app/contexts/LanguageContext'

import style from './scrollIndicator.module.css'

export function ScrollIndicator() {
  const { lng } = useLanguage()

  return (
    <Link
      href={`/${lng}/#overview-section`}
      className={`absolute bottom-2 z-20 flex h-10 w-6 cursor-pointer items-start justify-center rounded-2xl border border-primary py-2 max-sm:hidden ${style.mouseButton}`}
    >
      <span className="h-1 w-1 rounded-full bg-background dark:bg-foreground"></span>
    </Link>
  )
}
