'use client'

import Image from 'next/image'

import { useLanguage } from '@/app/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/i18n/client'

export function PresentationContainer() {
  const { lng } = useLanguage()
  const { t } = useTranslation(lng)

  return (
    <div className="flex flex-col items-center gap-10 max-xl:w-full">
      <Image
        src="/header/logo.png"
        alt={t('home.heroSection.presentation.Logo')}
        width={1090}
        height={447}
        className="w-20 cursor-pointer sm:hidden"
      />
      <div className="flex flex-col gap-2 rounded-md px-6 py-11 transition-all duration-300 ease-out hover:scale-[1.005] max-xl:w-3/4 max-xl:items-center max-xl:shadow-2xl max-sm:w-full sm:bg-foreground sm:dark:bg-background">
        <h3 className="text-lg text-emerald-400 max-sm:text-center">
          {t('home.heroSection.presentation.Discover Gestix ERP/CRM')}
        </h3>
        <h1 className="flex flex-col text-5xl font-bold leading-[55px] text-background dark:text-foreground max-xl:text-center">
          <span className="">
            {t('home.heroSection.presentation.Simplified Business')}
          </span>
          <span>{t('home.heroSection.presentation.Management')}</span>
        </h1>
        <p className="mt-3 max-w-[29.25rem] leading-relaxed text-background dark:text-foreground max-xl:text-center">
          {t(
            "home.heroSection.presentation.Goodbye to the sluggishness and complexity of old systems. With Gestix, gain access to an agile, intuitive solution that is fully adaptable to your company's needs.",
          )}
        </p>
      </div>
      <div className="ml-4 flex max-w-[500px] flex-wrap gap-5 max-xl:hidden">
        {Array.from({ length: 126 }).map((_, idx) => {
          return (
            <span
              key={idx}
              className="inline-block h-2 w-2 rounded-full bg-primary"
            ></span>
          )
        })}
      </div>
      <Button className="text-base sm:hidden" size={'lg'}>
        Entre em contato
      </Button>
    </div>
  )
}
