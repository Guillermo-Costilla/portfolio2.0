import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "../../config/site";
import RoleSwitcher from "./RoleSwitcher";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 border-b">
      <div className="container-site flex h-[4.2rem] items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2 font-display text-lg tracking-tight">
          <img src={site.logo} alt="" className="h-8 w-8 rounded-full object-cover" />
          <span>
            {site.shortName}
            <span className="text-[var(--accent-2)]">Dev</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Secciones">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm text-white/70 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={site.github} className="hidden p-2 text-white/70 hover:text-white sm:block" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={site.linkedin} className="hidden p-2 text-white/70 hover:text-white sm:block" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <RoleSwitcher compact />
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
