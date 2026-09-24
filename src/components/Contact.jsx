import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { personal } from '../data/portfolio';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';

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

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 500);
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '0.8rem 0.95rem',
    background: errors[field] ? '#FEF2F2' : '#FFFFFF',
    border: `1.5px solid ${errors[field] ? '#FCA5A5' : 'var(--border)'}`,
    borderRadius: '8px',
    color: 'var(--text-primary)',
    fontSize: '0.875rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    resize: field === 'message' ? 'vertical' : 'none',
    minHeight: field === 'message' ? '128px' : 'auto',
    lineHeight: '1.6',
    boxShadow: 'var(--shadow-sm)',
  });

  return (
    <section
      id="contact"
      style={{
        padding: 'var(--section-padding)',
        position: 'relative',
        background: 'var(--bg-secondary)',
      }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label">Contact</div>
            <h2 className="section-heading" style={{ marginBottom: '0.75rem', maxWidth: '540px' }}>
              Let's build something <span className="accent-text">meaningful.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '460px', lineHeight: '1.75' }}>
              Have an interesting project, opportunity, or idea? I'm open to connections and collaborations.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '3rem',
            alignItems: 'start',
            maxWidth: '880px',
          }} className="contact-grid">

            {/* Left: contact info */}
            <div>
              <h3 style={{
                fontFamily: 'var(--font-body)',
                fontWeight: '600', color: 'var(--text-primary)',
                marginBottom: '1.5rem', fontSize: '0.95rem',
                letterSpacing: '-0.005em',
              }}>
                Reach me directly
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <ContactItem icon={Mail} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
                <ContactItem icon={Phone} label="Phone" value={personal.phone} href={`tel:${personal.phone}`} />
                <ContactItem
                  icon={() => LI_ICON}
                  label="LinkedIn"
                  value="Connect on LinkedIn"
                  href={personal.linkedin}
                  external
                />
                <ContactItem
                  icon={() => GH_ICON}
                  label="GitHub"
                  value="github.com/Giteshkumar23"
                  href={personal.github}
                  external
                />
              </div>
            </div>

            {/* Right: form */}
            <div style={{
              padding: '2rem',
              background: '#FFFFFF',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              boxShadow: 'var(--shadow-md)',
            }}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', gap: '0.75rem',
                    padding: '2.5rem 1rem', textAlign: 'center',
                  }}
                >
                  <CheckCircle size={36} color="var(--green)" />
                  <h3 style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}>Message sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.65' }}>
                    Your email client should have opened. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ marginBottom: '1.125rem' }}>
                    <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.375rem', letterSpacing: '0.02em' }}>
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      style={inputStyle('name')}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.1)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.name ? '#FCA5A5' : 'var(--border)'; e.target.style.boxShadow = 'var(--shadow-sm)'; }}
                    />
                    {errors.name && <p style={{ marginTop: '0.3rem', fontSize: '0.72rem', color: 'var(--red)' }}>{errors.name}</p>}
                  </div>

                  <div style={{ marginBottom: '1.125rem' }}>
                    <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.375rem', letterSpacing: '0.02em' }}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={inputStyle('email')}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.1)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.email ? '#FCA5A5' : 'var(--border)'; e.target.style.boxShadow = 'var(--shadow-sm)'; }}
                    />
                    {errors.email && <p style={{ marginTop: '0.3rem', fontSize: '0.72rem', color: 'var(--red)' }}>{errors.email}</p>}
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.375rem', letterSpacing: '0.02em' }}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={inputStyle('message')}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.1)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.message ? '#FCA5A5' : 'var(--border)'; e.target.style.boxShadow = 'var(--shadow-sm)'; }}
                    />
                    {errors.message && <p style={{ marginTop: '0.3rem', fontSize: '0.72rem', color: 'var(--red)' }}>{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                  >
                    {status === 'sending' ? 'Sending…' : <><Send size={14} />Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        display: 'flex', alignItems: 'center', gap: '0.875rem',
        padding: '0.875rem 1.125rem',
        background: '#FFFFFF',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        boxShadow: 'var(--shadow-sm)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(79,70,229,0.35)';
        e.currentTarget.style.background = 'var(--accent-light)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.background = '#FFFFFF';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      <div style={{
        width: '34px', height: '34px', borderRadius: '8px',
        background: 'var(--accent-light)',
        border: '1px solid rgba(79,70,229,0.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, color: 'var(--accent)',
      }}>
        <Icon size={15} color="var(--accent)" />
      </div>
      <div>
        <div style={{ fontSize: '0.68rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>
          {label}
        </div>
        <div style={{ fontSize: '0.82rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
          {value}
        </div>
      </div>
    </a>
  );
}
