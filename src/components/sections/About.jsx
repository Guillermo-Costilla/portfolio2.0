import Reveal from "../ui/Reveal";

function About({ profile }) {
  return (
    <section id="about" className="section-divider relative py-20">
      <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-kicker">Perfil</p>
          <h2 className="section-title mt-3">{profile.aboutTitle}</h2>
        </Reveal>
        <div className="about-copy space-y-6 text-[1.02rem] leading-relaxed text-white/80">
          {profile.about.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.07}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={0.22}>
            <p className="about-note text-white">
              {profile.aboutCta}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
