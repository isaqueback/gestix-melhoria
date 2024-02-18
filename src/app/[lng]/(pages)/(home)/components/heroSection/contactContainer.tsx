'use client'

import { useLanguage } from '@/app/contexts/LanguageContext'
import { useTranslation } from '@/i18n/client'

export function ContactContainer() {
  const { lng } = useLanguage()
  const { t } = useTranslation(lng)

  return (
    <div className="ml-auto flex flex-col transition-all duration-300 ease-out hover:scale-[1.005] max-2xl:absolute max-2xl:bottom-7 max-2xl:right-7 max-sm:hidden">
      <span className="font-mono text-sm tracking-tighter text-background dark:text-foreground">
        {t('home.heroSection.contact.Call us')}
      </span>
      <span className="text-xl font-semibold text-emerald-500">
        (+351) 919 844 655
      </span>
    </div>
  )
}
