import React,{useState} from 'react';
import './App.css'
// import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
// import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/header/Header';
import { TbArrowBigTop } from "react-icons/tb";

import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import egy from './img/egypt.png';
import unitedstates from './img/united-states.png';

const App = () => {
  const [direction,setDirection] = useState('ar')
  const [t ,i18n] = useTranslation();
  console.log(direction) ;
  
  const up = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <>
      <Header />
      <Navbar />
      <main className ={direction==='ar' ? "aribc" :null}>
        <Home />
        {/* <About /> */}
        <Services />
        {/* <Testimonial /> */}
        <Contact />
        <div className='lang'>
          {
            i18n.language === 'ar' ? (
              <img src={unitedstates}
                alt='ar'
                height="50px"
                onClick={() => {
                  i18n.changeLanguage('en');
                  setDirection("en")
                }}
              />
            ) : (
              <img src={egy}
                alt='en'
                height="50px"
                onClick={() => {
                  i18n.changeLanguage('ar');
                  setDirection("ar")

                }}
              />
            )
          }

        </div> 
       <div onClick={up} className='up'><TbArrowBigTop /></div>
      </main>
    </>
  );
}

export default App;
