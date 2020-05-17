import React from 'react';
import { Header } from './templates/Header';
import { Newsletter } from './templates/Newsletter';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Router className='App'>
        <Home />
      </Router>
      <Newsletter />
    </>
  );
}

export default App;
