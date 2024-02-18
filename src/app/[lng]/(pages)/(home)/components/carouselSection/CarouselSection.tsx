import { Carousel } from './carousel'
import { ShowCase } from './showCase'

export function CarouselSection() {
  return (
    <section className="min-w-sreen relative -top-1 min-h-screen bg-foreground px-5">
      <div className="relative -top-56 flex flex-col items-center gap-20 max-md:top-[-485px] max-sm:top-[-550px]">
        <ShowCase />
        <Carousel />
      </div>
    </section>
  )
}
