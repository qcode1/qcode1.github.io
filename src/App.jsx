import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Work from './components/Work.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import resumeData from './resumeData.js';

export default function App() {
  // Fade sections in as they scroll into view.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="frame" aria-hidden>
        <span className="frame__notch frame__notch--l" />
        <span className="frame__notch frame__notch--r" />
      </div>
      <Header data={resumeData} />
      <main>
        <Hero data={resumeData} />
        <About data={resumeData} />
        <Resume data={resumeData} />
        <Work data={resumeData} />
        <Contact data={resumeData} />
      </main>
    </>
  );
}
