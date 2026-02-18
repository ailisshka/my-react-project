import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 1. ЗАКОММЕНТИРУЙ НАВБАР НИЖЕ */}
      <Navbar />

      {<main style={{ flex: 1 }}>
        <Outlet />
      </main> }

      {/* 2. ЗАКОММЕНТИРУЙ ФУТЕР НИЖЕ */}
      <Footer />
    </div>
  );
};

export default MainLayout;