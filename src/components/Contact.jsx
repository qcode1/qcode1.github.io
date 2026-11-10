import { Mail } from 'lucide-react';
import { ArrowUpRight, socialIcon } from './Icons.jsx';
import { NAV_LINKS } from './Header.jsx';

export default function Contact({ data }) {
  const socials = [
    { name: 'email', url: `mailto:${data.email}`, label: 'E-mail', Icon: Mail },
    ...(data.socialLinks || []).map((l) => ({
      ...l,
      label: l.name === 'linkedin' ? 'LinkedIn' : 'GitHub',
      Icon: socialIcon[l.name],
      external: true,
    })),
  ];

  return (
    <section id="contact" className="section section--last">
      <div className="container">
        <div className="connect reveal">
          <div className="hero__glow connect__glow" aria-hidden />

          <div className="connect__main">
            <span className="eyebrow">Contact</span>
            <h2 className="connect__title">Let's Connect</h2>
            <p className="muted">
              Open to engineering leadership roles, partnerships and client projects.
            </p>
            <a className="btn btn--primary" href={`mailto:${data.email}`}>
              {data.email} <ArrowUpRight width={16} height={16} />
            </a>
            <ul className="connect__socials">
              {socials.map(({ name, url, label, Icon, external }) => (
                <li key={name}>
                  <a
                    href={url}
                    aria-label={label}
                    title={label}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <Icon width={18} height={18} strokeWidth={1.8} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="connect__nav" aria-label="Footer">
            <a href="#home">Home</a>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {data.name}</span>
          <a href="#home" className="footer__top">Back to Top ↑</a>
        </footer>
      </div>
    </section>
  );
}
