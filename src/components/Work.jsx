import { useEffect, useState } from 'react';
import { ArrowRight } from './Icons.jsx';

const INITIAL = 4;

export default function Work({ data }) {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(null);
  const items = data.portfolio || [];
  const visible = showAll ? items : items.slice(0, INITIAL);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section__title">A few projects I've delivered</h2>
        </div>

        <div className="work-grid">
          {visible.map((item, i) => (
            <button
              key={item.name}
              className="work-card reveal"
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              onClick={() => setActive(item)}
            >
              <div className="work-card__media">
                <img src={item.imgurl} alt={item.name} loading="lazy" />
              </div>
              <div className="work-card__body">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {items.length > INITIAL && (
          <div className="center reveal">
            <button className="btn btn--light" onClick={() => setShowAll((s) => !s)}>
              {showAll ? 'Show Fewer Projects' : 'Check All Projects'}
              <ArrowRight width={16} height={16} style={{ transform: showAll ? 'rotate(-90deg)' : 'rotate(90deg)' }} />
            </button>
          </div>
        )}
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.name} onClick={() => setActive(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={active.imgurl} alt={active.name} />
            <figcaption>
              <strong>{active.name}</strong>
              <span>{active.description}</span>
              {active.url && (
                <a className="btn btn--primary lightbox__link" href={active.url} target="_blank" rel="noopener noreferrer">
                  Visit site <ArrowRight width={16} height={16} />
                </a>
              )}
            </figcaption>
          </figure>
          <button className="lightbox__close" aria-label="Close" onClick={() => setActive(null)}>
            ×
          </button>
        </div>
      )}
    </section>
  );
}
