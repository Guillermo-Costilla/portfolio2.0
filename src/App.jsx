import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Atropos from "atropos/react";
import "atropos/css";
import ColorChangingText from "./components/ColorChangingText";
import FloatingLogos from "./components/FloatingLogos";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import perfil from "../src/assets/perfil.png";
import cv from "./assets/Guillermo-Costilla.pdf";
import myitinerary from "./assets/avion.jpg";
import comercio from "./assets/comercio.jpg";
import crm from "./assets/CRM-GYM.png";

// Importar iconos de react-icons
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaMapMarkerAlt, FaClock,
} from "react-icons/fa";

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
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
              className="flex bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-3 sm:px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
            >
              Contactar
            </button>
          </div>
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
          <div className="flex-1 ml-0 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium"
            >
              Desarrollador React | Frontend escalable y orientado a producto
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-title"
            >
              React Developer <br />
              <ColorChangingText text="Construyendo experiencias sólidas" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-400"
            >
              Especializado en React.js, TypeScript, Redux, Hooks, Context API y Next.js para crear interfaces
              escalables, performantes y mantenibles. Me enfoco en arquitectura frontend sólida, optimización
              de rendimiento, integración con REST/GraphQL y entrega de productos con calidad y velocidad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4"
            >
              <a
                href="#projects"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
              >
                Ver proyectos
                <FaArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-5 rounded-lg transition-all duration-300 border border-purple-500/30 text-center"
              >
                Contactar
              </a>
              <a
                href={cv}
                download
                className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-5 rounded-lg transition-all duration-300 border border-purple-500/30 flex items-center justify-center"
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
              className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96"
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
          <h2 className="section-title text-center">
            Proyectos seleccionados
          </h2>
          <p className="section-subtitle text-gray-400 max-w-3xl mx-auto text-left">
            Desarrollo soluciones web completas, funcionales y preparadas para uso real.
            Cada proyecto refleja mi enfoque en arquitectura limpia, lógica de negocio sólida,
            integración de sistemas y experiencia de usuario enfocada en resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectCard
            title="E-commerce Platform — Full Stack Commerce Experience"
            description="Plataforma de e-commerce con frontend moderno y backend robusto. Incluye carrito persistente, integración con Stripe, gestión de usuarios y productos, y panel administrativo con estado global optimizado."
            image={comercio}
            tags={[
              "React",
              "Vite",
              "Node.js",
              "Express",
              "MySQL",
              "Zustand",
              "Stripe",
              "Tailwind CSS",
              "JWT",
            ]}
            githubLink="https://github.com/Guillermo-Costilla/front-store"
            demoLink="https://store-mk.vercel.app/"
            delay={0.1}
          />
          <ProjectCard
            title="CRM Gym — Management System for Fitness Clubs"
            description="Aplicación modular para la gestión integral de gimnasios. Permite administrar clientes, asistencias por QR/DNI, pagos automatizados, productos, ventas y métricas mensuales. Backend robusto con validaciones modernas, cron jobs y arquitectura escalable."
            image={crm}
            tags={[
              "React",
              "Node.js",
              "Express",
              "MySql",
              "Zustand",
              "Turso",
              "Tailwind CSS",
            ]}
            githubLink="https://github.com/Guillermo-Costilla/crm-gym"
            demoLink="https://crm-gym-app.vercel.app/"
            delay={0.1}
          />

          <ProjectCard
            title="My Itinerary — Travel Community Platform"
            description="Plataforma social para viajeros con gestión de destinos, actividades, itinerarios y comentarios. Incluye autenticación con JWT, roles de usuario (admin/cliente), validaciones en frontend y backend, y feedback visual. Backend con MongoDB y lógica de comunidad."
            image={myitinerary}
            tags={[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Redux",
              "Framer Motion",
            ]}
            githubLink="https://github.com/Guillermo-Costilla/mytinerary-app"
            demoLink="https://mytinerary-sso4.vercel.app/"
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
            <h2 className="section-title mx-auto">Sobre mí</h2>
            <p className="section-subtitle text-gray-400 max-w-4xl mx-auto text-left">
              Soy un desarrollador frontend con foco en React y en la construcción de aplicaciones escalables,
              mantenibles y alineadas con objetivos de negocio. Tengo experiencia diseñando arquitecturas frontend,
              optimizando rendimiento, integrando APIs y trabajando con equipos ágiles para entregar soluciones con
              calidad, claridad y rapidez. Me interesa resolver problemas reales con un código limpio, reutilizable y
              preparado para crecer con el producto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Frontend */}
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)",
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Frontend React</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold text-purple-300 mb-1">
                    UI & rendimiento
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Next.js",
                      "Redux",
                      "Hooks",
                      "Context API",
                      "Tailwind CSS",
                      "Framer Motion",
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
                    Estado y patrones
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Zustand",
                      "Redux Toolkit",
                      "SSR",
                      "SSG",
                      "Componentes reutilizables",
                      "Optimización de render",
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

            {/* Backend */}
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)",
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Arquitectura y APIs</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold text-purple-300 mb-1">
                    Integración y consumo
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["REST API", "GraphQL", "Axios", "Fetch", "JWT", "WebSockets"].map(
                      (tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-purple-300 mt-4 mb-1">
                    Backend y datos
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "MySQL",
                      "SQL Server",
                      "Azure",
                      "CORS",
                      "Zod",
                      "Bcrypt",
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
                Calidad, entrega y colaboración
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "Webpack",
                  "Babel",
                  "CI/CD",
                  "Jest",
                  "React Testing Library",
                  "Cypress",
                  "GitHub",
                  "Git",
                  "Scrum",
                  "Kanban",
                  "Code Review",
                  "Testing automatizado",
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
            <h2 className="section-title">Contacto</h2>
            <p className="section-subtitle text-gray-400 max-w-3xl mx-auto">
              Estoy buscando oportunidades para aportar en equipos donde la calidad, el rendimiento y la arquitectura
              de frontend sean prioridad. Si necesitás un desarrollador React senior con enfoque en producto y ejecución,
              podemos conversar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-500/20 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="h-5 w-5 text-purple-400 shrink-0" />
                  <a
                    href="mailto:gcostilla96@gmail.com"
                    className="text-purple-300 hover:underline break-all"
                  >
                    gcostilla96@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaLinkedin className="h-5 w-5 text-purple-400 shrink-0" />
                  <a
                    href="https://www.linkedin.com/in/guillermo-costilla-6772a725a/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-300 hover:underline break-all"
                  >
                    LinkedIn/guillermo-costilla
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaGithub className="h-5 w-5 text-purple-400 shrink-0" />
                  <a
                    href="https://github.com/Guillermo-Costilla"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-300 hover:underline break-all"
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

              <div className="mt-6 space-y-3">
                <h4 className="font-medium">Disponibilidad:</h4>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 h-5 w-5 text-purple-400 shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    San Miguel de Tucumán, Argentina — disponible para trabajo 100% presencial y remoto según necesidad
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="h-5 w-5 text-purple-400 shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">Disponibilidad horaria: Full Time y trabajo en equipo bajo metodologías ágiles ✅</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-xl mx-auto"
            >
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
              © {new Date().getFullYear()} GuilleDev. Todos los derechos reservados.
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
