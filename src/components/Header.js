import DarkModeToggle from './DarkModeToggle';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
      borderBottom: '1px solid #e2e8f0',
      marginBottom: '40px',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
      <div style={{
        fontSize: '24px',
        fontWeight: 700,
        color: '#2563eb',
        letterSpacing: '-0.5px'
      }}>
        MA<span style={{ color: '#0f172a', fontWeight: 300 }}>.dev</span>
      </div>
      <DarkModeToggle />
    </header>
  );
}

export default Header;  // <-- MUST HAVE THIS