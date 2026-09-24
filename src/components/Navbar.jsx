import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/portfolio';

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Journey',        href: '#journey' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume',         href: '#resume' },
  { label: 'Contact',        href: '#contact' },
];

const GH_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LI_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled]    = useState(false);
  const [menuOpen, setMenuOpen]    = useState(false);
  const [activeSection, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href) => {
    setMenuOpen(false);
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '0 1.5rem',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px) saturate(1.6)',
          borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
          boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: scrolled ? '58px' : '68px',
          transition: 'height 0.3s ease',
        }}>

          {/* Logo */}
          <button
            onClick={() => go('#home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '9px' }}
            aria-label="Go to top"
          >
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px',
              background: 'var(--accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              fontWeight: '700', fontSize: '15px', color: '#fff',
              flexShrink: 0, boxShadow: '0 2px 8px rgba(79,70,229,0.3)',
            }}>G</div>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '700', fontSize: '0.9rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}>{personal.firstName}</span>
          </button>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
            {navLinks.map(link => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => go(link.href)}
                  style={{
                    background: isActive ? 'var(--accent-light)' : 'none',
                    border: 'none', cursor: 'pointer',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? '600' : '500',
                    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                    transition: 'color 0.18s ease, background 0.18s ease',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.background = 'var(--bg-secondary)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.background = 'none';
                    }
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop right actions */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <IconLink href={personal.github} label="GitHub">{GH_ICON}</IconLink>
            <IconLink href={personal.linkedin} label="LinkedIn">{LI_ICON}</IconLink>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.8rem' }}
            >Resume</a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="nav-hamburger"
            style={{
              display: 'none',
              background: 'none',
              border: '1.5px solid var(--border)',
              borderRadius: '7px', padding: '0.4rem',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s ease',
            }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{
                overflow: 'hidden',
                background: '#fff',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div style={{ padding: '0.75rem 0' }}>
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.button
                      key={link.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => go(link.href)}
                      style={{
                        display: 'block', width: '100%', textAlign: 'left',
                        background: isActive ? 'var(--accent-light)' : 'none',
                        border: 'none', cursor: 'pointer',
                        padding: '0.65rem 1.5rem',
                        fontSize: '0.9rem',
                        fontWeight: isActive ? '600' : '500',
                        color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                        fontFamily: 'var(--font-body)',
                        borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
                      }}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}
                <div style={{
                  padding: '0.75rem 1.5rem',
                  display: 'flex', gap: '0.625rem',
                  borderTop: '1px solid var(--border)', marginTop: '0.5rem',
                }}>
                  <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}>GitHub</a>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}>LinkedIn</a>
                  <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}>Resume</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '34px', height: '34px', borderRadius: '7px',
        border: '1.5px solid var(--border)',
        color: 'var(--text-muted)',
        textDecoration: 'none',
        transition: 'border-color 0.18s ease, color 0.18s ease, background 0.18s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.color = 'var(--accent)';
        e.currentTarget.style.background = 'var(--accent-light)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color = 'var(--text-muted)';
        e.currentTarget.style.background = 'transparent';
      }}
    >{children}</a>
  );
}
