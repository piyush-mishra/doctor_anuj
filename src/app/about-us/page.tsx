import type { Metadata } from 'next';
import Link from 'next/link';
import { aboutContent, aboutSlugs } from '../../components/about/about-page';

export const metadata: Metadata = {
  title: 'About Us | Dr. Anuj Arora',
  description:
    "Explore Dr. Anuj Arora's profile, patient education, health library, videos, FAQs, and urology blogs.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="leading-none">
            <strong className="block text-sm tracking-tight text-[#08285a]">DR. ANUJ ARORA</strong>
            <small className="text-[9px] font-bold tracking-wide text-cyan-700">
              UROLOGIST & ANDROLOGIST
            </small>
          </Link>
          <nav className="flex items-center gap-3 text-xs font-semibold sm:gap-6">
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
            Knowledge and care
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            About Us
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            Meet the team, understand your care, and find trusted urology information from Dr. Anuj
            Arora.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutSlugs.map((slug) => {
            const content = aboutContent[slug];
            return (
              <Link
                key={slug}
                href={`/about-us/${slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg"
              >
                <p className="text-xs font-bold tracking-[0.15em] text-cyan-700 uppercase">
                  {content.eyebrow}
                </p>
                <h2 className="mt-3 text-xl font-extrabold text-[#08285a]">{content.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{content.description}</p>
                <span className="mt-5 inline-flex text-xs font-bold text-cyan-700 group-hover:text-cyan-800">
                  Explore page →
                </span>
              </Link>
            );
          })}
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
