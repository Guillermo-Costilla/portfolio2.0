import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaChartBar, FaCode } from "react-icons/fa";
import {
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiStripe,
  SiTypescript,
} from "react-icons/si";
import { useReducedMotion } from "framer-motion";
import { site, routes } from "../config/site";
import { profiles } from "../theme/profiles";
import Seo from "../components/ui/Seo";
import DataDecor from "../components/decor/DataDecor";
import CodeDecor from "../components/decor/CodeDecor";

const technologies = [
  { label: "React.js", Icon: SiReact, className: "tech-react" },
  { label: "Node.js", Icon: SiNodedotjs, className: "tech-node" },
  { label: "Python", Icon: SiPython, className: "tech-python" },
  { label: "Power BI", Icon: FaChartBar, className: "tech-powerbi" },
  { label: "SQL Server", Icon: null, className: "tech-sql", mark: "SQL" },
  { label: "MongoDB", Icon: SiMongodb, className: "tech-mongo" },
  { label: "TypeScript", Icon: SiTypescript, className: "tech-typescript" },
  { label: "Stripe", Icon: SiStripe, className: "tech-stripe" },
];

function CenterDivider() {
  return (
    <div className="gate-divider" aria-hidden="true">
      <span className="gate-divider-diamond"><FaCode /></span>
    </div>
  );
}

function TechnologyRail() {
  return (
    <div className="technology-rail" role="list" aria-label="Tecnologías">
      {technologies.map(({ label, Icon, className, mark }) => (
        <div className={`technology-item ${className}`} key={label} role="listitem">
          <span className="technology-icon">{Icon ? <Icon /> : mark}</span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function Panel({
  profileKey,
  hovered,
  leaving,
  onHover,
  onLeave,
  onSelect,
  children,
}) {
  const isHot = hovered === profileKey;
  const isLeaving = leaving === profileKey;
  const isAway = leaving && leaving !== profileKey;
  const index = profileKey === "analytics" ? "01" : "02";

  return (
    <section
      className={`gate-panel ${isHot ? "is-hot" : hovered ? "is-dim" : ""} ${
        isLeaving ? "is-leaving" : ""
      } ${isAway ? "is-leaving-away" : ""}`}
      onMouseEnter={() => onHover(profileKey)}
      onMouseLeave={onLeave}
      onMouseMove={(event) => {
        const glow = event.currentTarget.querySelector(".cursor-glow");
        if (!glow) return;
        const rect = event.currentTarget.getBoundingClientRect();
        glow.style.left = `${event.clientX - rect.left}px`;
        glow.style.top = `${event.clientY - rect.top}px`;
      }}
      data-profile={profileKey}
      style={{
        "--accent": profileKey === "analytics" ? "#10b981" : "#8b5cf6",
        "--accent-2": profileKey === "analytics" ? "#6ee7b7" : "#e879f9",
        "--glow":
          profileKey === "analytics" ? "rgba(16,185,129,.32)" : "rgba(217,70,239,.3)",
      }}
    >
      <div className="gate-panel-base absolute inset-0" />
      <div className="cursor-glow hidden md:block" />
      {children}
      <div className="gate-copy relative z-10 max-w-xl">
        <p className="gate-eyebrow section-kicker">
          <span>{profiles[profileKey].eyebrow}</span>
          <span className="gate-index">/ {index}</span>
        </p>
        <h2 className="gate-title mt-4 font-display">
          {profileKey === "analytics" ? (
            <>
              Transformo datos
              <br />
              en <span>decisiones.</span>
            </>
          ) : (
            <>
              Diseño y desarrollo
              <br />
              soluciones <span>digitales.</span>
            </>
          )}
        </h2>
        <p className="mt-4 max-w-md text-sm text-white/70 sm:text-base">
          {profiles[profileKey].gateText}
        </p>
        <button
          type="button"
          className="gate-cta mt-7"
          onClick={() => onSelect(profileKey)}
          disabled={Boolean(leaving)}
        >
          {profileKey === "analytics" ? <FaChartBar /> : <FaCode />}
          {profiles[profileKey].gateCta}
          <FaArrowRight className="gate-cta-arrow" />
        </button>
      </div>
    </section>
  );
}

function Home() {
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(null);
  const [leaving, setLeaving] = useState(null);

  const go = (key) => {
    if (leaving) return;
    const path = key === "analytics" ? routes.analytics : routes.fullstack;
    if (reduce) {
      navigate(path);
      return;
    }
    setLeaving(key);
    window.setTimeout(() => navigate(path), 1050);
  };

  const handleHover = (key) => {
    if (!leaving) setHovered(key);
  };
  const gateState = leaving
    ? `gate--${leaving}-leaving`
    : hovered
      ? `gate--${hovered}-hot`
      : "";

  return (
    <div className="relative min-h-dvh bg-[#06080c] text-white">
      <Seo
        title="Guillermo Costilla — Data Analyst & Full Stack"
        description="Elegí el perfil: analista de datos o desarrollador full stack."
        path="/"
      />
      <header className="pointer-events-none absolute left-0 right-0 top-0 z-20">
        <div className="container-site flex h-[4.75rem] items-start pt-3">
          <div className="gate-brand pointer-events-auto flex items-center gap-2.5">
            <img src={site.logo} alt="" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-display text-base font-semibold">{site.name}</span>
          </div>
        </div>
      </header>

      <div className={`gate ${gateState}`}>
        <Panel
          profileKey="analytics"
          hovered={hovered}
          leaving={leaving}
          onHover={handleHover}
          onLeave={() => setHovered(null)}
          onSelect={go}
        >
          <div className="gate-panel-glow" />
          <div className="parallax-grid" />
          <DataDecor />
        </Panel>
        <Panel
          profileKey="fullstack"
          hovered={hovered}
          leaving={leaving}
          onHover={handleHover}
          onLeave={() => setHovered(null)}
          onSelect={go}
        >
          <div className="gate-panel-glow" />
          <div className="parallax-grid" />
          <CodeDecor />
        </Panel>
        <CenterDivider />
        <TechnologyRail />
      </div>
    </div>
  );
}

export default Home;
