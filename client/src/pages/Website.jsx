import React from 'react'
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";



const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="blue-gradient" />
      <Hero />
    </div>
    <Residencies/>
    <Contact/>
    <GetStarted/>
  </div>
  )
}

export default Website