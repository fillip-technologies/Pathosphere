import {
  ArrowRight,
  Clock3,
  Download,
  Mail,
  MapPin,
  Phone,
  TestTube2,
  Truck,
} from 'lucide-react'

const quickLinks = [
  'Health Packages',
  'Tests',
  'Home Collection',
  'About Us',
  'Contact Us',
]

const services = [
  'Full Body Check-up',
  'Routine Blood Tests',
  'Specialized Profiles',
  'Pathology Reports',
  'Digital Health Records',
]

function Footer() {
  return (
    <footer className="bg-[#17202A] px-4 pt-14 text-white sm:px-6 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.25fr_0.85fr_0.85fr_1fr]">
          <div>
            <a href="/" className="inline-flex items-center gap-3" aria-label="Patho Sphere home">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#168C83]">
                <TestTube2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-2xl font-extrabold tracking-tight">
                  PATHO <span className="text-[#F06B9A]">SPHERE</span>
                </span>
                <span className="block text-sm font-medium text-white/60">
                  Your Health, Our Priority
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/68">
              A modern diagnostic laboratory experience for test discovery,
              home sample collection, reporting and digital health records.
            </p>

            <div className="mt-6 grid gap-3 text-sm font-medium text-white/72">
              <a href="tel:+919876543210" className="flex items-center gap-3 transition hover:text-white">
                <Phone className="h-4 w-4 text-[#F06B9A]" aria-hidden="true" />
                +91 98765 43210
              </a>
              <a href="mailto:care@pathosphere.com" className="flex items-center gap-3 transition hover:text-white">
                <Mail className="h-4 w-4 text-[#168C83]" aria-hidden="true" />
                care@pathosphere.com
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#F06B9A]" aria-hidden="true" />
                Diagnostic Centre, India
              </span>
            </div>
          </div>

          <nav aria-label="Footer quick links">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h2>
            <ul className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
                    className="text-sm font-medium text-white/65 transition hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">
              Services
            </h2>
            <ul className="mt-5 grid gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#tests"
                    className="text-sm font-medium text-white/65 transition hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">
              Patient Actions
            </h2>
            <div className="mt-5 grid gap-3">
              <a
                href="#home-collection"
                className="flex items-center justify-between rounded-2xl bg-white/7 px-4 py-3 text-sm font-bold text-white ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-[#168C83]" aria-hidden="true" />
                  Book Home Collection
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#download-report"
                className="flex items-center justify-between rounded-2xl bg-white/7 px-4 py-3 text-sm font-bold text-white ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <Download className="h-5 w-5 text-[#F06B9A]" aria-hidden="true" />
                  Download Report
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <div className="rounded-2xl bg-[#ECFDF5] p-4 text-[#17202A]">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-[#168C83]" aria-hidden="true" />
                  <p className="text-sm font-extrabold">Support Hours</p>
                </div>
                <p className="mt-2 text-sm font-medium text-[#6B7280]">
                  Monday to Saturday, 8:00 AM to 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Patho Sphere. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#privacy" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="transition hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
