import React from 'react';
import { Header } from './templates/Header';
import { Newsletter } from './templates/Newsletter';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Router>
          <Home />
        </Router>
        <Newsletter />
      </div>
    </>
  );
}

export default App;
