import Reveal from "../ui/Reveal";

function Skills({ groups }) {
  return (
    <section id="skills" className="section-divider py-16 sm:py-20">
      <div className="container-site">
        <Reveal>
          <p className="section-kicker">Stack</p>
          <h2 className="section-title mt-3 mb-10">Herramientas y prácticas</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.07}>
              <article className="skill-card surface h-full p-5 hover:-translate-y-1">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg">{group.title}</h3>
                  <span className="font-mono text-xs text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="skill-tag rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
