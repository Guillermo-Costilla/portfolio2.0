import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

function ProjectCard({ title, description, image, tags, githubLink, demoLink, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-gray-900/80 to-purple-950/60 shadow-[0_20px_60px_rgba(76,29,149,0.28)] backdrop-blur-sm"
    >
      <div className="flex h-full flex-col">
        <div className="relative overflow-hidden">
          <motion.img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-900/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-200 backdrop-blur-sm">
            Proyecto
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-6" data-atropos-offset="3">
          <h3 className="card-title mb-3 text-white">{title}</h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-300 sm:text-base">
            {description}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border border-purple-400/20 bg-purple-500/10 px-2.5 py-1 text-[11px] font-medium text-purple-100 sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-2 sm:flex-row">
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="h-4 w-4" />
              Código
            </motion.a>

            <motion.a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:from-purple-600 hover:to-pink-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Demo en vivo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard

