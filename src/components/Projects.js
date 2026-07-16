function Projects() {
  const projects = [
    {
      icon: '📊',
      title: 'CTR Analyzer',
      description: 'Live CTR calculator with performance alerts. Enter impressions and clicks — get instant CTR with actionable feedback.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://willowy-rolypoly-9c35cf.netlify.app/'
    },
    {
      icon: '💰',
      title: 'Ad Budget Simulator',
      description: 'Simulate daily spend across any number of days. Enter daily budget and days — see total spend and daily breakdown.',
      tags: ['JavaScript', 'Loops', 'DOM'],
      link: 'https://voluble-torte-b7a678.netlify.app/'
    },
    {
      icon: '📈',
      title: 'ROAS Calculator',
      description: 'Calculate Return on Ad Spend instantly. Enter revenue and ad cost — get your ROAS percentage with performance rating.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://stupendous-halva-ad410a.netlify.app/'
    },
    {
      icon: '📋',
      title: 'Ad Performance Dashboard',
      description: 'Live dashboard simulating campaign data from Meta, TikTok, Taboola, and Outbrain. Built with HTML, CSS, and vanilla JavaScript.',
      tags: ['JavaScript', 'API Simulation', 'Dashboard'],
      link: 'https://coruscating-marzipan-9028ae.netlify.app/'
    },
   {
  icon: '📊',
  title: 'Marketing Analytics Dashboard',
  description: 'Full-stack Next.js application with TypeScript, Prisma, and PostgreSQL. Features real-time campaign tracking, interactive charts (spend vs. revenue, ROAS trends, platform breakdown), and full CRUD operations.',
  tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
  link: 'https://html-website-git-main-malikmuhammadatifazad-learns-projects.vercel.app/'
}
  ];

  return (
    <section id="projects" style={{ marginTop: '60px' }}>
      <h2 style={{
        fontSize: '28px',
        fontWeight: 700,
        marginBottom: '12px',
        letterSpacing: '-0.5px',
        color: 'var(--text)'
      }}>
        Projects
      </h2>
      <p style={{
        color: '#64748b',
        marginBottom: '32px',
        fontSize: '17px'
      }}>
        Real tools I've built — all from scratch.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: 'var(--card-bg)',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: 'var(--shadow)',
              transition: 'all 0.3s ease',
              border: '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = '#2563eb';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.boxShadow = 'var(--shadow)';
            }}
          >
            <div style={{ fontSize: '32px', color: '#2563eb', marginBottom: '12px' }}>
              {project.icon}
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--text)' }}>{project.title}</h3>
            <p style={{ color: '#64748b', fontSize: '15px', marginBottom: '16px' }}>
              {project.description}
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '16px'
            }}>
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  style={{
                    background: 'var(--light-gray)',
                    padding: '2px 12px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#64748b'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              style={{
                color: '#2563eb',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '14px'
              }}
            >
              Live Demo →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;