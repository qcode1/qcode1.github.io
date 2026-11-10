import { Mail, ArrowRight } from "lucide-react";
import {
  siReact,
  siTypescript,
  siNodedotjs,
  siPython,
  siPostgresql,
  siDocker,
  siGooglecloud,
  siGithubactions,
  siCloudflare,
  siMongodb,
  siMysql,
  siFlask,
  siLinux,
  siClaude,
} from "simple-icons";
import { LinkedIn, GitHub } from "./Icons.jsx";

const TOOL_ICONS = {
  React: siReact,
  TypeScript: siTypescript,
  "Node.js": siNodedotjs,
  Python: siPython,
  PostgreSQL: siPostgresql,
  Docker: siDocker,
  "Google Cloud": siGooglecloud,
  "GitHub Actions": siGithubactions,
  Cloudflare: siCloudflare,
  MongoDB: siMongodb,
  MySQL: siMysql,
  Flask: siFlask,
  Linux: siLinux,
  Claude: siClaude,
};

/** Infinite horizontal scroller: renders the items twice and slides by 50%. */
function Marquee({ children, speed = 30, className = "" }) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function About({ data }) {
  const tiles = [
    ...(data.socialLinks || []).map((l) => ({
      ...l,
      label: l.name === "linkedin" ? "LinkedIn" : "GitHub",
      Icon: l.name === "linkedin" ? LinkedIn : GitHub,
      external: true,
    })),
    { name: "email", label: "E-mail", url: `mailto:${data.email}`, Icon: Mail },
  ];

  const tools = data.tools.filter((t) => TOOL_ICONS[t]);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about__intro reveal">
          <span className="tag">About Me</span>
          <h2 className="section__title">
            {data.aboutTitle[0]}
            <br />
            <span className="accent">{data.aboutTitle[1]}</span>
          </h2>
        </div>

        <div className="bento">
          <div className="bento__card bento__bio reveal">
            {data.aboutme.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {data.aboutDirection && (
              <p className="bento__direction">{data.aboutDirection}</p>
            )}
          </div>

          <ul className="bento__card bento__links reveal">
            {tiles.map(({ name, label, url, Icon, external }) => (
              <li key={name} className={name === "email" ? "bento__link--wide" : undefined}>
                <a
                  href={url}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon width={26} height={26} strokeWidth={1.6} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="bento__card bento__tools reveal">
            <h3>Tool Stack</h3>
            <Marquee speed={28}>
              {tools.map((t) => {
                const icon = TOOL_ICONS[t];
                return (
                  <span key={t} className="tool" title={t}>
                    <svg viewBox="0 0 24 24" role="img" aria-label={t} fill={`#${icon.hex}`}>
                      <path d={icon.path} />
                    </svg>
                  </span>
                );
              })}
            </Marquee>
          </div>

          <div className="bento__card bento__skills reveal">
            <h3>Skill Stack</h3>
            <Marquee speed={36} className="marquee--reverse">
              {data.skillStack.map((s) => (
                <span key={s} className="skill-chip">
                  {s}
                </span>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="reveal" style={{ marginTop: 40 }}>
          <a href="#experience" className="btn btn--light">
            View My Experience <ArrowRight width={16} height={16} />
          </a>
        </div>

        <ul className="competencies">
          {data.competencies.map((c, i) => (
            <li
              key={c.title}
              className="competency reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="competency__num">0{i + 1}</span>
              <h3>{c.title}</h3>
              <p className="muted">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
