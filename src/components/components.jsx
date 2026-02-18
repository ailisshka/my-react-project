import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home'; 
function App() {
  return (
    <BrowserRouter>
      {/* Navbar будет отображаться всегда наверху */}
      <Navbar />
      
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Home />} />
          
          {/* Заглушки для будущих страниц (пока просто текст) */}
          <Route path="/login" element={<h1>Страница входа</h1>} />
          <Route path="/register" element={<h1>Страница регистрации</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;