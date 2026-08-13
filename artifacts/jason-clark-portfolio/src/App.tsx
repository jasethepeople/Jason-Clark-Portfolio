import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  CircleDot,
  Code2,
  Github,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';

const projects = [
  {
    name: 'jason-os',
    language: 'TypeScript',
    number: '01',
    description:
      'A small operating system experiment, built from the ground up to see how much life can fit in the machine.',
    note: 'For when the defaults get boring.',
    href: 'https://github.com/jasethepeople/jason-os',
    icon: Terminal,
    className: 'bg-[#272035] text-[#f3e8d0] border-[#f3e8d0]/30',
    accent: 'text-[#d8f26a]',
  },
  {
    name: 'lispmind',
    language: 'Common Lisp',
    number: '02',
    description:
      'A thinking space in code: part notebook, part curiosity engine, part excuse to ask better questions.',
    note: 'A mind is allowed to wander.',
    href: 'https://github.com/jasethepeople/lispmind',
    icon: Braces,
    className: 'bg-[#e9d5ab] text-[#272035] border-[#272035]/35',
    accent: 'text-[#cc573b]',
  },
  {
    name: 'lispflow',
    language: 'Go',
    number: '03',
    description:
      'A practical tool for moving ideas around without making people learn a new secret handshake first.',
    note: 'Useful beats impressive.',
    href: 'https://github.com/jasethepeople/lispflow',
    icon: CircleDot,
    className: 'bg-[#cc573b] text-[#f7e9d0] border-[#272035]/25',
    accent: 'text-[#d8f26a]',
  },
  {
    name: 'aetherstate_v2',
    language: 'TypeScript',
    number: '04',
    description:
      'A return trip to an earlier idea, with new weather, fewer assumptions, and a little more room to breathe.',
    note: 'Nothing is ever really finished.',
    href: 'https://github.com/jasethepeople/aetherstate_v2',
    icon: Layers3,
    className: 'bg-[#d8f26a] text-[#272035] border-[#272035]/35',
    accent: 'text-[#cc573b]',
  },
];

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
];

function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const elements = root.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return ref;
}

function ExternalArrow() {
  return <ArrowUpRight className="arrow-icon h-5 w-5" aria-hidden="true" />;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const contentRef = useRevealOnScroll();

  useEffect(() => {
    document.title = 'Jason Clark — Restless builder, curious maker';
    const metadata = [
      ['meta', 'name', 'description', 'Jason Clark is a restless builder and curious maker working across TypeScript, Go, and Common Lisp.'],
      ['meta', 'property', 'og:title', 'Jason Clark — Restless builder, curious maker'],
      ['meta', 'property', 'og:description', 'A permanent work in progress. A collection of experiments, useful tools, and sideways ideas.'],
      ['meta', 'property', 'og:type', 'website'],
      ['meta', 'property', 'og:url', 'https://github.com/jasethepeople/'],
    ];
    metadata.forEach(([tag, key, keyValue, content]) => {
      let element = document.head.querySelector(`${tag}[${key}="${keyValue}"]`);
      if (!element) {
        element = document.createElement(tag);
        element.setAttribute(key, keyValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    });
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={contentRef} className="portfolio-shell min-h-[100dvh]">
      <div className="grain" aria-hidden="true" />
      <header className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-md focus-ring"
          onClick={closeMenu}
          data-testid="link-home"
          aria-label="Jason Clark, back to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#272035] bg-[#d8f26a] font-mono-custom text-sm font-medium text-[#272035] transition-transform duration-300 group-hover:rotate-12">
            JC
          </span>
          <span className="font-mono-custom text-xs uppercase tracking-[0.18em]">Jason Clark</span>
        </a>

        <button
          type="button"
          className="relative z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#272035]/50 bg-[#e9d5ab] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          data-testid="button-toggle-menu"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link font-mono-custom text-xs uppercase tracking-[0.16em]" data-testid={`link-nav-${item.label.toLowerCase()}`}>
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-[#272035] bg-[#272035] px-5 py-3 font-mono-custom text-xs uppercase tracking-[0.12em] text-[#f3e8d0] transition-colors hover:bg-[#cc573b] hover:text-[#f3e8d0] focus-ring"
            data-testid="link-nav-contact"
          >
            Say hello
          </a>
        </nav>

        {menuOpen && (
          <nav
            id="mobile-nav"
            className="absolute left-5 right-5 top-[82px] z-10 flex flex-col gap-2 rounded-2xl border border-[#272035] bg-[#e9d5ab] p-4 shadow-[8px_8px_0_hsl(264_28%_14%)] md:hidden"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-4 font-mono-custom text-xs uppercase tracking-[0.16em] hover:bg-[#d8f26a] focus-ring"
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={closeMenu} className="rounded-xl bg-[#272035] px-4 py-4 font-mono-custom text-xs uppercase tracking-[0.16em] text-[#f3e8d0] focus-ring" data-testid="link-mobile-contact">
              Say hello
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative mx-auto grid min-h-[calc(100dvh-88px)] max-w-[1440px] items-center gap-14 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.14fr_.86fr] lg:gap-8 lg:px-12 lg:pb-28 lg:pt-4" aria-labelledby="hero-title">
          <div className="relative z-[1]">
            <div className="reveal mb-8 flex items-center gap-3 font-mono-custom text-xs uppercase tracking-[0.18em] text-[#cc573b]" data-testid="text-hero-kicker">
              <span className="h-2 w-2 rounded-full bg-[#cc573b] shadow-[0_0_0_5px_hsl(14_67%_54%_/_0.18)]" />
              Currently making sense of things
            </div>
            <h1 id="hero-title" className="reveal reveal-delay-1 display-text max-w-4xl text-[clamp(4.2rem,12vw,10.5rem)] font-semibold leading-[.82] text-[#272035]" data-testid="heading-hero">
              I make<br />
              <span className="text-[#cc573b]">strange</span><br />
              things useful.
            </h1>
            <div className="reveal reveal-delay-2 mt-10 flex max-w-xl flex-col gap-7 sm:flex-row sm:items-end">
              <p className="max-w-sm text-lg leading-relaxed text-[#4b4354]">
                I&apos;m Jason — a restless builder, curious maker, and permanent work in progress. I move between ideas until one of them starts moving back.
              </p>
              <a href="#work" className="group flex shrink-0 items-center gap-3 font-mono-custom text-xs uppercase tracking-[0.14em] text-[#272035] focus-ring" data-testid="link-hero-work">
                See the experiments
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#272035] transition-colors group-hover:bg-[#d8f26a]">
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-3 relative flex min-h-[360px] items-center justify-center lg:min-h-[550px]" aria-label="Abstract portrait mark">
            <div className="absolute h-[min(75vw,520px)] w-[min(75vw,520px)] rounded-full border border-[#272035]/25" />
            <div className="absolute h-[min(59vw,410px)] w-[min(59vw,410px)] rounded-full border border-dashed border-[#272035]/35" />
            <div className="hero-mark relative flex h-[min(53vw,360px)] w-[min(53vw,360px)] rotate-[-8deg] items-center justify-center rounded-[46%_54%_50%_50%/48%_42%_58%_52%] border-2 border-[#272035] bg-[#d8f26a] shadow-[14px_14px_0_#272035]">
              <div className="absolute inset-7 rounded-[53%_47%_40%_60%/44%_58%_42%_56%] border border-[#272035]/50" />
              <div className="relative rotate-[8deg] text-center">
                <Sparkles className="mx-auto mb-4 h-9 w-9 text-[#cc573b]" strokeWidth={1.5} aria-hidden="true" />
                <p className="display-text text-5xl font-semibold leading-[.85] text-[#272035] sm:text-6xl">everywhere<br />man</p>
                <p className="mt-5 font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#4b4354]">since forever / still here</p>
              </div>
            </div>
            <span className="absolute right-[4%] top-[6%] rotate-12 font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#4b4354]">not a résumé</span>
            <span className="absolute bottom-[10%] left-[2%] -rotate-90 font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#4b4354]">keep looking</span>
          </div>
        </section>

        <div className="border-y border-[#272035]/25 bg-[#272035] text-[#f3e8d0]" aria-label="Areas of curiosity">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 font-mono-custom text-[10px] uppercase tracking-[0.2em] sm:justify-between sm:px-8 lg:px-12">
            <span>TypeScript</span><span className="text-[#d8f26a]">/</span><span>Go</span><span className="text-[#d8f26a]">/</span><span>Common Lisp</span><span className="text-[#d8f26a]">/</span><span>questions worth asking</span>
          </div>
        </div>

        <section id="about" className="mx-auto grid max-w-[1440px] gap-12 px-5 py-28 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-24 lg:px-12 lg:py-40" aria-labelledby="about-title">
          <div className="reveal">
            <p className="font-mono-custom text-xs uppercase tracking-[0.18em] text-[#cc573b]">02 / A little context</p>
            <h2 id="about-title" className="display-text mt-5 max-w-sm text-5xl font-semibold leading-[.92] sm:text-6xl" data-testid="heading-about">I don&apos;t stay<br /><span className="text-[#cc573b]">in one lane.</span></h2>
          </div>
          <div className="reveal reveal-delay-1 max-w-2xl self-end">
            <p className="text-[clamp(1.5rem,3.4vw,2.8rem)] leading-[1.12] tracking-[-0.04em]">
              My public work jumps from operating systems to language experiments to tools that solve one oddly specific problem.
            </p>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#4b4354]">
              That isn&apos;t indecision. It&apos;s how I pay attention. Different materials teach different lessons, and the good ones usually show up sideways. I like the part before the answer — the sketch, the false start, the tiny useful surprise.
            </p>
            <div className="mt-10 flex items-center gap-4 border-t border-[#272035]/25 pt-5 font-mono-custom text-xs uppercase tracking-[0.16em] text-[#4b4354]">
              <MapPin className="h-4 w-4 text-[#cc573b]" aria-hidden="true" />
              <span data-testid="text-location">Somewhere between here and the next idea</span>
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#e9d5ab] px-5 py-24 sm:px-8 lg:px-12 lg:py-36" aria-labelledby="work-title">
          <div className="mx-auto max-w-[1440px]">
            <div className="reveal mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="font-mono-custom text-xs uppercase tracking-[0.18em] text-[#cc573b]">03 / Selected work</p>
                <h2 id="work-title" className="display-text mt-4 max-w-2xl text-6xl font-semibold leading-[.86] sm:text-8xl" data-testid="heading-work">A few things<br /><span className="text-[#cc573b]">I couldn&apos;t leave alone.</span></h2>
              </div>
              <p className="max-w-xs text-base leading-7 text-[#4b4354]">Real repositories. Real rabbit holes. No case-study theatre.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <a
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`work-card reveal reveal-delay-${(index % 3) + 1} group relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[1.5rem] border-2 p-7 shadow-[6px_6px_0_hsl(264_28%_14%)] sm:p-9 ${project.className}`}
                    data-testid={`card-project-${project.name}`}
                    aria-label={`Open ${project.name} repository on GitHub`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono-custom text-xs opacity-70">{project.number}</span>
                      <span className={`rounded-full border border-current px-3 py-1 font-mono-custom text-[10px] uppercase tracking-[0.14em] ${project.accent}`}>{project.language}</span>
                    </div>
                    <div>
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-current">
                        <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <h3 className="display-text text-5xl font-semibold leading-none sm:text-6xl" data-testid={`text-project-${project.name}`}>{project.name}</h3>
                      <p className="mt-5 max-w-md text-base leading-7 opacity-80">{project.description}</p>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-current/25 pt-4 font-mono-custom text-xs uppercase tracking-[0.12em]">
                      <span className="opacity-70">{project.note}</span>
                      <ExternalArrow />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="approach" className="mx-auto grid max-w-[1440px] gap-14 px-5 py-28 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-12 lg:py-40" aria-labelledby="approach-title">
          <div className="reveal">
            <p className="font-mono-custom text-xs uppercase tracking-[0.18em] text-[#cc573b]">04 / How I work</p>
            <h2 id="approach-title" className="display-text mt-5 max-w-md text-6xl font-semibold leading-[.86] sm:text-8xl" data-testid="heading-approach">Curiosity<br /><span className="text-[#cc573b]">with receipts.</span></h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {[
              { index: 'A', title: 'Start with a real itch', copy: 'The best projects begin with something annoyingly specific. I follow that feeling before I write a plan.' },
              { index: 'B', title: 'Make the weird bit visible', copy: 'I share the rough edges, the half-ideas, and the work in public. It keeps the work honest and the door open.' },
              { index: 'C', title: 'Explain it like a person', copy: 'Tools are only useful when people can understand where they fit. Plain language is part of the build.' },
              { index: 'D', title: 'Leave room to change', copy: 'A first version is a conversation, not a verdict. I make things that can learn something new.' },
            ].map((item, index) => (
              <article key={item.index} className={`reveal reveal-delay-${(index % 3) + 1} border-t-2 border-[#272035] pt-5`}>
                <span className="font-mono-custom text-xs text-[#cc573b]">{item.index} /</span>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4b4354]">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-[#cc573b] px-5 py-28 text-[#f3e8d0] sm:px-8 lg:px-12 lg:py-40" aria-labelledby="contact-title">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#f3e8d0]/25 sm:h-96 sm:w-96" aria-hidden="true" />
          <div className="absolute -bottom-36 left-[-8%] h-72 w-72 rounded-full border border-[#f3e8d0]/20" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="reveal max-w-4xl">
              <p className="font-mono-custom text-xs uppercase tracking-[0.18em] text-[#d8f26a]">05 / Contact</p>
              <h2 id="contact-title" className="display-text mt-6 text-[clamp(4rem,11vw,10rem)] font-semibold leading-[.8] tracking-[-0.08em]" data-testid="heading-contact">Have a good<br /><span className="text-[#d8f26a]">weird idea?</span></h2>
              <p className="mt-10 max-w-lg text-lg leading-8 text-[#f3e8d0]/85">I&apos;d like to hear it. Tell me what you&apos;re poking at, what isn&apos;t working, or what you want to make a little more alive.</p>
            </div>
            <div className="reveal reveal-delay-1 mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
              <a href="mailto:jasethepeople@gmail.com" className="group flex min-h-16 items-center justify-between rounded-xl border border-[#f3e8d0]/45 px-5 py-4 transition-colors hover:bg-[#272035] focus-ring" data-testid="link-email">
                <span className="flex items-center gap-3 font-mono-custom text-xs uppercase tracking-[0.08em]"><Mail className="h-5 w-5 text-[#d8f26a]" aria-hidden="true" /> jasethepeople@gmail.com</span>
                <ExternalArrow />
              </a>
              <a href="tel:+14354183535" className="group flex min-h-16 items-center justify-between rounded-xl border border-[#f3e8d0]/45 px-5 py-4 transition-colors hover:bg-[#272035] focus-ring" data-testid="link-phone">
                <span className="flex items-center gap-3 font-mono-custom text-xs uppercase tracking-[0.08em]"><Phone className="h-5 w-5 text-[#d8f26a]" aria-hidden="true" /> 435.418.3535</span>
                <ExternalArrow />
              </a>
            </div>
            <div className="reveal reveal-delay-2 mt-20 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#f3e8d0]/35 pt-6 font-mono-custom text-xs uppercase tracking-[0.14em]">
              <a href="https://github.com/jasethepeople/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#d8f26a] focus-ring" data-testid="link-github"><Github className="h-4 w-4" aria-hidden="true" /> GitHub / @jasethepeople</a>
              <a href="https://orcid.org/0009-0005-3020-9694" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#d8f26a] focus-ring" data-testid="link-orcid"><Code2 className="h-4 w-4" aria-hidden="true" /> ORCID / 0009-0005-3020-9694</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#272035] px-5 py-7 text-[#f3e8d0] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 font-mono-custom text-[10px] uppercase tracking-[0.16em] text-[#f3e8d0]/65 sm:flex-row sm:items-center">
          <span data-testid="text-footer">Jason Clark / hyper-focusing since always</span>
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#d8f26a]" /> Built in public, more or less</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;