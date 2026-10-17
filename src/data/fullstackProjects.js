import myItinerary from "../assets/fullstack/my-itinerary.jpg";
import crmGym from "../assets/fullstack/crm-gym.png";
import ecommerce from "../assets/fullstack/ecommerce.jpg";
import businessCrm from "../assets/fullstack/business-crm.jpg";

/**
 * Cómo agregar un proyecto full stack:
 * 1. Guardá la portada en src/assets/fullstack/
 * 2. Importala arriba.
 * 3. Copiá un objeto de este array y completá los campos.
 * 4. Si githubUrl o demoUrl están vacíos, el botón correspondiente no se renderiza.
 */
export const fullstackProjects = [
  {
    id: "my-itinerary",
    name: "My Itinerary — Travel Community Platform",
    image: myItinerary,
    description:
      "Plataforma social para viajeros con gestión de destinos, actividades, itinerarios y comentarios. Incluye autenticación con JWT, roles de usuario, validaciones en frontend y backend, y feedback visual.",
    tools: ["React", "Node.js", "Express", "MongoDB", "Redux", "Framer Motion"],
    githubUrl: "https://github.com/Guillermo-Costilla/mytinerary-app",
    demoUrl: "https://mytinerary-sso4.vercel.app/",
    published: true,
    statusLabel: "En línea",
  },
  {
    id: "crm-gym",
    name: "CRM Gym — Management System for Fitness Clubs",
    image: crmGym,
    description:
      "Aplicación modular para la gestión de gimnasios, con administración de clientes, asistencias por QR/DNI, pagos, productos, ventas y métricas mensuales.",
    tools: ["React", "Node.js", "Express", "MySQL", "Zustand", "Turso", "Tailwind CSS"],
    githubUrl: "https://github.com/Guillermo-Costilla/crm-gym",
    demoUrl: "https://crm-gym-app.vercel.app/",
    published: true,
    statusLabel: "En línea",
  },
  {
    id: "ecommerce",
    name: "E-commerce Platform — Full Stack Commerce Experience",
    image: ecommerce,
    description:
      "Plataforma de comercio electrónico con frontend moderno y backend robusto. Incluye carrito persistente, integración con Stripe, gestión de usuarios y productos, y panel administrativo.",
    tools: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
      "Zustand",
      "Stripe",
      "Tailwind CSS",
      "JWT",
    ],
    githubUrl: "https://github.com/Guillermo-Costilla/front-store",
    demoUrl: "https://store-mk.vercel.app/",
    published: true,
    statusLabel: "En línea",
  },
  {
    id: "business-crm",
    name: "Business CRM — Sales & Inventory Management",
    image: businessCrm,
    description:
      "Aplicación para administrar stock, ventas e ingresos de un negocio desde un único lugar. Incluye un dashboard de ventas mensuales, seguimiento de indicadores y exportación de información a Excel.",
    tools: [],
    highlights: [
      "Control de inventario y stock",
      "Registro y seguimiento de ventas",
      "Control de ingresos",
      "Dashboard de ventas mensuales",
      "Indicadores de rendimiento",
      "Exportación de datos a Excel",
    ],
    githubUrl: "https://github.com/Guillermo-Costilla/merceriacrm",
    demoUrl: "https://merceriacrm.vercel.app/",
    published: true,
    statusLabel: "En línea",
  },
];
