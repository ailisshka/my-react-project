import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '3rem', color: '#2c3e50' }}>Учи английский легко!</h1>
      <p style={{ fontSize: '1.2rem', color: '#7f8c8d', marginBottom: '30px' }}>
        Лучшая платформа для изучения слов и грамматики.
      </p>
      <Link to="/lessons" style={{ 
        padding: '15px 30px', 
        background: '#2ecc71', 
        color: 'white', 
        textDecoration: 'none', 
        borderRadius: '30px',
        fontWeight: 'bold'
      }}>
        Начать учиться
      </Link>
    </div>
  );
};

export default Home;