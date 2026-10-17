import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { isHttpUrl } from "../../config/site";
import ImageWithSkeleton from "./ImageWithSkeleton";

function Field({ title, children }) {
  if (!children) return null;
  return (
    <div>
      <h4 className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-2)]">
        {title}
      </h4>
      <div className="text-sm leading-relaxed text-white/80">{children}</div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="project-dialog surface max-h-[90dvh] w-full max-w-3xl overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0c1118]/90 px-5 py-3 backdrop-blur">
          <h3 id="project-dialog-title" className="pr-6 font-display text-lg">
            {project.name}
          </h3>
          <button type="button" className="btn-ghost !p-2" onClick={onClose} aria-label="Cerrar">
            <FaTimes />
          </button>
        </div>
        <ImageWithSkeleton src={project.image} alt="" aspect="aspect-[16/9]" />
        <div className="space-y-5 p-5 sm:p-6">
          <p className="text-white/80">{project.description}</p>
          <Field title="Problema de negocio">{project.businessProblem}</Field>
          <Field title="Objetivo del análisis">{project.analysisGoal}</Field>
          <Field title="Preparación y transformación">{project.dataPrep}</Field>
          {project.kpis?.length > 0 && (
            <Field title="Indicadores">
              <ul className="list-disc space-y-1 pl-4">
                {project.kpis.map((kpi) => (
                  <li key={kpi}>{kpi}</li>
                ))}
              </ul>
            </Field>
          )}
          {project.highlights?.length > 0 && (
            <Field title="Funciones">
              <ul className="list-disc space-y-1 pl-4">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Field>
          )}
          <Field title="Insights y conclusiones">{project.insights}</Field>
          {project.tools?.length > 0 && (
            <Field title="Herramientas">
              <div className="mt-1 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full bg-white/5 px-2.5 py-1 text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </Field>
          )}
          {project.coverNote && <p className="text-xs text-white/45">{project.coverNote}</p>}
          <div className="flex flex-wrap gap-2 pt-2">
            {isHttpUrl(project.githubUrl) && (
              <a href={project.githubUrl} className="btn-ghost !rounded-xl" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
            )}
            {isHttpUrl(project.demoUrl) && (
              <a href={project.demoUrl} className="btn-primary !rounded-xl" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
