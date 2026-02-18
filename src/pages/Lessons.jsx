import React from 'react';

const Lessons = () => {
  const lessons = [
    { id: 1, title: 'Present Simple', level: 'Beginner' },
    { id: 2, title: 'Past Continuous', level: 'Intermediate' },
    { id: 3, title: 'Business English', level: 'Advanced' }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h1>Список уроков</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
        {lessons.map(lesson => (
          <div key={lesson.id} style={{ 
            padding: '20px', 
            border: '1px solid #eee', 
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
          }}>
            <h3>{lesson.title}</h3>
            <p>Уровень: {lesson.level}</p>
            <button style={{ marginTop: '10px', cursor: 'pointer' }}>Начать урок</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;