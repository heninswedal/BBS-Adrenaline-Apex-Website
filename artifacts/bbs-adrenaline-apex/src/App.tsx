import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronRight, Clock3, Gauge, Instagram, MapPin, Menu, Navigation, Phone, Play, Route, Trophy, X } from 'lucide-react';
import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route as WouterRoute, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=MANGALORE%20GATE%2C%20Kankanady%20Bypass%20Rd%2C%20Bendoorwell%2C%20Kankanady%2C%20Mangaluru%2C%20Karnataka%20575002';
const phoneUrl = 'tel:+919778600824';

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" className={`focus-ring inline-flex items-center gap-3 ${inverse ? 'text-[#f5f0df]' : 'text-[#111b2e]'}`} aria-label="BBS Adrenaline Apex home">
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-current">
        <span className="absolute right-[5px] top-[7px] h-[2px] w-4 -rotate-45 bg-[#cbff42]" />
        <span className="relative font-display text-[19px] font-black leading-none">BBS</span>
      </span>
      <span className="leading-[.82]">
        <span className="block font-display text-[19px] font-extrabold tracking-[.08em]">ADRENALINE</span>
        <span className="block font-mono-custom text-[9px] tracking-[.28em] opacity-65">APEX / MANGALORE</span>
      </span>
    </a>
  );
}

function SectionLabel({ number, children, inverse = false }: { number: string; children: ReactNode; inverse?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.24em] ${inverse ? 'text-[#cbff42]' : 'text-[#667083]'}`}>
      <span className="font-semibold">{number}</span>
      <span className={`h-px w-8 ${inverse ? 'bg-[#cbff42]' : 'bg-[#667083]'}`} />
      <span>{children}</span>
    </div>
  );
}

function AppHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="site-shell min-h-[100dvh] bg-[#f4efdf] text-[#111b2e]">
      <header className={`nav-shell sticky inset-x-0 top-0 z-40 border-b border-[#111b2e]/10 transition-shadow duration-300 ${scrolled ? 'shadow-[0_10px_34px_rgba(17,27,46,.08)]' : ''}`}>
        <div className="mx-auto flex h-[74px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <BrandMark />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            <a className="focus-ring font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#667083] transition-colors hover:text-[#111b2e]" href="#experience">Experience</a>
            <a className="focus-ring font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#667083] transition-colors hover:text-[#111b2e]" href="#stories">Racers say</a>
            <a className="focus-ring font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#667083] transition-colors hover:text-[#111b2e]" href="#visit">Find us</a>
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a href={phoneUrl} className="focus-ring group inline-flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#111b2e]">
              <Phone size={14} strokeWidth={1.8} />
              <span>097786 00824</span>
            </a>
            <a href={directionsUrl} target="_blank" rel="noreferrer" className="focus-ring skew-btn inline-flex items-center gap-2 bg-[#cbff42] px-5 py-3 font-mono-custom text-[10px] font-semibold uppercase tracking-[.16em] text-[#111b2e] transition-transform hover:-translate-y-0.5">
              <span>Get directions <ArrowUpRight className="ml-1 inline-block" size={14} /></span>
            </a>
          </div>
          <button className="focus-ring inline-flex items-center justify-center p-2 lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#111b2e]/10 bg-[#f4efdf] px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
              <a onClick={closeMenu} className="focus-ring font-display text-3xl font-bold uppercase tracking-tight" href="#experience">Experience</a>
              <a onClick={closeMenu} className="focus-ring font-display text-3xl font-bold uppercase tracking-tight" href="#stories">Racers say</a>
              <a onClick={closeMenu} className="focus-ring font-display text-3xl font-bold uppercase tracking-tight" href="#visit">Find us</a>
              <a onClick={closeMenu} href={phoneUrl} className="mt-2 inline-flex w-fit items-center gap-2 bg-[#111b2e] px-5 py-3 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#f4efdf]"><Phone size={14} /> Call the Apex</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="dark-panel hero-sheen relative min-h-[686px] overflow-hidden" aria-labelledby="hero-title">
          <div className="absolute inset-0 bg-[linear-gradient(105deg,#111b2e_15%,rgba(17,27,46,.88)_52%,rgba(17,27,46,.34)_100%)]" />
          <div className="relative mx-auto grid min-h-[686px] max-w-[1320px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(290px,410px)] lg:gap-16 lg:px-12 lg:py-24">
            <div className="relative z-10 max-w-[770px]">
              <div className="reveal flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.3em] text-[#cbff42]">
                <span className="h-2 w-2 rounded-full bg-[#cbff42] shadow-[0_0_0_5px_rgba(203,255,66,.12)]" />
                Mangalore's first pro racing simulator
              </div>
              <h1 id="hero-title" className="reveal reveal-delay-1 mt-7 max-w-[790px] font-display text-[clamp(4.1rem,16vw,11.5rem)] font-black uppercase leading-[.86] tracking-[-.045em] text-[#f5f0df] lg:text-[clamp(8rem,14vw,11.5rem)]">
                Feel<br /><span className="text-[#cbff42]">the track.</span>
              </h1>
              <p className="reveal reveal-delay-2 mt-8 max-w-[475px] text-[15px] leading-7 text-[#d8d8cf] sm:text-[17px]">
                Climb in. Lock on. Let motion-sensor gameplay turn a racing line into something your body understands.
              </p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a href="#experience" className="focus-ring skew-btn inline-flex items-center gap-3 bg-[#cbff42] px-6 py-4 font-mono-custom text-[11px] font-semibold uppercase tracking-[.18em] text-[#111b2e] transition-transform hover:-translate-y-1"><span>See the experience <ChevronRight className="ml-2 inline-block" size={16} /></span></a>
                <a href={phoneUrl} className="focus-ring inline-flex items-center gap-3 border-b border-[#f5f0df]/35 pb-1 font-mono-custom text-[11px] uppercase tracking-[.18em] text-[#f5f0df] transition-colors hover:border-[#cbff42] hover:text-[#cbff42]"><Phone size={15} /> Call to plan your run</a>
              </div>
            </div>
            <div className="relative z-10 hidden h-full min-h-[390px] items-end justify-end lg:flex">
              <div className="relative h-[min(440px,34vw)] min-h-[350px] w-full max-w-[410px] overflow-hidden rounded-[48%_52%_0_0] border border-[#cbff42]/25 bg-[#1c2b45]">
                <img src="/apex-cockpit.jpg" alt="Racing simulator cockpit at BBS Adrenaline Apex" className="h-full w-full object-cover opacity-80 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111b2e] via-transparent to-[#cbff42]/10" />
              </div>
              <div className="absolute bottom-6 left-0 font-mono-custom text-[9px] uppercase tracking-[.22em] text-[#aeb4bc] [writing-mode:vertical-rl]">MOTION / SPEED / FOCUS</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex h-14 items-center gap-4 overflow-hidden border-t border-[#f5f0df]/10 bg-[#0d1627]/45 px-5 sm:px-8 lg:px-12">
            <span className="shrink-0 font-mono-custom text-[9px] tracking-[.2em] text-[#cbff42]">APEX SIGNAL</span>
            <span className="h-px w-12 shrink-0 bg-[#cbff42]" />
            <div className="ticker-track flex min-w-max items-center gap-8 font-display text-lg font-semibold uppercase tracking-[.08em] text-[#d8d8cf]">
              <span>F1</span><span className="text-[#cbff42]">///</span><span>ASSETTO CORSA</span><span className="text-[#cbff42]">///</span><span>FULL SEND</span><span className="text-[#cbff42]">///</span><span>F1</span><span className="text-[#cbff42]">///</span><span>ASSETTO CORSA</span><span className="text-[#cbff42]">///</span><span>FULL SEND</span><span className="text-[#cbff42]">///</span>
            </div>
          </div>
        </section>

        <section className="bg-[#f4efdf] px-5 py-16 sm:px-8 lg:px-12 lg:py-24" aria-label="Venue highlights">
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-end">
            <div>
              <SectionLabel number="00" >Why Apex</SectionLabel>
              <h2 className="mt-6 max-w-[650px] font-display text-5xl font-bold uppercase leading-[.9] tracking-[-.025em] sm:text-7xl">Not a game.<br /><span className="text-[#526174]">A proper run.</span></h2>
            </div>
            <p className="max-w-[450px] text-[15px] leading-7 text-[#526174] lg:justify-self-end">A racing destination built for the curious, the competitive, and everyone who has ever wondered what a fast corner actually feels like.</p>
          </div>
          <div className="mx-auto mt-14 grid max-w-[1320px] border-y border-[#111b2e]/15 sm:grid-cols-3">
            <div className="stat-line py-7 sm:border-r sm:border-[#111b2e]/15 sm:pr-8"><Gauge className="mb-7 text-[#7ba300]" size={25} strokeWidth={1.5} /><p className="font-display text-4xl font-bold uppercase">Motion-sensor</p><p className="mt-2 max-w-[240px] text-sm leading-6 text-[#667083]">The movement of the drive is part of the story.</p></div>
            <div className="stat-line py-7 sm:px-8"><Route className="mb-7 text-[#7ba300]" size={25} strokeWidth={1.5} /><p className="font-display text-4xl font-bold uppercase">Two ways in</p><p className="mt-2 max-w-[240px] text-sm leading-6 text-[#667083]">Try F1 or take the wheel in Assetto Corsa.</p></div>
            <div className="stat-line py-7 sm:border-l sm:border-[#111b2e]/15 sm:pl-8"><Trophy className="mb-7 text-[#7ba300]" size={25} strokeWidth={1.5} /><p className="font-display text-4xl font-bold uppercase">Zero pressure</p><p className="mt-2 max-w-[240px] text-sm leading-6 text-[#667083]">First-timers are welcome. Fast laps are optional.</p></div>
          </div>
        </section>

        <section id="experience" className="dark-panel relative scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28" aria-labelledby="experience-title">
          <div className="relative mx-auto max-w-[1320px]">
            <SectionLabel number="01" inverse>The Apex ritual</SectionLabel>
            <div className="mt-7 grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
              <div>
                <h2 id="experience-title" className="max-w-[570px] font-display text-6xl font-bold uppercase leading-[.82] tracking-[-.03em] sm:text-8xl">The<br /><span className="text-[#cbff42]">rush</span><br />starts here.</h2>
                <p className="mt-9 max-w-[385px] text-[15px] leading-7 text-[#b6bdc3]">This is the part where the room falls away. Hands find the wheel. Eyes find the line. The simulator answers back.</p>
                <a href={phoneUrl} className="focus-ring mt-9 inline-flex items-center gap-3 border-b border-[#cbff42] pb-2 font-mono-custom text-[10px] uppercase tracking-[.18em] text-[#cbff42] hover:text-[#f5f0df]"><Phone size={14} /> Speak to the team <ArrowUpRight size={14} /></a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <article className="group relative min-h-[280px] overflow-hidden bg-[#1b2a42] p-6 sm:mt-16">
                  <div className="relative flex h-full flex-col justify-between"><div className="flex items-center justify-between"><Play className="text-[#cbff42]" size={28} fill="currentColor" strokeWidth={1} /><span className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#b6bdc3]">01 / 03</span></div><div><p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#cbff42]">Step one</p><h3 className="mt-2 font-display text-4xl font-bold uppercase">Choose your line.</h3><p className="mt-2 max-w-[220px] text-sm leading-6 text-[#b6bdc3]">F1 intensity or the open road of Assetto Corsa.</p></div></div>
                </article>
                <article className="group relative min-h-[280px] overflow-hidden bg-[#cbff42] p-6 text-[#111b2e]">
                  <div className="relative flex h-full flex-col justify-between"><div className="flex items-center justify-between"><Gauge className="text-[#111b2e]" size={28} strokeWidth={1.8} /><span className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#28351e]">02 / 03</span></div><div><p className="font-mono-custom text-[10px] uppercase tracking-[.2em]">Step two</p><h3 className="mt-2 font-display text-4xl font-bold uppercase">Feel it move.</h3><p className="mt-2 max-w-[220px] text-sm leading-6 text-[#28351e]">Motion-sensor gameplay brings weight to every turn.</p></div></div>
                </article>
                <article className="group relative min-h-[280px] overflow-hidden border border-[#f5f0df]/20 p-6 sm:col-span-2">
                  <div className="relative flex h-full flex-col justify-between"><div className="flex items-center justify-between"><Route className="text-[#cbff42]" size={28} strokeWidth={1.5} /><span className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#b6bdc3]">03 / 03</span></div><div><p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#cbff42]">Step three</p><h3 className="mt-2 font-display text-4xl font-bold uppercase sm:text-5xl">Find your apex.</h3><p className="mt-2 max-w-[330px] text-sm leading-6 text-[#b6bdc3]">Stay smooth, chase the next corner, and leave wanting another lap.</p></div></div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#dfe6cf] px-5 py-16 sm:px-8 lg:px-12 lg:py-24" aria-labelledby="scene-title">
          <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
            <div className="overflow-hidden bg-[#18273e]">
              <img src="/apex-cockpit.jpg" alt="Inside the immersive racing simulator cockpit" className="block h-[360px] w-full object-cover opacity-90 sm:h-[400px] lg:h-[440px]" />
              <div className="flex items-center justify-between gap-4 border-t border-[#f5f0df]/35 px-5 py-4 text-[#f5f0df]">
                <span className="font-mono-custom text-[9px] uppercase tracking-[.18em]">Apex cockpit / live view</span>
                <span className="shrink-0 font-display text-5xl font-black leading-none text-[#cbff42]">GO</span>
              </div>
            </div>
            <div>
              <SectionLabel number="02">For the first lap</SectionLabel>
              <h2 id="scene-title" className="mt-7 font-display text-6xl font-bold uppercase leading-[.84] tracking-[-.03em] sm:text-8xl">Come<br /><span className="text-[#526174]">curious.</span><br />Leave hooked.</h2>
              <p className="mt-8 max-w-[420px] text-[15px] leading-7 text-[#526174]">You do not need a racing résumé. Bring your curiosity, pick a track, and let the first corner do the convincing.</p>
              <div className="mt-9 flex items-center gap-4 border-t border-[#111b2e]/15 pt-5"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#111b2e]/25 font-mono-custom text-xs">A</span><span className="font-mono-custom text-[10px] uppercase tracking-[.17em] text-[#667083]">Built for first-timers and racing fans</span></div>
            </div>
          </div>
        </section>

        <section id="stories" className="scroll-mt-24 bg-[#f4efdf] px-5 py-20 sm:px-8 lg:px-12 lg:py-28" aria-labelledby="stories-title">
          <div className="mx-auto max-w-[1320px]">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div><SectionLabel number="03">From the grid</SectionLabel><h2 id="stories-title" className="mt-6 font-display text-6xl font-bold uppercase leading-[.85] tracking-[-.025em] sm:text-8xl">Words<br /><span className="text-[#7c8c38]">after</span> the lap.</h2></div>
              <p className="max-w-[300px] text-sm leading-6 text-[#667083] sm:pb-2">The best part of a racing experience is the instant replay in your head.</p>
            </div>
            <div className="mt-16 grid gap-4 lg:grid-cols-[1.2fr_.8fr_.8fr]">
              <figure className="flex min-h-[315px] flex-col justify-between bg-[#111b2e] p-7 text-[#f5f0df] lg:min-h-[380px] lg:p-10"><span className="quote-mark">“</span><blockquote className="max-w-[500px] font-display text-4xl font-semibold uppercase leading-[.95] sm:text-5xl">The staff was really friendly too, which made the experience even better.</blockquote><figcaption className="mt-10 flex items-center justify-between border-t border-[#f5f0df]/20 pt-4 font-mono-custom text-[10px] uppercase tracking-[.18em]"><span>Shaakir Mhekri</span><span className="text-[#cbff42]">Racer's note</span></figcaption></figure>
              <figure className="flex min-h-[315px] flex-col justify-between border border-[#111b2e]/20 p-7 lg:min-h-[380px]"><span className="quote-mark">“</span><blockquote className="font-display text-3xl font-semibold uppercase leading-[.98]">Crazy place and must try for real.</blockquote><figcaption className="mt-10 border-t border-[#111b2e]/15 pt-4 font-mono-custom text-[10px] uppercase tracking-[.18em] text-[#667083]">Rakshith joshy</figcaption></figure>
              <figure className="flex min-h-[315px] flex-col justify-between border border-[#111b2e]/20 bg-[#cbff42] p-7 lg:min-h-[380px]"><span className="quote-mark text-[#111b2e]">“</span><blockquote className="font-display text-3xl font-semibold uppercase leading-[.98]">Enjoyed playing f1 and assetto corsa here.</blockquote><figcaption className="mt-10 border-t border-[#111b2e]/20 pt-4 font-mono-custom text-[10px] uppercase tracking-[.18em]">Rohith Phone</figcaption></figure>
            </div>
          </div>
        </section>

        <section id="visit" className="dark-panel relative scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28" aria-labelledby="visit-title">
          <div className="relative mx-auto max-w-[1320px]">
            <SectionLabel number="04" inverse>Make the trip</SectionLabel>
            <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_.9fr] lg:gap-24">
              <div><h2 id="visit-title" className="max-w-[720px] font-display text-7xl font-black uppercase leading-[.78] tracking-[-.04em] sm:text-[9rem]">Meet us<br /><span className="text-[#cbff42]">at the apex.</span></h2><p className="mt-9 max-w-[430px] text-[15px] leading-7 text-[#b6bdc3]">Right at Mangalore Gate, Kankanady. Easy to find. Hard to forget.</p></div>
              <div className="lg:pt-5">
                <div className="border-y border-[#f5f0df]/20 py-5"><div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-[#cbff42]" size={20} strokeWidth={1.5} /><p className="font-mono-custom text-[11px] uppercase leading-6 tracking-[.12em] text-[#f5f0df]">MANGALORE GATE,<br />Kankanady Bypass Rd,<br />Bendoorwell, Kankanady,<br />Mangaluru, Karnataka 575002</p></div><a className="focus-ring mt-6 inline-flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.18em] text-[#cbff42] hover:text-[#f5f0df]" href={directionsUrl} target="_blank" rel="noreferrer">Open in Google Maps <Navigation size={14} /></a></div>
                <div className="grid grid-cols-2 gap-5 border-b border-[#f5f0df]/20 py-5"><div><Clock3 className="mb-3 text-[#cbff42]" size={20} strokeWidth={1.5} /><p className="font-mono-custom text-[11px] uppercase leading-6 tracking-[.12em] text-[#f5f0df]">Every day<br />10 am – 10 pm</p><p className="mt-2 text-xs leading-5 text-[#89939e]">Hours might differ on holidays.</p></div><div><Phone className="mb-3 text-[#cbff42]" size={20} strokeWidth={1.5} /><a href={phoneUrl} className="focus-ring font-mono-custom text-[11px] uppercase leading-6 tracking-[.12em] text-[#f5f0df] hover:text-[#cbff42]">097786<br />00824</a><p className="mt-2 text-xs leading-5 text-[#89939e]">Call before you drive over.</p></div></div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-start justify-between gap-7 border-t border-[#f5f0df]/20 pt-7 sm:flex-row sm:items-center"><p className="font-display text-4xl font-semibold uppercase text-[#d8d8cf]">Your next favourite lap is local.</p><a href={directionsUrl} target="_blank" rel="noreferrer" className="focus-ring skew-btn inline-flex items-center gap-3 bg-[#cbff42] px-6 py-4 font-mono-custom text-[11px] font-semibold uppercase tracking-[.18em] text-[#111b2e] transition-transform hover:-translate-y-1"><span>Get directions <ArrowUpRight className="ml-2 inline-block" size={15} /></span></a></div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1423] px-5 py-9 text-[#f5f0df] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div><BrandMark inverse /><p className="mt-5 max-w-[310px] font-mono-custom text-[9px] uppercase leading-5 tracking-[.16em] text-[#89939e]">A local racing destination for anyone ready to feel the track.</p></div>
          <div className="flex items-center gap-6"><a href="https://www.instagram.com/bbs_adrenaline_apex/" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#d8d8cf] hover:text-[#cbff42]"><Instagram size={16} /> @bbs_adrenaline_apex</a><a href={phoneUrl} className="focus-ring inline-flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#d8d8cf] hover:text-[#cbff42]"><Phone size={16} /> Call us</a></div>
        </div>
        <div className="mx-auto mt-9 flex max-w-[1320px] flex-wrap justify-between gap-x-4 gap-y-2 border-t border-[#f5f0df]/15 pt-4 font-mono-custom text-[9px] uppercase tracking-[.16em] text-[#667083]"><span>© BBS Adrenaline Apex</span><span>Mangaluru, Karnataka</span></div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <WouterRoute path="/" component={AppHome} />
        <WouterRoute component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;