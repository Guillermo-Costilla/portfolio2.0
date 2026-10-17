import { FaArrowRight, FaDownload } from "react-icons/fa";
import { site } from "../../config/site";
import Reveal from "../ui/Reveal";

function Hero({ profile }) {
  const cv = profile.showCv ? site.cv[profile.cvKey] : null;

  return (
    <section id="home" className="hero-section overflow-hidden">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="container-site relative z-10 grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="py-2">
          <Reveal className="mb-6 flex flex-wrap items-center gap-3">
            <span className="availability-badge">Disponible</span>
            <span className="section-kicker">{profile.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="hero-title">{profile.heroTitle}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-copy mt-6 text-[var(--muted)]">{profile.heroText}</p>
          </Reveal>
          <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              Ver proyectos <FaArrowRight />
            </a>
            <a href="#contact" className="btn-ghost">
              Contacto
            </a>
            {cv && (
              <a href={cv} download className="btn-ghost">
                <FaDownload /> {profile.cvLabel}
              </a>
            )}
          </Reveal>
        </div>
        <Reveal delay={0.12} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-full bg-[var(--glow)] blur-3xl" />
          <div className="portrait-frame">
            <img
              src={site.photo}
              alt={`Retrato de ${site.name}`}
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="portrait-caption">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)]">
                {profile.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{site.location}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
