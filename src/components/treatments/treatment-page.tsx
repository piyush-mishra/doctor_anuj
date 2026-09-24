import Link from 'next/link';

export type PageSlug =
  | 'kidney-stone-treatment'
  | 'enlarged-prostate-treatment'
  | 'laser-urology'
  | 'male-infertility'
  | 'urinary-tract-infection'
  | 'prostate-cancer'
  | 'erectile-dysfunction'
  | 'bladder-stone-treatment'
  | 'contact'
  | 'book-appointment';

export const treatmentSlugs: PageSlug[] = [
  'kidney-stone-treatment',
  'enlarged-prostate-treatment',
  'laser-urology',
  'male-infertility',
  'urinary-tract-infection',
  'prostate-cancer',
  'erectile-dysfunction',
  'bladder-stone-treatment',
];

type PageContent = {
  title: string;
  eyebrow: string;
  description: string;
  points: string[];
};

export const pageContent: Record<PageSlug, PageContent> = {
  'kidney-stone-treatment': {
    eyebrow: 'Kidney stone care',
    title: 'Kidney Stone Treatment',
    description:
      'Expert diagnosis and advanced treatment for kidney stones, with a focus on precise, minimally invasive care and a comfortable recovery.',
    points: [
      'Laser stone removal and RIRS',
      'PCNL and ureteroscopy guidance',
      'Personalized prevention and follow-up plans',
    ],
  },
  'enlarged-prostate-treatment': {
    eyebrow: 'Prostate health',
    title: 'Enlarged Prostate Treatment',
    description:
      'Get clear answers and personalized treatment options for benign prostate enlargement and urinary symptoms.',
    points: [
      'Complete BPH evaluation',
      'Medication and minimally invasive options',
      'Long-term urinary health planning',
    ],
  },
  'laser-urology': {
    eyebrow: 'Advanced procedures',
    title: 'Laser Urology',
    description:
      'Modern laser techniques can treat common urological conditions with precision, smaller incisions, and faster recovery.',
    points: [
      'RIRS, URS and laser lithotripsy',
      'Advanced prostate procedures',
      'Evidence-led procedure planning',
    ],
  },
  'male-infertility': {
    eyebrow: 'Andrology care',
    title: 'Male Infertility Treatment',
    description:
      'A thorough, private evaluation to identify contributing factors and create a practical path toward better reproductive health.',
    points: [
      'Detailed fertility assessment',
      'Varicocele and sperm health care',
      'Couple-focused treatment planning',
    ],
  },
  'urinary-tract-infection': {
    eyebrow: 'Urinary health',
    title: 'Urinary Tract Infection Treatment',
    description:
      'Timely diagnosis and targeted treatment for urinary infections, recurrent UTIs, and related urinary symptoms.',
    points: [
      'Accurate infection diagnosis',
      'Recurrent UTI evaluation',
      'Prevention and lifestyle guidance',
    ],
  },
  'prostate-cancer': {
    eyebrow: 'Uro-oncology',
    title: 'Prostate Cancer Care',
    description:
      'Compassionate, coordinated care for prostate cancer, from evaluation and diagnosis through treatment planning and follow-up.',
    points: [
      'Risk-based prostate evaluation',
      'Clear explanation of treatment options',
      'Coordinated specialist referrals',
    ],
  },
  'erectile-dysfunction': {
    eyebrow: "Men's wellness",
    title: 'Erectile Dysfunction Treatment',
    description:
      'Confidential, evidence-based care for erectile dysfunction and the health factors that can affect sexual wellness.',
    points: [
      'Private medical evaluation',
      'Personalized treatment choices',
      'Heart and metabolic health screening',
    ],
  },
  'bladder-stone-treatment': {
    eyebrow: 'Bladder care',
    title: 'Bladder Stone Treatment',
    description:
      'Specialist assessment and minimally invasive options for bladder stones, urinary blockage, and recurrence prevention.',
    points: [
      'Imaging-led diagnosis',
      'Endoscopic stone treatment',
      'Recurrence prevention strategy',
    ],
  },
  contact: {
    eyebrow: 'We are here to help',
    title: 'Contact Dr. Anuj Arora',
    description:
      'Reach our team for clinic timings, directions, treatment questions, or help choosing the right appointment.',
    points: [
      'Max Super Specialty Hospital, Sector 128, Noida',
      'Mon - Sat: 10:00 AM - 6:00 PM',
      'Call or WhatsApp our care team',
    ],
  },
  'book-appointment': {
    eyebrow: 'Take the first step',
    title: 'Book an Appointment',
    description:
      'Tell us a little about your concern and our team will help arrange a suitable consultation.',
    points: [
      'Quick appointment coordination',
      'Private and patient-first consultation',
      'Support with documents and next steps',
    ],
  },
};

export function TreatmentPage({ slug }: { slug: PageSlug }) {
  const content = pageContent[slug];
  const isAppointment = slug === 'book-appointment';

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
            <Link href="/contact" className="text-slate-600 hover:text-cyan-700">
              Contact
            </Link>
            <Link
              href="/book-appointment"
              className="rounded-md bg-cyan-700 px-4 py-2.5 text-white hover:bg-cyan-800"
            >
              Book Appointment
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
          <Link
            href="/book-appointment"
            className="mt-8 inline-flex min-h-11 items-center rounded-md bg-cyan-500 px-5 text-sm font-bold text-white transition hover:bg-cyan-400"
          >
            Book an appointment
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-cyan-700 uppercase">
            Personalized care
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#08285a]">
            Clear guidance for your next step
          </h2>
          <ul className="mt-7 space-y-4">
            {content.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm"
              >
                <span className="mt-0.5 text-cyan-700">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-xl bg-white p-6 shadow-[0_10px_40px_rgba(8,40,90,0.08)] ring-1 ring-slate-100 sm:p-8">
          <p className="text-xs font-bold tracking-[0.2em] text-cyan-700 uppercase">
            {isAppointment ? 'Request a consultation' : 'Need help choosing care?'}
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-[#08285a]">Speak with our care team</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Call the clinic or request an appointment online. We will guide you through the right
            consultation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+911204123456"
              className="rounded-md border border-cyan-700 px-4 py-3 text-xs font-bold text-slate-800 hover:bg-cyan-50"
            >
              Call the clinic
            </a>
            <Link
              href="/book-appointment"
              className="rounded-md bg-cyan-700 px-4 py-3 text-xs font-bold text-white hover:bg-cyan-800"
            >
              Request appointment
            </Link>
          </div>
        </aside>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-6 text-center text-xs text-slate-500 sm:px-8">
        <Link href="/" className="font-semibold text-cyan-700 hover:text-cyan-800">
          Back to Dr. Anuj Arora home
        </Link>
      </footer>
    </main>
  );
}
