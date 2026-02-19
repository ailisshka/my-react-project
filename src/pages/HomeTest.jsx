import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const styles = {
    container: { textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#2c3e50' },
    hero: { padding: '80px 20px', backgroundColor: '#f9f9f9' },
    title: { fontSize: '3.5rem', marginBottom: '20px' },
    subtitle: { fontSize: '1.4rem', color: '#7f8c8d', marginBottom: '40px' },
    button: {
      padding: '15px 40px',
      background: '#2ecc71',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '30px',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      display: 'inline-block',
      transition: '0.3s'
    },
    section: { padding: '60px 20px' },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: '40px auto'
    },
    card: {
      padding: '30px',
      border: '1px solid #eee',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    }
  };

  return (
    <div style={styles.container}>
      {/* Главный блок (Hero) */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Учи английский легко!</h1>
        <p style={styles.subtitle}>
          Твой путь к свободному общению начинается здесь. <br />
          Уникальные методики, геймификация и только нужные слова.
        </p>
        <Link to="/lessons" style={styles.button}>
          Начать учиться бесплатно
        </Link>
      </section>

      {/* Секция преимуществ */}
      <section style={styles.section}>
        <h2 style={{ fontSize: '2.5rem' }}>Почему выбирают нас?</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={{ fontSize: '3rem' }}>🚀</div>
            <h3>Быстрый старт</h3>
            <p>Начни говорить уже через 2 недели регулярных занятий.</p>
          </div>
          <div style={styles.card}>
            <div style={{ fontSize: '3rem' }}>🎯</div>
            <h3>Умные тренировки</h3>
            <p>Алгоритм подбирает слова, которые ты чаще всего забываешь.</p>
          </div>
          <div style={styles.card}>
            <div style={{ fontSize: '3rem' }}>📱</div>
            <h3>Учись везде</h3>
            <p>Доступ к платформе с любого устройства в любое время.</p>
          </div>
        </div>
      </section>

      {/* Информационный блок */}
      <section style={{ ...styles.section, backgroundColor: '#34495e', color: 'white' }}>
        <h2 style={{ color: 'white' }}>Что тебя ждет внутри?</h2>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          display: 'inline-block', 
          textAlign: 'left',
          fontSize: '1.2rem',
          lineHeight: '2'
        }}>
          <li>✅ Более 5000 популярных слов и выражений</li>
          <li>✅ Грамматика в простых схемах и примерах</li>
          <li>✅ Интерактивные тесты после каждого урока</li>
          <li>✅ Личный кабинет со статистикой прогресса</li>
        </ul>
      </section>

      {/* Футер */}
      <footer style={styles.section}>
        <h3>Готов покорить английский?</h3>
      </footer>
    </div>
  );
};

export default Home;