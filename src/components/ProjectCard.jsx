import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

function ProjectCard({ title, description, image, tags, githubLink, demoLink, delay = 0 }) {
  return (
    <motion.div
      iinitial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden h-full"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden h-full"
      >
        <div className="flex flex-col h-full">
          <div className="relative h-64 overflow-hidden">
            <motion.img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          </div>
          <div className="p-6 flex-1 flex flex-col" data-atropos-offset="3">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4 flex-1">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-auto">
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="h-4 w-4" />
                Código
              </motion.a>
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Demo en vivo
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

