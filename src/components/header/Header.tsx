import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { AccountMenu } from '@/components/accountMenu/AccountMenu'
import { DarkModeSwitch } from '@/components/darkModeSwitch/DarkModeSwitch'
import { useTranslation } from '@/i18n'

import { LanguageSelector } from '../languageSelector/LanguageSelector'
import { BurgerMenu } from './burgerMenu'

interface HeaderProps {
  lng: string
}

export async function Header({ lng }: HeaderProps) {
  const { t } = await useTranslation(lng)
  const hasSession = false

  return (
    <header className="fixed z-30 w-full">
      <div className="flex items-center gap-14 bg-foreground/90 px-12 py-4 backdrop-blur-sm dark:bg-background/90 max-lg:hidden">
        <Link
          href="/"
          className="cursor-pointer font-extrabold text-foreground"
        >
          <Image
            alt={t('header.nav.Logo')}
            src="/header/logo.png"
            width={1090}
            height={447}
            className="w-20"
          />
        </Link>
        <nav className="flex gap-10 text-background dark:text-foreground">
          <Link
            href="/"
            className="transition-all duration-300 ease-out hover:brightness-75"
          >
            {t('header.nav.Solutions')}
          </Link>
          <Link
            href="/"
            className="transition-all duration-300 ease-out hover:brightness-75"
          >
            {t('header.nav.Support')}
          </Link>
        </nav>
        <div className="gap- ml-auto flex items-center justify-center">
          <div className="">
            <LanguageSelector />
          </div>
          <hr className="relative h-[1px] w-8 rotate-90 rounded-full border-muted-foreground" />
          <DarkModeSwitch />
          <hr className="relative h-[1px] w-8 rotate-90 rounded-full border-muted-foreground" />
          {hasSession ? (
            <AccountMenu />
          ) : (
            <Link
              href={`/${lng}/sign-in`}
              className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full border px-2 text-sm text-background transition-all duration-300 ease-out hover:brightness-75 dark:text-foreground"
            >
              <User className="h-4 w-4" />
              Entrar
            </Link>
          )}
        </div>
      </div>
      <BurgerMenu />
    </header>
  )
}
