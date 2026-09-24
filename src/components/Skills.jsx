import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolio';

/* ── Category color configs ─────────────────────────────────────────── */
const categoryConfig = {
  'Programming Languages':   { dot: '#4F46E5', bg: '#EEF2FF', border: '#C7D2FE', text: '#4338CA' },
  'AI & Data':               { dot: '#DC2626', bg: '#FEF2F2', border: '#FECACA', text: '#B91C1C' },
  'Frameworks & Libraries':  { dot: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0', text: '#15803D' },
  'Databases':               { dot: '#9333EA', bg: '#FDF4FF', border: '#E9D5FF', text: '#7E22CE' },
  'Tools':                   { dot: '#D97706', bg: '#FFFBEB', border: '#FDE68A', text: '#B45309' },
  'Core CS':                 { dot: '#475569', bg: '#F8FAFC', border: '#CBD5E1', text: '#334155' },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActive] = useState(null);

  const filtered = activeCategory ? skills.filter(s => s.category === activeCategory) : skills;

  return (
    <section
      id="skills"
      style={{
        padding: 'var(--section-padding)',
        position: 'relative',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Skills</span>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <h2 className="section-heading" style={{ margin: 0 }}>
              Technical <span className="accent-text">Expertise</span>
            </h2>

            {/* Category filters */}
            <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <FilterBtn active={!activeCategory} onClick={() => setActive(null)} cfg={{ dot: '#4F46E5', bg: '#EEF2FF', border: '#C7D2FE', text: '#4338CA' }}>
                All
              </FilterBtn>
              {skills.map(s => {
                const cfg = categoryConfig[s.category] || categoryConfig['Core CS'];
                return (
                  <FilterBtn
                    key={s.category}
                    active={activeCategory === s.category}
                    onClick={() => setActive(activeCategory === s.category ? null : s.category)}
                    cfg={cfg}
                  >
                    {s.category}
                  </FilterBtn>
                );
              })}
            </div>
          </div>

          {/* Skills grid */}
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem',
            }}
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((group, gi) => {
                const cfg = categoryConfig[group.category] || categoryConfig['Core CS'];
                return (
                  <motion.div
                    key={group.category}
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3, delay: gi * 0.04 }}
                    style={{
                      padding: '1.375rem',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                      e.currentTarget.style.borderColor = cfg.border;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    {/* Category header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: cfg.dot, flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: '0.7rem', fontWeight: '700',
                        textTransform: 'uppercase', letterSpacing: '0.12em',
                        color: cfg.text, fontFamily: 'var(--font-body)',
                      }}>
                        {group.category}
                      </span>
                    </div>

                    {/* Skill chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {group.items.map(skill => (
                        <span
                          key={skill}
                          style={{
                            padding: '0.25rem 0.65rem',
                            background: cfg.bg,
                            border: `1px solid ${cfg.border}`,
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            fontWeight: '500',
                            color: cfg.text,
                            fontFamily: 'var(--font-body)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FilterBtn({ active, onClick, cfg, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.3rem 0.75rem',
        borderRadius: '6px',
        border: `1px solid ${active ? cfg.border : 'var(--border)'}`,
        background: active ? cfg.bg : 'transparent',
        color: active ? cfg.text : 'var(--text-secondary)',
        fontSize: '0.72rem',
        fontWeight: '600',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        transition: 'all 0.18s ease',
        letterSpacing: '0.02em',
      }}
      onMouseEnter={e => {
        if (!active) {
          e.currentTarget.style.borderColor = cfg.border;
          e.currentTarget.style.background = cfg.bg;
          e.currentTarget.style.color = cfg.text;
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--text-secondary)';
        }
      }}
    >
      {children}
    </button>
  );
}
