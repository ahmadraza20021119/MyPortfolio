import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      document.querySelectorAll('section[id]').forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <div className="nav-logo">AR/</div>
      <ul className="nav-links">
        {['about', 'skills', 'projects', 'experience', 'certificates', 'contact'].map((id) => (
          <li key={id}>
            <a 
              href={`#${id}`} 
              className={activeSection === id ? 'active' : ''}
              style={{ color: activeSection === id ? 'var(--accent)' : 'var(--muted)' }}
            >
              {id === 'certificates' ? 'Certs' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
