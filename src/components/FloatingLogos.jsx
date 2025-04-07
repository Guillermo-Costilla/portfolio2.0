import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaJs, FaDatabase } from "react-icons/fa"
import { SiTailwindcss, SiMysql, SiMongodb, SiExpress } from "react-icons/si"

// Componentes de iconos
const logoComponents = [
  { icon: FaGithub, alt: "GitHub", color: "#f5f5f5" },
  { icon: FaLinkedin, alt: "LinkedIn", color: "#0077B5" },
  { icon: FaReact, alt: "React", color: "#61DAFB" },
  { icon: FaNodeJs, alt: "Node.js", color: "#339933" },
  { icon: SiTailwindcss, alt: "Tailwind CSS", color: "#38B2AC" },
  { icon: SiMysql, alt: "MySQL", color: "#4479A1" },
  { icon: FaJs, alt: "JavaScript", color: "#F7DF1E" },
  { icon: SiMongodb, alt: "MongoDB", color: "#47A248" },
  { icon: SiExpress, alt: "Express", color: "#000000" },
  { icon: FaDatabase, alt: "Database", color: "#f5f5f5" },
]

function generateRandomPosition() {
  return {
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
    rotation: Math.random() * 360,
    duration: Math.random() * 20 + 20,
  }
}

function FloatingLogos() {
  const [floatingLogos, setFloatingLogos] = useState([])

  useEffect(() => {
    // Crea 12 logos flotantes con posiciones aleatorias (reducido de 20)
    const newLogos = []
    for (let i = 0; i < 12; i++) {
      const logo = logoComponents[i % logoComponents.length]
      const position = generateRandomPosition()
      newLogos.push({
        ...logo,
        id: i,
        ...position,
      })
    }
    setFloatingLogos(newLogos)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingLogos.map((logo) => {
        const IconComponent = logo.icon
        return (
          <motion.div
            key={logo.id}
            className="absolute flex items-center justify-center"
            style={{
              top: `${logo.y}%`,
              left: `${logo.x}%`,
              zIndex: 0,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              rotate: [0, logo.rotation, logo.rotation * 2, 360],
            }}
            transition={{
              duration: logo.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <IconComponent
              style={{
                color: logo.color,
                opacity: 0.15,
                width: "48px",
                height: "48px",
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default FloatingLogos

