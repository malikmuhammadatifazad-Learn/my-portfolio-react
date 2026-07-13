// src/components/Contact.js
function Contact() {
  return (
    <section id="contact" style={{
      marginTop: '60px',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '28px',
        fontWeight: 700,
        marginBottom: '12px',
        letterSpacing: '-0.5px'
      }}>
        Get In Touch
      </h2>
      <p style={{
        color: 'var(--gray)',
        marginBottom: '32px',
        fontSize: '17px'
      }}>
        Open to junior dev roles, freelance projects, or just a coffee chat.
      </p>

      <div style={{
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <a
          href="https://github.com/malikmuhammadatifazad-Learn"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            borderRadius: '50px',
            background: 'var(--card-bg)',
            color: 'var(--text)',
            textDecoration: 'none',
            fontWeight: 500,
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
            transition: 'all 0.3s ease',
            border: '1px solid transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#2563eb';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.color = '#2563eb';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.color = 'var(--text)';
          }}
        >
          <i className="fab fa-github"></i> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/malik-atif-784b7178"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            borderRadius: '50px',
            background: 'var(--card-bg)',
            color: 'var(--text)',
            textDecoration: 'none',
            fontWeight: 500,
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
            transition: 'all 0.3s ease',
            border: '1px solid transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#2563eb';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.color = '#2563eb';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.color = 'var(--text)';
          }}
        >
          <i className="fab fa-linkedin-in"></i> LinkedIn
        </a>

        <a
          href="mailto:malikmuhammadatifazad@gmail.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            borderRadius: '50px',
            background: 'var(--card-bg)',
            color: 'var(--text)',
            textDecoration: 'none',
            fontWeight: 500,
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
            transition: 'all 0.3s ease',
            border: '1px solid transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#2563eb';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.color = '#2563eb';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.color = 'var(--text)';
          }}
        >
          <i className="fas fa-envelope"></i> Email
        </a>
      </div>

      {/* Contact Form */}
      <div style={{
        maxWidth: '500px',
        margin: '30px auto 0',
        background: 'var(--card-bg)',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
        textAlign: 'left'
      }}>
        <form action="https://formspree.io/f/mbdnjojy" method="POST">
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px' }}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                background: '#f8fafc',
                color: 'var(--text)',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px' }}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                background: '#f8fafc',
                color: 'var(--text)',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px' }}>Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about your project..."
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                background: '#f8fafc',
                color: 'var(--text)',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px 32px',
              borderRadius: '50px',
              fontWeight: 600,
              background: '#2563eb',
              color: 'white',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1d4ed8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2563eb';
            }}
          >
            <i className="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;