'use client'

import Image from 'next/image'

import { useLanguage } from '@/app/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/i18n/client'

export function ShowCase() {
  const { lng } = useLanguage()
  const { t } = useTranslation(lng)

  return (
    <>
      <div className="flex items-center justify-center gap-20 transition-all duration-300 ease-out hover:scale-[1.005] max-lg:gap-16 max-md:flex-col max-md:gap-5">
        <Image
          src="/home/carousel-section/inovation.png"
          width={500}
          height={500}
          alt={t(
            'home.carouselSection.Image representing innovation in business management',
          )}
          className="w-80 grayscale-[0.5] max-xl:w-64"
        />
        <div className="flex max-w-lg flex-col gap-1 text-background max-md:items-center">
          <h5 className="text-sm font-bold uppercase text-primary">
            {t('home.carouselSection.TRANSFORM YOUR MANAGEMENT')}
          </h5>
          <h3 className="text-3xl font-bold max-md:text-center">
            {t(
              'home.carouselSection.Discover management innovation with Gestix',
            )}
          </h3>
          <p className="text-base leading-relaxed brightness-[0.85] max-md:text-center">
            {t(
              "home.carouselSection.Don't miss the opportunity to optimize your business management. Explore our customizable solutions now and propel your business to success!",
            )}
          </p>
          <Button
            className="mt-3 w-fit px-6 text-xs uppercase text-background dark:text-foreground"
            size="sm"
          >
            {t('home.carouselSection.EXPLORE SOLUTIONS')}
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-20 transition-all duration-300 ease-out hover:scale-[1.005] max-lg:gap-10 max-md:flex-col max-md:gap-5">
        <Image
          src="/home/carousel-section/management.png"
          width={500}
          height={500}
          alt={t(
            'home.carouselSection.Image representing robust and flexible business management',
          )}
          className="w-80 grayscale-[0.5] max-xl:w-60 md:hidden"
        />
        <div className="flex max-w-lg flex-col gap-1 text-background max-md:items-center">
          <h5 className="text-sm font-bold uppercase text-primary">
            {t('home.carouselSection.WHY CHOOSE GESTIX?')}
          </h5>
          <h3 className="text-3xl font-bold max-md:text-center">
            {t(
              'home.carouselSection.A Robust and Flexible Business Management Solution',
            )}
          </h3>
          <p className="text-base leading-relaxed brightness-[0.85] max-md:text-center">
            {t(
              'home.carouselSection.Gestix integrates billing, sales, inventory, project costs, and financial planning in a fast-paced, user-friendly environment accessible on any device.',
            )}
          </p>
          <Button
            className="mt-3 w-fit px-6 text-xs uppercase text-background dark:text-foreground"
            size="sm"
          >
            {t('home.carouselSection.EXPLORE OUR SOLUTIONS')}
          </Button>
        </div>
        <Image
          src="/home/carousel-section/management.png"
          width={500}
          height={500}
          alt=""
          className="w-80 grayscale-[0.5] max-xl:w-60 max-md:hidden"
        />
      </div>
    </>
  )
}
