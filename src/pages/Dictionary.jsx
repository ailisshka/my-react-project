import React, { useState } from 'react';

const Dictionary = () => {
  // Начальный список слов для примера
  const [words, setWords] = useState([
    { id: 1, english: 'Experience', russian: 'Опыт' },
    { id: 2, english: 'Succeed', russian: 'Преуспевать' }
  ]);

  const [newEnglish, setNewEnglish] = useState('');
  const [newRussian, setNewRussian] = useState('');

  // Функция добавления слова
  const addWord = (e) => {
    e.preventDefault();
    if (newEnglish && newRussian) {
      setWords([...words, { id: Date.now(), english: newEnglish, russian: newRussian }]);
      setNewEnglish('');
      setNewRussian('');
    }
  };

  // Функция удаления слова
  const deleteWord = (id) => {
    setWords(words.filter(word => word.id !== id));
  };

  // Стили
  const cardStyle = {
    padding: '15px',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginRight: '10px',
    flex: 1
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '30px' }}>Мой личный словарь</h1>

      {/* Форма добавления */}
      <form onSubmit={addWord} style={{ display: 'flex', marginBottom: '30px', background: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
        <input 
          style={inputStyle}
          placeholder="English word" 
          value={newEnglish}
          onChange={(e) => setNewEnglish(e.target.value)}
        />
        <input 
          style={inputStyle}
          placeholder="Перевод" 
          value={newRussian}
          onChange={(e) => setNewRussian(e.target.value)}
        />
        <button type="submit" style={{ padding: '10px 20px', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Добавить
        </button>
      </form>

      {/* Список слов */}
      <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        {words.length > 0 ? (
          words.map(word => (
            <div key={word.id} style={cardStyle}>
              <div>
                <strong style={{ fontSize: '1.2rem', color: '#2980b9' }}>{word.english}</strong> 
                <span style={{ margin: '0 10px', color: '#bdc3c7' }}>—</span> 
                <span>{word.russian}</span>
              </div>
              <button 
                onClick={() => deleteWord(word.id)}
                style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Удалить
              </button>
            </div>
          ))
        ) : (
          <p style={{ padding: '20px', textAlign: 'center', color: '#95a5a6' }}>Словарь пока пуст. Добавь свое первое слово!</p>
        )}
      </div>
    </div>
  );
};

export default Dictionary;