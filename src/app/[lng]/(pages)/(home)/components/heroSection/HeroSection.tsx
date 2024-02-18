import { ContactContainer } from './contactContainer'
import { FormContainer } from './formContainer'
import { PresentationContainer } from './presentationContainer'
import { ScrollIndicator } from './scrollIndicator'

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative flex min-h-screen justify-center bg-contain bg-repeat"
    >
      <div className="z-10 flex w-[1280px] flex-col justify-evenly max-xl:py-32 max-lg:pt-12 max-sm:py-0 xl:py-32 2xl:py-10">
        <ContactContainer />
        <div className="flex max-2xl:justify-around max-xl:flex-col max-xl:items-center max-xl:gap-20 max-sm:justify-center 2xl:justify-between">
          <PresentationContainer />
          <FormContainer />
        </div>
      </div>
      <video
        muted
        autoPlay
        loop
        src="/home/hero-section/hero-section-video.mp4"
        className="absolute inset-0 h-full w-full bg-[url('/home/hero-section/hero-section-video-fallback.png')] object-cover"
        playsInline
      ></video>
      <ScrollIndicator />
    </section>
  )
}
