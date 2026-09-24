import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import { ExternalLink, X, ChevronRight } from 'lucide-react';

/* ── Tech badge colors — light theme palette ───────────────────────────────── */
const techColors = {
  Python:           { text: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
  Flask:            { text: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0' },
  Groq:             { text: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
  RAG:              { text: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
  SQLAlchemy:       { text: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
  SQLite:           { text: '#9333EA', bg: '#FAF5FF', border: '#E9D5FF' },
  PostgreSQL:       { text: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE' },
  SQL:              { text: '#475569', bg: '#F8FAFC', border: '#CBD5E1' },
  Docker:           { text: '#0369A1', bg: '#F0F9FF', border: '#BAE6FD' },
  'Vector Search':  { text: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
  'Google Gemini':  { text: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE' },
  'Generative AI':  { text: '#9333EA', bg: '#FAF5FF', border: '#E9D5FF' },
  Streamlit:        { text: '#EA580C', bg: '#FFF7ED', border: '#FED7AA' },
  Plotly:           { text: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
  Pandas:           { text: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
};

const DEFAULT_TECH = { text: '#475569', bg: '#F8FAFC', border: '#CBD5E1' };

/* Project visual config */
const projectConfig = {
  'manufacturing-agent': {
    gradient: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)',
    icon: '⚙',
    accent: '#7C3AED',
  },
  'ask-my-docs': {
    gradient: 'linear-gradient(135deg, #F0FDF4 0%, #EFF6FF 100%)',
    icon: '📄',
    accent: '#2563EB',
  },
  'ai-resume-analyzer': {
    gradient: 'linear-gradient(135deg, #EFF6FF 0%, #EEF2FF 100%)',
    icon: '🤖',
    accent: '#4F46E5',
  },
  'aim-trainer': {
    gradient: 'linear-gradient(135deg, #FFF7ED 0%, #FEF9C3 100%)',
    icon: '🎯',
    accent: '#D97706',
  },
  'snake-game': {
    gradient: 'linear-gradient(135deg, #F0FDF4 0%, #ECFEFF 100%)',
    icon: '🐍',
    accent: '#16A34A',
  },
};

const DEFAULT_CONFIG = {
  gradient: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)',
  icon: '◆',
  accent: 'var(--accent)',
};

function TechBadge({ tech }) {
  const c = techColors[tech] || DEFAULT_TECH;
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.18rem 0.55rem',
      background: c.bg,
      border: `1px solid ${c.border}`,
      borderRadius: '4px',
      fontSize: '0.7rem',
      fontWeight: '600',
      color: c.text,
      letterSpacing: '0.02em',
      fontFamily: 'var(--font-body)',
    }}>
      {tech}
    </span>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const cfg = projectConfig[project.id] || DEFAULT_CONFIG;
  const accent = cfg.accent;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1.5rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{
            background: '#FFFFFF',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            maxWidth: '680px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 32px 80px rgba(0,0,0,0.14)',
            position: 'relative',
          }}
        >
          {/* Header band */}
          <div style={{
            padding: '2rem 2.25rem 1.5rem',
            borderBottom: '1px solid var(--border)',
            background: cfg.gradient,
            borderRadius: '16px 16px 0 0',
          }}>
            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '6px', padding: '0.35rem',
                cursor: 'pointer', color: 'var(--text-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = accent; e.currentTarget.style.borderColor = accent; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <X size={16} />
            </button>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '12px',
                background: '#fff',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', flexShrink: 0,
                boxShadow: 'var(--shadow-sm)',
              }}>
                {cfg.icon}
              </div>
              <div>
                <h3 id="modal-title" style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem', fontWeight: '700',
                  color: 'var(--text-primary)', marginBottom: '0.25rem',
                  letterSpacing: '-0.01em',
                }}>
                  {project.title}
                </h3>
                <p style={{ color: accent, fontSize: '0.82rem', fontWeight: '600', letterSpacing: '0.02em' }}>
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '1.75rem 2.25rem 2.25rem' }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.75rem', fontSize: '0.91rem' }}>
              {project.longDescription}
            </p>

            {/* Features */}
            {project.features?.length > 0 && (
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.68rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                  Key Features
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {project.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <ChevronRight size={13} color={accent} style={{ flexShrink: 0, marginTop: '3px' }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.68rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                Technologies
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {project.technologies.map(t => <TechBadge key={t} tech={t} />)}
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.6rem 1.2rem' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.6rem 1.2rem' }}>
                  <ExternalLink size={13} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index, onClick }) {
  const cfg = projectConfig[project.id] || DEFAULT_CONFIG;
  const accent = cfg.accent;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onClick(project)}
      style={{
        background: '#FFFFFF',
        border: project.featured ? `1px solid rgba(79,70,229,0.22)` : '1px solid var(--border)',
        borderRadius: '14px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
        position: 'relative',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
        e.currentTarget.style.borderColor = `${accent}40`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.borderColor = project.featured ? 'rgba(79,70,229,0.22)' : 'var(--border)';
      }}
    >
      {/* Visual header */}
      <div style={{
        height: '120px',
        background: cfg.gradient,
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.25rem 1.5rem',
        position: 'relative', overflow: 'hidden',
        flexShrink: 0,
      }}>
        {/* Decorative tech watermark */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, padding: '0.75rem 1rem',
          fontFamily: 'ui-monospace, monospace',
          fontSize: '0.6rem',
          color: `${accent}12`,
          lineHeight: '1.9',
          overflow: 'hidden',
          userSelect: 'none',
          pointerEvents: 'none',
        }}>
          {[...project.technologies, ...project.technologies, ...project.technologies].join(' · ')}
        </div>

        {/* Project icon */}
        <div style={{
          width: '48px', height: '48px', borderRadius: '12px',
          background: '#fff',
          border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem', position: 'relative', zIndex: 1,
          flexShrink: 0,
          boxShadow: 'var(--shadow-sm)',
        }}>
          {cfg.icon}
        </div>

        {/* Featured badge */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem', position: 'relative', zIndex: 1 }}>
          {project.featured && (
            <span style={{
              padding: '0.18rem 0.55rem',
              background: 'rgba(79,70,229,0.08)',
              border: '1px solid rgba(79,70,229,0.2)',
              borderRadius: '100px',
              fontSize: '0.65rem', fontWeight: '700',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              color: 'var(--accent)',
            }}>Featured</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.975rem', fontWeight: '700',
          color: 'var(--text-primary)', marginBottom: '0.2rem',
          letterSpacing: '-0.01em',
        }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.72rem', color: accent, fontWeight: '600', marginBottom: '0.625rem', letterSpacing: '0.02em' }}>
          {project.subtitle}
        </p>
        <p style={{
          fontSize: '0.845rem', color: 'var(--text-secondary)',
          lineHeight: '1.7', marginBottom: '1rem', flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
          {project.technologies.slice(0, 5).map(t => <TechBadge key={t} tech={t} />)}
          {project.technologies.length > 5 && (
            <span style={{
              fontSize: '0.68rem', color: 'var(--text-muted)', alignSelf: 'center',
              padding: '0.18rem 0.55rem',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              fontWeight: '600',
            }}>
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Footer row */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="btn-secondary"
                style={{ padding: '0.35rem 0.8rem', fontSize: '0.75rem' }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="btn-secondary" style={{ padding: '0.35rem 0.8rem', fontSize: '0.75rem' }}>
                <ExternalLink size={11} />
                Demo
              </a>
            )}
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.25rem',
            fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500',
          }}>
            Details <ChevronRight size={11} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedProject, setSelected] = useState(null);

  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Projects</div>

          <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
            What I've <span className="accent-text">Built</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '3rem', maxWidth: '520px', lineHeight: '1.75' }}>
            AI-powered applications, data tools, and software projects built with Python, Generative AI, RAG, and modern development technologies.
          </p>

          {/* Featured projects label */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem',
          }}>
            <span style={{
              fontSize: '0.7rem', fontWeight: '700',
              textTransform: 'uppercase', letterSpacing: '0.12em',
              color: 'var(--accent)',
            }}>Featured Projects</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>

          {/* Featured grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem',
          }} className="projects-grid">
            {featured.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={setSelected}
              />
            ))}
          </div>

          {/* Other projects label */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem',
          }}>
            <span style={{
              fontSize: '0.7rem', fontWeight: '700',
              textTransform: 'uppercase', letterSpacing: '0.12em',
              color: 'var(--text-muted)',
            }}>More Projects</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>

          {/* Other projects grid — slightly smaller */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
          }} className="projects-grid-sm">
            {others.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={featured.length + i}
                onClick={setSelected}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ textAlign: 'center' }}
          >
            <a
              href="https://github.com/Giteshkumar23?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelected(null)} />
      )}

      <style>{`
        @media (max-width: 768px) {
          .projects-grid, .projects-grid-sm {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
