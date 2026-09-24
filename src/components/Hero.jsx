import { motion } from 'framer-motion';
import { ArrowDown, Download, ChevronRight, Mail } from 'lucide-react';
import { personal } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

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

/* Profile card that shows photo or monogram fallback */
function ProfileCard({ photoUrl, name }) {
  return (
    <div style={{
      background: 'linear-gradient(145deg, #F8FAFC 0%, #EEF2FF 100%)',
      border: '1.5px solid #E0E7FF',
      borderRadius: '24px',
      padding: '2rem 1.75rem',
      boxShadow: '0 20px 60px rgba(79,70,229,0.1), 0 4px 16px rgba(0,0,0,0.06)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.25rem',
      minWidth: '280px',
      maxWidth: '320px',
    }}>
      {/* Decorative blobs */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-30px', right: '-30px',
        width: '100px', height: '100px', borderRadius: '50%',
        background: 'rgba(79,70,229,0.07)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-20px', left: '-20px',
        width: '80px', height: '80px', borderRadius: '50%',
        background: 'rgba(37,99,235,0.05)',
        pointerEvents: 'none',
      }} />

      {/* Photo ring */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          width: '148px', height: '148px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #4F46E5 0%, #2563EB 100%)',
          padding: '3px',
          boxShadow: '0 8px 32px rgba(79,70,229,0.22)',
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: '50%',
            background: '#fff',
            padding: '3px',
            overflow: 'hidden',
          }}>
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={`${name} — professional photo`}
                style={{
                  width: '100%', height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
            ) : null}
            <div style={{
              display: photoUrl ? 'none' : 'flex',
              width: '100%', height: '100%', borderRadius: '50%',
              background: 'linear-gradient(135deg, #4F46E5 0%, #2563EB 100%)',
              alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-body)',
              fontSize: '2.5rem', fontWeight: '700', color: '#fff',
            }}>
              G
            </div>
          </div>
        </div>

        {/* Available dot */}
        <div style={{
          position: 'absolute', bottom: '8px', right: '8px',
          width: '18px', height: '18px', borderRadius: '50%',
          background: '#22C55E',
          border: '2px solid #fff',
          boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
        }} aria-label="Available for opportunities" />
      </div>

      {/* Name + title */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          fontSize: '1rem', fontWeight: '700',
          color: 'var(--text-primary)', letterSpacing: '-0.01em',
          fontFamily: 'var(--font-body)',
        }}>
          {name}
        </div>
        <div style={{
          fontSize: '0.72rem', color: 'var(--accent)',
          fontWeight: '600', marginTop: '0.2rem',
          letterSpacing: '0.02em',
        }}>
          Data Scientist &amp; AI Developer
        </div>
      </div>

      {/* Tech pills */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '0.375rem', justifyContent: 'center',
        position: 'relative', zIndex: 1,
      }}>
        {['Python', 'Generative AI', 'RAG', 'SQL'].map(tag => (
          <span key={tag} style={{
            padding: '0.2rem 0.6rem',
            background: 'rgba(79,70,229,0.08)',
            border: '1px solid rgba(79,70,229,0.18)',
            borderRadius: '100px',
            fontSize: '0.65rem', fontWeight: '600',
            color: 'var(--accent)',
            letterSpacing: '0.02em',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Stats row */}
      <div style={{
        display: 'flex', gap: '0', width: '100%',
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative', zIndex: 1,
      }}>
        {[
          { num: '5+', label: 'Projects' },
          { num: '3', label: 'AI Apps' },
          { num: '5', label: 'Certs' },
        ].map((stat, i) => (
          <div key={stat.label} style={{
            flex: 1, padding: '0.75rem 0.5rem', textAlign: 'center',
            borderRight: i < 2 ? '1px solid var(--border)' : 'none',
          }}>
            <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', lineHeight: 1 }}>
              {stat.num}
            </div>
            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '0.2rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
        background: 'var(--bg-primary)',
      }}
    >
      {/* Very subtle blue tint in top-right corner */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, right: 0,
        width: '600px', height: '600px',
        background: 'radial-gradient(circle at 100% 0%, rgba(79,70,229,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      {/* Subtle dot grid */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, #E5E7EB 1.2px, transparent 1.2px)',
        backgroundSize: '28px 28px',
        mask: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 35%, black 100%)',
        WebkitMask: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 35%, black 100%)',
        pointerEvents: 'none',
        opacity: 0.7,
      }} />

      <div className="section-container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '4rem',
          alignItems: 'center',
        }} className="hero-grid">

          {/* ── LEFT: text ─────────────────────────────────── */}
          <div>
            {/* Available badge */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} style={{ marginBottom: '1.5rem' }}>
              <span className="badge">
                <span className="accent-dot" />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(2.2rem, 5.5vw, 3.75rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                letterSpacing: '-0.035em',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}
            >
              {personal.name}
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                fontWeight: '600',
                color: 'var(--accent)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em',
              }}
            >
              {personal.title}
            </motion.p>

            {/* Focus tags */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}
            >
              {['Data Science', 'Generative AI', 'RAG', 'Python', 'SQL', 'Machine Learning'].map(tag => (
                <span key={tag} style={{
                  padding: '0.25rem 0.7rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                }}>
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={4}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                maxWidth: '500px',
                marginBottom: '2.25rem',
              }}
            >
              {personal.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={5}
              style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}
            >
              <button onClick={() => goTo('projects')} className="btn-primary">
                View Projects <ChevronRight size={15} />
              </button>
              <a href={personal.resume} download className="btn-secondary">
                <Download size={15} /> Download Resume
              </a>
              <button onClick={() => goTo('contact')} className="btn-secondary">
                <Mail size={15} /> Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={6}
              style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}
            >
              <SocialLink href={personal.github} label="GitHub">{GH_ICON}GitHub</SocialLink>
              <span style={{ width: '1px', height: '14px', background: 'var(--border)', display: 'inline-block' }} />
              <SocialLink href={personal.linkedin} label="LinkedIn">{LI_ICON}LinkedIn</SocialLink>
              <span style={{ width: '1px', height: '14px', background: 'var(--border)', display: 'inline-block' }} />
              <SocialLink href={`mailto:${personal.email}`} label="Email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Email
              </SocialLink>
            </motion.div>
          </div>

          {/* ── RIGHT: profile card ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hero-visual"
            style={{ flexShrink: 0 }}
          >
            <ProfileCard photoUrl={personal.photo} name={personal.name} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          aria-hidden="true"
          style={{
            position: 'absolute', bottom: '-3rem', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          }}
        >
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
            <ArrowDown size={14} color="var(--text-muted)" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem !important;
          }
          .hero-visual { display: none !important; }
          .hero-grid > div:first-child {
            display: flex; flex-direction: column; align-items: center;
          }
          .hero-grid > div:first-child p { text-align: center; }
        }
      `}</style>
    </section>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} aria-label={label}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        color: 'var(--text-muted)',
        textDecoration: 'none',
        fontSize: '0.82rem', fontWeight: '500',
        fontFamily: 'var(--font-body)',
        transition: 'color 0.18s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
    >{children}</a>
  );
}
