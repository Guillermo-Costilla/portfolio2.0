import { routes } from "../config/site";

export const profiles = {
  analytics: {
    id: "analytics",
    path: routes.analytics,
    label: "Data Analyst",
    eyebrow: "Data Analyst",
    heroTitle: "Transformo datos en decisiones.",
    heroText:
      "Analizo información, construyo dashboards y traduzco datos complejos en insights que ayudan a comprender el negocio y mejorar la toma de decisiones.",
    gateTitle: "Transformo datos en decisiones.",
    gateText:
      "Convierto datos en información accionable para comprender el negocio, identificar oportunidades y tomar mejores decisiones.",
    gateCta: "Explorar Data Analytics",
    aboutTitle: "Sobre el perfil analítico",
    about: [
      "Me interesa el análisis cuando deja de ser un gráfico bonito y pasa a responder una pregunta de negocio. Trabajo para entender qué decisión hay detrás del tablero, qué datos hacen falta y cómo convertirlos en métricas que se puedan defender.",
      "Hoy mi objetivo es crecer como analista de datos y, a largo plazo, construirme un camino hacia ingeniería de datos. Eso implica cuidar la calidad de lo que entra al modelo, documentar reglas de negocio, automatizar transformaciones repetibles y dejar indicadores que el equipo pueda usar con confianza.",
      "En mis proyectos de analítica diseño dashboards para control financiero, experiencia de cliente, recursos humanos y ventas. El hilo común es el mismo: preparar la información, modelar lo que importa y mostrar el resultado de forma clara para quien tiene que decidir.",
    ],
    aboutCta:
      "Si estás armando un equipo de analítica, inteligencia de negocio o un proyecto de datos, conversemos.",
    ctaTitle: "Los datos tienen valor cuando ayudan a tomar mejores decisiones.",
    ctaText:
      "Podés recorrer los tableros, descargar mi CV de analista o escribirme para hablar de oportunidades de análisis de datos.",
    contactTitle: "Conversemos sobre datos",
    contactText:
      "Estoy abierto a roles de analista de datos, proyectos de inteligencia de negocio y espacios donde el análisis se conecte con decisiones reales.",
    seoTitle: "Guillermo Costilla — Data Analyst",
    seoDescription:
      "Portafolio de analista de datos de Guillermo Costilla: dashboards, métricas y proyectos de inteligencia de negocio.",
    switchTo: "fullstack",
    switchLabel: "Ver perfil Full Stack",
    showCv: true,
    cvKey: "analytics",
    cvLabel: "Descargar CV de analista",
  },
  fullstack: {
    id: "fullstack",
    path: routes.fullstack,
    label: "Full Stack Developer",
    eyebrow: "Full Stack Developer",
    heroTitle: "Diseño y desarrollo soluciones digitales.",
    heroText:
      "Construyo aplicaciones web que conectan experiencias de usuario intuitivas con lógica de negocio, APIs y bases de datos.",
    gateTitle: "Diseño y desarrollo soluciones digitales.",
    gateText:
      "Construyo aplicaciones web completas, combinando experiencias de usuario intuitivas, lógica de negocio y arquitecturas robustas.",
    gateCta: "Explorar Full Stack",
    aboutTitle: "Sobre el perfil de desarrollo",
    about: [
      "Desarrollo productos web de punta a punta: interfaz, API, persistencia y el flujo que el usuario realmente necesita completar. No me quedo en un único recorte del stack; me interesa que la pieza funcione como producto.",
      "En mis proyectos trabajo interfaces con React, APIs con Node.js y Express, modelado de datos, autenticación con JWT, validaciones en cliente y servidor, e integración de servicios. Organizo el código para poder mantenerlo y desplegarlo, y cuido que la experiencia no se rompa cuando la lógica de negocio se vuelve más exigente.",
      "Los casos que mejor me representan hoy son una plataforma de itinerarios, un CRM para gimnasios, un e-commerce y un CRM de stock y ventas. Son proyectos propios, pensados para resolver operaciones concretas, no demos vacías.",
    ],
    aboutCta:
      "Si buscás a alguien para construir o evolucionar un producto digital, o para conversar sobre una oportunidad de desarrollo, escribime.",
    ctaTitle: "Un producto funciona cuando frontend, backend y datos se entienden.",
    ctaText:
      "Revisá las aplicaciones, descargá mi CV de desarrollador o contactame para hablar de colaboración.",
    contactTitle: "Construyamos el siguiente producto",
    contactText:
      "Abierto a oportunidades de desarrollo, colaboración en aplicaciones web y equipos que necesiten alguien que conecte interfaz, API y datos.",
    seoTitle: "Guillermo Costilla — Full Stack Developer",
    seoDescription:
      "Portafolio full stack de Guillermo Costilla: aplicaciones web con React, Node.js, APIs y bases de datos.",
    switchTo: "analytics",
    switchLabel: "Ver perfil Data Analyst",
    showCv: true,
    cvKey: "fullstack",
    cvLabel: "Descargar CV de desarrollador",
  },
};
