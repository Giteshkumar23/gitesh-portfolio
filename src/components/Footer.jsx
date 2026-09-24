import { motion } from 'framer-motion';
import { personal } from '../data/portfolio';
import { ArrowUp } from 'lucide-react';

const GH_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LI_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MAIL_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 0',
      background: 'var(--bg-primary)',
    }}>
      <div className="section-container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          {/* Left: branding */}
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: '700', fontSize: '0.95rem',
              color: 'var(--text-primary)', marginBottom: '0.2rem',
              letterSpacing: '-0.01em',
            }}>
              {personal.name}
            </div>
            <div style={{
              fontSize: '0.72rem', color: 'var(--text-muted)',
              fontFamily: 'var(--font-body)',
            }}>
              {personal.title}
            </div>
            <div style={{
              fontSize: '0.68rem', color: 'var(--text-muted)',
              fontStyle: 'italic',
              marginTop: '0.1rem',
            }}>
              "Building intelligent, data-driven solutions."
            </div>
          </div>

          {/* Center: social links */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <SocialLink href={personal.github} label="GitHub">{GH_ICON}</SocialLink>
            <SocialLink href={personal.linkedin} label="LinkedIn">{LI_ICON}</SocialLink>
            <SocialLink href={`mailto:${personal.email}`} label="Email">{MAIL_ICON}</SocialLink>
          </div>

          {/* Right: back to top + copyright */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.625rem' }}>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.375rem',
                background: 'var(--accent-light)',
                border: '1px solid rgba(79,70,229,0.2)',
                borderRadius: '6px',
                padding: '0.4rem 0.8rem',
                cursor: 'pointer',
                color: 'var(--accent)',
                fontSize: '0.75rem',
                fontWeight: '600',
                fontFamily: 'var(--font-body)',
                transition: 'background 0.2s ease, box-shadow 0.2s ease',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(79,70,229,0.12)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--accent-light)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={12} />
              Back to top
            </motion.button>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} {personal.name}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      aria-label={label}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '34px', height: '34px',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        color: 'var(--text-muted)',
        textDecoration: 'none',
        transition: 'border-color 0.2s ease, color 0.2s ease, background 0.2s ease',
        background: '#FFFFFF',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.color = 'var(--accent)';
        e.currentTarget.style.background = 'var(--accent-light)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color = 'var(--text-muted)';
        e.currentTarget.style.background = '#FFFFFF';
      }}
    >
      {children}
    </a>
  );
}
