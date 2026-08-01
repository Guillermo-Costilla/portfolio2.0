import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaDatabase } from "react-icons/fa"
import pbi from "../assets/pbi.png"
import python from "../assets/python.png"
import excel from "../assets/excel.png"
import sql from "../assets/sql.png"

// Componentes de iconos (mezcla de react-icons e imágenes vía CDN)
const logoComponents = [
  { type: "icon", icon: FaGithub, alt: "GitHub", color: "#f5f5f5" },
  { type: "image", src: pbi, alt: "Power BI" },
  { type: "icon", icon: FaDatabase, alt: "Database", color: "#f5f5f5" },
  { type: "image", src: python, alt: "Python" },
  { type: "image", src: excel, alt: "Excel" },
  { type: "image", src: sql, alt: "SQL" },
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
    // Crea 12 logos flotantes con posiciones aleatorias
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
            {logo.type === "image" ? (
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  opacity: 0.15,
                  width: "70px",
                  height: "70px",
                }}
              />
            ) : (
              <logo.icon
                style={{
                  color: logo.color,
                  opacity: 0.15,
                  width: "48px",
                  height: "48px",
                }}
              />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

export default FloatingLogos