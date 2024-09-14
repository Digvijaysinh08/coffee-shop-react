import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar';
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Home from './components/Home';
import Review from './components/Review';
import Menu from './components/Menu';
import Contact from './components/Contact';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white duration-200 overflow-x-hidden">
      <Navbar />
      <Home/>
      <About/>
      <Services />
      <Review/>
      <Menu/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;