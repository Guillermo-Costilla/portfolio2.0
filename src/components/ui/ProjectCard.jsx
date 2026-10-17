import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { isHttpUrl } from "../../config/site";
import ImageWithSkeleton from "./ImageWithSkeleton";
import Reveal from "./Reveal";

function ProjectCard({ project, delay = 0, onOpen, accent = "analytics" }) {
  const github = isHttpUrl(project.githubUrl);
  const demo = isHttpUrl(project.demoUrl);

  return (
    <Reveal delay={delay} className="project-reveal">
      <article className="project-card group surface overflow-hidden hover:-translate-y-1.5">
        <button
          type="button"
          onClick={() => onOpen?.(project)}
          className="block w-full text-left"
          aria-label={`Ver detalle de ${project.name}`}
        >
          <div className="project-image reveal-mask">
            <ImageWithSkeleton src={project.image} alt={`Portada de ${project.name}`} />
            <span className="project-image-hint" aria-hidden="true">
              Explorar caso <FaArrowRight />
            </span>
          </div>
        </button>
        <div className="project-card-body gap-4 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="project-card-title font-display text-xl leading-snug">{project.name}</h3>
            {project.statusLabel && (
              <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-2)]">
                {project.statusLabel}
              </span>
            )}
          </div>
          <p className="project-description text-sm leading-relaxed text-[var(--muted)] sm:text-[0.95rem]">
            {project.description}
          </p>
          {project.tools?.length > 0 && (
            <div className="project-tools flex flex-wrap content-start gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/85"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
          <div className="mt-auto flex flex-wrap gap-2">
            {github && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost !rounded-xl !px-4 !py-2.5 text-sm"
              >
                <FaGithub /> Código
              </a>
            )}
            {demo && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !rounded-xl !px-4 !py-2.5 text-sm"
              >
                <FaExternalLinkAlt /> Demo
              </a>
            )}
            {onOpen && (
              <button
                type="button"
                onClick={() => onOpen(project)}
                className="btn-ghost !rounded-xl !px-4 !py-2.5 text-sm"
              >
                Ver caso
              </button>
            )}
          </div>
          <p className="project-cover-note text-xs text-white/45">
            {accent === "fullstack" ? project.coverNote : ""}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export default ProjectCard;
