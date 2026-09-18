import { useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Lock,
  MapPin,
  Phone,
  TestTube2,
  User,
} from 'lucide-react'
import banner from '../../assets/BANNER.png'

const benefits = [
  { label: 'Easy Booking', icon: CalendarDays, color: '#B23A63', bg: '#FDF2F6' },
  { label: 'Trained Professionals', icon: User, color: '#168C83', bg: '#ECFDF5' },
  { label: 'Safe Sample Collection', icon: TestTube2, color: '#B23A63', bg: '#FDF2F6' },
  { label: 'Track Your Collection', icon: MapPin, color: '#168C83', bg: '#ECFDF5' },
]

const inputClass =
  'h-11 w-full rounded-xl border border-[#E5E7EB] bg-white pl-10 pr-4 text-sm font-medium text-[#17202A] outline-none transition focus:border-[#168C83] focus:ring-2 focus:ring-[#168C83]/15 placeholder:text-[#8C97A6]'

function HomeSampleCollection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="bg-[#FAFAF8] px-4 pt-6 pb-14 sm:px-6 sm:pt-8 lg:px-8 lg:pt-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] bg-[#ECFDF5] shadow-[0_24px_70px_-46px_rgba(23,32,42,0.7)] ring-1 ring-[#E5E7EB] lg:h-[650px]">
          <img
            src={banner}
            alt="Home sample collection with a professional phlebotomist"
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
            draggable="false"
          />

          <div
            className="absolute inset-0 z-10 bg-gradient-to-r from-white/96 via-white/76 via-45% to-white/8"
            aria-hidden="true"
          />

          <div className="relative z-20 min-h-[650px] px-6 py-10 sm:px-10 sm:py-12 lg:h-full lg:min-h-0 lg:px-0 lg:py-0">
            <div className="w-full max-w-[560px] lg:absolute lg:left-12 lg:top-1/2 lg:w-[52%] lg:-translate-y-1/2 xl:left-14">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-0.5 w-16 bg-[#B23A63]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#17202A]">
                  Home Sample Collection
                </p>
              </div>

              <h2 className="max-w-[560px] text-[3.25rem] font-extrabold leading-[1.02] tracking-tight text-[#17202A] sm:text-[4rem] lg:text-[56px] xl:text-[60px]">
                <span className="lg:whitespace-nowrap">Healthcare at</span>
                <span className="block text-[#B23A63] lg:whitespace-nowrap">
                  Your Doorstep.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-lg font-medium leading-relaxed text-[#344253]">
                Book a convenient home sample collection without visiting the
                laboratory.
              </p>

              <div className="mt-7 grid max-w-sm gap-3.5">
                {benefits.map(({ label, icon: Icon, color, bg }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: bg, color }}
                    >
                      <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                    </span>
                    <span className="text-base font-extrabold leading-tight text-[#17202A]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative z-30 mx-5 mb-6 w-auto max-w-[410px] rounded-3xl bg-white p-5 shadow-[0_24px_70px_-38px_rgba(23,32,42,0.85)] ring-1 ring-[#E5E7EB] sm:mx-10 lg:absolute lg:right-8 lg:top-1/2 lg:mx-0 lg:mb-0 lg:w-[410px] lg:max-w-[410px] lg:-translate-y-1/2 lg:p-6"
          >
            <div className="mb-4 flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#168C83]">
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-extrabold leading-tight tracking-tight text-[#17202A]">
                  Book Home Sample Collection
                </h3>
                <p className="mt-1 text-sm leading-snug text-[#6B7280]">
                  Schedule a convenient sample collection from your home.
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              <label htmlFor="home-name" className="block">
                <span className="mb-1.5 block text-sm font-extrabold text-[#17202A]">
                  Full Name <span className="text-[#B23A63]">*</span>
                </span>
                <span className="relative block">
                  <User className="absolute left-3.5 top-3 h-5 w-5 text-[#6B7280]" aria-hidden="true" />
                  <input
                    id="home-name"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className={inputClass}
                  />
                </span>
              </label>

              <label htmlFor="home-mobile" className="block">
                <span className="mb-1.5 block text-sm font-extrabold text-[#17202A]">
                  Mobile Number <span className="text-[#B23A63]">*</span>
                </span>
                <span className="relative block">
                  <Phone className="absolute left-3.5 top-3 h-5 w-5 text-[#6B7280]" aria-hidden="true" />
                  <input
                    id="home-mobile"
                    name="mobileNumber"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel"
                    className={inputClass}
                  />
                </span>
              </label>

              <label htmlFor="home-address" className="block">
                <span className="mb-1.5 block text-sm font-extrabold text-[#17202A]">
                  Address <span className="text-[#B23A63]">*</span>
                </span>
                <span className="relative block">
                  <MapPin className="absolute left-3.5 top-3 h-5 w-5 text-[#6B7280]" aria-hidden="true" />
                  <textarea
                    id="home-address"
                    name="address"
                    rows={2}
                    placeholder="House number, street, area, city"
                    autoComplete="street-address"
                    className="min-h-16 w-full resize-none rounded-xl border border-[#E5E7EB] bg-white py-2.5 pl-10 pr-4 text-sm font-medium text-[#17202A] outline-none transition focus:border-[#168C83] focus:ring-2 focus:ring-[#168C83]/15 placeholder:text-[#8C97A6]"
                  />
                </span>
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <label htmlFor="home-date" className="block">
                  <span className="mb-1.5 block text-sm font-extrabold text-[#17202A]">
                    Preferred Date <span className="text-[#B23A63]">*</span>
                  </span>
                  <span className="relative block">
                    <CalendarDays className="absolute left-3.5 top-3 h-5 w-5 text-[#6B7280]" aria-hidden="true" />
                    <input
                      id="home-date"
                      name="preferredDate"
                      type="text"
                      placeholder="Select date"
                      className={inputClass}
                    />
                  </span>
                </label>

                <label htmlFor="home-time" className="block">
                  <span className="mb-1.5 block text-sm font-extrabold text-[#17202A]">
                    Preferred Time <span className="text-[#B23A63]">*</span>
                  </span>
                  <span className="relative block">
                    <Clock3 className="absolute left-3.5 top-3 h-5 w-5 text-[#6B7280]" aria-hidden="true" />
                    <select
                      id="home-time"
                      name="preferredTime"
                      className="h-11 w-full appearance-none rounded-xl border border-[#E5E7EB] bg-white pl-10 pr-4 text-sm font-medium text-[#6B7280] outline-none transition focus:border-[#168C83] focus:ring-2 focus:ring-[#168C83]/15"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select time
                      </option>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#B23A63] px-5 text-base font-extrabold text-white shadow-[0_16px_32px_-22px_rgba(178,58,99,0.95)] transition hover:bg-[#9f3156] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B23A63] focus-visible:ring-offset-2"
            >
              Book Home Collection
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <p className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-[#6B7280]">
              <Lock className="h-4 w-4" aria-hidden="true" />
              Your information is safe with us.
            </p>

            {isSubmitted ? (
                <p className="mt-3 flex items-start gap-2 rounded-xl bg-[#ECFDF5] px-4 py-2.5 text-sm font-semibold text-[#168C83]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Your request has been received.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}

export default HomeSampleCollection
