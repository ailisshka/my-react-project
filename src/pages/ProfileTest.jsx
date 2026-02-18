import React from 'react';

const Profile = () => {
  // Получаем пользователя из localStorage
  let user = null;
  try {
    const userData = localStorage.getItem('user');
    user = userData ? JSON.parse(userData) : null;
    console.log('User from localStorage:', user);
  } catch (error) {
    console.error('Error parsing user:', error);
  }

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Профиль пользователя</h1>
      {user ? (
        <div>
          <p>Добро пожаловать, {user.name || user.email}!</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <div>
          <p>Вы не авторизованы</p>
          <button onClick={() => window.location.href = '/login'}>
            Перейти на страницу входа
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;