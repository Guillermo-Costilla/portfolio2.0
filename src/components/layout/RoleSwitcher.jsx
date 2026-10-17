import { NavLink } from "react-router-dom";
import { routes } from "../../config/site";

function RoleSwitcher({ compact = false }) {
  const base =
    "rounded-full px-3 py-1.5 text-xs font-semibold transition sm:text-sm sm:px-4";

  return (
    <div
      className={`inline-flex rounded-full border border-white/10 bg-black/30 p-1 ${
        compact ? "" : "shadow-lg shadow-black/20"
      }`}
      role="group"
      aria-label="Cambiar perfil profesional"
    >
      <NavLink
        to={routes.analytics}
        className={({ isActive }) =>
          `${base} ${
            isActive
              ? "bg-emerald-400 text-emerald-950"
              : "text-white/70 hover:text-white"
          }`
        }
      >
        Data Analyst
      </NavLink>
      <NavLink
        to={routes.fullstack}
        className={({ isActive }) =>
          `${base} ${
            isActive
              ? "bg-fuchsia-400 text-fuchsia-950"
              : "text-white/70 hover:text-white"
          }`
        }
      >
        Full Stack
      </NavLink>
    </div>
  );
}

export default RoleSwitcher;
