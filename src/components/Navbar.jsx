import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 50px',
    background: '#ffffff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif'
  };

  const logoContainer = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#555',
    fontWeight: '500',
    transition: 'color 0.3s'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoContainer}>
        <img src="/logo.jpg" alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '8px' }} />
        <span>EnglishLearner</span>
      </Link>

      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <Link path="/" style={linkStyle}>Главная</Link>
        <Link to="/lessons" style={linkStyle}>Уроки</Link>
        <Link to="/words" style={linkStyle}>Словарь</Link>
        
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Link to="/profile" style={{...linkStyle, color: '#4A90E2'}}>👤 {user.username}</Link>
            <button onClick={onLogout} style={{
              padding: '8px 15px',
              borderRadius: '20px',
              border: 'none',
              background: '#ff4d4f',
              color: 'white',
              cursor: 'pointer'
            }}>Выйти</button>
          </div>
        ) : (
          <Link to="/login" style={{
            padding: '8px 20px',
            borderRadius: '20px',
            background: '#4A90E2',
            color: 'white',
            textDecoration: 'none'
          }}>Войти</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;