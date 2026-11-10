export default function Resume({ data }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Experience</span>
          <h2 className="section__title">
            Leading delivery across Government, Fintech &amp; AI
          </h2>
        </div>

        <div className="resume-grid">
          <ol className="jobs">
            {data.work.map((job) => (
              <li key={job.company} className="job reveal">
                <div className="job__head">
                  <div>
                    <h3>{job.company}</h3>
                    <p className="job__role">{job.role}</p>
                  </div>
                  <div className="job__meta">
                    <span className="job__period">{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <p className="job__impact">{job.impact}</p>
                {job.stack.length > 0 && (
                <ul className="job__stack">
                  {job.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                )}
              </li>
            ))}
          </ol>

          <aside className="side">
            <div className="side__card reveal">
              <h3>Education</h3>
              <ul>
                {data.education.map((e) => (
                  <li key={e.school} className="school">
                    {e.logo && (
                      <img
                        className="school__logo"
                        src={e.logo}
                        alt=""
                        width="40"
                        height="40"
                        loading="lazy"
                      />
                    )}
                    <div className="school__text">
                      <span className="side__period">{e.period}</span>
                      <strong>{e.school}</strong>
                      <span className="muted">{e.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="side__card reveal">
              <h3>Certifications</h3>
              <ul>
                {data.certifications.map((c) => (
                  <li key={c.name}>
                    <span className="side__period">{c.period}</span>
                    <strong>{c.name}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="side__card reveal">
              <h3>Giving Back</h3>
              <ul>
                {data.leadership.map((l) => (
                  <li key={l.org}>
                    <span className="side__period">{l.period}</span>
                    <strong>{l.org}</strong>
                    <span>{l.role}</span>
                    <span className="muted">{l.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
