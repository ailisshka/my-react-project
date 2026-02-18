import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/home';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Navbar user={user} onLogout={logout} />
      
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<h2>Страница входа (в разработке)</h2>} />
        <Route path="/lessons" element={<h2>Твои уроки</h2>} />
        <Route path="/words" element={<h2>Словарь</h2>} />
        <Route path="/profile" element={<h2>Твой профиль</h2>} />
      </Routes>
    </Router>
  );
}

export default App;