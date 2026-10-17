import { FaArrowRight, FaDownload } from "react-icons/fa";
import { site } from "../../config/site";
import Reveal from "../ui/Reveal";

function FinalCta({ profile }) {
  const cv = profile.showCv ? site.cv[profile.cvKey] : null;

  return (
    <section className="section-divider py-12">
      <Reveal className="container-site">
        <div className="cta-panel relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-12 sm:px-12 sm:py-16">
          <div className="relative z-10 max-w-3xl">
            <h2 className="section-title">{profile.ctaTitle}</h2>
            <p className="mt-4 text-[var(--muted)]">{profile.ctaText}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="btn-ghost">
                Ver proyectos <FaArrowRight />
              </a>
              {cv && (
                <a href={cv} download className="btn-ghost">
                  <FaDownload /> CV
                </a>
              )}
              <a href="#contact" className="btn-primary">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default FinalCta;
