import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
// import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        {/* <About /> */}
        <Services />
        {/* <Testimonial /> */}
        <Contact/>
      </main>
    </>
  );
}

export default App;
