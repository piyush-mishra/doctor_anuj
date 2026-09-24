"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { Hero } from "../components/homepage/hero";

type IconName =
	| "arrow"
	| "calendar"
	| "chevron"
	| "clock"
	| "close"
	| "heart"
	| "menu"
	| "moon"
	| "phone"
	| "pin"
	| "play"
	| "plus"
	| "shield"
	| "spark"
	| "star"
	| "sun"
	| "user";

const services = [
	{ title: "Kidney Stone Treatment", description: "Advanced laser treatment for all types of kidney stones.", icon: "◇" },
	{ title: "Enlarged Prostate (BPH)", description: "Minimally invasive treatment for prostate enlargement.", icon: "♧" },
	{ title: "Laser Urology Procedures", description: "RIRS, PCNL, URS & other advanced laser procedures.", icon: "⌁" },
	{ title: "Male Infertility Treatment", description: "Evaluation & treatment for male fertility and reproductive health.", icon: "♂" },
	{ title: "Erectile Dysfunction Treatment", description: "Personalized solutions for ED and sexual wellness.", icon: "○" },
	{ title: "UTI & Urinary Problems", description: "Diagnosis and treatment of recurrent infections and urinary issues.", icon: "⌾" },
];

const testimonials = [
	{ name: "Rahul Verma", quote: "Very experienced doctor. He explained my problem in detail and the treatment was very effective." },
	{ name: "Neha Sharma", quote: "Best urologist in Noida. Highly recommended for kidney stone treatment." },
	{ name: "Amit Singhal", quote: "Excellent experience. Staff is very supportive and doctor is very humble." },
];

const journey = [
	["01", "Book Appointment", "calendar"],
	["02", "Consultation & Evaluation", "user"],
	["03", "Accurate Diagnosis", "shield"],
	["04", "Personalized Treatment Plan", "spark"],
	["05", "Advanced Procedure", "plus"],
	["06", "Recovery & Follow Up", "heart"],
] as const;

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
	const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

	const paths: Record<IconName, React.ReactNode> = {
		arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
		calendar: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 9h18" /><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" /></>,
		chevron: <path d="m6 9 6 6 6-6" />,
		clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
		close: <><path d="m6 6 12 12M18 6 6 18" /></>,
		heart: <path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6a4.6 4.6 0 0 1 8.8 2.6Z" />,
		menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
		moon: <><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" /><path d="M17 4h.01M20 7h.01" /></>,
		phone: <path d="M6.6 3.5 9 3l2 4.6-1.8 1.5a14.4 14.4 0 0 0 5.7 5.7l1.5-1.8 4.6 2-.5 2.4a2.3 2.3 0 0 1-2.5 1.8C10.3 18.4 5.6 13.7 4.8 6a2.3 2.3 0 0 1 1.8-2.5Z" />,
		pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
		play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 5 4-5 4V8Z" fill="currentColor" stroke="none" /></>,
		plus: <><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></>,
		shield: <><path d="M12 3 20 6v5c0 5-3.3 8.3-8 10-4.7-1.7-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
		spark: <><path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3Z" /><path d="m19 16-.6 2.4L16 19l2.4.6L19 22l.6-2.4L22 19l-2.4-.6L19 16Z" /></>,
		star: <path d="m12 3 2.8 5.8 6.2.9-4.5 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 9.7l6.2-.9L12 3Z" fill="currentColor" stroke="none" />,
		sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
		user: <><circle cx="12" cy="8" r="3.5" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></>,
	};

	return <svg {...common}>{paths[name]}</svg>;
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
	return <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">{children}</p>;
}

function ActionButton({ children, onClick, outline = false }: { children: React.ReactNode; onClick?: () => void; outline?: boolean }) {
	return <button onClick={onClick} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-xs font-bold transition hover:-translate-y-0.5 ${outline ? "border border-cyan-700 bg-white text-slate-800 hover:bg-cyan-50" : "bg-cyan-700 text-white shadow-lg shadow-cyan-900/10 hover:bg-cyan-800"}`}>{children}</button>;
}

export default function Home() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [appointmentOpen, setAppointmentOpen] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();
	const darkMode = resolvedTheme === "dark";

	const openAppointment = () => {
		setMenuOpen(false);
		setAppointmentOpen(true);
	};

	return (
		<main className={`min-h-screen overflow-hidden bg-white text-slate-900 ${darkMode ? "theme-dark" : ""}`}>
			{/* Header */}
			<div className="bg-[#071d46] px-5 py-2 text-[10px] text-white sm:px-8"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4"><button type="button" onClick={() => setTheme(darkMode ? "light" : "dark")} className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-2.5 py-1 text-[10px] font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={darkMode}><Icon name={darkMode ? "sun" : "moon"} size={12} /> {darkMode ? "Light mode" : "Dark mode"}</button><span className="hidden items-center gap-1.5 sm:flex"><Icon name="pin" size={12} /> Max Super Specialty Hospital, Sector 128, Noida</span><span className="hidden items-center gap-1.5 md:flex"><Icon name="clock" size={12} /> Mon - Sat: 10:00 AM - 6:00 PM</span><span className="hidden gap-3 text-[11px] sm:flex"><span>f</span><span>◎</span><span>▶</span></span></div></div>

			<header className="relative z-30 border-b border-slate-100 bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:py-4"><a href="#top" className="flex items-center gap-2.5" aria-label="Dr. Anuj Arora home"><span className="relative flex h-9 w-9 items-center justify-center text-3xl font-bold text-cyan-700">⚕<span className="absolute -bottom-1 right-0 text-[11px] text-sky-500">+</span></span><span className="leading-none"><strong className="block text-sm tracking-tight text-[#08285a]">DR. ANUJ ARORA</strong><small className="text-[8px] font-bold tracking-wide text-cyan-700">UROLOGIST & ANDROLOGIST</small></span></a><nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{["Home", "About Doctor", "Treatments", "Conditions", "For Patients", "Blogs", "Contact"].map((item, index) => <a key={item} href={index === 0 ? "#top" : `#${item.toLowerCase().replaceAll(" ", "-")}`} className={`flex items-center gap-1 border-b-2 py-3 text-[11px] font-semibold transition ${index === 0 ? "border-cyan-600 text-cyan-700" : "border-transparent text-slate-700 hover:border-cyan-600 hover:text-cyan-700"}`}>{item}{[2, 3, 4].includes(index) && <Icon name="chevron" size={11} />}</a>)}</nav><div className="hidden lg:block"><ActionButton onClick={openAppointment}><Icon name="calendar" size={15} /> Book Appointment</ActionButton></div><button className="rounded-md p-2 text-[#08285a] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}><Icon name={menuOpen ? "close" : "menu"} size={24} /></button></div>{menuOpen && <nav className="border-t border-slate-100 bg-white px-5 pb-5 pt-2 lg:hidden" aria-label="Mobile navigation">{["Home", "About Doctor", "Treatments", "Conditions", "For Patients", "Blogs", "Contact"].map((item) => <a key={item} href={item === "Home" ? "#top" : `#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setMenuOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-semibold text-slate-700">{item}</a>)}<div className="pt-4"><ActionButton onClick={openAppointment}><Icon name="calendar" size={15} /> Book Appointment</ActionButton></div></nav>}</header>

			{/* Hero Section */}
			<Hero onBookAppointment={openAppointment} />

			{/* Services Section */}
			<section id="treatments" className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10"><SectionEyebrow>Our Expertise</SectionEyebrow><h2 className="text-center text-xl font-extrabold text-[#08285a] sm:text-2xl">Comprehensive Urology & Andrology Solutions</h2><div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">{services.map((service) => <article key={service.title} className="group rounded-lg border border-slate-100 bg-white p-4 text-center shadow-[0_4px_18px_rgba(8,40,90,0.05)] transition hover:-translate-y-1 hover:shadow-lg"><div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-2xl text-cyan-700">{service.icon}</div><h3 className="mt-3 min-h-8 text-[11px] font-bold leading-tight text-[#08285a]">{service.title}</h3><p className="mt-2 min-h-12 text-[9px] leading-4 text-slate-600">{service.description}</p><a href="#contact" className="mt-3 inline-flex items-center gap-1 text-[9px] font-bold text-cyan-700">Learn More <Icon name="arrow" size={11} /></a></article>)}</div></section>

			<section id="about-doctor" className="bg-[#f4f9fc] py-8 sm:py-10"><div className="mx-auto grid max-w-7xl items-center gap-7 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.6fr_0.9fr]"><img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=85" alt="Dr. Anuj Arora consulting with a patient" className="h-48 w-full rounded-lg object-cover object-top sm:h-56 lg:h-36" /><div><SectionEyebrow>About Dr. Anuj Arora</SectionEyebrow><h2 className="text-2xl font-extrabold text-[#08285a]">Trusted. Experienced. Committed.</h2><p className="mt-2 text-[11px] leading-5 text-slate-600">Dr. Anuj Arora is a highly skilled Urologist & Andrologist with over 15 years of experience in diagnosing and treating a wide range of urological and male health conditions. He is trained in advanced endourology and minimally invasive procedures.</p><div className="mt-4 grid grid-cols-2 gap-3 text-[9px] font-semibold text-slate-600 sm:grid-cols-4"><span><b className="block text-sm text-[#08285a]">15+</b>Years of Experience</span><span><b className="block text-sm text-[#08285a]">MBBS, MS,</b>MCh (Urology)</span><span><b className="block text-sm text-[#08285a]">5000+</b>Successful Procedures</span><span><b className="block text-sm text-[#08285a]">20+</b>Research Publications</span></div></div><aside className="rounded-lg bg-[#062657] p-5 text-white"><h3 className="text-xs font-bold">Areas of Interest</h3><ul className="mt-3 space-y-2 text-[10px] text-slate-100"><li>✓ Endourology & Laser Surgery</li><li>✓ Kidney Stone Management</li><li>✓ Prostate (BPH) Treatment</li><li>✓ Male Infertility & Andrology</li><li>✓ Uro-Oncology</li><li>✓ Reconstructive Urology</li></ul></aside></div></section>

			<section id="conditions" className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10"><SectionEyebrow>Your Journey With Us</SectionEyebrow><div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">{journey.map(([number, title, icon]) => <div key={number} className="relative flex items-center gap-2 rounded-lg border border-slate-100 bg-white p-3 shadow-sm"><span className="text-cyan-700"><Icon name={icon} size={24} /></span><span><b className="block text-[10px] text-[#08285a]">{number}</b><span className="text-[9px] font-semibold leading-tight text-slate-600">{title}</span></span></div>)}</div></section>

			{/* Testimonials Section */}
			<section className="bg-[#f5f9fc] py-8 sm:py-10"><div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 lg:grid-cols-[0.8fr_1fr_1fr_1fr]"><div className="flex flex-col justify-center rounded-lg border border-slate-100 bg-white p-5"><SectionEyebrow>Patients Love Us</SectionEyebrow><div className="text-center text-3xl font-extrabold text-[#08285a]">4.9</div><div className="flex justify-center text-amber-400"><Icon name="star" size={17} /><Icon name="star" size={17} /><Icon name="star" size={17} /><Icon name="star" size={17} /><Icon name="star" size={17} /></div><p className="mt-2 text-center text-[10px] text-slate-500">G 250+ Google Reviews</p></div>{testimonials.map((testimonial) => <article key={testimonial.name} className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm"><div className="flex items-center gap-1 text-amber-400"><span className="font-black text-red-500">G</span><Icon name="star" size={14} /><Icon name="star" size={14} /><Icon name="star" size={14} /><Icon name="star" size={14} /><Icon name="star" size={14} /></div><p className="mt-3 text-[10px] leading-5 text-slate-600">{testimonial.quote}</p><p className="mt-3 text-[10px] font-semibold text-slate-800">- {testimonial.name}</p></article>)}</div></section>

			<section id="blogs" className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10"><SectionEyebrow>Learn, Watch & Stay Informed</SectionEyebrow><div className="mt-5 grid gap-4 md:grid-cols-3"><article className="flex items-center justify-between gap-3 rounded-lg bg-[#f2f6fa] p-4"><div><h3 className="text-[11px] font-bold text-[#08285a]">Educational Videos</h3><p className="mt-2 text-[9px] leading-4 text-slate-600">Watch videos on kidney health, prostate, stones and more.</p><a className="mt-3 inline-flex items-center gap-1 text-[9px] font-bold text-cyan-700" href="#contact">View Videos <Icon name="arrow" size={11} /></a></div><div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md"><img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=220&q=80" alt="Educational video" className="h-full w-full object-cover" /><span className="absolute inset-0 flex items-center justify-center text-white"><Icon name="play" size={28} /></span></div></article><article className="flex items-center justify-between gap-3 rounded-lg bg-[#f2f6fa] p-4"><div><h3 className="text-[11px] font-bold text-[#08285a]">Latest Articles</h3><p className="mt-2 text-[9px] leading-4 text-slate-600">Read expert articles on urology, men&apos;s health & treatments.</p><a className="mt-3 inline-flex items-center gap-1 text-[9px] font-bold text-cyan-700" href="#contact">Read Articles <Icon name="arrow" size={11} /></a></div><div className="h-20 w-24 shrink-0 overflow-hidden rounded-md bg-cyan-100"><div className="flex h-full items-center justify-center text-4xl">🫀</div></div></article><article className="flex items-center justify-between gap-3 rounded-lg bg-[#f2f6fa] p-4"><div><h3 className="text-[11px] font-bold text-[#08285a]">Patient Guides</h3><p className="mt-2 text-[9px] leading-4 text-slate-600">Helpful guides for a better treatment experience.</p><a className="mt-3 inline-flex items-center gap-1 text-[9px] font-bold text-cyan-700" href="#contact">View Guides <Icon name="arrow" size={11} /></a></div><div className="flex h-20 w-24 items-center justify-center rounded-md bg-[#c9e2ee] text-center text-[10px] font-extrabold text-[#08285a]">KIDNEY<br />STONE GUIDE</div></article></div></section>

			{/* Statistics Section */}
			<section id="contact" className="bg-[#062657] py-5 text-white"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 sm:px-8 md:grid-cols-5"><div><b className="block text-xl">15+</b><span className="text-[9px] text-slate-200">Years Experience</span></div><div><b className="block text-xl">5000+</b><span className="text-[9px] text-slate-200">Happy Patients</span></div><div><b className="block text-xl">20+</b><span className="text-[9px] text-slate-200">Advanced Procedures</span></div><div><b className="block text-xl">2</b><span className="text-[9px] text-slate-200">Locations</span></div><div><b className="block text-xl">98%</b><span className="text-[9px] text-slate-200">Patient Satisfaction</span></div></div></section>
			{/* FAQ Section */}
			{/* Footer */}
			<section className="bg-cyan-700 py-5 text-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:px-8 md:flex-row"><div><h2 className="text-sm font-bold">Don&apos;t ignore your urological health.</h2><p className="text-xs text-cyan-100">Consult an expert today.</p></div><div className="flex flex-wrap items-center justify-center gap-3"><ActionButton onClick={openAppointment}><Icon name="calendar" size={15} /> Book Appointment</ActionButton><ActionButton outline><Icon name="phone" size={15} /> Call Now</ActionButton><div className="flex items-center gap-2 text-xs font-bold"><span className="text-2xl">◉</span> Chat on WhatsApp</div></div></div></section>

			{appointmentOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#061a3c]/70 p-5" role="dialog" aria-modal="true" aria-labelledby="appointment-title"><div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl"><button onClick={() => setAppointmentOpen(false)} className="absolute right-4 top-4 text-slate-500 hover:text-slate-900" aria-label="Close appointment form"><Icon name="close" size={20} /></button><p className="text-xs font-bold uppercase tracking-widest text-cyan-700">Take the first step</p><h2 id="appointment-title" className="mt-1 text-2xl font-extrabold text-[#08285a]">Book an Appointment</h2><p className="mt-2 text-xs text-slate-500">Share your details and our team will call you shortly.</p><form className="mt-5 space-y-3" onSubmit={(event) => { event.preventDefault(); setAppointmentOpen(false); }}><label className="block text-xs font-semibold text-slate-700">Full name<input required className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm font-normal outline-none focus:border-cyan-600" placeholder="Your name" /></label><label className="block text-xs font-semibold text-slate-700">Phone number<input required type="tel" className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm font-normal outline-none focus:border-cyan-600" placeholder="10-digit mobile number" /></label><label className="block text-xs font-semibold text-slate-700">How can we help?<textarea className="mt-1 w-full resize-none rounded-md border border-slate-200 px-3 py-2.5 text-sm font-normal outline-none focus:border-cyan-600" rows={3} placeholder="Tell us briefly"></textarea></label><button className="mt-2 min-h-11 w-full rounded-md bg-cyan-700 text-sm font-bold text-white hover:bg-cyan-800" type="submit">Request Appointment</button></form></div></div>}
		</main>
	);
}