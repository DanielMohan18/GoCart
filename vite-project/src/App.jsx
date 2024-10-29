import React, { useEffect,useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Products from './components/products/Products'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
const App = () => {
  const [orderPopup,setOrderPopup] =useState(false);
  const handlerPopup=()=>{
     setOrderPopup(!orderPopup);
  }
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='dark:bg-gray-800'>
      <Navbar handlerPopup={handlerPopup}/>
      <Hero handlerPopup={handlerPopup}/>
      <Products/>
      <TopProducts handlerPopup={handlerPopup}/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonials/>
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default App

