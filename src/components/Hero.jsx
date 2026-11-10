import { ArrowRight } from "./Icons.jsx";

function Headline({ lines, accent }) {
  return lines.map((line, i) => {
    const at = accent ? line.indexOf(accent) : -1;
    return (
      <span key={i} className="hero__line">
        {at < 0 ? (
          line
        ) : (
          <>
            {line.slice(0, at)}
            <span className="accent">{accent}</span>
            {line.slice(at + accent.length)}
          </>
        )}
      </span>
    );
  });
}

export default function Hero({ data }) {
  const firstName = data.name.split(" ")[0];
  return (
    <section id="home" className="hero">
      <div className="hero__frame">
        <div className="hero__glow" aria-hidden />
        <div className="hero__grain" aria-hidden />

        <div className="hero__content">
          <span className="pill">
            <span className="pill__dot" /> Available for Work
          </span>
          <h1 className="hero__title">
            <Headline lines={data.headline} accent={data.headlineAccent} />
          </h1>
          <p className="hero__lead">
            Hi, I'm {firstName}, a {data.role} based in {data.address}.{" "}
            {data.roleDescription}
          </p>
          <div className="hero__actions">
            <a href="#experience" className="btn btn--primary">
              View Experience <ArrowRight width={16} height={16} />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero__media">
          {/* <img src="images/img2.jpeg" alt={data.name} /> */}
          <dl className="stats">
            {data.stats.map((s) => (
              <div key={s.label} className="stats__item">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
