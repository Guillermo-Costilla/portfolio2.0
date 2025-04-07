import { useState } from "react"
import { motion } from "framer-motion"
import axios from "axios"

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = {
        name: formState.name,
        email: formState.email,
        message: formState.message,
      };

      const response = await axios.post("https://formspree.io/f/xeqbnrqj", formData);

      if (response.status === 200) {
        setIsSubmitted(true);
        // Resetear formulario después de 3 segundos
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({
            name: "",
            email: "",
            message: "",
          });
        }, 3000);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      // Aquí podrías agregar un estado para manejar errores y mostrarlos en la UI
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-lg"
    >
      <h3 className="text-xl font-bold mb-6">Envíame un mensaje</h3>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-500/20 p-4 rounded-lg text-center"
        >
          <p className="text-green-400 font-medium">¡Mensaje enviado con éxito!</p>
          <p className="text-gray-400 text-sm mt-2">Me pondré en contacto contigo pronto.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium block">
              Nombre
            </label>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700/50 border border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                placeholder="Tu nombre"
                required
              />
            </motion.div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium block">
              Email
            </label>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700/50 border border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                placeholder="tu@email.com"
                required
              />
            </motion.div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium block">
              Mensaje
            </label>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700/50 border border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none min-h-[120px]"
                placeholder="Tu mensaje..."
                required
              />
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 ${isSubmitting
              ? "bg-purple-700 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-purple-500/25"
              }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </div>
            ) : (
              "Enviar mensaje"
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  )
}

export default ContactForm

