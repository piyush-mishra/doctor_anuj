'use client';

import type { ReactNode } from 'react';
import { CldImage } from 'next-cloudinary';

type HeroIconName = 'calendar' | 'phone';

function HeroIcon({ name, size = 20 }: { name: HeroIconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  const paths = {
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 9h18" />
        <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" />
      </>
    ),
    phone: (
      <path d="M6.6 3.5 9 3l2 4.6-1.8 1.5a14.4 14.4 0 0 0 5.7 5.7l1.5-1.8 4.6 2-.5 2.4a2.3 2.3 0 0 1-2.5 1.8C10.3 18.4 5.6 13.7 4.8 6a2.3 2.3 0 0 1 1.8-2.5Z" />
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function HeroButton({
  children,
  onClick,
  outline = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  outline?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-xs font-bold transition hover:-translate-y-0.5 ${outline ? 'border border-cyan-700 bg-white text-slate-800 hover:bg-cyan-50' : 'bg-cyan-700 text-white shadow-lg shadow-cyan-900/10 hover:bg-cyan-800'}`}
    >
      {children}
    </button>
  );
}

export function Hero({ onBookAppointment }: { onBookAppointment: () => void }) {
  return (
    <section id="top" className="relative bg-[#f0f8fc]">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_45%_40%,#ffffff_0,#deedf8_54%,#c8e2f0_100%)] lg:block" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-7 px-5 py-10 sm:px-8 lg:min-h-[360px] lg:grid-cols-[1fr_1.05fr] lg:gap-0 lg:py-0">
        <div className="relative z-10 max-w-xl">
          <p className="mb-2 text-xs font-semibold text-cyan-700">
            Compassionate Care. Advanced Expertise.
          </p>
          <h1 className="max-w-lg text-4xl leading-[1.06] font-extrabold tracking-tight text-[#062657] sm:text-5xl">
            Expert Urology Care
            <br />
            For Better Lives
          </h1>
          <p className="mt-4 max-w-sm text-xs leading-6 text-slate-700">
            Specialized care for Kidney Stones, Prostate, Male Infertility and all Urological
            conditions using advanced technology and a patient-first approach.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <HeroButton onClick={onBookAppointment}>
              <HeroIcon name="calendar" size={15} /> Book Appointment
            </HeroButton>
            <HeroButton outline>
              <HeroIcon name="phone" size={15} /> Call Now
            </HeroButton>
            <HeroButton outline>
              <span className="text-base text-green-600">◉</span> WhatsApp
            </HeroButton>
          </div>
          <div className="mt-7 grid max-w-md grid-cols-4 gap-3 border-t border-slate-200 pt-4 text-[9px] font-semibold text-slate-700">
            <span>
              <b className="block text-sm text-[#08285a]">15+</b>Years
              <br />
              Experience
            </span>
            <span>
              <b className="block text-sm text-[#08285a]">5000+</b>Happy
              <br />
              Patients
            </span>
            <span>
              <b className="block text-sm text-[#08285a]">✣</b>Advanced
              <br />
              Laser Technology
            </span>
            <span>
              <b className="block text-sm text-[#08285a]">♧</b>Patient First
              <br />
              Approach
            </span>
          </div>
        </div>
        <div className="relative flex min-h-[300px] items-end justify-center lg:h-full lg:min-h-[360px]">
          <div className="absolute bottom-0 h-[90%] w-[76%] rounded-t-full bg-gradient-to-t from-[#c9dfec] to-transparent opacity-80" />
          <CldImage
            src="oardefault.jpg"
            width={290}
            height={365}
            config={{ cloud: { cloudName: 'eoanvi5b' } }}
            alt="Dr. Anuj Arora, urologist"
            className="relative z-10 h-[290px] w-[230px] object-cover object-top mix-blend-multiply sm:h-[340px] sm:w-[270px] lg:h-[365px] lg:w-[290px]"
            sizes="(max-width: 640px) 230px, (max-width: 1024px) 270px, 290px"
          />
          <div className="absolute top-1/2 right-0 z-20 w-44 -translate-y-1/2 rounded-lg border border-white bg-white/95 p-4 shadow-xl sm:right-3 lg:right-0">
            <p className="text-[8px] font-semibold text-slate-500">Associated With</p>
            <strong className="mt-1 block text-xl text-[#092c63]">✦ MAX</strong>
            <p className="text-[8px] font-bold text-cyan-700">Healthcare</p>
            <div className="mt-3 space-y-2 text-[9px] leading-tight text-slate-600">
              <p>♧ MBBS, MS, MCh (Urology)</p>
              <p>♧ Senior Urologist</p>
              <p>
                ⌖ Max Super Specialty Hospital
                <br />
                &nbsp;&nbsp;Noida
              </p>
              <p>♧ Ex-Consultant, Jaypee Hospital</p>
            </div>
            <div className="mt-3 border-t pt-2 text-[10px] font-bold">
              ⭐ 4.9/5 <span className="font-normal text-slate-500">(250+ Google Reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
