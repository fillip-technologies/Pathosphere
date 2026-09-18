import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Smartphone,
  TestTube2,
} from 'lucide-react'

import slider1 from '../../assets/slider/slider-1.png'
import slider2 from '../../assets/slider/slider-2.png'
import slider3 from '../../assets/slider/slider-3.png'

const CARDS = [
  {
    title: 'Full Body Health Check-up',
    description: 'Comprehensive testing for preventive health monitoring.',
    image: slider1,
    imagePosition: 'object-[68%_center]',
    accent: 'berry',
    icon: HeartPulse,
  },
  {
    title: 'Routine Blood Tests',
    description: 'Essential laboratory tests for everyday health monitoring.',
    image: slider2,
    imagePosition: 'object-[76%_center]',
    accent: 'teal',
    icon: TestTube2,
  },
  {
    title: 'Specialized Test Profiles',
    description: 'Grouped diagnostic tests designed for specific health requirements.',
    image: slider3,
    imagePosition: 'object-[70%_center]',
    accent: 'berry',
    icon: Microscope,
  },
  {
    title: 'Preventive Health Packages',
    description: 'Bundled tests to support regular health monitoring.',
    image: slider1,
    imagePosition: 'object-[82%_center]',
    accent: 'teal',
    icon: ShieldCheck,
  },
  {
    title: 'Pathology Reports',
    description: 'Access verified laboratory results and reports digitally.',
    image: slider2,
    imagePosition: 'object-[42%_center]',
    accent: 'berry',
    icon: FileText,
  },
  {
    title: 'Digital Health Records',
    description: 'Keep your laboratory reports and health documents organized in one place.',
    image: slider3,
    imagePosition: 'object-[50%_center]',
    accent: 'teal',
    icon: Smartphone,
  },
]

const accentStyles = {
  berry: {
    panel: 'bg-[#FDF2F6]',
    iconWrap: 'bg-white text-[#B23A63]',
    arrow:
      'border-[#F1BAD0] text-[#B23A63] hover:border-[#B23A63] hover:bg-[#B23A63] hover:text-white',
  },
  teal: {
    panel: 'bg-[#ECFDF5]',
    iconWrap: 'bg-white text-[#168C83]',
    arrow:
      'border-[#A9E8DF] text-[#168C83] hover:border-[#168C83] hover:bg-[#168C83] hover:text-white',
  },
}

function TestsPackages({ cards = CARDS }) {
  const scrollerRef = useRef(null)
  const [activePage, setActivePage] = useState(0)
  const [pageCount, setPageCount] = useState(1)

  const updateCarouselState = useCallback(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const maxScroll = Math.max(scroller.scrollWidth - scroller.clientWidth, 0)
    const pages = Math.max(1, Math.ceil(maxScroll / (scroller.clientWidth * 0.82)) + 1)
    const pageSize = pages > 1 ? maxScroll / (pages - 1) : 0
    const nextPage = pageSize > 0 ? Math.round(scroller.scrollLeft / pageSize) : 0

    setPageCount(pages)
    setActivePage(Math.min(nextPage, pages - 1))
  }, [])

  useEffect(() => {
    updateCarouselState()
    window.addEventListener('resize', updateCarouselState)
    return () => window.removeEventListener('resize', updateCarouselState)
  }, [updateCarouselState])

  const scrollToPage = (page) => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const maxScroll = Math.max(scroller.scrollWidth - scroller.clientWidth, 0)
    const nextPage = Math.min(Math.max(page, 0), pageCount - 1)
    const left = pageCount > 1 ? maxScroll * (nextPage / (pageCount - 1)) : 0

    scroller.scrollTo({ left, behavior: 'smooth' })
  }

  return (
    <section className="overflow-hidden bg-[#FAFAF8] pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-10">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-0.5 w-14 bg-[#B23A63]" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#17202A]">
                Our Tests & Packages
              </p>
            </div>

            <h2 className="text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-[#17202A] sm:text-[3.15rem] lg:text-[3.8rem]">
              Everything You Need for
              <br />
              <span className="text-[#B23A63]">Better Health</span>-in One Place.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#6B7280] sm:text-lg">
              Choose from diagnostic tests and health-check packages designed to make
              testing, reporting and health management easier.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <button
              type="button"
              onClick={() => scrollToPage(activePage - 1)}
              disabled={activePage === 0}
              aria-label="Previous tests and packages"
              className={`flex h-14 w-14 items-center justify-center rounded-full border transition-colors duration-200 ${
                activePage === 0
                  ? 'border-[#E5E7EB] bg-white text-[#9CA3AF]'
                  : 'border-[#B23A63] bg-white text-[#B23A63] hover:bg-[#B23A63] hover:text-white'
              }`}
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollToPage(activePage + 1)}
              disabled={activePage === pageCount - 1}
              aria-label="Next tests and packages"
              className={`flex h-14 w-14 items-center justify-center rounded-full border transition-colors duration-200 ${
                activePage === pageCount - 1
                  ? 'border-[#E5E7EB] bg-white text-[#9CA3AF]'
                  : 'border-[#B23A63] bg-[#B23A63] text-white hover:bg-[#9f3156]'
              }`}
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          onScroll={updateCarouselState}
          className="mt-9 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-5 [scrollbar-width:none] [touch-action:pan-y] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map(({ title, description, image, imagePosition, accent, icon: Icon }) => {
            const styles = accentStyles[accent]

            return (
              <article
                key={title}
                className="min-w-[82vw] snap-start overflow-hidden rounded-xl bg-white shadow-[0_16px_34px_-26px_rgba(23,32,42,0.55)] ring-1 ring-[#E5E7EB] sm:min-w-[21rem] md:min-w-[22rem] lg:min-w-[18.25rem] xl:min-w-[19.5rem]"
              >
                <img
                  src={image}
                  alt=""
                  className={`h-48 w-full rounded-t-xl object-cover ${imagePosition}`}
                  draggable="false"
                />

                <div className={`relative min-h-[12.5rem] p-6 ${styles.panel}`}>
                  <div
                    className={`absolute -top-9 left-6 flex h-16 w-16 items-center justify-center rounded-full shadow-[0_10px_22px_-18px_rgba(23,32,42,0.55)] ${styles.iconWrap}`}
                  >
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>

                  <div className="pt-6">
                    <h3 className="max-w-[13rem] text-xl font-extrabold leading-tight text-[#17202A]">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-[13.5rem] text-sm leading-relaxed text-[#6B7280]">
                      {description}
                    </p>
                  </div>

                  <a
                    href="#tests"
                    aria-label={`Explore ${title}`}
                    className={`absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border bg-white transition-colors duration-200 ${styles.arrow}`}
                  >
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-3">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToPage(index)}
              aria-label={`Go to tests and packages page ${index + 1}`}
              aria-current={activePage === index ? 'true' : undefined}
              className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                activePage === index ? 'bg-[#B23A63]' : 'bg-[#D1D5DB]'
              }`}
            />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-4 text-sm font-medium text-[#6B7280]">
          <span className="h-px w-16 bg-[#CBD5E1]" aria-hidden="true" />
          Swipe to explore more
          <span className="h-px w-16 bg-[#CBD5E1]" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default TestsPackages
