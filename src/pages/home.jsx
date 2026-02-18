import logoImg from '/logo.jpg'; 

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <header style={{ marginBottom: '20px' }}>
        <img 
          src={logoImg} 
          alt="Логотип" 
          style={{ width: '150px', borderRadius: '50%' }} 
        />
      </header>

      <h1>Выучи новый язык с EnglishLearner!</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        Интерактивные курсы, которые помогут тебе заговорить уже через месяц.
      </p>
      
      <button style={{ 
        padding: '10px 20px', 
        fontSize: '1rem', 
        backgroundColor: '#4CAF50', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Начать учиться бесплатно
      </button>
    </div>
  );
}

export default Home;