import photo from "../assets/perfil.png";
import logo from "../assets/logo.png";
import cvAnalyst from "../assets/Guillermo_Costilla_CV_Data_Analyst.pdf";
import cvDeveloper from "../assets/Guillermo_Costilla_Full_Stack_Developer.pdf";

export const site = {
  name: "Guillermo Costilla",
  shortName: "Guille",
  roleLine: "Analista de datos y desarrollador full stack",
  location: "San Miguel de Tucumán, Argentina",
  availability: "Disponible para trabajo remoto o presencial",
  email: "gcostilla96@gmail.com",
  github: "https://github.com/Guillermo-Costilla",
  linkedin: "https://www.linkedin.com/in/guillermo-costilla-6772a725a/",
  photo,
  logo,
  cv: {
    analytics: cvAnalyst,
    fullstack: cvDeveloper,
  },
};

export const routes = {
  home: "/",
  analytics: "/data-analytics",
  fullstack: "/full-stack",
};

export function isHttpUrl(value) {
  return typeof value === "string" && /^https?:\/\//i.test(value);
}
