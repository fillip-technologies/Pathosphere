import { useEffect, useState } from 'react'

import slider1 from '../../assets/slider/slider-1.png'
import slider2 from '../../assets/slider/slider-2.png'
import slider3 from '../../assets/slider/slider-3.png'

const SLIDE_INTERVAL = 4500

const SLIDES = [
  { alt: 'Health check-up family offer', image: slider1 },
  { alt: 'Home collection healthcare offer', image: slider2 },
  { alt: 'Diagnostic laboratory offer', image: slider3 },
]

function Hero({ slides = SLIDES }) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, SLIDE_INTERVAL)

    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Homepage promotional slider"
      className="relative scroll-mt-28 overflow-hidden bg-[#FAFAF8]"
    >
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <article
              key={slide.image}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              className="relative min-w-full"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="block aspect-[2094/751] w-full object-cover"
                draggable="false"
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </article>
          ))}
        </div>

        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={activeSlide === index ? 'true' : undefined}
              className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                activeSlide === index ? 'bg-[#B23A63]' : 'bg-[#D8D8D8]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
