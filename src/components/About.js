function About() {
  return (
    <section id="about" style={{ marginTop: '60px' }}>
      <h2 style={{
        fontSize: '28px',
        fontWeight: 700,
        marginBottom: '12px',
        letterSpacing: '-0.5px',
        color: 'var(--text)'
      }}>
        About Me
      </h2>
      <p style={{
        color: 'var(--gray)',
        marginBottom: '32px',
        fontSize: '17px'
      }}>
        Why I made the switch — and what I bring.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        background: 'var(--card-bg)',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: 'var(--shadow)',
        transition: 'background 0.3s ease, box-shadow 0.3s ease'
      }}>
        {/* Left Column: My Journey */}
        <div>
          <h3 style={{
            fontSize: '20px',
            marginBottom: '16px',
            color: 'var(--text)'
          }}>
            🚀 My Journey
          </h3>
          <p style={{ color: 'var(--text)' }}>
            I spent 6+ years as a Media Buyer managing multi-million dollar ad budgets across
            Taboola, Meta, TikTok, and Outbrain. I loved the data — but I wanted to <strong>build</strong>
            the tools, not just use them.
          </p>
          <p style={{ marginTop: '12px', color: 'var(--text)' }}>
            Now I combine <strong>marketing intuition</strong> with <strong>engineering precision</strong>
            to build products that actually convert.
          </p>
        </div>

        {/* Right Column: Tech Stack */}
        <div>
          <h3 style={{
            fontSize: '20px',
            marginBottom: '16px',
            color: 'var(--text)'
          }}>
            💻 Tech Stack
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{
              padding: '8px 0',
              borderBottom: '1px solid var(--light-gray)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--text)'
            }}>
              <span style={{ color: '#2563eb' }}>✅</span> HTML5 & CSS3 (Flexbox, Grid)
            </li>
            <li style={{
              padding: '8px 0',
              borderBottom: '1px solid var(--light-gray)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--text)'
            }}>
              <span style={{ color: '#2563eb' }}>✅</span> JavaScript (ES6+, DOM, Fetch)
            </li>
            <li style={{
              padding: '8px 0',
              borderBottom: '1px solid var(--light-gray)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--text)'
            }}>
              <span style={{ color: '#2563eb' }}>✅</span> React (Component-based)
            </li>
            <li style={{
              padding: '8px 0',
              borderBottom: '1px solid var(--light-gray)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--text)'
            }}>
              <span style={{ color: '#2563eb' }}>✅</span> Python (Flask, Pandas)
            </li>
            <li style={{
              padding: '8px 0',
              borderBottom: '1px solid var(--light-gray)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--text)'
            }}>
              <span style={{ color: '#2563eb' }}>✅</span> SQL (PostgreSQL, MySQL)
            </li>
            <li style={{
              padding: '8px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--text)'
            }}>
              <span style={{ color: '#2563eb' }}>✅</span> Git / GitHub (Version control)
            </li>
          </ul>

          {/* Tech Stack Badges */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '12px'
          }}>
            <span style={{
              background: 'var(--light-gray)',
              padding: '6px 16px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text)',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--light-gray)';
              e.currentTarget.style.color = 'var(--text)';
            }}>
              #MediaBuyer
            </span>
            <span style={{
              background: 'var(--light-gray)',
              padding: '6px 16px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text)',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--light-gray)';
              e.currentTarget.style.color = 'var(--text)';
            }}>
              #DataDriven
            </span>
            <span style={{
              background: 'var(--light-gray)',
              padding: '6px 16px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text)',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--light-gray)';
              e.currentTarget.style.color = 'var(--text)';
            }}>
              #GrowthMindset
            </span>
            <span style={{
              background: 'var(--light-gray)',
              padding: '6px 16px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text)',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--light-gray)';
              e.currentTarget.style.color = 'var(--text)';
            }}>
              #Builder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;