import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { Award, ExternalLink } from 'lucide-react';

/* Organization color configs */
const orgConfig = {
  'Udemy':         { bg: '#FFF7ED', border: '#FED7AA', text: '#EA580C', initial: 'U' },
  'KodeZen Technologies': { bg: '#EFF6FF', border: '#BFDBFE', text: '#2563EB', initial: 'K' },
  'Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai': { bg: '#F0FDF4', border: '#BBF7D0', text: '#16A34A', initial: 'C' },
  'IBM SkillsBuild': { bg: '#EEF2FF', border: '#C7D2FE', text: '#4F46E5', initial: 'IBM' },
  'IBM':           { bg: '#EEF2FF', border: '#C7D2FE', text: '#4F46E5', initial: 'IBM' },
};

const DEFAULT_ORG = { bg: '#F8FAFC', border: '#CBD5E1', text: '#475569', initial: '?' };

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Credentials</div>

          <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
            Certifications &amp; <span className="accent-text">Credentials</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '3rem', maxWidth: '480px', lineHeight: '1.75' }}>
            Professional certifications and training credentials earned through structured learning programs.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.125rem',
          }} className="certs-grid">
            {certifications.map((cert, i) => {
              const orgCfg = orgConfig[cert.organization] || DEFAULT_ORG;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(79,70,229,0.3)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  {/* Card header */}
                  <div style={{
                    padding: '1.25rem 1.375rem',
                    background: `linear-gradient(135deg, ${orgCfg.bg} 0%, #FFFFFF 100%)`,
                    borderBottom: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                  }}>
                    {/* Org initial badge */}
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '10px',
                      background: orgCfg.bg,
                      border: `1px solid ${orgCfg.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={`${cert.organization} logo`}
                          style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '4px' }}
                          onError={e => { e.target.style.display = 'none'; }}
                        />
                      ) : (
                        <span style={{
                          fontSize: orgCfg.initial.length > 1 ? '0.6rem' : '0.88rem',
                          fontWeight: '800',
                          color: orgCfg.text,
                          letterSpacing: '-0.02em',
                          fontFamily: 'var(--font-body)',
                        }}>
                          {orgCfg.initial}
                        </span>
                      )}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '0.72rem', fontWeight: '600',
                        color: orgCfg.text, marginBottom: '0.1rem',
                        letterSpacing: '0.01em',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}>
                        {cert.organization}
                      </div>
                      {cert.issuer && cert.issuer !== cert.organization && (
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                          by {cert.issuer}
                        </div>
                      )}
                    </div>

                    <Award size={16} color={orgCfg.text} style={{ flexShrink: 0, opacity: 0.7 }} />
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '1.25rem 1.375rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                      fontSize: '0.9rem', fontWeight: '700',
                      color: 'var(--text-primary)', lineHeight: '1.4',
                      marginBottom: '0.625rem',
                      fontFamily: 'var(--font-body)',
                      flex: 1,
                    }}>
                      {cert.title}
                    </h3>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                      {cert.date && (
                        <span style={{
                          padding: '0.18rem 0.55rem',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border)',
                          borderRadius: '4px',
                          fontSize: '0.68rem', fontWeight: '600',
                          color: 'var(--text-muted)',
                        }}>
                          {cert.date}
                        </span>
                      )}
                      {cert.duration && (
                        <span style={{
                          padding: '0.18rem 0.55rem',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border)',
                          borderRadius: '4px',
                          fontSize: '0.68rem', fontWeight: '600',
                          color: 'var(--text-muted)',
                        }}>
                          {cert.duration}
                        </span>
                      )}
                      {cert.grade && (
                        <span style={{
                          padding: '0.18rem 0.55rem',
                          background: '#F0FDF4',
                          border: '1px solid #BBF7D0',
                          borderRadius: '4px',
                          fontSize: '0.68rem', fontWeight: '700',
                          color: '#16A34A',
                          letterSpacing: '0.02em',
                        }}>
                          Grade {cert.grade}
                        </span>
                      )}
                    </div>

                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                          fontSize: '0.75rem', fontWeight: '600',
                          color: 'var(--accent)', textDecoration: 'none',
                          transition: 'color 0.2s ease',
                          alignSelf: 'flex-start',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-hover)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--accent)'}
                      >
                        View Certificate <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span style={{
                        fontSize: '0.72rem', color: 'var(--text-muted)',
                        fontStyle: 'italic',
                      }}>
                        Certificate available on request
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .certs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
