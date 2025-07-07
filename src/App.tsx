import React from 'react';
import { Builder } from './pages/Builder';
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Home from './pages/Home';
import MainLayout from './Layout/MainLayout';

const App: React.FC = () => {

  return (
    <MainLayout>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/build' element={<Builder />} />
        </Routes>
      </Router>
    </MainLayout>

  );
};

export default App;
