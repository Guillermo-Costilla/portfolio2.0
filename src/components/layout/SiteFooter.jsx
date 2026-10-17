import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "../../config/site";

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-site flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} {site.name}. Portafolio personal.
        </p>
        <div className="flex gap-3">
          <a href={site.github} className="p-2 hover:text-[var(--accent-2)]" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={site.linkedin} className="p-2 hover:text-[var(--accent-2)]" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${site.email}`} className="p-2 hover:text-[var(--accent-2)]" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
