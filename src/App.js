import React from 'react';
import './App.css'
// import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
// import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/header/Header';
import { TbArrowBigTop } from "react-icons/tb";
const App = () => {
  const up = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return (
    <>
    <Header/>
      <Navbar />
      <main>
        <Home />
        {/* <About /> */}
        <Services />
        {/* <Testimonial /> */}
        <Contact/>
        <div onClick={up} className='up'><TbArrowBigTop/></div>
      </main>
    </>
  );
}

export default App;
