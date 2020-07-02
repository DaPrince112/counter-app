import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Counter from './Components/Counter';
import Footer from './Components/Footer';

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
