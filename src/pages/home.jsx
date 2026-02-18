function Home({ user }) {
  const containerStyle = {
    padding: '50px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'sans-serif',
    textAlign: 'center'
  };

  const cardContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '40px'
  };

  const cardStyle = {
    padding: '30px',
    borderRadius: '15px',
    background: '#fff',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    border: '1px solid #eee'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '2.5rem', color: '#333' }}>
        Твой путь к свободному английскому      </h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>
        {user 
          ? `С возвращением, ${user.username}! Готов продолжить?` 
          : "Начни учиться бесплатно уже сегодня."}
      </p>

      <div style={cardContainer}>
        <div style={cardStyle}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📚</div>
          <h3 style={{ margin: '10px 0' }}>Курсы</h3>
          <p style={{ color: '#777' }}>Интерактивные уроки для любого уровня: от Beginner до Advanced.</p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎴</div>
          <h3 style={{ margin: '10px 0' }}>Карточки слов</h3>
          <p style={{ color: '#777' }}>Учи новые слова эффективно с помощью системы интервальных повторений.</p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📈</div>
          <h3 style={{ margin: '10px 0' }}>Прогресс</h3>
          <p style={{ color: '#777' }}>Отслеживай свои успехи и ставь новые рекорды каждый день.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;