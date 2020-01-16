import React from 'react';
import './App.css';
import LandingPage from './components/home/LandingPage'
import Footer from './components/home/Footer';
import Header from './components/home/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="App" style={{width: "100vw"}}>
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange
        draggable={false}
        pauseOnHover={false}
        />
      <div className="nav">
        <Header />
        </div>
        {/* <LandingPage /> */}
        <Footer/>


    </div>
  );
}

export default App;
