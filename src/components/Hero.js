function Hero() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 0 60px'
    }}>
      <div style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px',
        color: 'white',
        fontWeight: 700,
        marginBottom: '20px',
        boxShadow: '0 8px 32px rgba(37, 99, 235, 0.25)'
      }}>
        MA
      </div>

      <h1 style={{
        fontSize: '42px',
        fontWeight: 700,
        letterSpacing: '-1px'
      }}>
        From <span style={{ color: '#2563eb' }}>Media Buyer</span> to<br />
        <span style={{ color: '#2563eb' }}>Developer</span>
      </h1>

      <p style={{
        maxWidth: '600px',
        margin: '20px auto 30px',
        fontSize: '18px',
        color: '#64748b'
      }}>
        6+ years optimizing ad campaigns & budgets across Taboola, Meta, TikTok, and Outbrain.
        Now I write code that scales — with the same obsession for data & results.
      </p>

      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <a href="#projects" style={{
          padding: '12px 32px',
          borderRadius: '50px',
          fontWeight: 600,
          background: '#2563eb',
          color: 'white',
          border: 'none',
          transition: 'all 0.3s ease'
        }}>
          View My Work
        </a>
        <a href="#contact" style={{
          padding: '12px 32px',
          borderRadius: '50px',
          fontWeight: 600,
          background: 'transparent',
          color: '#2563eb',
          border: '2px solid #2563eb',
          transition: 'all 0.3s ease'
        }}>
          Let's Talk
        </a>
      </div>
    </section>
  );
}

export default Hero;  // <-- MUST HAVE THIS