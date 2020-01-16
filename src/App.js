import React from 'react';
import LandingPage from './components/LandingPage'
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import LandingPageCourser from './components/LandingPageCourser';
function App() {

  return (

    <div style={{overflowX: 'hidden'}}>
   <Header></Header>
   <LandingPageCourser></LandingPageCourser>
   <Footer></Footer>
  </div>
  );
}

export default App;
