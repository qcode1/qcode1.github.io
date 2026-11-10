import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowUpRight } from './Icons.jsx';

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
];

export default function Header({ data }) {
  const [open, setOpen] = useState(false);
  const brandRef = useRef(null);
  const rightRef = useRef(null);
  const initial = data.name.trim()[0];

  // The page "window" has a notch behind the nav on desktop; size it to the
  // actual brand and link widths so it hugs them at any font size.
  useLayoutEffect(() => {
    const root = document.documentElement;
    const measure = () => {
      const b = brandRef.current?.getBoundingClientRect();
      const r = rightRef.current?.getBoundingClientRect();
      if (!b || !r) return;
      root.style.setProperty('--notch-l', `${Math.round(b.right + 28)}px`);
      root.style.setProperty('--notch-r', `${Math.round(window.innerWidth - r.left + 28)}px`);
    };
    measure();
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${open ? 'nav--open' : ''}`}>
      <a href="#home" className="nav__brand" onClick={close} ref={brandRef}>
        <span className="nav__logo">{initial}</span>
        <span>Nii Q. Quartey</span>
      </a>

      <div className="nav__right" ref={rightRef}>
        <nav className="nav__links" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav__cta" onClick={close}>
          Let's Talk <ArrowUpRight width={14} height={14} />
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
