import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Mininav from './Components/Mininav/Mininav';
import Banner from './Components/Banner/Banner';
import Grid from './Components/Grid/Grid';
import Footer from './Components/Footer/Footer';
import Work from './Components/Work/Work';
import WhyUs from './Components/WhyUs/WhyUs';
const App = () => {
  return (
    <div>
      <Navbar/>   
      <Mininav/>
      <Banner/>
      <Grid/>
      <WhyUs/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default App