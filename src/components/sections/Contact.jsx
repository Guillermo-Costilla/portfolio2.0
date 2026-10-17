import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import { site } from "../../config/site";
import ContactForm from "../ContactForm";
import Reveal from "../ui/Reveal";

function Contact({ profile }) {
  const cv = profile.showCv ? site.cv[profile.cvKey] : null;

  return (
    <section id="contact" className="section-divider py-20">
      <div className="container-site">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="section-kicker">Contacto</p>
          <h2 className="section-title mt-3">{profile.contactTitle}</h2>
          <p className="mt-4 text-[var(--muted)]">{profile.contactText}</p>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="surface h-full space-y-5 p-6">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--accent-2)]" />
                <a className="break-all hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-[var(--accent-2)]" />
                <a className="hover:underline" href={site.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaGithub className="text-[var(--accent-2)]" />
                <a className="hover:underline" href={site.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
              <div className="flex items-start gap-3 text-[var(--muted)]">
                <FaMapMarkerAlt className="mt-1 text-[var(--accent-2)]" />
                <span>
                  {site.location}. {site.availability}.
                </span>
              </div>
              {cv && (
                <a href={cv} download className="btn-primary mt-4">
                  <FaDownload /> {profile.cvLabel}
                </a>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
