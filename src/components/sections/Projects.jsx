import { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";
import Reveal from "../ui/Reveal";

function Projects({ projects, profileId }) {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section-divider py-20">
      <div className="container-site">
        <Reveal className="mb-10 max-w-3xl">
          <p className="section-kicker">Trabajo</p>
          <h2 className="section-title mt-3">Proyectos</h2>
          <p className="mt-4 text-[var(--muted)]">
            {profileId === "analytics"
              ? "Dashboards y análisis orientados a responder preguntas de negocio con métricas claras y accionables."
              : "Aplicaciones web desarrolladas de punta a punta, enfocadas en resolver necesidades y flujos reales."}
          </p>
        </Reveal>
        <div className="grid auto-rows-fr items-stretch gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.08}
              onOpen={setSelected}
              accent={profileId}
            />
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default Projects;
