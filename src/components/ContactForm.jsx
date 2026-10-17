import { useState } from "react";
import axios from "axios";

const FORM_ENDPOINT = "https://formspree.io/f/xeqbnrqj";

function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await axios.post(FORM_ENDPOINT, formState);
      if (response.status === 200) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setError("No se pudo enviar el mensaje. Probá de nuevo o escribime por email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "form-field w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none placeholder:text-white/35 focus:border-[var(--accent)]";

  if (isSubmitted) {
    return (
      <div className="surface p-6 text-center">
        <p className="font-medium text-emerald-300">Mensaje enviado.</p>
        <p className="mt-2 text-sm text-[var(--muted)]">Te respondo a la brevedad.</p>
        <button type="button" className="btn-ghost mt-4" onClick={() => setIsSubmitted(false)}>
          Enviar otro
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface space-y-4 p-5 sm:p-6">
      <h3 className="font-display text-xl">Envíame un mensaje</h3>
      <label className="block text-sm">
        Nombre
        <input
          id="name"
          name="name"
          className={`${fieldClass} mt-1`}
          value={formState.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="block text-sm">
        Email
        <input
          id="email"
          name="email"
          type="email"
          className={`${fieldClass} mt-1`}
          value={formState.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className="block text-sm">
        Mensaje
        <textarea
          id="message"
          name="message"
          className={`${fieldClass} mt-1 min-h-[120px]`}
          value={formState.message}
          onChange={handleChange}
          required
        />
      </label>
      {error && <p className="text-sm text-red-300">{error}</p>}
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60">
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}

export default ContactForm;
