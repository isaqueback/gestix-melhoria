'use client'

import { LogOut, UserRound } from 'lucide-react'

import { useLanguage } from '@/app/contexts/LanguageContext'
import { useTranslation } from '@/i18n/client'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export function AccountMenu() {
  const { lng } = useLanguage()
  const { t } = useTranslation(lng)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="ml-6 cursor-pointer">
          <AvatarImage src="/header/minha-foto.jpg" />
          <AvatarFallback>
            <UserRound />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="flex flex-col gap-1.5">
          <span className="text-base text-foreground">Isaque Delfino</span>
          <span className="-mt-1.5 inline-block text-xs font-normal text-muted-foreground">
            isaque.delfino@gestix.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <UserRound className="mr-2 h-4 w-4 text-foreground" />
            {t('header.accountMenu.Profile')}
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer text-rose-500 dark:text-rose-400">
            <LogOut className="mr-2 h-4 w-4" />
            <span>{t('header.accountMenu.Logout')}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
