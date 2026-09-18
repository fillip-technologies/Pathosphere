import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ChevronDown,
  Download,
  Menu,
  Phone,
  Truck,
  User,
  X,
} from 'lucide-react'

const NAV_LINKS = [
  { label: 'Health Packages', href: '#health-packages', hasDropdown: true },
  { label: 'Tests', href: '#tests', hasDropdown: true },
  { label: 'Home Collection', href: '#home-collection' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B23A63] focus-visible:ring-offset-2 focus-visible:ring-offset-white'

const NAV_LINK =
  'group relative inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap px-1 py-5 text-[15px] font-medium tracking-[0.01em] text-[#17202A] transition-colors duration-200 hover:text-[#B23A63]'

function Header({
  brandName = 'LAB NAME',
  tagline = 'Your Health, Our Priority',
  links = NAV_LINKS,
  activeHref = '#home-collection',
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')

    const handleChange = (event) => {
      if (event.matches) setIsMenuOpen(false)
    }

    desktop.addEventListener('change', handleChange)
    return () => desktop.removeEventListener('change', handleChange)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full bg-white text-[#17202A] shadow-[0_10px_30px_-24px_rgba(23,32,42,0.35)]">
      <div className="border-b border-[#E5E7EB]">
        <div className="mx-auto flex min-h-[5.5rem] max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className={`flex min-w-0 shrink-0 flex-col items-start justify-center rounded-md py-2 pr-4 leading-tight ${FOCUS_RING}`}
          >
            <span className="text-lg font-extrabold tracking-tight text-[#17202A] sm:text-xl">
              PATHO <span className="text-[#B23A63]">SPHERE</span>
            </span>
            <span className="mt-0.5 text-xs font-medium text-[#6B7280]">
              {tagline}
            </span>
            <span className="sr-only">{brandName}</span>
          </a>

          <div
            className="hidden h-10 flex-1 border-l border-[#E5E7EB] lg:ml-8 lg:block"
            aria-hidden="true"
          />

          <div className="hidden shrink-0 items-center gap-6 lg:flex">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FDF2F6] text-[#B23A63]">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-[#17202A]">Contact Us</p>
                <a
                  href="tel:+919876543210"
                  className={`text-base font-bold tracking-wide text-[#B23A63] transition-colors duration-200 hover:text-[#9f3156] ${FOCUS_RING}`}
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            <a
              href="#home-collection"
              className={`flex items-center gap-3 border-l border-[#E5E7EB] pl-6 transition-colors duration-200 hover:text-[#168C83] ${FOCUS_RING}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ECFDF5] text-[#168C83]">
                <Truck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-[#17202A]">
                  Home Collection
                </p>
                <p className="text-sm font-medium text-[#6B7280]">
                  Book a sample collection
                </p>
              </div>
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#17202A] transition-colors duration-200 hover:bg-[#FDF2F6] hover:text-[#B23A63] lg:hidden ${FOCUS_RING}`}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div className="hidden border-b border-[#E5E7EB] bg-white lg:block">
        <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="flex min-w-0 flex-1 items-center gap-4 xl:gap-8"
            aria-label="Primary"
          >
            {links.map((link) => {
              const isActive = link.href === activeHref

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`${NAV_LINK} ${FOCUS_RING} ${
                    isActive ? 'text-[#B23A63]' : ''
                  }`}
                >
                  {link.label}
                  {link.hasDropdown ? (
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-1 bottom-3 h-0.5 rounded-full bg-[#B23A63] transition-opacity duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                  />
                </a>
              )
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5 xl:gap-4">
            <a
              href="#download-report"
              className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap py-5 text-sm font-medium text-[#17202A] transition-colors duration-200 hover:text-[#B23A63] xl:text-[15px] ${FOCUS_RING}`}
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              Download Report
            </a>

            <span className="h-9 w-px bg-[#E5E7EB]" aria-hidden="true" />

            <a
              href="#login"
              className={`inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 text-sm font-semibold text-[#17202A] shadow-[0_8px_20px_-18px_rgba(23,32,42,0.6)] transition-colors duration-200 hover:border-[#B23A63]/40 hover:bg-[#FDF2F6] hover:text-[#B23A63] xl:h-12 xl:px-5 ${FOCUS_RING}`}
            >
              <User className="h-5 w-5" aria-hidden="true" />
              Login
            </a>

            <a
              href="#book-a-test"
              className={`inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#B23A63] px-4 text-sm font-semibold text-white shadow-[0_14px_28px_-18px_rgba(178,58,99,0.8)] transition-colors duration-200 hover:bg-[#9f3156] xl:h-12 xl:px-6 ${FOCUS_RING}`}
            >
              Book a Test
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[116rem] px-4 sm:px-6 lg:px-10">
        <div
          id="mobile-menu"
          inert={!isMenuOpen || undefined}
          className={`grid transition-all duration-300 ease-out lg:hidden ${
            isMenuOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-[#E5E7EB] py-3">
              <div className="mb-3 grid gap-2 border-b border-[#E5E7EB] pb-3">
                <a
                  href="tel:+919876543210"
                  onClick={closeMenu}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-[#17202A] hover:bg-[#FDF2F6] ${FOCUS_RING}`}
                >
                  <Phone className="h-4 w-4 text-[#B23A63]" aria-hidden="true" />
                  +91 98765 43210
                </a>
                <a
                  href="#home-collection"
                  onClick={closeMenu}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-[#17202A] hover:bg-[#ECFDF5] ${FOCUS_RING}`}
                >
                  <Truck className="h-4 w-4 text-[#168C83]" aria-hidden="true" />
                  Home Collection
                </a>
              </div>

              <nav className="flex flex-col gap-1" aria-label="Primary mobile">
                {links.map((link) => {
                  const isActive = link.href === activeHref

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center justify-between rounded-lg px-3 py-3 text-[15px] font-semibold transition-colors duration-200 hover:bg-[#FDF2F6] hover:text-[#B23A63] ${FOCUS_RING} ${
                        isActive ? 'bg-[#FDF2F6] text-[#B23A63]' : 'text-[#17202A]'
                      }`}
                    >
                      {link.label}
                      {link.hasDropdown ? (
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      ) : null}
                    </a>
                  )
                })}
              </nav>

              <div className="mt-3 flex flex-col gap-1 border-t border-[#E5E7EB] pt-3">
                <a
                  href="#download-report"
                  onClick={closeMenu}
                  className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[15px] font-semibold text-[#17202A] transition-colors duration-200 hover:bg-[#FDF2F6] hover:text-[#B23A63] ${FOCUS_RING}`}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Report
                </a>
                <a
                  href="#login"
                  onClick={closeMenu}
                  className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[15px] font-semibold text-[#17202A] transition-colors duration-200 hover:bg-[#FDF2F6] hover:text-[#B23A63] ${FOCUS_RING}`}
                >
                  <User className="h-4 w-4" aria-hidden="true" />
                  Login
                </a>
                <a
                  href="#book-a-test"
                  onClick={closeMenu}
                  className={`mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#B23A63] px-4 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#9f3156] ${FOCUS_RING}`}
                >
                  Book a Test
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
