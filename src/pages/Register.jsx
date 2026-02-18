import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Register = () => {
  const [name, setName] = useState('');
  const { login } = useContext(AuthContext);
  const [savedUser, setSavedUser] = useLocalStorage('registeredUser', null);

  const handleRegister = (e) => {
    e.preventDefault();
    
    const newUser = { name: name };
    
    // Сохраняем данные
    setSavedUser(newUser);
    if (login) login(newUser);

    // ЖЕСТКИЙ ПЕРЕХОД (сработает даже если роутер тупит)
    window.location.href = '/profile'; 
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <form onSubmit={handleRegister}>
        <h2>Регистрация</h2>
        <input 
          placeholder="Имя" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          required 
          style={{ padding: '10px', marginBottom: '10px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default Register;