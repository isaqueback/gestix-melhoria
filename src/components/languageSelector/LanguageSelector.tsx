'use client'

import { Languages } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { useLanguage } from '@/app/contexts/LanguageContext'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import { useTranslation } from '@/i18n/client'
import { languages } from '@/i18n/config'

export function LanguageSelector() {
  const { lng } = useLanguage()
  const { t } = useTranslation(lng)

  const router = useRouter()

  function handleLanguageChange(language: string) {
    router.push(`/${language}`)
  }

  return (
    <Select defaultValue={lng} onValueChange={handleLanguageChange}>
      <SelectTrigger className="flex w-fit items-center justify-center gap-4 border-none bg-transparent text-background transition-all duration-300 ease-out hover:bg-ring dark:text-foreground dark:hover:bg-accent">
        <Languages className="h-5 w-5 " />
      </SelectTrigger>
      <SelectContent align="end">
        {languages.map((language) => {
          return (
            <SelectItem key={language} value={language}>
              {t(`header.translation.${language}`)}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
