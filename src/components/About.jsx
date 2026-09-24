import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personal, aboutCards } from '../data/portfolio';
import { GraduationCap, Building2, Calendar, Star } from 'lucide-react';

const cardIcons = [GraduationCap, Building2, Calendar, Star];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const cardIconColors = [
  { bg: '#EEF2FF', border: '#C7D2FE', color: '#4F46E5' },
  { bg: '#F0FDF4', border: '#BBF7D0', color: '#16A34A' },
  { bg: '#EFF6FF', border: '#BFDBFE', color: '#2563EB' },
  { bg: '#FDF4FF', border: '#E9D5FF', color: '#9333EA' },
];

const GH_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const focusAreas = [
  { label: 'Data Science', color: '#4F46E5', bg: '#EEF2FF', border: '#C7D2FE' },
  { label: 'Generative AI', color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
  { label: 'RAG', color: '#9333EA', bg: '#FAF5FF', border: '#E9D5FF' },
  { label: 'Python', color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
  { label: 'SQL', color: '#475569', bg: '#F8FAFC', border: '#CBD5E1' },
  { label: 'AI Applications', color: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      style={{
        padding: 'var(--section-padding)',
        position: 'relative',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Section label */}
          <motion.div variants={item}>
            <span className="section-label">About Me</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={item}
            className="section-heading"
            style={{ marginBottom: '2.5rem', maxWidth: '600px' }}
          >
            Turning data into insights &amp;{' '}
            <span className="accent-text">AI into solutions</span>
          </motion.h2>

          {/* Two-column layout */}
          <motion.div
            variants={item}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="about-grid"
          >
            {/* Left: text */}
            <div>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.85',
                marginBottom: '1.25rem',
              }}>
                {personal.aboutLong}
              </p>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                lineHeight: '1.85',
                marginBottom: '1.75rem',
              }}>
                {personal.aboutSecondary}
              </p>

              {/* Focus areas */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{
                  fontSize: '0.68rem', fontWeight: '700',
                  textTransform: 'uppercase', letterSpacing: '0.12em',
                  color: 'var(--text-muted)', marginBottom: '0.75rem',
                }}>
                  Primary Focus Areas
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {focusAreas.map(f => (
                    <span key={f.label} style={{
                      padding: '0.22rem 0.7rem',
                      background: f.bg,
                      border: `1px solid ${f.border}`,
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: f.color,
                      fontFamily: 'var(--font-body)',
                    }}>
                      {f.label}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem' }}
                >
                  {GH_ICON}
                  GitHub Profile
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="btn-primary"
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem' }}
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right: info cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}>
              {aboutCards.map((card, i) => {
                const Icon = cardIcons[i];
                const clr = cardIconColors[i] || cardIconColors[0];
                return (
                  <motion.div
                    key={card.label}
                    variants={item}
                    style={{
                      padding: '1.375rem',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                      e.currentTarget.style.borderColor = clr.border;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '9px',
                      background: clr.bg,
                      border: `1px solid ${clr.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '0.875rem',
                    }}>
                      <Icon size={16} color={clr.color} />
                    </div>
                    <div style={{
                      fontSize: '0.68rem', fontWeight: '700',
                      textTransform: 'uppercase', letterSpacing: '0.1em',
                      color: 'var(--text-muted)', marginBottom: '0.3rem',
                    }}>
                      {card.label}
                    </div>
                    <div style={{
                      fontSize: '0.875rem', fontWeight: '600',
                      color: 'var(--text-primary)', lineHeight: '1.4',
                    }}>
                      {card.value}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
