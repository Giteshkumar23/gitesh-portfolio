import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { journey, training } from '../data/portfolio';
import { GraduationCap, BookOpen, Code2, Cpu, Target, Award, Briefcase } from 'lucide-react';

const typeConfig = {
  education:    { icon: GraduationCap, color: '#2563EB', bg: '#EFF6FF',  border: '#BFDBFE'  },
  learning:     { icon: BookOpen,      color: '#16A34A', bg: '#F0FDF4',  border: '#BBF7D0'  },
  training:     { icon: Briefcase,     color: '#D97706', bg: '#FFFBEB',  border: '#FDE68A'  },
  certification:{ icon: Award,         color: '#7C3AED', bg: '#F5F3FF',  border: '#DDD6FE'  },
  project:      { icon: Code2,         color: '#7C3AED', bg: '#F5F3FF',  border: '#DDD6FE'  },
  milestone:    { icon: Cpu,           color: '#4F46E5', bg: '#EEF2FF',  border: '#C7D2FE'  },
  current:      { icon: Target,        color: '#4F46E5', bg: '#EEF2FF',  border: '#A5B4FC'  },
};

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="journey"
      style={{
        padding: 'var(--section-padding)',
        position: 'relative',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Journey</div>

          <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
            Experience &amp; <span className="accent-text">Learning Journey</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '3.5rem', maxWidth: '520px', lineHeight: '1.75' }}>
            A timeline of my technical learning, training, and project development since starting my journey in 2023.
          </p>

          {/* ── Timeline ─────────────────────────────────────────── */}
          <div style={{ position: 'relative', maxWidth: '740px', marginBottom: '4rem' }}>
            {/* Vertical line */}
            <div aria-hidden="true" style={{
              position: 'absolute',
              left: '22px', top: '26px', bottom: '26px',
              width: '1px',
              background: 'linear-gradient(to bottom, var(--border), rgba(79,70,229,0.25), transparent)',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {journey.map((item, i) => {
                const cfg = typeConfig[item.type] || typeConfig.education;
                const Icon = cfg.icon;
                const isCurrent = item.type === 'current';

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: 'flex', gap: '1.375rem', alignItems: 'flex-start' }}
                  >
                    {/* Icon node */}
                    <div style={{
                      flexShrink: 0,
                      width: '44px', height: '44px',
                      borderRadius: '50%',
                      background: cfg.bg,
                      border: `1px solid ${cfg.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      position: 'relative', zIndex: 1,
                      boxShadow: isCurrent ? `0 0 0 4px ${cfg.bg}` : 'var(--shadow-sm)',
                    }}>
                      <Icon size={18} color={cfg.color} />
                    </div>

                    {/* Content card */}
                    <div
                      style={{
                        flex: 1,
                        padding: '1.125rem 1.375rem',
                        background: '#FFFFFF',
                        border: `1px solid ${isCurrent ? cfg.border : 'var(--border)'}`,
                        borderRadius: '10px',
                        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        marginBottom: '0.25rem',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = cfg.border;
                        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = isCurrent ? cfg.border : 'var(--border)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      }}
                    >
                      {isCurrent && (
                        <div aria-hidden="true" style={{
                          position: 'absolute', top: 0, right: 0,
                          width: '80px', height: '80px',
                          background: `radial-gradient(circle, ${cfg.color}10 0%, transparent 70%)`,
                          borderRadius: '50%',
                          transform: 'translate(30%, -30%)',
                          pointerEvents: 'none',
                        }} />
                      )}

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <h3 style={{
                          fontSize: '0.95rem', fontWeight: '600',
                          color: 'var(--text-primary)', letterSpacing: '-0.005em',
                          fontFamily: 'var(--font-body)',
                        }}>
                          {item.title}
                        </h3>
                        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexShrink: 0, flexWrap: 'wrap' }}>
                          {item.badge && (
                            <span style={{
                              padding: '0.12rem 0.45rem',
                              background: cfg.bg,
                              border: `1px solid ${cfg.border}`,
                              borderRadius: '100px',
                              fontSize: '0.62rem', fontWeight: '700',
                              color: cfg.color, whiteSpace: 'nowrap',
                              letterSpacing: '0.04em',
                            }}>
                              {item.badge}
                            </span>
                          )}
                          <span style={{
                            padding: '0.15rem 0.55rem',
                            background: 'var(--bg-subtle)',
                            border: '1px solid var(--border)',
                            borderRadius: '100px',
                            fontSize: '0.68rem', fontWeight: '700',
                            color: 'var(--text-muted)', whiteSpace: 'nowrap',
                            letterSpacing: '0.04em',
                            fontFamily: 'var(--font-body)',
                          }}>
                            {item.year}
                          </span>
                        </div>
                      </div>

                      <p style={{ fontSize: '0.75rem', fontWeight: '600', color: cfg.color, marginBottom: '0.45rem', letterSpacing: '0.02em' }}>
                        {item.organization}
                      </p>

                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                        {item.description}
                      </p>

                      {isCurrent && (
                        <div style={{ marginTop: '0.625rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span className="accent-dot" />
                          <span style={{ fontSize: '0.7rem', fontWeight: '700', color: 'var(--green)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Active</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Training & Practical Experience ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
          >
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem',
            }}>
              <span style={{
                fontSize: '0.7rem', fontWeight: '700',
                textTransform: 'uppercase', letterSpacing: '0.12em',
                color: 'var(--accent)',
              }}>Training &amp; Practical Experience</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1rem',
            }} className="training-grid">
              {training.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  style={{
                    padding: '1.5rem',
                    background: '#FFFFFF',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.22s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(79,70,229,0.3)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.75rem' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: 'var(--accent-light)',
                      border: '1px solid rgba(79,70,229,0.18)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Briefcase size={17} color="var(--accent)" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: '0.88rem', fontWeight: '700',
                        color: 'var(--text-primary)', lineHeight: '1.35',
                        marginBottom: '0.2rem',
                        fontFamily: 'var(--font-body)',
                      }}>
                        {t.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: '600' }}>
                        {t.organization}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.835rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '0.875rem' }}>
                    {t.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                    {t.technologies.map(tech => (
                      <span key={tech} style={{
                        padding: '0.18rem 0.55rem',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        fontSize: '0.7rem', fontWeight: '600',
                        color: 'var(--text-secondary)',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                      {t.period} · {t.duration}
                    </span>
                    {t.grade && (
                      <span style={{
                        padding: '0.15rem 0.55rem',
                        background: '#F0FDF4',
                        border: '1px solid #BBF7D0',
                        borderRadius: '100px',
                        fontSize: '0.65rem', fontWeight: '700',
                        color: '#16A34A',
                        letterSpacing: '0.04em',
                      }}>
                        Grade {t.grade}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .training-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
