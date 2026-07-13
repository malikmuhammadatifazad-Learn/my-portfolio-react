import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      // Dark mode colors
      root.style.setProperty('--bg', '#0f172a');
      root.style.setProperty('--text', '#f1f5f9');
      root.style.setProperty('--card-bg', '#1e293b');
      root.style.setProperty('--light-gray', '#334155');
      root.style.setProperty('--shadow', '0 4px 24px rgba(0, 0, 0, 0.3)');
      root.style.setProperty('--gray', '#94a3b8');
      // Apply to body
      document.body.style.backgroundColor = '#0f172a';
      document.body.style.color = '#f1f5f9';
    } else {
      // Light mode colors
      root.style.setProperty('--bg', '#f8fafc');
      root.style.setProperty('--text', '#0f172a');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--light-gray', '#e2e8f0');
      root.style.setProperty('--shadow', '0 4px 24px rgba(0, 0, 0, 0.06)');
      root.style.setProperty('--gray', '#64748b');
      // Apply to body
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        background: darkMode ? '#334155' : '#e2e8f0',
        border: 'none',
        padding: '10px 18px',
        borderRadius: '50px',
        fontSize: '16px',
        color: darkMode ? '#f1f5f9' : '#0f172a',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer'
      }}
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}

export default DarkModeToggle;