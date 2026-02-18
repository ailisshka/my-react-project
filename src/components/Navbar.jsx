import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
// Импортируем твой логотип. 
// Убедись, что файл logo.jpg лежит в папке src/assets/ или рядом с компонентом
import logoImg from '../assets/logo.jpg'; 

const Navbar = () => {
  const auth = useContext(AuthContext);
  const user = auth?.user || null;
  const logout = auth?.logout || (() => {});
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    height: '70px',
    backgroundColor: '#2c3e50',
    color: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* ВОТ ТВОЙ ЛОГОТИП */}
        <img 
          src={logoImg} 
          alt="Logo" 
          style={{ height: '45px', width: 'auto', borderRadius: '5px' }} 
        />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          English<span style={{ color: '#3498db' }}>Learner</span>
        </span>
      </div>
      
      <ul style={{ display: 'flex', gap: '25px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Главная</Link></li>
        <li><Link to="/lessons" style={{ color: 'white', textDecoration: 'none' }}>Уроки</Link></li>
        <li><Link to="/dictionary" style={{ color: 'white', textDecoration: 'none' }}>Словарь</Link></li>
        
        {user ? (
          <>
            <li><Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Профиль</Link></li>
            <li>
              <button 
                onClick={handleLogout} 
                style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}
              >
                Выйти
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" style={{ color: 'white', textDecoration: 'none', background: '#3498db', padding: '8px 15px', borderRadius: '5px' }}>
              Войти
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;