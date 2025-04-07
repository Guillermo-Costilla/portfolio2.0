"use client"

import { useEffect, useState } from "react"

const colors = [
  "text-purple-400",
  "text-pink-400",
  "text-blue-400",
  "text-green-400",
  "text-yellow-400",
  "text-red-400",
  "text-indigo-400",
]

function ColorChangingText({ text }) {
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return <span className={`transition-colors duration-1000 ${colors[colorIndex]}`}>{text}</span>
}

export default ColorChangingText

