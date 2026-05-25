import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import SectionIndicator from '@/components/layout/SectionIndicator'
import PopupNotice from '@/components/layout/PopupNotice'
import Hero from '@/components/sections/Hero'
import BrandStory from '@/components/sections/BrandStory'
import Services from '@/components/sections/Services'
import CasesPreview from '@/components/sections/CasesPreview'
import Staff from '@/components/sections/Staff'
import Facilities from '@/components/sections/Facilities'
import Location from '@/components/sections/Location'

export default function Page() {
  return (
    <>
      <Header />
      <SectionIndicator />
      <PopupNotice />
      <main>
        <Hero />
        <BrandStory />
        <Services />
        <CasesPreview />
        <Staff />
        <Facilities />
        <Location />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
