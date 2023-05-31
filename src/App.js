import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/index';
import { Baseball } from './pages/baseball';
import { Enemy } from './pages/enemy';
import { Sylviaki } from './pages/sylviaki';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/baseballsavedus' element={<Baseball />} />
          <Route path='/sylvia&aki' element={<Sylviaki />} />
          <Route path='/theycalledusenemy' element={<Enemy />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
