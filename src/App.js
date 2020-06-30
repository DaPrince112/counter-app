import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import Counter from './Components/Counter.js';
import Footer from './Components/Footer.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
