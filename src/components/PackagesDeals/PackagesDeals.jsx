import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Droplets,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
  TestTube2,
} from 'lucide-react'

import slider1 from '../../assets/slider/slider-1.png'
import slider2 from '../../assets/slider/slider-2.png'
import slider3 from '../../assets/slider/slider-3.png'

const packages = [
  {
    title: 'Complete Wellness Package',
    tests: '86 Parameters',
    price: '₹1,499',
    oldPrice: '₹2,499',
    tag: 'Popular',
    image: slider1,
    icon: ShieldCheck,
    tone: 'berry',
  },
  {
    title: 'Essential Blood Screening',
    tests: '42 Parameters',
    price: '₹799',
    oldPrice: '₹1,299',
    tag: 'Best Value',
    image: slider2,
    icon: Droplets,
    tone: 'teal',
  },
  {
    title: 'Heart Health Profile',
    tests: '32 Parameters',
    price: '₹999',
    oldPrice: '₹1,699',
    tag: 'Preventive',
    image: slider3,
    icon: HeartPulse,
    tone: 'berry',
  },
  {
    title: 'Diabetes Care Package',
    tests: '28 Parameters',
    price: '₹699',
    oldPrice: '₹1,099',
    tag: 'Routine',
    image: slider2,
    icon: TestTube2,
    tone: 'teal',
  },
  {
    title: 'Advanced Lab Profile',
    tests: '64 Parameters',
    price: '₹1,899',
    oldPrice: '₹2,999',
    tag: 'Advanced',
    image: slider3,
    icon: Microscope,
    tone: 'berry',
  },
  {
    title: 'Family Health Saver',
    tests: '2 Members',
    price: '₹2,499',
    oldPrice: '₹3,999',
    tag: 'Family',
    image: slider1,
    icon: Sparkles,
    tone: 'teal',
  },
]

const tones = {
  berry: {
    soft: 'bg-[#FDF2F6]',
    text: 'text-[#B23A63]',
    pill: 'bg-[#B23A63] text-white',
    border: 'border-[#F0B8CC]',
  },
  teal: {
    soft: 'bg-[#ECFDF5]',
    text: 'text-[#168C83]',
    pill: 'bg-[#168C83] text-white',
    border: 'border-[#A9E8DF]',
  },
}

function PackagesDeals() {
  const scrollerRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const scrollByCard = useCallback((direction = 1) => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const firstCard = scroller.querySelector('article')
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 320
    const gap = 20
    const maxScroll = scroller.scrollWidth - scroller.clientWidth
    const nextLeft = scroller.scrollLeft + direction * (cardWidth + gap)

    scroller.scrollTo({
      left: nextLeft >= maxScroll - 8 ? 0 : Math.max(nextLeft, 0),
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    if (isPaused) return undefined

    const interval = window.setInterval(() => {
      scrollByCard(1)
    }, 2800)

    return () => window.clearInterval(interval)
  }, [isPaused, scrollByCard])

  return (
    <section className="overflow-hidden bg-[#FAFAF8] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-0.5 w-14 bg-[#B23A63]" aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#17202A]">
                Package Deals
              </p>
            </div>

            <h2 className="text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-[#17202A] sm:text-[3rem] lg:text-[3.6rem]">
              Health Packages with
              <br />
              <span className="text-[#B23A63]">Smart Savings.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#6B7280] sm:text-lg">
              Browse curated diagnostic packages for routine monitoring,
              preventive screening and family health needs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous package deal"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#B23A63] shadow-sm transition hover:border-[#B23A63] hover:bg-[#B23A63] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next package deal"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B23A63] text-white shadow-sm transition hover:bg-[#9f3156]"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="mt-9 flex gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [touch-action:pan-y] [&::-webkit-scrollbar]:hidden"
          aria-label="Auto scrolling package deals"
        >
          {packages.map(({ title, tests, price, oldPrice, tag, image, icon: Icon, tone }) => {
            const style = tones[tone]

            return (
              <article
                key={title}
                className={`min-w-[82vw] overflow-hidden rounded-2xl bg-white shadow-[0_18px_38px_-30px_rgba(23,32,42,0.65)] ring-1 ring-[#E5E7EB] sm:min-w-[22rem] lg:min-w-[23rem] ${style.border}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover object-[70%_center]"
                    draggable="false"
                  />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-extrabold ${style.pill}`}>
                    {tag}
                  </span>
                </div>

                <div className={`${style.soft} p-6`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white ${style.text}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div className="text-right">
                      <p className="text-sm font-bold text-[#6B7280] line-through">
                        {oldPrice}
                      </p>
                      <p className={`text-2xl font-extrabold ${style.text}`}>
                        {price}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold leading-tight text-[#17202A]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#6B7280]">
                    Includes {tests}
                  </p>

                  <button
                    type="button"
                    className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#B23A63] px-5 text-sm font-extrabold text-white transition hover:bg-[#9f3156]"
                  >
                    View Package
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-2 text-center text-sm font-medium text-[#6B7280]">
          Auto-scroll pauses when you hover, focus, or swipe.
        </p>
      </div>
    </section>
  )
}

export default PackagesDeals
