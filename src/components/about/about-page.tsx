import Link from 'next/link';

export type AboutSlug =
  'about-dr-anuj' | 'patient-education' | 'watch-videos' | 'health-library' | 'faqs' | 'blogs';

type AboutContent = {
  title: string;
  eyebrow: string;
  description: string;
  items: string[];
};

export const aboutSlugs: AboutSlug[] = [
  'about-dr-anuj',
  'patient-education',
  'watch-videos',
  'health-library',
  'faqs',
  'blogs',
];

export const aboutContent: Record<AboutSlug, AboutContent> = {
  'about-dr-anuj': {
    eyebrow: 'Meet your specialist',
    title: 'About Dr. Anuj Arora',
    description:
      "Learn about Dr. Anuj Arora's experience, training, and patient-first approach to urology and andrology care.",
    items: [
      '15+ years of urology experience',
      'Advanced endourology and minimally invasive training',
      'Clear, compassionate consultation for every patient',
    ],
  },
  'patient-education': {
    eyebrow: 'Understand your health',
    title: 'Patient Education',
    description:
      'Simple, practical information to help you prepare for consultations, procedures, recovery, and long-term urinary health.',
    items: [
      'What to expect before your consultation',
      'Treatment preparation and recovery guidance',
      'Questions to discuss with your urologist',
    ],
  },
  'watch-videos': {
    eyebrow: 'Learn visually',
    title: 'Watch Urology Videos',
    description:
      "Watch short, easy-to-understand videos about kidney stones, prostate health, urinary symptoms, and men's wellness.",
    items: [
      'Kidney stone and laser treatment explainers',
      'Prostate and urinary health videos',
      'Expert guidance for common urological concerns',
    ],
  },
  'health-library': {
    eyebrow: 'Evidence-led information',
    title: 'Urology Health Library',
    description:
      'Browse reliable health information covering common urology and andrology conditions, tests, and treatments.',
    items: [
      'Kidney and bladder health resources',
      "Prostate and men's health topics",
      'Treatment and recovery references',
    ],
  },
  faqs: {
    eyebrow: 'Your questions answered',
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about appointments, urology consultations, procedures, and follow-up care.',
    items: [
      'How should I prepare for an appointment?',
      'When should urinary symptoms be evaluated?',
      'How do I choose the right treatment page?',
    ],
  },
  blogs: {
    eyebrow: 'Latest insights',
    title: 'Urology Blogs',
    description:
      'Read practical articles on kidney stones, prostate health, urinary symptoms, male infertility, and preventive care.',
    items: [
      'New perspectives on urological health',
      'Treatment and prevention updates',
      'Patient-friendly expert advice',
    ],
  },
};

export function AboutPage({ slug }: { slug: AboutSlug }) {
  const content = aboutContent[slug];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="leading-none" aria-label="Go to Dr. Anuj Arora home">
            <strong className="block text-sm tracking-tight text-[#08285a]">DR. ANUJ ARORA</strong>
            <small className="text-[9px] font-bold tracking-wide text-cyan-700">
              UROLOGIST & ANDROLOGIST
            </small>
          </Link>
          <nav
            className="flex items-center gap-3 text-xs font-semibold sm:gap-6"
            aria-label="Page navigation"
          >
            <Link href="/" className="text-slate-600 hover:text-cyan-700">
              Home
            </Link>
            <Link href="/treatments" className="text-slate-600 hover:text-cyan-700">
              Treatments
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-cyan-700">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#062657] px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold tracking-[0.2em] text-cyan-300 uppercase">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            {content.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {content.items.map((item) => (
            <article
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-2xl text-cyan-700">✦</span>
              <h2 className="mt-4 text-lg font-extrabold text-[#08285a]">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore clear, patient-friendly guidance from our urology care team.
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/book-appointment"
            className="rounded-md bg-cyan-700 px-5 py-3 text-xs font-bold text-white hover:bg-cyan-800"
          >
            Book an appointment
          </Link>
          <Link
            href="/about-us"
            className="rounded-md border border-cyan-700 px-5 py-3 text-xs font-bold text-slate-800 hover:bg-cyan-50"
          >
            Explore About Us
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-6 text-center text-xs text-slate-500 sm:px-8">
        <Link href="/" className="font-semibold text-cyan-700 hover:text-cyan-800">
          Back to Dr. Anuj Arora home
        </Link>
      </footer>
    </main>
  );
}
