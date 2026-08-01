import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Atropos from "atropos/react";
import "atropos/css";
import ColorChangingText from "./components/ColorChangingText";
import FloatingLogos from "./components/FloatingLogos";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import perfil from "../src/assets/perfil.png";
import cv from "./assets/Guillermo_Costilla.pdf";
import rrhh from "./assets/RRHH.png";
import customer from "./assets/Customer.png";
import ventas from "./assets/Ventas.png";
import finanzas from "./assets/Finanzas.png";

// Importar iconos de react-icons
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const contactRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <FloatingLogos />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-purple-900/20 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="font-bold text-xl">
            Guille
            <ColorChangingText text="Dev" />
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#home"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Sobre mí
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Contacto
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Guillermo-Costilla"
              target="_blank"
              rel="noreferrer"
              className="p-2 hover:text-purple-400 transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/guillermo-costilla-6772a725a/"
              target="_blank"
              rel="noreferrer"
              className="p-2 hover:text-purple-400 transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <button
              onClick={scrollToContact}
              className="hidden md:flex bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Contactar
            </button>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex flex-col justify-between w-8 h-8 p-1 rounded-lg border border-purple-500/20 bg-gray-800/70 hover:bg-gray-700 transition-colors"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <span className="block h-0.5 w-full bg-white" />
              <span className="block h-0.5 w-full bg-white" />
              <span className="block h-0.5 w-full bg-white" />
            </button>
          </div>
        </div>

        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"} border-t border-purple-900/20 bg-gray-900/95 backdrop-blur rounded-b-xl px-4 pb-4 shadow-xl`}
        >
          <nav className="flex flex-col gap-3 py-4">
            <a
              href="#home"
              onClick={handleMenuLinkClick}
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#about"
              onClick={handleMenuLinkClick}
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Sobre mí
            </a>
            <a
              href="#projects"
              onClick={handleMenuLinkClick}
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              onClick={handleMenuLinkClick}
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Contacto
            </a>
            <button
              onClick={scrollToContact}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Contactar
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto py-24 md:py-32 px-4 relative"
      >
        <motion.div
          style={{ opacity, scale }}
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex-1 ml-6 sm:ml-0 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 text-sm bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium"
            >
              Disponible para proyectos freelance, híbridos o remotos
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              <ColorChangingText text="Analista de Datos | BI & Reporting" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 max-w-3xl"
            >
              Modelo bases de datos y construyo dashboards que responden
              preguntas de negocio reales: qué está funcionando, dónde hay
              oportunidades y qué decisiones conviene tomar primero. Trabajo del
              dato crudo al insight accionable.
            </motion.p>
 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#projects"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center"
              >
                Ver proyectos
                <FaArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 border border-purple-500/30"
              >
                Contactar
              </a>
              <a
                href={cv}
                download
                className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 border border-purple-500/30 flex items-center"
              >
                <FaDownload className="mr-2 h-4 w-4" />
                Descargar CV
              </a>
            </motion.div>
          </div>

          <div className="flex-1 flex justify-center">
            <Atropos
              highlight={false}
              shadow={false}
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/25">
                <img
                  src={perfil}
                  alt="Guillermo"
                  className="w-full h-full object-cover"
                  data-atropos-offset="5"
                />
              </div>
            </Atropos>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="container mx-auto py-24 px-4 space-y-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 mx-auto text-center"
        >
          <h2 className="text-3xl font-bold">
            Proyectos que resuelven preguntas de negocio reales:
          </h2>
          <p className="text-gray-400 max-w-3xl text-base sm:text-lg mx-auto text-left">
            Cada dashboard parte de datos crudos y termina en un modelo de datos
            sólido, listo para responder preguntas concretas. Trabajo con SQL
            Server para modelar y limpiar la información, y Power BI para
            construir visualizaciones con medidas DAX personalizadas. No son
            ejercicios de tutorial — cada proyecto está pensado para que alguien
            tome una decisión con lo que ve en pantalla.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectCard
            title="Retail Sales Dashboard — Modelado SQL Server + Power BI"
            description="Pipeline de análisis de ventas retail sobre 200.000 registros (EE.UU., 2023-2024). Modelo en esquema estrella construido desde cero en SQL Server, con medidas DAX de ingresos, margen y rentabilidad por categoría, región y producto."
            image={ventas}
            tags={["SQL Server", "ETL", "Star Schema", "Power BI", "DAX", "Power Query"]}
            githubLink="https://github.com/Guillermo-Costilla/retail-bi-project"
            demoLink="https://app.powerbi.com/view?r=eyJrIjoiOTA2YjA4YTctZTNiZS00ZTI4LWIxOTAtYTAyZGRiNmEyNjJiIiwidCI6IjFlZmUxZjBmLTMwNWUtNDI5Zi1hYzg5LTRkMThmNmI2OTAyMCIsImMiOjR9"
            delay={0.1}
          />
          <ProjectCard
            title="Análisis de RRHH — Indicadores de Gestión de Personal"
            description="Dashboard de indicadores de recursos humanos en Power BI, con medidas DAX personalizadas para apoyar decisiones de gestión de personal: rotación, ausentismo y desempeño por área."
            image={rrhh}
            tags={["Power BI", "DAX", "Power Query", "ETL", "Star Schema", "Indicadores de RRHH"]}
            githubLink="https://github.com/Guillermo-Costilla/powerbi-projects/tree/main/RRHH"
            demoLink="https://app.powerbi.com/view?r=eyJrIjoiNDczYWIxZjMtZTRlYy00YTc1LWE2M2ItNDE4ZWE2MzEwMjZlIiwidCI6IjFlZmUxZjBmLTMwNWUtNDI5Zi1hYzg5LTRkMThmNmI2OTAyMCIsImMiOjR9"
            delay={0.1}
          />

          <ProjectCard
            title="Finanzas Personales 2024-2025 — Seguimiento y Control Presupuestario"
            description="Dashboard de seguimiento de ingresos y gastos personales en Power BI, con foco en tendencias mes a mes y control presupuestario para identificar desvíos a tiempo."
            image={finanzas}
            tags={[
              "Power BI",
              "DAX",
              "Modelado de datos",
              "Power Query",
              "ETL",
              "Star Schema",
            ]}
            githubLink="https://github.com/Guillermo-Costilla/powerbi-projects/tree/main/Finanzas%20Personales"
            demoLink="https://app.powerbi.com/view?r=eyJrIjoiZTE5ZTNmNDAtOTNmMC00MDlmLThjNzgtNTZlNjBhNzdhMDc0IiwidCI6IjFlZmUxZjBmLTMwNWUtNDI5Zi1hYzg5LTRkMThmNmI2OTAyMCIsImMiOjR9"
            delay={0.2}
          />
          <ProjectCard
            title="Customer Experience (NPS) — Análisis de Satisfacción del Client"
            description="Dashboard de satisfacción del cliente basado en NPS, con medidas DAX personalizadas (promotores, detractores, % de resolución) para detectar brechas de experiencia entre segmentos de negocio."
            image={customer}
            tags={[
              "Power BI",
              "DAX",
              "Modelado de datos",
              "Power Query",
              "ETL",
              "Star Schema",
            ]}
            githubLink="https://github.com/Guillermo-Costilla/powerbi-projects/tree/main/Customer-Experience"
            demoLink="https://app.powerbi.com/view?r=eyJrIjoiYmQ0YzFlZDYtYzRmZS00M2JiLTkwNzUtMDRjMTFlMDUzODBlIiwidCI6IjFlZmUxZjBmLTMwNWUtNDI5Zi1hYzg5LTRkMThmNmI2OTAyMCIsImMiOjR9"
            delay={0.2}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-gray-900/10 pointer-events-none"></div>
        <div className="container mx-auto px-4 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mx-auto">Sobre Mí</h2>
            <p className="text-gray-400 max-w-4xl text-base sm:text-lg mx-auto text-left">
              Vengo del desarrollo de software y di el salto al análisis de
              datos por una razón concreta: me interesa más el porqué
              detrás de un número que la pantalla que lo muestra. Modelo
              bases de datos relacionales en SQL Server —esquemas estrella,
              limpieza y transformación en T-SQL— y construyo dashboards
              funcionales en Power BI y Tableau, con medidas DAX pensadas
              para responder preguntas de negocio reales, no para llenar
              una pantalla de gráficos. Trabajo con foco en datos limpios,
              modelos documentados y visualizaciones que cualquiera pueda
              leer sin que se las explique. Disfruto encontrar el patrón
              que no es obvio a primera vista y dejarlo visible de un
              vistazo para quien tenga que decidir con eso.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Business Intelligence */}
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)",
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Business Intelligence</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold text-purple-300 mb-1">
                    Visualización & Reporting
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Power BI",
                      "DAX",
                      "Power Query",
                      "Tableau",
                      "Dashboards interactivos",
                      "KPIs & métricas de negocio",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-purple-300 mt-4 mb-1">
                    Hojas de cálculo
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Excel avanzado",
                      "Tablas dinámicas",
                      "Funciones de búsqueda",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bases de Datos & Modelado */}
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)",
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Bases de Datos & Modelado</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold text-purple-300 mb-1">
                    Motor & Lenguaje
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "SQL Server",
                      "T-SQL",
                      "MySQL",
                      "SQLite",
                      "Consultas avanzadas",
                      "Procedimientos almacenados",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-purple-300 mt-4 mb-1">
                    Diseño de datos
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Modelado dimensional",
                      "Esquema estrella",
                      "ETL",
                      "Limpieza y validación de datos",
                      "Staging & carga incremental",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Programación & Herramientas */}
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)",
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Programación & Herramientas</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold text-purple-300 mb-1">
                    Python
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "ETL",
                      "Análisis exploratorio (EDA)",
                      "Pandas",
                      "Automatización de reportes",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-purple-300 mt-4 mb-1">
                    Control de versiones & Flujo
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Git",
                      "GitHub",
                      "Documentación técnica",
                      "Herramientas de IA para análisis exploratorio",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)",
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">
                Habilidades profesionales
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Pensamiento analítico",
                  "Resolución de problemas",
                  "Comunicación orientada a objetivos",
                  "Trabajo en equipo",
                  "Aprendizaje continuo",
                  "Autonomía y responsabilidad",
                  "Documentación clara",
                  "Atención al detalle",
                  "Metodologías ágiles",
                  "Adaptación al contexto de negocio",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-gray-900/10 pointer-events-none"></div>
        <div className="container mx-auto px-4 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl font-bold">Contacto</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              ¿Buscás a alguien que ya sepa leer tus datos? Estoy
              disponible para sumarme a un equipo de Reporting o Business
              Intelligence, o para colaborar en proyectos de análisis y
              modelado de datos. Escribime y lo charlamos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="h-5 w-5 text-purple-400" />
                  <a
                    href="mailto:gcostilla96@gmail.com"
                    className="text-purple-300 hover:underline"
                  >
                    gcostilla96@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaLinkedin className="h-5 w-5 text-purple-400" />
                  <a
                    href="https://www.linkedin.com/in/guillermo-costilla-6772a725a/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-300 hover:underline"
                  >
                    LinkedIn/guillermo-costilla
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaGithub className="h-5 w-5 text-purple-400" />
                  <a
                    href="https://github.com/Guillermo-Costilla"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-300 hover:underline"
                  >
                    github.com/Guillermo-Costilla
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium mb-2">Sígueme en:</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Guillermo-Costilla"
                    className="p-2 bg-gray-700 rounded-full hover:bg-purple-500 transition-colors"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/guillermo-costilla-6772a725a/"
                    className="p-2 bg-gray-700 rounded-full hover:bg-purple-500 transition-colors"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <h4 className="font-medium">Disponibilidad:</h4>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="h-8 w-8 text-purple-400" />
                  <span className="text-gray-300">
                    San Miguel de Tucumán, Argentina — abierto a trabajo remoto
                    o cambio de residencia
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">
                    Disponibilidad horaria: Full Time ✅
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6">Envíame tu mensaje</h3>
              <p className="text-gray-400 mb-4">
                Respondé este formulario y te contacto lo antes posible.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900/20 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} GuilleDev. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/Guillermo-Costilla"
              className="p-2 hover:text-purple-400 transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/guillermo-costilla-6772a725a/"
              className="p-2 hover:text-purple-400 transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:gcostilla96@gmail.com?subject=Consulta&body=Hola,%20quiero%20hacer%20una%20consulta."
              className="p-2 hover:text-purple-400 transition-colors"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
