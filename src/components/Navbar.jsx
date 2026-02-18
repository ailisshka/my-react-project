import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '60px', 
      background: '#4A90E2', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '0 40px', 
      boxSizing: 'border-box', 
      zIndex: 1000,
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '22px' }}>
        LingoFlex
      </Link>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Теперь все ссылки ведут на свои места */}
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Главная</Link>
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Регистрация</Link>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Вход</Link>
        <Link to="/courses" style={{ color: 'white', textDecoration: 'none' }}>Курсы</Link>
        <Link to="/vocabulary" style={{ color: 'white', textDecoration: 'none' }}>Лексика</Link>
        <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Профиль</Link>
      </div>
    </nav>
  );
}

export default Navbar;