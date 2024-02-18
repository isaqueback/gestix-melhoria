import { Header } from '@/components/header/Header'

import { CarouselSection } from './components/carouselSection/CarouselSection'
import { HeroSection } from './components/heroSection/HeroSection'
import { OverviewSection } from './components/overviewSection/OverviewSection'

interface HomeProps {
  params: { lng: string }
}

export default async function Home({ params: { lng } }: HomeProps) {
  return (
    <div className=" flex min-h-screen w-screen flex-col">
      <Header lng={lng} />
      <main>
        <HeroSection />
        <OverviewSection lng={lng} />
        <CarouselSection />
      </main>
    </div>
  )
}
