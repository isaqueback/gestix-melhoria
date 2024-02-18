import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { useTranslation } from '@/i18n'

interface OverviewSectionProps {
  lng: string
}

export async function OverviewSection({ lng }: OverviewSectionProps) {
  const { t } = await useTranslation(lng)

  return (
    <section
      id="overview-section"
      className="flex flex-col items-center gap-16 bg-[url('/home/overview-section/overview-wave-light.svg')] bg-cover bg-bottom bg-no-repeat px-4 pb-72 pt-10 dark:bg-[url('/home/overview-section/overview-wave-dark.svg')] max-md:px-10 max-md:pb-[560px] max-sm:pb-[650px]"
    >
      <div className="flex max-w-[590px] flex-col items-center gap-4">
        <h3 className="text-center text-2xl font-bold">
          {t('home.overviewSection.Agility and Efficiency for Your Company')}
        </h3>
        <p className="text-center text-foreground brightness-[0.85]">
          {t(
            'home.overviewSection.The Gestix stands out for its speed, functionality, and adaptability, enabling intuitive and personalized management. Additionally, you have',
          )}
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-[1280px] items-start max-xl:gap-10 max-md:flex-col max-md:items-center">
        <div className="flex flex-1 flex-col items-center gap-4 transition-all duration-300 ease-out hover:scale-[1.005]">
          <Image
            alt={t('home.overviewSection.Invoice image')}
            src="/home/overview-section/overview-invoice.png"
            width={1024}
            height={1024}
            className="h-36 w-36"
          />
          <div className="flex flex-col items-center gap-4 max-md:w-full">
            <h4 className="text-center text-lg font-bold leading-tight">
              {t('home.overviewSection.Electronic Invoicing')}
            </h4>
            <p className="max-w-72 text-center text-sm leading-relaxed text-foreground brightness-[0.85] max-md:max-w-full">
              {t(
                'home.overviewSection.Gestix simplifies electronic invoicing, ensuring legal compliance, especially in B2G transactions for public contracts.',
              )}
            </p>
          </div>
          <Button
            className="mt-4 text-xs text-background max-md:w-full"
            size={'sm'}
          >
            {t('home.overviewSection.Learn more')}
          </Button>
        </div>
        <div className="flex flex-1 flex-col items-center gap-4 transition-all duration-300 ease-out hover:scale-[1.005]">
          <Image
            alt={t('home.overviewSection.Technical Support Image')}
            src="/home/overview-section/overview-support.png"
            width={1024}
            height={1024}
            className="h-36 w-36"
          />
          <div className="flex flex-col items-center gap-4 max-md:w-full">
            <h4 className="text-center text-lg font-bold leading-tight">
              {t('home.overviewSection.Support and Assistance')}
            </h4>
            <p className="max-w-72 text-center text-sm leading-relaxed text-foreground brightness-[0.85] max-md:max-w-full">
              {t(
                'home.overviewSection.We not only provide a cutting-edge business management solution, but also ensure you have all the necessary support to fully leverage it.',
              )}
            </p>
          </div>
          <Button
            className="mt-4 text-xs text-background max-md:w-full"
            size={'sm'}
          >
            {t('home.overviewSection.Learn more')}
          </Button>
        </div>
        <div className="flex flex-1 flex-col items-center gap-4 transition-all duration-300 ease-out hover:scale-[1.005]">
          <Image
            alt={t('home.overviewSection.Free Trial Image')}
            src="/home/overview-section/overview-free-trial.png"
            width={1024}
            height={1024}
            className="h-36 w-36"
          />
          <div className="flex flex-col items-center gap-4 max-md:w-full">
            <h4 className="text-center text-lg font-bold leading-tight">
              {t('home.overviewSection.Free Trial')}
            </h4>
            <p className="max-w-72 text-center text-sm leading-relaxed text-foreground brightness-[0.85] max-md:max-w-full">
              {t(
                'home.overviewSection.Try it out with no obligation and see how our business management solution can transform the efficiency of your operations.',
              )}
            </p>
          </div>
          <Button
            className="mt-4 text-xs text-background max-md:w-full"
            size={'sm'}
          >
            {t('home.overviewSection.Learn more')}
          </Button>
        </div>
      </div>
    </section>
  )
}
