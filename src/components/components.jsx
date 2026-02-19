import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home'; 
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
  
          <Route path="/login" element={<h1>Страница входа</h1>} />
          <Route path="/register" element={<h1>Страница регистрации</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;