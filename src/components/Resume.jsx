import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personal } from '../data/portfolio';
import { FileText, Download } from 'lucide-react';

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="resume" style={{ padding: 'var(--section-padding)', position: 'relative', background: 'var(--bg-primary)' }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: '4rem 3.5rem',
            background: '#FFFFFF',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Subtle corner accent */}
          <div aria-hidden="true" style={{
            position: 'absolute', top: '-50px', right: '-50px',
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div aria-hidden="true" style={{
            position: 'absolute', bottom: '-40px', left: '-40px',
            width: '160px', height: '160px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Icon */}
          <div style={{
            width: '52px', height: '52px', borderRadius: '12px',
            background: 'var(--accent-light)',
            border: '1px solid rgba(79,70,229,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}>
            <FileText size={22} color="var(--accent)" />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '0.875rem',
            lineHeight: '1.25',
            letterSpacing: '-0.025em',
            position: 'relative',
          }}>
            My <span style={{ color: 'var(--accent)' }}>Resume</span>
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            lineHeight: '1.75',
            marginBottom: '2.5rem',
            maxWidth: '420px',
            margin: '0 auto 2.5rem',
            position: 'relative',
          }}>
            Explore my resume to see my education, technical skills, projects, and learning journey as a Data Scientist &amp; AI Developer.
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FileText size={15} />
              View Resume
            </a>
            <a
              href={personal.resume}
              download="Gitesh_Kumar_Patel_Resume.pdf"
              className="btn-secondary"
            >
              <Download size={15} />
              Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
