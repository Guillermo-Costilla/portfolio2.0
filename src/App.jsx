import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Atropos from "atropos/react"
import "atropos/css"
import ColorChangingText from "./components/ColorChangingText"
import FloatingLogos from "./components/FloatingLogos"
import ProjectCard from "./components/ProjectCard"
import ContactForm from "./components/ContactForm"
import perfil from '../src/assets/perfil.png'
import cv from "./assets/CostillaGuillermo.pdf"
import myitinerary from './assets/avion.jpg'
import comercio from './assets/comercio.jpg'

// Importar iconos de react-icons
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload } from "react-icons/fa"

function App() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const contactRef = useRef(null)

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" })
  }

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
            <a href="#home" className="text-sm font-medium hover:text-purple-400 transition-colors">
              Inicio
            </a>
            <a href="#about" className="text-sm font-medium hover:text-purple-400 transition-colors">
              Sobre mí
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-purple-400 transition-colors">
              Proyectos
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-purple-400 transition-colors">
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto py-24 md:py-32 px-4 relative">
        <motion.div style={{ opacity, scale }} className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 ml-6 sm:ml-0 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 text-sm bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium"
            >
              Disponible para proyectos
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Desarrollador Web <br />
              <ColorChangingText text="Full Stack" />{" "}

            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400"
            >
              Construyo aplicaciones web completas, con experiencia en MongoDB,
              Express, React, Node.js y MySQL.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-2 sm:gap-4"
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
            <Atropos highlight={false} shadow={false} className="w-72 h-72 md:w-96 md:h-96">
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
      <section id="projects" className="container mx-auto py-24 px-4 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 mx-auto text-center"
        >
          <h2 className="text-3xl font-bold">Mis Proyectos</h2>
          <p className="text-gray-400 max-w-3xl text-2xl mx-auto text-left">
            Estos son algunos de los proyectos full stack que he desarrollado utilizando MongoDB, Express, React, NodeJS y MySQL.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectCard
            title="E-commerce App"
            description="Una aplicación de comercio electrónico completa con carrito de compras, pasarela de pagos y gestión de usuarios."
            image={comercio}
            tags={["React", "Node.js", "Express", "MySql", "Zustand", "JWT"]}
            githubLink="https://github.com/Guillermo-Costilla/front-store"
            demoLink="https://store-mk.vercel.app/"
            delay={0.1}
          />

          <ProjectCard
            title="My Itinerary"
            description="Un blog para los viajeros, donde pueden ver ciudades, actividades, comentarios, crear publicaciones y gestión de usuarios."
            image={myitinerary}
            tags={["React", "Node.js", "Express", "MongoDB", "Redux", "Framer Motion"]}
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
            <h2 className="text-3xl font-bold mx-auto">Sobre Mí</h2>
            <p className="text-gray-400 max-w-4xl text-2xl mx-auto text-left">
              Trabaje en una amplia variedad de proyectos, desde pequeñas tareas hasta desafíos muy complejos, tanto en equipo como de manera individual. A lo largo de mi trayectoria, perfeccione mis habilidades de comunicación clara y eficaz, gestión eficiente del tiempo y generación de ideas creativas. Estoy acostumbrado a tomar decisiones rápidas y analíticas, lo que me permite enfrentar situaciones desafiantes con confianza y determinación.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Zustand</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Redux</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Material UI</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Framer Motion</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Atropos JS</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">MySQL</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">REST API</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Axios</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">JWT</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Cors</span>
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
              ¿Interesado en trabajar juntos? Contáctame para discutir tu proyecto.
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
              <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="h-5 w-5 text-purple-400" />
                  <span>gcostilla96@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaLinkedin className="h-5 w-5 text-purple-400" />
                  <span>LinkedIn/guillermo-costilla</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGithub className="h-5 w-5 text-purple-400" />
                  <span>github.com/Guillermo-Costilla</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium mb-2">Sígueme en:</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/Guillermo-Costilla" className="p-2 bg-gray-700 rounded-full hover:bg-purple-500 transition-colors">
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/guillermo-costilla-6772a725a/" className="p-2 bg-gray-700 rounded-full hover:bg-purple-500 transition-colors">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <ContactForm />
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
            <a href="https://github.com/Guillermo-Costilla" className="p-2 hover:text-purple-400 transition-colors">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/guillermo-costilla-6772a725a/" className="p-2 hover:text-purple-400 transition-colors">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href="mailto:gcostilla96@gmail.com?subject=Consulta&body=Hola,%20quiero%20hacer%20una%20consulta." className="p-2 hover:text-purple-400 transition-colors">
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

