import React from 'react';
import './App.css';
import LandingPage from './components/home/LandingPage'
import Footer from './components/home/Footer';
import Header from './components/home/Header'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <LandingPage /> */}
      <Footer/>
    </div>
  );
}

export default App;
